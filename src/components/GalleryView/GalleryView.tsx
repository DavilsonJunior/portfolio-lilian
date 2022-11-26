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
          <h1>Fotos</h1>
        </GalleryViewInfo>
        <GalleryViewImagesContainer data-aos="fade-down">
          <div className="item-galeria w-2 h-2">
            <img
              className="img-galeria"
              src="/images/backgrounds/background-gallery-image-1.jpg"
              alt="gallery 1"
            />
          </div>
          <div className="item-galeria w-2 h-1">
            <img
              className="img-galeria"
              src="/images/gallery/gallery-1.jpg"
              alt="gallery 2"
            />
          </div>
          <div className="item-galeria w-1 h-2">
            <img
              className="img-galeria"
              src="/images/gallery/gallery-2.jpg"
              alt="gallery 3"
            />
          </div>
          <div className="item-galeria w-1 h-1">
            <img
              className="img-galeria"
              src="/images/gallery/gallery-3.jpg"
              alt="gallery 4"
            />
          </div>
          <div className="item-galeria w-2 h-2">
            <img
              className="img-galeria"
              src="/images/gallery/gallery-4.jpg"
              alt="gallery 5"
            />
          </div>
          <div className="item-galeria  w-1 h-2">
            <img
              className="img-galeria"
              src="/images/gallery/gallery-5.jpg"
              alt="gallery 6"
            />
          </div>
          <div className="item-galeria w-1 h-1">
            <img
              className="img-galeria"
              src="/images/gallery/gallery-6.jpg"
              alt="gallery 7"
            />
          </div>
          <div className="item-galeria w-1 h-1">
            <img
              className="img-galeria"
              src="/images/gallery/gallery-7.jpg"
              alt="gallery 8"
            />
          </div>
          <div className="item-galeria w-1 h-1">
            <img
              className="img-galeria"
              src="/images/backgrounds/background-gallery-image-1.jpg"
              alt="gallery 1"
            />
          </div>
        </GalleryViewImagesContainer>
      </GalleryViewContainer>
    </Animation>
  );
}
