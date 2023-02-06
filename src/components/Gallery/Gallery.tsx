/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import { HiArrowNarrowRight } from 'react-icons/hi';
import {
  GalleryContainer,
  Animation,
  GalleryInfo,
  GalleryImages,
  GalleryInfoTitle
} from './Gallery.styles';

export function Gallery() {
  return (
    <Animation id="gallery" data-aos="fade-up">
      <GalleryContainer>
        <GalleryInfoTitle>
          <h1>Fotos</h1>
        </GalleryInfoTitle>
        <GalleryInfo>
          {/* <h1>Fotos</h1> */}

          <p>
            Aqui você encontra alguns dos meus trabalhos. Acesse meu Instagram
            para ver mais fotos, dicas, ideais de organizações e para conhecer
            mais o meu trabalho.
          </p>
        </GalleryInfo>
        <GalleryImages>
          <div className="image active" data-aos="zoom-in">
            <Image
              src="/images/backgrounds/background-services-start.jpeg"
              alt="gallery 1"
              width="450px"
              height="408px"
            />
            <div className="image-opacity" />
          </div>
          <div className="image-gallery" data-aos="zoom-in">
            <Image
              src="/images/gallery/gallery-4.jpg"
              alt="gallery 2"
              width="350px"
              height="350px"
            />
          </div>
          <div className="image-gallery" data-aos="zoom-in">
            <Image
              src="/images/backgrounds/background-services-end.jpeg"
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
