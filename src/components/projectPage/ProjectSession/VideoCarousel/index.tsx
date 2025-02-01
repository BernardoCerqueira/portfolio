import styles from "./VideoCarousel.module.scss"
import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
  } from 'reactstrap';


type props = {
    videos: {
        src: string,
        altText: string,
        caption: string,
        key: number
    }[],
}

function VideoCarousel({videos}: props) {

    const items = videos

    const [activeIndex, setActiveIndex] = useState(0)
    const [animating, setAnimating] = useState(false)

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
            <video
                src={item.src}
                controls
                muted
                style={{
                    height: "auto",
                    objectFit: "contain",
                    objectPosition: "center",
                }}
            >
                {item.altText}
            </video>
            <CarouselCaption
                captionText={item.caption}
                className={styles.caption}
            />
        </CarouselItem>
      );
    });
  
    return (
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        interval={false}
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
  
  export default VideoCarousel;