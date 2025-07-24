"use client";

import { useEffect, useRef } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  navigationStart: number;
  domContentLoaded: number;
  loadComplete: number;
  connection?: {
    effectiveType: string;
    downlink: number;
    rtt: number;
  } | null;
}

interface PerformanceData {
  url: string;
  userAgent: string;
  timestamp: string;
  metrics: PerformanceMetrics;
  viewport: {
    width: number;
    height: number;
  };
  connection: {
    effectiveType: string;
    downlink: number;
    rtt: number;
  } | null;
}

class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: PerformanceMetrics;
  private observers: PerformanceObserver[] = [];

  private constructor() {
    this.metrics = {
      fcp: null,
      lcp: null,
      fid: null,
      cls: null,
      ttfb: null,
      navigationStart: performance.timing?.navigationStart || Date.now(),
      domContentLoaded: 0,
      loadComplete: 0,
    };
  }

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  startMonitoring(): void {
    this.setupObservers();
    this.captureNavigationTiming();
    this.captureNetworkInfo();
  }

  private setupObservers(): void {
    // First Contentful Paint
    if ('PerformanceObserver' in window) {
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            this.metrics.fcp = fcpEntry.startTime;
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
        this.observers.push(fcpObserver);
      } catch (error) {
        console.warn('FCP observer setup failed:', error);
      }

      // Largest Contentful Paint
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            this.metrics.lcp = lastEntry.startTime;
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        this.observers.push(lcpObserver);
      } catch (error) {
        console.warn('LCP observer setup failed:', error);
      }

      // First Input Delay
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
                  const fidEntry = entries.find(entry => entry.entryType === 'first-input') as any;
        if (fidEntry) {
          this.metrics.fid = fidEntry.processingStart - fidEntry.startTime;
        }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
        this.observers.push(fidObserver);
      } catch (error) {
        console.warn('FID observer setup failed:', error);
      }

      // Cumulative Layout Shift
      try {
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
                  for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as any;
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value;
          }
        }
          this.metrics.cls = clsValue;
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        this.observers.push(clsObserver);
      } catch (error) {
        console.warn('CLS observer setup failed:', error);
      }
    }
  }

  private captureNavigationTiming(): void {
    if ('performance' in window && 'timing' in performance) {
      const timing = performance.timing;
      this.metrics.navigationStart = timing.navigationStart;
      this.metrics.domContentLoaded = timing.domContentLoadedEventEnd - timing.navigationStart;
      this.metrics.loadComplete = timing.loadEventEnd - timing.navigationStart;
      this.metrics.ttfb = timing.responseStart - timing.requestStart;
    }
  }

  private captureNetworkInfo(): void {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection) {
        this.metrics.connection = {
          effectiveType: connection.effectiveType || 'unknown',
          downlink: connection.downlink || 0,
          rtt: connection.rtt || 0,
        };
      }
    }
  }

  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  sendMetrics(): void {
    const performanceData: PerformanceData = {
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      metrics: this.getMetrics(),
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      connection: this.metrics.connection || null,
    };

    // Send to analytics endpoint
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/analytics/performance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(performanceData),
      }).catch((error) => {
        console.warn('Failed to send performance metrics:', error);
      });
    } else {
      console.log('Performance Metrics:', performanceData);
    }
  }

  disconnect(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// React Hook for Performance Monitoring
export const usePerformanceMonitor = () => {
  const monitorRef = useRef<PerformanceMonitor | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      monitorRef.current = PerformanceMonitor.getInstance();
      monitorRef.current.startMonitoring();

      // Send metrics after page load
      const handleLoad = () => {
        setTimeout(() => {
          monitorRef.current?.sendMetrics();
        }, 1000);
      };

      window.addEventListener('load', handleLoad);

      return () => {
        window.removeEventListener('load', handleLoad);
        monitorRef.current?.disconnect();
      };
    }
  }, []);

  return monitorRef.current;
};

// Component wrapper for automatic performance monitoring
export const PerformanceMonitorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  usePerformanceMonitor();
  return <>{children}</>;
};

export default PerformanceMonitor; 