/**
 * Component for lazy-loading images with a placeholder and multiple srcSet options.
 *
 * Important Note:
 * The images are not automatically generated, you have to create them yourself
 *
 * @module LazyPicture
 */

import { useState } from 'react';

/**
 * Component for lazy-loading images with a placeholder and multiple srcSet options.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.originalImage - The URL of the original image.
 * @param {string} props.placeholderImage - The URL of the placeholder image.
 * @returns {JSX.Element} The rendered LazyPicture component.
 */

const LazyPicture = ({
  originalImage,
  placeholderImage,
}: {
  originalImage: string;
  placeholderImage: string;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  /**
   * Generates the srcSet attribute for the <source> element.
   * @param {string} originalImage - The URL of the original image.
   * @returns {string} The srcSet attribute value.
   */

  const generateSrcSet = (originalImage: string) => {
    const sizes = [600, 900, 1200, 1600];
    const basename = originalImage.replace(/\.[^/.]+$/, ''); // Remove file extension
    return sizes.map((size) => `${basename}-${size}.webp ${size}w`).join(', ');
  };

  return (
    <div className="relative h-full">
      {isLoading && (
        <img
          src={placeholderImage}
          alt="Placeholder"
          className="absolute h-full inset-0 object-cover"
          width="1440"
          height="960"
        />
      )}
      <picture>
        <source srcSet={generateSrcSet(originalImage)} type="image/webp" />
        <source srcSet={generateSrcSet(originalImage)} type="image/jpeg" />
        <img
          src={`${originalImage}-1600.jpg`}
          alt="Image"
          className={`w-full  h-full object-cover rounded-lg   ${
            isLoading ? 'hidden' : 'block'
          }`}
          onLoad={handleImageLoad}
          width="1440"
          height="900"
          sizes="(max-width: 1023px) 100vw, 50vw"
        />
      </picture>
    </div>
  );
};

export default LazyPicture;
