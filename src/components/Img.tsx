import React from 'react';

interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

/**
 * Drop-in <img> replacement that serves WebP with original format as fallback.
 * Strips the extension and appends .webp for the <source>; the <img> keeps the original.
 */
export const Img: React.FC<ImgProps> = ({ src, alt, style, ...rest }) => {
  const webp = src.replace(/\.(jpe?g|png)$/i, '.webp');
  const hasWebp = webp !== src;

  if (!hasWebp) {
    return <img src={src} alt={alt} style={style} {...rest} />;
  }

  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <img src={src} alt={alt} style={style} {...rest} />
    </picture>
  );
};
