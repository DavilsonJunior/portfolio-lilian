import Image from 'next/image';
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
          <div className="image active">
            <Image
              src="/images/backgrounds/background-gallery-image-1.jpg"
              alt="gallery 1"
              width="450px"
              height="408px"
            />
            <div className="image-opacity" />
          </div>
          <div className="image-gallery">
            <Image
              src="/images/backgrounds/background-services-start.png"
              alt="gallery 2"
              width="350px"
              height="350px"
            />
          </div>
          <div className="image-gallery">
            <Image
              src="/images/backgrounds/background-services-end.png"
              alt="gallery 3"
              width="350px"
              height="350px"
            />
          </div>
        </GalleryImages>
      </GalleryContainer>
    </Animation>
  );
}
