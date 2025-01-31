import styles from "./Carousel.module.scss"
import Image from 'next/image';
import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
  } from 'reactstrap';


type props = {
    images: {
        src: string,
        altText: string,
        caption: string,
        key: number
    }[]
}

function ReactStrapCarousel({images}: props) {

    const items = images

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    };
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    };
  
    const goToIndex = (newIndex: number) => {
      if (animating) return;
      setActiveIndex(newIndex);
    };
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <Image
            src={item.src}
            alt={item.altText}
            width={1000}
            height={200}
            style={{
                height: "auto",
                objectFit: "contain",
                objectPosition: "center",
            }}
        />
          <CarouselCaption
            captionText={item.caption}
          />
        </CarouselItem>
      );
    });
  
    return (
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
          className={styles.indicators}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
          className={styles.control}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
          className={styles.control}
        />
      </Carousel>
    );
  }
  
  export default ReactStrapCarousel;