import React from "react";
import styled from "styled-components/macro";

const Hero = () => {
  return (
    <Wrapper>
      <picture>
        <source
          type="image/avif"
          srcset={`/images/hero-img.avif, /images/hero-img@2x.avif, /images/hero-img@3x.avif`}
        />
        <source
          type="image/jpg"
          srcset={`/images/hero-img.jpg, /images/hero-img@2x.jpg, /images/hero-img@3x.jpg`}
        />
        <HeroImage
          src="/images/hero-img.jpg"
          alt="cat on a black background representing a sample of the pictures on this site"
        />
      </picture>
      <Swoop src="/swoop.svg" alt="" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: hsl(0deg 0% 1%);
`;

const HeroImage = styled.img`
  display: block;
  width: 500px;
  height: 500px;
  max-height: 100%;
`;

const Swoop = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  /*
    Overhang by a couple px to prevent any pixel-rounding
    display issues
  */
  bottom: -2px;
  width: 100%;
`;

export default Hero;
