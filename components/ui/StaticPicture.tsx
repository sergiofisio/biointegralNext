type StaticPictureProps = {
  src: string;
  srcSet: string;
  sizes: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

/**
 * Imagem responsiva com srcSet manual — necessário com output: "export"
 * (next/image unoptimized não gera variantes).
 */
export function StaticPicture({
  src,
  srcSet,
  sizes,
  alt,
  className,
  priority = false,
}: StaticPictureProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- srcSet manual em export estático
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={className}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      loading={priority ? "eager" : "lazy"}
    />
  );
}
