"use client";
import React from "react";
import { images } from "../images";
import { useTransform, useScroll, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { clsx } from "clsx";
import Image from "next/image";
import useDimension from "../hooks/useDimension";
const Gallery = () => {
  const { height } = useDimension();
  const gallery = useRef(null);

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);
  if (window.innerWidth < 768) {
    return (
      <div className=" bg-red-700 relative flex flex-col md:flex-row gap-2 p-2 ">
        <Column images={[images[0].image, images[1].image, images[3].image]} />
        <Column images={[images[3].image, images[4].image, images[5].image]} />
        <Column images={[images[6].image, images[7].image, images[0].image]} />
        <Column images={[images[3].image, images[2].image, images[3].image]} />
      </div>
    );
  }
  return (
    <>
      <div className="h-[1vh]"></div>
      <div
        ref={gallery}
        className="h-full  md:h-[180vh] bg-slate-700 relative flex flex-col md:flex-row gap-2 p-2 md:overflow-hidden"
      >
        <Column
          images={[images[0].image, images[1].image, images[3].image]}
          css="md:-top-[65%]"
          y={y}
        />
        <Column
          images={[images[3].image, images[4].image, images[5].image]}
          css="md:-top-[95%]"
          y={y2}
        />
        <Column
          images={[images[6].image, images[7].image, images[0].image]}
          css="md:-top-[45%]"
          y={y3}
        />
        <Column
          images={[images[3].image, images[2].image, images[3].image]}
          css="md:-top-[75%]"
          y={y4}
        />
      </div>
    </>
  );
};

export default Gallery;

const Column = ({ images, css, y }: any) => {
  if (window.innerWidth < 768) {
    return (
      <div className={"relative h-[500px] w-full flex flex-col gap-2"}>
        {images.map((src: any, index: any) => {
          return (
            <div
              className={clsx(
                "h-full w-full relative rounded-md overflow-hidden"
              )}
              key={index}
            >
              <Image
                src={src}
                alt="Aqua Active Activity"
                fill
                className="object-cover"
              />
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <motion.div
      className={clsx(
        "relative md:h-full h-[500px] w-full md:w-full  flex flex-col gap-2",
        css
      )}
      style={{ y }}
    >
      {images.map((src: any, index: any) => {
        return (
          <div
            className={clsx(
              "h-full w-full relative rounded-md overflow-hidden"
            )}
            key={index}
          >
            <Image
              src={src}
              alt="Aqua Active Activity"
              fill
              className="object-cover"
            />
          </div>
        );
      })}
    </motion.div>
  );
};
