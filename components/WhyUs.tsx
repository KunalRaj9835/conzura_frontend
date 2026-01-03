"use client";

import React, { ReactNode } from "react";
import {
  Briefcase,
  Smile,
  Clock,
  UserCheck,
} from "lucide-react";
import SlideUp from "./SlideUp";

export default function WhyUs(): React.ReactNode {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f9fafb] to-[#ffffff] -z-10"></div>

      {/* Heading */}
      <SlideUp>
        <div className="text-center mb-16">
          <h2 className="text-[2.5rem] font-light text-[#0e355d]">
            Why Conzura
          </h2>
          <div className="h-1 w-20 bg-[#25b1c1] mx-auto mt-3 rounded-full"></div>
        </div>
      </SlideUp>

      {/* About */}
      <SlideUp>
        <div className="mb-24 text-[#0e355d]">
          <div className="bg-white shadow-xl p-10 md:p-14 rounded-xl border border-black hover:shadow-2xl transition-all duration-300">
            <h3 className="text-3xl font-light text-[#25b1c1] mb-6 text-center">
              About Us
            </h3>

            <p className="text-lg leading-relaxed font-light text-center max-w-4xl mx-auto">
              We are a team of creative designers and passionate developers. At
              Conzura Soft Solutions, we work relentlessly to help businesses
              grow and transform into strong, scalable brands that compete with
              the biggest platforms in the market. Our approach is driven by
              innovation, performance, and long-term value creation.
            </p>
          </div>
        </div>
      </SlideUp>

      {/* Stats */}
      <SlideUp>
        <SectionTitle title="Our Stats" />
      </SlideUp>

      <SlideUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-28">
          <StatCard
            icon={<Briefcase size={36} className="text-[#25b1c1]" />}
            value="1500+"
            label="Projects Delivered"
          />
          <StatCard
            icon={<Smile size={36} className="text-[#25b1c1]" />}
            value="500+"
            label="Happy Clients"
          />
          <StatCard
            icon={<Clock size={36} className="text-[#25b1c1]" />}
            value="20,000+"
            label="Support Hours"
          />
          <StatCard
            icon={<UserCheck size={36} className="text-[#25b1c1]" />}
            value="50+"
            label="Team Members"
          />
        </div>
      </SlideUp>

      {/* Why We Stand Out */}
      <SlideUp>
        <SectionTitle title="Why Conzura Stands Out" />
      </SlideUp>

      <SlideUp>
        <div className="grid md:grid-cols-2 gap-8 text-[#0e355d]">
          <AdvantageCard title="1500+ Successful Projects">
            Trusted by startups and enterprises alike, delivering scalable and
            high-performance digital products.
          </AdvantageCard>

          <AdvantageCard title="Design + Engineering Strength">
            We merge creative design with strong engineering to build products
            users love and businesses rely on.
          </AdvantageCard>

          <AdvantageCard title="Global Client Trust">
            Clients across regions depend on us for consistency, quality, and
            long-term partnership.
          </AdvantageCard>

          <AdvantageCard title="Complete Digital Partner">
            From ideation to deployment and scaling — everything delivered under
            one roof.
          </AdvantageCard>
        </div>
      </SlideUp>
    </section>
  );
}

/* ---------------- COMPONENTS ---------------- */

interface SectionTitleProps {
  title: string;
}

function SectionTitle({ title }: SectionTitleProps): React.ReactNode {
  return (
    <div className="text-center mb-12">
      <h3 className="text-2xl font-light text-[#0e355d]">{title}</h3>
      <div className="h-1 w-16 bg-[#25b1c1] mx-auto mt-3 rounded-full"></div>
    </div>
  );
}

interface StatCardProps {
  icon: ReactNode;
  value: string;
  label: string;
}

function StatCard({ icon, value, label }: StatCardProps): React.ReactNode {
  return (
    <div className="bg-white p-8 rounded-xl border shadow-md text-center hover:shadow-xl transition-all duration-300">
      <div className="flex justify-center mb-4">{icon}</div>
      <p className="text-3xl font-light text-[#25b1c1]">{value}</p>
      <p className="text-sm font-light text-[#0e355d] mt-1">{label}</p>
    </div>
  );
}

interface AdvantageCardProps {
  title: string;
  children: ReactNode;
}

function AdvantageCard({ title, children }: AdvantageCardProps): React.ReactNode {
  return (
    <div className="bg-white p-8 rounded-xl border shadow-md hover:shadow-xl transition-all duration-300">
      <h4 className="text-xl font-light text-[#25b1c1] mb-3">
        {title}
      </h4>
      <p className="leading-relaxed font-light">{children}</p>
    </div>
  );
}