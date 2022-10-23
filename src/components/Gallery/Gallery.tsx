/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import { HiArrowNarrowRight } from 'react-icons/hi';
import {
  GalleryContainer,
  Animation,
  GalleryInfo,
  GalleryImages
} from './Gallery.styles';

export function Gallery() {
  return (
    <Animation id="gallery" data-aos="fade-up">
      <GalleryContainer>
        <GalleryInfo>
          <h1>Galeria</h1>

          <p>Aqui você encontrará alguns dos meus trabalhos...</p>
        </GalleryInfo>
        <GalleryImages>
          <div className="image active" data-aos="zoom-in">
            <Image
              src="/images/backgrounds/background-gallery-image-1.jpg"
              alt="gallery 1"
              width="450px"
              height="408px"
            />
            <div className="image-opacity" />
          </div>
          <div className="image-gallery" data-aos="zoom-in">
            <Image
              src="/images/backgrounds/background-services-start.png"
              alt="gallery 2"
              width="350px"
              height="350px"
            />
          </div>
          <div className="image-gallery" data-aos="zoom-in">
            <Image
              src="/images/backgrounds/background-services-end.png"
              alt="gallery 3"
              width="350px"
              height="350px"
            />
          </div>
        </GalleryImages>
        <div className="gallery-preview">
          <a href="/gallery">
            Ver todos <HiArrowNarrowRight />
          </a>
        </div>
      </GalleryContainer>
    </Animation>
  );
}
