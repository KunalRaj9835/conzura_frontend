import React from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src="/group.jpg"
          alt="conzura Team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* We Blend Innovation Section */}
        <section className="py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-[#1e3a5f] mb-6">
                "We Blend Innovation with Intelligence to Transform Recruitment in Your Organisation"
              </h1>

              <p className="text-gray-600 text-lg mb-6 text-justify font-light">
                conzura was conceptualized with indigenous and unparalleled thought of redefining the human resource industry and addressing talent enigma with the Tech & Touch initiative.
              </p>

              <p className="text-gray-600 text-lg text-justify font-light">
                conzura has set a new benchmark in the competitive world of talent acquisition through its assiduously conceptualized talent services. We examine macro to micro aspect of your business to perform precise research in order to create a sustainable inflow of suitable talents in your organisation.
              </p>
            </div>

            <div className="order-1 md:order-2">
              <Image
                src="/About-us.png"
                alt="Innovation and Intelligence"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Core Mission & Values Section */}
        <section className="py-16 md:py-24 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium text-[#1e3a5f] text-center mb-6">
              Our Core Mission & Values Drive Result-Oriented Process
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
              <div>
                <p className="text-gray-600 text-lg mb-6 text-justify font-light">
                  Our core values drive us to redefine the organisational recruitment process backed by data, research, experience & concepts. Our recruitment approach enables us to implement ethical and productive industry's best practices.
                </p>

                <p className="text-gray-600 text-lg text-justify font-light">
                  Every organisation is unique and so is their talent requirement. That's the reason why we deploy customized strategies for every particular business case. Our customized talent mobilization strategies for our every client makes us one of the leading talent acquisition firms in India.
                </p>
              </div>

              <div className="flex justify-center">
                <Image
                  src="/core.jpeg"
                  alt="Core Values"
                  width={500}
                  height={500}
                  className="w-full max-w-md h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-medium text-[#1e3a5f] text-center mb-8">
            Our Journey to Excellence
          </h2>

          <p className="text-gray-600 text-lg text-center max-w-4xl mx-auto mb-6 text-justify font-light">
            At conzura, our journey has gradually allowed us to provide an entire range of talent services that thoroughly supports our client's talent requirements.
          </p>

          <p className="text-gray-600 text-lg text-center max-w-4xl mx-auto mb-12 text-justify font-light">
            Withstanding the uncertain limitation levied by the year 2025, cohesive efforts made by conzura to remain undeterred and focused on organisational goals yielded astounding outcomes. We added successive CoE (Center of Excellence) year after year to provide customized talent solution that fits every client's talent needs.
          </p>

        </section>

      </div>
      <Footer />
    </div>
  );
}
