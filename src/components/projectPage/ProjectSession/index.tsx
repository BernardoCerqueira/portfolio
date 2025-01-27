import styles from "./ProjectSession.module.scss";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type props = {
    name: string
    link: string
    textLink: string
    pictures: {
        src: string,
        alt: string
    }[] | string
}

export default function ProjectSession({ name, link, textLink, pictures }: props) {

    const items = pictures

    return (
        <div className={styles.projectSession}>
            <h1 className={styles.title}>{name}</h1>
            <a href={link} className={styles.link}>{textLink}</a>
            {typeof items == "object"
                ?
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={50}
                    slidesPerView={1}
                    className={styles.swiper}
                >
                    {items.map((item, index) => (
                        <SwiperSlide key={index} className={styles.swiperSlide}>
                            {items[0].alt[0] === "V"
                                ?
                                <video controls>
                                    <source src={item.src} type="video/mp4"/>
                                    Seu navegador não suporta o elemento de vídeo.
                                </video>
                                :
                                <img src={item.src} alt={item.alt} />
                            }
                        </SwiperSlide>
                    ))}
                </Swiper>
                :
                null
            }
            <p className={styles.description}></p>
        </div>
    )
}

