import React from 'react';
// import Image from 'next/image';

import {
  Animation,
  GalleryViewContainer,
  GalleryViewImagesContainer,
  GalleryViewInfo
} from './GalleryView.styles';

export function GalleryView() {
  return (
    <Animation id="GalleryView">
      <GalleryViewContainer className="hero">
        <GalleryViewInfo data-aos="fade-up">
          <h1>Galeria</h1>
        </GalleryViewInfo>
        <GalleryViewImagesContainer>
          <img
            src="/images/backgrounds/background-gallery-image-1.jpg"
            alt="gallery 1"
          />
          <img src="/images/gallery/gallery-1.jpg" alt="gallery 2" />
          <img src="/images/gallery/gallery-2.jpg" alt="gallery 3" />
          <img src="/images/gallery/gallery-3.jpg" alt="gallery 4" />
          <img src="/images/gallery/gallery-4.jpg" alt="gallery 5" />
          <img src="/images/gallery/gallery-5.jpg" alt="gallery 6" />
          <img src="/images/gallery/gallery-6.jpg" alt="gallery 7" />
          <img src="/images/gallery/gallery-7.jpg" alt="gallery 8" />
        </GalleryViewImagesContainer>
      </GalleryViewContainer>
    </Animation>
  );
}
