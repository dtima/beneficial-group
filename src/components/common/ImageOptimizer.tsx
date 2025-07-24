import React from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  quality?: number;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  className = '',
  placeholder = 'blur',
  blurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==',
  quality = 85,
}: OptimizedImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        priority={priority}
        sizes={sizes}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        quality={quality}
        className="object-cover transition-transform duration-300 hover:scale-105"
        onError={(e) => {
          // Fallback to a placeholder image if the original fails to load
          const target = e.target as HTMLImageElement;
          target.src = '/logo.png';
        }}
      />
    </div>
  );
}

// Pre-configured image components for common use cases
export const ImageComponents = {
  Hero: (props: Omit<OptimizedImageProps, 'priority' | 'sizes'>) => (
    <OptimizedImage
      priority={true}
      sizes="100vw"
      {...props}
    />
  ),
  Card: (props: Omit<OptimizedImageProps, 'sizes'>) => (
    <OptimizedImage
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      {...props}
    />
  ),
  Thumbnail: (props: Omit<OptimizedImageProps, 'sizes'>) => (
    <OptimizedImage
      sizes="(max-width: 768px) 100vw, 300px"
      {...props}
    />
  ),
  Logo: (props: Omit<OptimizedImageProps, 'sizes' | 'priority'>) => (
    <OptimizedImage
      priority={true}
      sizes="48px"
      {...props}
    />
  ),
}; 