import React from "react";
import "./testimonial.css";
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
import avatar4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  const data = [
    {
      id: 1,
      image: avatar1,
      name: "Jenner Kyle",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corruptimolestiae hic sequi rerum delectus libero excepturi minus error sint ex. Placeat aut natus saepe nihil amet quod iste consequatur ea",
    },
    {
      id: 2,
      image: avatar2,
      name: "Jeff Zarret",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corruptimolestiae hic sequi rerum delectus libero excepturi minus error sint ex. Placeat aut natus saepe nihil amet quod iste consequatur ea",
    },
    {
      id: 3,
      image: avatar3,
      name: "Daniel Wilson",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corruptimolestiae hic sequi rerum delectus libero excepturi minus error sint ex. Placeat aut natus saepe nihil amet quod iste consequatur ea",
    },
    {
      id: 4,
      image: avatar4,
      name: "Sam David",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corruptimolestiae hic sequi rerum delectus libero excepturi minus error sint ex. Placeat aut natus saepe nihil amet quod iste consequatur ea",
    },
  ];
  return (
    <section id="testimonial">
      <h5>Reviews from clients</h5>
      <h2>Testimonial</h2>
      <Swiper
        className="container testimonial__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, name, review }) => {
          return (
            <SwiperSlide key={id} className="testimonials">
              <div className="client__avatar">
                <img src={image} alt="avatar1" />
              </div>
              <h5 className="client__Name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
