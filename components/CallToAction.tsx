export default function CallToAction() {
  const logos: string[] = [
    "/client/aam2aam.png",
    "/client/aic-sku.png",
    "/client/Deep.jpeg",
    "/client/eastwest-logo.png",
    "/client/nationalmedical.png",
    "/client/rasthetique.png",
    "/client/sk.png",
    "/client/SKyInformation.png",
    "/client/keptal.svg",
    "/client/Rawabit.webp",
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-8xl mx-auto text-center px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-[#0e355d]">
            Our Clients
          </h2>
          <div className="h-1 w-20 bg-[#2399b1] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Infinite Logo Carousel */}
        <div className="w-full overflow-hidden py-6">
          <div className="flex gap-12 animate-scroll whitespace-nowrap">
            {logos.concat(logos).map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="Client Logo"
                className="h-40 w-40 object-contain opacity-80 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
