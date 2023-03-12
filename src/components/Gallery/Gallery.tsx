/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import { useRouter } from 'next/router';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { galleries } from '../GalleryView/GalleryView.values';
import {
  GalleryContainer,
  Animation,
  GalleryInfo,
  GalleryImages,
  GalleryInfoTitle,
  InstagramContainer
} from './Gallery.styles';

export function Gallery() {
  const router = useRouter();

  return (
    <>
      <Animation data-aos="fade-up">
        <GalleryContainer>
          <GalleryInfoTitle>
            <h1>Fotos</h1>
          </GalleryInfoTitle>
          <GalleryInfo>
            <p>
              Aqui você encontra alguns dos meus trabalhos. Acesse meu Instagram
              para ver mais fotos, ideais de organizações e para me conhecer
              melhor.
            </p>

            <InstagramContainer>
              <a
                href="https://www.instagram.com/lilianazevedoorganizer/"
                target="_blank"
                rel="noreferrer"
                className="link-instagram"
              >
                <img
                  className="img-instagram"
                  src="/images/icons/icon-instagram.png"
                  alt="instagram hero"
                />
                @lilianazevedoorganizer
              </a>
            </InstagramContainer>
          </GalleryInfo>

          <GalleryImages>
            <div
              onClick={() => router.push('/gallery')}
              className="image-gallery active"
            >
              <Image
                src="/images/gallery/gallery-1.jpg"
                alt="gallery 1"
                width="350px"
                height="350px"
              />
              <div className="image-opacity">{galleries.length}+</div>
            </div>
            <div className="image-gallery">
              <Image
                src="/images/gallery/gallery-2.jpg"
                alt="gallery 2"
                width="350px"
                height="350px"
              />
            </div>
            <div className="image-gallery">
              <Image
                src="/images/gallery/gallery-3.jpg"
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
      <span id="contato" />
    </>
  );
}
