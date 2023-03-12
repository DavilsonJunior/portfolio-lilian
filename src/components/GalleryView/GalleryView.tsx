import React from 'react';

import {
  Animation,
  GalleryViewContainer,
  GalleryViewImagesContainer,
  GalleryViewInfo
} from './GalleryView.styles';
import { galleries } from './GalleryView.values';

export function GalleryView() {
  return (
    <Animation id="GalleryView">
      <GalleryViewContainer className="hero">
        <GalleryViewInfo data-aos="fade-up">
          <h1 id="isGalleryPage">Fotos</h1>
        </GalleryViewInfo>
        <GalleryViewImagesContainer data-aos="fade-down">
          {galleries.map(item => (
            <div className="item-galeria">
              <img className="img-galeria" src={item.image} alt={item.alt} />
            </div>
          ))}
        </GalleryViewImagesContainer>
      </GalleryViewContainer>
    </Animation>
  );
}
