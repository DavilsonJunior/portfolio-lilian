/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import { useRouter } from 'next/router';
import { HiArrowNarrowRight } from 'react-icons/hi';
import {
  GalleryContainer,
  Animation,
  GalleryInfo,
  GalleryImages,
  GalleryInfoTitle
} from './Gallery.styles';

export function Gallery() {
  const router = useRouter();

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
          <div
            onClick={() => router.push('/gallery')}
            className="image active"
            data-aos="zoom-in"
          >
            <Image
              src="/images/backgrounds/background-services-start.jpeg"
              alt="gallery 1"
              width="350px"
              height="350px"
            />
            <div className="image-opacity" />
          </div>
          <div className="image-gallery">
            <Image
              src="/images/gallery/gallery-4.jpg"
              alt="gallery 2"
              width="350px"
              height="350px"
            />
          </div>
          <div className="image-gallery">
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
