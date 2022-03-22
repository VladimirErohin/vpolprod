import styled from 'styled-components';

export const HomeWrapper = styled.div`
  .slick-arrow {
    background-color: #d2d2d7;
  }

  //.rec.rec-arrow:disabled {
  //  visibility: hidden;
  //}

  .rec.rec-arrow {
    background-color: #d2d2d7;
  }

  .rec.rec-arrow:hover {
    background-color: #e3e2e2;
  }
  .rec .rec-dot:hover{
    box-shadow: 0 0 1px 3px rgb(146 144 150);
  }

  .rec .rec-dot{
    height: 6px;
    width: 6px;
  }

  .rec.rec-dot_active {
    background-color: #d2d2d7;
    box-shadow: 0 0 1px 3px rgb(146 144 150);
  }
 
  .rec.rec-carousel button {
    width: 40px;
    height: 40px;
    min-width: 40px;
    line-height: 40px;
  }

`