import styled from 'styled-components';
import theme from '../../styles/theme';

export const Animation = styled.div`
  /* margin: 150px 0; */

  @media (max-width: ${theme.breakpoints.lg}) {
    margin: 0px 0px;
    padding: 0;
  }

  @media (max-width: ${theme.breakpoints.mdToLg}) {
    /* margin: 90px 0; */
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    /* margin: 90px 0; */
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    /* margin: 30px 0; */
  }
`;

export const GalleryViewContainer = styled.section`
  max-width: 1500px;
  margin: auto;
  padding: 1.25rem;

  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const GalleryViewInfo = styled.div`
  max-width: 783px;
  text-align: center;
  margin: auto;
  margin-bottom: 30px;

  h1 {
    color: ${theme.colors.primaryText};
    font-size: 44px;
    font-weight: 700;
  }

  p {
    color: ${theme.colors.infoText};
    font-size: 18px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    margin: 28px 0;
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    max-width: 610px;
    h1 {
      font-size: 36px;
    }

    p {
      font-size: 16px;
    }
  }

  @media (max-width: ${theme.breakpoints.mdToLg}) {
    max-width: 550px;

    h1 {
      font-size: 32px;
    }

    p {
      font-size: 14px;
      margin: 22px 0;
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    text-align: center;
    max-width: 100%;

    h1 {
      margin: auto;
      font-size: 40px;
      max-width: 520px;
    }

    p {
      font-size: 20px;
      margin: 22px 0;
      text-align: justify;
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    h1 {
      font-size: 36px;
      max-width: 520px;
      text-align: center;
    }

    p {
      font-size: 16px;
      margin: 22px 0;
      text-align: justify;
    }
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    h1 {
      font-size: 30px;
      max-width: 350px;
      text-align: center;
    }

    h2 {
      font-size: 16px;
      margin: 16px 0;
    }
  }
`;

// export const GalleryViewImagesContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(6, 1fr);
//   grid-auto-rows: 300px;
//   /* padding: 5px; */
//   grid-gap: 5px;

//   .item-galeria {
//     position: relative;
//   }

//   .item-galeria .img-galeria {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }

//   .item-galeria .title-galeria {
//     position: absolute;
//     background-color: rgba(0, 0, 0, 0.8);
//     left: 0;
//     bottom: 0;
//     width: 100%;
//     color: white;
//     padding: 10px;
//     font-size: 16pt;
//     font-family: 'Quicksand';
//   }

//   .h-1 {
//     grid-row: span 1;
//   }

//   .h-2 {
//     grid-row: span 2;
//   }

//   .w-1 {
//     grid-column: span 1;
//   }

//   .w-2 {
//     grid-column: span 2;
//   }

//   @media (max-width: ${theme.breakpoints.mdToLg}) {
//     grid-auto-rows: 200px;
//   }

//   @media (max-width: 850px) {
//     grid-auto-rows: 150px;
//   }

//   @media (max-width: 768px) {
//     grid-template-columns: repeat(1, 1fr);
//     grid-auto-rows: 70vh;
//     justify-content: center;

//     .h-2 {
//       grid-row: span 1;
//     }

//     .w-2 {
//       grid-column: span 1;
//     }
//   }

//   @media (max-width: 768px) {
//     grid-template-columns: repeat(1, 1fr);
//     grid-auto-rows: 70vh;
//   }

//   @media (max-width: 480px) {
//     grid-template-columns: repeat(1, 1fr);
//     grid-auto-rows: 50vh;
//   }

//   @media (max-width: 360px) {
//     grid-template-columns: repeat(1, 1fr);
//     grid-auto-rows: 40vh;
//   }
// `;

export const GalleryViewImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  .item-galeria {
    width: 100%;
  }

  @media (max-width: ${theme.breakpoints.mdToLg}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
