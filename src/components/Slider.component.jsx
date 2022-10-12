import React, { useEffect, useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { setSliderItems } from "../redux/reducers";

import axios from "axios";

export default function Slider() {
  const dispatch = useDispatch();
  const slider = useSelector((state) => state.slider.items);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      await axios("http://localhost:3030/api/v1/slider", {
        method: "GET",
      }).then((res) => {
        dispatch(setSliderItems(res.data));
      });
    }
    fetchData();
  }, []);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : slider.length - 1);
    } else {
      setSlideIndex(slideIndex < slider.length - 1 ? slideIndex + 1 : 0);
    }
  };

  if (!slider.length) return;

  return (
    <Container>
      <Wrapper slideIndex={slideIndex}>
        {slider.map((item) => (
          <Slide bgColor={item.bgColor} key={item.id}>
            <Image src={item.image} />
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              <Button>Découvrir</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      {slider.length > 1 ? (
        <>
          <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined />
          </Arrow>
          <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlined />
          </Arrow>
        </>
      ) : null}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  display: none;

  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
  }
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bgColor};
`;

const Image = styled.img`
  height: 80%;
  display: block;
  padding: 0 0 0 20px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
  text-transform: uppercase;
`;

const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  font-family: inherit;
  text-transform: uppercase;
  background-color: transparent;
  cursor: pointer;
  border: 2px solid black;

  @media screen and (min-width: 1024px) {
    transition: 0.2s;

    &:hover {
      transition: 0.2s;
      transform: scale(1.05);
    }
  }
`;
