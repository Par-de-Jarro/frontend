import React from 'react'
import PageContainer from '../../components/page-container'
import { SpotContainer, MainInfoDiv, SubInfo, LocationIcon} from './styles';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const SpotDetails: React.FC = () => {
    return (
        <>
            <PageContainer>
              <SpotContainer>
                <Carousel showThumbs={false}>
                    <div>
                        <img src="https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg" alt="demo"/>
                    </div>
                    <div>
                        <img src="https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg" alt="demo"/>
                    </div>
                </Carousel>
                <MainInfoDiv>
                    <p>image name</p>
                    <p>R$ 200,00</p>
                </MainInfoDiv>
                <p>description description description description description description description description</p>
                <SubInfo>
                    <LocationIcon></LocationIcon>
                    <p>info1</p>
                </SubInfo>
                <SubInfo>
                    <LocationIcon></LocationIcon>
                    <p>info1</p>
                </SubInfo>
                <SubInfo>
                    <LocationIcon></LocationIcon>
                    <p>info1</p>
                </SubInfo>
                <SubInfo>
                    <LocationIcon></LocationIcon>
                    <p>info1</p>
                </SubInfo>
              </SpotContainer>
              <button>Solicitar entrada</button>
            </PageContainer>
        </>
      )
  }
  
  export default SpotDetails