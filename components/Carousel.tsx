"use client";

import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import SlideUp from "@/components/SlideUp";
import ChargingButton from "./ChargingButton";

interface SlideItem {
  id: number;
  title: string;
  text: string;
  bg: string;
  href: string;
  gifPosition?: string;
}

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  const SLIDES: SlideItem[] = [
    {
      id: 1,
      title: "Introduce to conzura",
      text: "Transforming enterprises through AI-driven insights, advanced data engineering, and intelligent automation powered by unified, high-quality data.",
      bg: "ball.gif",
      href: "/banner/banner7",
      gifPosition: "right",
    },
    {
      id: 2,
      title: "Clean, monetize, and power AI with your data",
      text: "ensure data quality through cleaning, generate revenue through monetization, and enable intelligent automation with AI-ready pipelines.",
      bg: "ai.gif",
      href: "/banner/banner11",
    },
    {
      id: 3,
      title: "A proven leader in AI innovation and data modernization",
      text: "conzura recognized for its excellence in AI engineering, scalable data platforms, and enterprise-wide modernization solutions across industries.",
      bg: "s.jpeg",
      href: "/banner/banner9",
    },
    {
      id: 4,
      title: "Unlock the power of AI with conzura.AI",
      text: "conzura.AI unifies data, automation, and intelligence into a single seamless ecosystem. From raw, fragmented data to enterprise-grade AI deployment, conzura accelerates every step of the journey.",
      bg: "lightr.jpeg",
      href: "/banner/banner10",
    },
  ];

  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    const nextIndex = emblaApi.selectedScrollSnap() + 1;
    emblaApi.scrollTo(nextIndex);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setProgress(0);

    const autoInterval = setInterval(autoplay, 5000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 100);

    return () => {
      clearInterval(autoInterval);
      clearInterval(progressInterval);
    };
  }, [emblaApi, autoplay, selectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const isGif = (url: string): boolean =>
    url.toLowerCase().endsWith(".gif");

  return (
    <div className={`relative overflow-hidden h-[95vh]`}>
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {SLIDES.map((slide) => {
            const isGifSlide = isGif(slide.bg);

            return (
              <div
                key={slide.id}
                className="min-w-full h-full relative flex items-center"
              >
                <div
                  className="absolute inset-0 pointer-events-none z-[2]"
                  style={{
                    backgroundImage: "url(/matte.png)",
                    backgroundSize: "cover",
                    opacity: 0.22,
                    mixBlendMode: "overlay",
                  }}
                />

                {slide.id === 2 ? (
                  <>
                    <img
                      src={`/${slide.bg}`}
                      alt={slide.title}
                      className="absolute inset-0 w-full h-full object-cover z-0"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-[1]" />

                    <div className="relative z-10 text-white max-w-3xl px-10 md:px-20">
                      <SlideUp>
                        <h2 className="text-[3rem] font-thin leading-tight mb-4">
                          {slide.title}
                        </h2>
                      </SlideUp>

                      <SlideUp>
                        <p className="text-xl leading-relaxed mb-8 font-light">
                          {slide.text}
                        </p>
                      </SlideUp>

                      <SlideUp>
                        <ChargingButton text="Know More" href={slide.href} />
                      </SlideUp>
                    </div>
                  </>
                ) : isGifSlide ? (
                  <>
                    <div
                      className="absolute inset-0 pointer-events-none z-[1]"
                      style={{
                        background:
                          "linear-gradient(to right, #000 0%, #000 50%, #010206 50%, #5e8fa8 100%)",
                      }}
                    />

                    <div className="w-1/2 h-full flex items-center px-10 md:px-20 relative z-10">
                      <div className="text-white max-w-2xl">
                        <SlideUp>
                          <h2 className="text-[3rem] font-thin leading-tight mb-4">
                            {slide.title}
                          </h2>
                        </SlideUp>

                        <SlideUp>
                          <p className="text-xl leading-relaxed mb-8 font-light">
                            {slide.text}
                          </p>
                        </SlideUp>

                        <SlideUp>
                          <ChargingButton text="Know More" href={slide.href} />
                        </SlideUp>
                      </div>
                    </div>

                    <div className="w-1/2 h-full flex items-center justify-center p-10 relative z-10">
                      <img
                        src={`/${slide.bg}`}
                        alt={slide.title}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      src={`/${slide.bg}`}
                      alt={slide.title}
                      className="absolute inset-0 w-full h-full object-cover z-0"
                    />

                    <div className="absolute inset-0 bg-black/40 z-[1]" />

                    <div className="relative z-10 text-white max-w-2xl px-10 md:px-20">
                      <SlideUp>
                        <h2 className="text-[3rem] font-thin leading-tight mb-4">
                          {slide.title}
                        </h2>
                      </SlideUp>

                      <SlideUp>
                        <p className="text-xl leading-relaxed mb-8 font-light">
                          {slide.text}
                        </p>
                      </SlideUp>

                      <SlideUp>
                        <ChargingButton text="Know More" href={slide.href} />
                      </SlideUp>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 text-white text-6xl font-bold opacity-80 hover:opacity-100"
      >
        &#8249;
      </button>

      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 text-white text-6xl font-bold opacity-80 hover:opacity-100"
      >
        &#8250;
      </button>

      <div className="absolute bottom-6 w-full flex justify-start gap-1.5 z-20 px-10 pl-22">
        {SLIDES.map((_, index) => (
          <div
            key={index}
            onClick={() => {
              emblaApi?.scrollTo(index);
              setProgress(0);
            }}
            className="cursor-pointer flex-1 max-w-[120px] h-3 bg-white/30 overflow-hidden"
          >
            <div
              className="h-full bg-red-500 transition-all duration-100"
              style={{
                width:
                  selectedIndex === index
                    ? `${progress}%`
                    : selectedIndex > index
                    ? "100%"
                    : "0%",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
