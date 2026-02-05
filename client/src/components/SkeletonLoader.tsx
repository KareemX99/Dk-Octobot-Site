interface SkeletonLoaderProps {
  variant?: 'text' | 'card' | 'image' | 'circle';
  width?: string;
  height?: string;
  className?: string;
  count?: number;
}

export default function SkeletonLoader({
  variant = 'text',
  width = '100%',
  height,
  className = '',
  count = 1,
}: SkeletonLoaderProps) {
  const baseClasses = 'animate-pulse bg-gradient-to-r from-muted via-muted/50 to-muted rounded-lg';

  const variantClasses = {
    text: 'h-4',
    card: 'h-48',
    image: 'h-64',
    circle: 'rounded-full',
  };

  const skeletonHeight = height || variantClasses[variant];

  const skeletons = Array.from({ length: count }, (_, index) => (
    <div
      key={index}
      className={`${baseClasses} ${skeletonHeight} ${className}`}
      style={{ width }}
    />
  ));

  return count > 1 ? <div className="space-y-3">{skeletons}</div> : skeletons[0];
}
