import React, { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  fallback?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  priority = false,
  fallback = '/images/placeholder.jpg',
  onLoad,
  onError
}) => {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImageSrc(src);
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    console.warn(`Failed to load image: ${src}`);
    setHasError(true);
    setIsLoading(false);
    if (fallback && imageSrc !== fallback) {
      setImageSrc(fallback);
    }
    onError?.();
  };

  return (
    <div className={`relative ${className}`}>
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 animate-pulse" />
      )}
      <img
        src={imageSrc}
        alt={alt}
        loading={priority ? 'eager' : loading}
        decoding={priority ? 'sync' : 'async'}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
        fetchPriority={priority ? 'high' : 'auto'}
      />
    </div>
  );
};

export default OptimizedImage;
