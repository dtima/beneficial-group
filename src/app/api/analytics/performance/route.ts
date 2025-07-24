import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate the performance data
    if (!data.url || !data.timestamp || !data.metrics) {
      return NextResponse.json(
        { error: 'Invalid performance data' },
        { status: 400 }
      );
    }

    // Log performance data (in production, this would go to a database or analytics service)
    console.log('Performance Analytics:', {
      url: data.url,
      timestamp: data.timestamp,
      metrics: data.metrics,
      viewport: data.viewport,
      connection: data.connection,
      userAgent: data.userAgent,
    });

    // In a real implementation, you would:
    // 1. Store data in a database (e.g., PostgreSQL, MongoDB)
    // 2. Send to analytics service (e.g., Google Analytics, Mixpanel)
    // 3. Trigger alerts for poor performance
    // 4. Generate performance reports

    // Example: Check for performance issues
    const { metrics } = data;
    const performanceIssues = [];

    if (metrics.lcp && metrics.lcp > 2500) {
      performanceIssues.push('LCP is above 2.5s threshold');
    }

    if (metrics.fid && metrics.fid > 100) {
      performanceIssues.push('FID is above 100ms threshold');
    }

    if (metrics.cls && metrics.cls > 0.1) {
      performanceIssues.push('CLS is above 0.1 threshold');
    }

    if (performanceIssues.length > 0) {
      console.warn('Performance issues detected:', performanceIssues);
      // In production, you might send alerts here
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Performance data recorded',
        issues: performanceIssues 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing performance data:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { 
      message: 'Performance analytics endpoint',
      status: 'active',
      timestamp: new Date().toISOString()
    },
    { status: 200 }
  );
} 