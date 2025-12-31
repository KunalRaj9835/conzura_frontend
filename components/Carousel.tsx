"use client";

import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import SlideUp from "./SlideUp";
import ChargingButton from "./ChargingButton";
import ChargingButton2 from "./ChargingButton2";

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
      title: "Web Development",
      text: "Building modern, responsive, and high-performance web applications tailored to your business needs.",
      bg: "carousel/web.mp4",
      href: "/services/web-development",
      gifPosition: "right",
    },
    {
      id: 2,
      title: "App Development",
      text: "Creating innovative mobile applications that deliver seamless user experiences across all platforms.",
      bg: "carousel/app.mp4",
      href: "/services/app-development",
      gifPosition: "left",
    },
    {
      id: 3,
      title: "Web Hosting",
      text: "Reliable and scalable hosting solutions to keep your digital presence running smoothly 24/7.",
      bg: "carousel/hosting.mp4",
      href: "/services/web-hosting",
    },
    {
      id: 4,
      title: "Sales CRM Tool",
      text: "Streamline your sales process with our powerful CRM solution designed to boost productivity and close more deals.",
      bg: "carousel/sales.png",
      href: "/Product/Sales",
    },
    {
      id: 5,
      title: "Ticketing Tool",
      text: "Efficient ticket management system to handle customer support requests and improve service delivery.",
      bg: "carousel/ticket2.png",
      href: "/Product/Ticketing",
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

  const isVideo = (url: string): boolean =>
    url.toLowerCase().endsWith(".mp4");

  return (
    <div className="relative overflow-hidden h-[95vh]">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {SLIDES.map((slide) => {
            const isVideoSlide = isVideo(slide.bg);

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

                {/* Slide 1: Web Development - Black bg, video on right */}
                {slide.id === 1 ? (
                  <>
                    <div
                      className="absolute inset-0 z-[1]"
                      style={{ background: "#000" }}
                    />

                    {/* Desktop: Side by side, Mobile: Stacked */}
                    <div className="w-full h-full flex flex-col md:flex-row items-center relative z-10">
                      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center px-6 md:px-10 lg:px-20">
                        <div className="text-white max-w-2xl">
                          <SlideUp>
                            <h2 className="text-3xl md:text-4xl lg:text-[3rem] font-thin leading-tight mb-3 md:mb-4">
                              {slide.title}
                            </h2>
                          </SlideUp>

                          <SlideUp>
                            <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-4 md:mb-8 font-light">
                              {slide.text}
                            </p>
                          </SlideUp>

                          <SlideUp>
                            <ChargingButton2 text="Know More" href={slide.href} />
                          </SlideUp>
                        </div>
                      </div>

                      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-6 md:p-10">
                        <video
                          src={`/${slide.bg}`}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </div>
                  </>
                ) : /* Slide 2: App Development - #93d3f8 bg, video on left */
                slide.id === 2 ? (
                  <>
                    <div
                      className="absolute inset-0 z-[1]"
                      style={{ background: "#93d4f8" }}
                    />

                    {/* Desktop: Video left, text right. Mobile: Text top, video bottom */}
                    <div className="w-full h-full flex flex-col md:flex-row items-center relative z-10">
                      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-6 md:p-10 order-2 md:order-1">
                        <video
                          src={`/${slide.bg}`}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>

                      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center px-6 md:px-10 lg:px-20 order-1 md:order-2">
                        <div className="text-black max-w-2xl">
                          <SlideUp>
                            <h2 className="text-3xl md:text-4xl lg:text-[3rem] font-thin leading-tight mb-3 md:mb-4">
                              {slide.title}
                            </h2>
                          </SlideUp>

                          <SlideUp>
                            <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-4 md:mb-8 font-light">
                              {slide.text}
                            </p>
                          </SlideUp>

                          <SlideUp>
                            <ChargingButton2 text="Know More" href={slide.href} />
                          </SlideUp>
                        </div>
                      </div>
                    </div>
                  </>
                ) : /* Slide 3: Web Hosting - Video background */
                slide.id === 3 && isVideoSlide ? (
                  <>
                    <video
                      src={`/${slide.bg}`}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover z-0"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent md:bg-black/50 z-[1]" />

                    <div className="relative z-10 text-white max-w-2xl px-6 md:px-10 lg:px-20">
                      <SlideUp>
                        <h2 className="text-3xl md:text-4xl lg:text-[3rem] font-thin leading-tight mb-3 md:mb-4">
                          {slide.title}
                        </h2>
                      </SlideUp>

                      <SlideUp>
                        <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-4 md:mb-8 font-light">
                          {slide.text}
                        </p>
                      </SlideUp>

                      <SlideUp>
                        <ChargingButton2 text="Know More" href={slide.href} />
                      </SlideUp>
                    </div>
                  </>
                ) : /* Slides 4 & 5: Sales CRM and Ticketing - Image backgrounds */
                (
                  <>
                    <img
                      src={`/${slide.bg}`}
                      alt={slide.title}
                      className="absolute inset-0 w-full h-full object-cover z-0"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent md:bg-black/50 z-[1]" />

                    <div className="relative z-10 text-white max-w-2xl px-6 md:px-10 lg:px-20">
                      <SlideUp>
                        <h2 className="text-3xl md:text-4xl lg:text-[3rem] font-thin leading-tight mb-3 md:mb-4">
                          {slide.title}
                        </h2>
                      </SlideUp>

                      <SlideUp>
                        <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-4 md:mb-8 font-light">
                          {slide.text}
                        </p>
                      </SlideUp>

                      <SlideUp>
                        <ChargingButton2 text="Know More" href={slide.href} />
                      </SlideUp>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-2 md:left-5 top-1/2 -translate-y-1/2 z-20 text-white text-4xl md:text-6xl font-bold opacity-80 hover:opacity-100"
      >
        &#8249;
      </button>

      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-2 md:right-5 top-1/2 -translate-y-1/2 z-20 text-white text-4xl md:text-6xl font-bold opacity-80 hover:opacity-100"
      >
        &#8250;
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-6 w-full flex justify-start gap-1.5 z-20 px-6 md:px-10">
        {SLIDES.map((_, index) => (
          <div
            key={index}
            onClick={() => {
              emblaApi?.scrollTo(index);
              setProgress(0);
            }}
            className="cursor-pointer flex-1 max-w-[80px] md:max-w-[120px] h-2 md:h-3 bg-white/30 overflow-hidden rounded-sm"
          >
            <div
              className="h-full bg-[#259cb4] transition-all duration-100"
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