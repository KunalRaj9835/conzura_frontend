import React from 'react';
import { Server, Shield, Zap, Users, LineChart, Globe, Database, Lock, HardDrive, Wifi, Clock, Award } from 'lucide-react';
import Footer from '@/components/Footer';
import SolutionMiniCard from '@/components/SolutionMiniCard';
import { ComponentType } from "react";
import { LucideIcon } from "lucide-react";

export type FeatureCardProps = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="p-8 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-light mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export type StatCardProps = {
  number: string | number;
  label: string;
};

const StatCard = ({ number, label }: StatCardProps) => {
  return (
    <div className="text-center">
      <div className="text-5xl font-extralight text-red-500 mb-2">{number}</div>
      <div className="text-gray-600 font-light">{label}</div>
    </div>
  );
};

export type ProcessStepProps = {
  number: number | string;
  title: string;
  description: string;
};

const ProcessStep = ({ number, title, description }: ProcessStepProps) => {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center font-light text-lg">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-light mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export type TechStackItemProps = {
  name: string;
  description: string;
  icon: LucideIcon;
};

const TechStackItem = ({ name, description, icon: Icon }: TechStackItemProps) => {
  return (
    <div className="group relative flex items-start gap-4 p-5 bg-white rounded-xl border border-white/10 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500 group-hover:bg-red-500 group-hover:text-white transition">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex flex-col">
        <h4 className="text-sm font-medium text-gray-900 mb-1">
          {name}
        </h4>
        <p className="text-xs leading-relaxed text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function WebHostingPage() {
  const miniCardLinks = [
  {
    label: "Shared Hosting",
    href: "/hosting/shared-hosting",
    img: "/hosting/Shared.webp",
  },
  {
    label: "VPS Hosting",
    href: "/hosting/vps-hosting",
    img: "/hosting/vps.jpg",
  },
  {
    label: "Dedicated Servers",
    href: "/hosting/dedicated-servers",
    img: "/hosting/server.png",
  },
  {
    label: "Cloud Hosting",
    href: "/hosting/cloud-hosting",
    img: "/hosting/Cloud.jpg",
  },
  {
    label: "WordPress Hosting",
    href: "/hosting/wordpress-hosting",
    img: "/hosting/Wordpress.png",
  },
  {
    label: "Email Hosting",
    href: "/hosting/email-hosting",
    img: "/hosting/email.jpg",
  },
];


  const features = [
    {
      icon: Server,
      title: "Enterprise Infrastructure",
      description: "State-of-the-art data centers with redundant systems, high-speed networks, and 99.99% uptime guarantee for mission-critical applications."
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Multi-layered security with DDoS protection, SSL certificates, automated backups, and 24/7 security monitoring to keep your data safe."
    },
    {
      icon: Zap,
      title: "Blazing Fast Performance",
      description: "SSD storage, CDN integration, caching mechanisms, and optimized server configurations deliver lightning-fast loading speeds."
    }
  ];

  const developmentProcess = [
    {
      number: "01",
      title: "Consultation & Planning",
      description: "We assess your hosting requirements, traffic expectations, and performance goals to recommend the optimal hosting solution for your needs."
    },
    {
      number: "02",
      title: "Setup & Configuration",
      description: "Our team provisions servers, configures security settings, installs necessary software, and optimizes performance parameters."
    },
    {
      number: "03",
      title: "Migration & Deployment",
      description: "Seamless migration of your existing website or application with zero downtime, DNS configuration, and thorough testing."
    },
    {
      number: "04",
      title: "Monitoring & Support",
      description: "Continuous server monitoring, automatic backups, security updates, and 24/7 technical support to ensure optimal performance."
    }
  ];

  const capabilities = [
    { icon: Clock, title: "99.99% Uptime", desc: "Guaranteed availability SLA" },
    { icon: Shield, title: "DDoS Protection", desc: "Advanced threat mitigation" },
    { icon: Users, title: "24/7 Support", desc: "Expert technical assistance" },
    { icon: Award, title: "Free SSL", desc: "Complimentary security certificates" }
  ];

  const techStack = [
    {
      name: "cPanel & Plesk",
      description: "Intuitive control panels for easy management",
      icon: Server
    },
    {
      name: "Linux & Windows",
      description: "Support for multiple operating systems",
      icon: Globe
    },
    {
      name: "MySQL & PostgreSQL",
      description: "Robust database hosting solutions",
      icon: Database
    },
    {
      name: "SSL Certificates",
      description: "Free and premium SSL options",
      icon: Lock
    },
    {
      name: "SSD Storage",
      description: "High-performance solid-state drives",
      icon: HardDrive
    },
    {
      name: "CDN Integration",
      description: "Global content delivery network",
      icon: Wifi
    }
  ];

  return (
    <div className="w-full bg-white text-gray-900">
      
      {/* Hero Section */}
      <section className="w-full bg-[#111827] text-white py-20 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.25em] text-xs text-red-400 mb-4">
              Hosting Solutions
            </p>
            <h1 className="text-4xl md:text-5xl font-extralight leading-tight mb-6">
              Web Hosting
            </h1>
            <p className="text-lg text-gray-200 mb-6 font-light">
              Power your online presence with reliable, secure, and high-performance web hosting 
              solutions. From shared hosting to dedicated servers, we provide the infrastructure 
              your business needs to thrive online.
            </p>
            
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-[#F5F7FB] py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <StatCard number="99.99%" label="Uptime Guarantee" />
            <StatCard number="10K+" label="Websites Hosted" />
            <StatCard number="5TB" label="Daily Bandwidth" />
            <StatCard number="24/7" label="Expert Support" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="uppercase text-xs tracking-[0.25em] text-red-500 mb-3">
              Core Features
            </p>
            <h2 className="text-3xl font-extralight mb-4">
              Why Choose Our Hosting
            </h2>
            <p className="text-sm text-gray-600 font-light max-w-2xl">
              Enterprise-grade infrastructure with the reliability and performance 
              your business demands.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="w-full bg-[#F5F7FB] text-black py-16 md:py-16 border-slate-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.1fr,1.1fr] gap-10">
          <div>
            <p className="uppercase text-xs tracking-[0.25em] text-red-400 mb-4">
              Onboarding Process
            </p>
            <h2 className="text-3xl font-extralight mb-4">
              Getting Started is Easy
            </h2>
            <p className="text-sm md:text-base text-black font-light">
              A streamlined onboarding process that gets your website online quickly, 
              with expert support every step of the way.
            </p>
          </div>
          
          <div className="space-y-4">
            {developmentProcess.map((step, index) => (
              <ProcessStep key={index} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="uppercase text-xs tracking-[0.25em] text-red-500 mb-3">
              What You Get
            </p>
            <h2 className="text-3xl font-extralight mb-4">
              Hosting Benefits
            </h2>
            <p className="text-sm text-gray-600 font-light max-w-2xl">
              Everything you need for a secure and reliable online presence
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => (
              <div key={index} className="bg-[#F5F7FB] rounded-xl p-6 text-center">
                <cap.icon className="w-10 h-10 text-red-500 mx-auto mb-4" />
                <h3 className="text-base font-light mb-2">{cap.title}</h3>
                <p className="text-sm text-gray-600 font-light">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="w-full bg-[#111827] text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <p className="uppercase text-xs tracking-[0.25em] text-red-400 mb-3">
              Infrastructure
            </p>
            <h2 className="text-2xl md:text-3xl font-extralight mb-3">
              Hosting Technologies
            </h2>
            <p className="text-sm text-gray-300 font-light max-w-2xl">
              Powered by industry-leading technologies and infrastructure
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
  {techStack.map((tech, index) => (
    <TechStackItem key={index} {...tech} />
  ))}
</div>

        </div>
      </section>

      {/* Solution Modules Section */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="uppercase text-xs tracking-[0.25em] text-red-500 mb-3">
              Explore Solutions
            </p>
            <h2 className="text-3xl font-extralight mb-4">
              Hosting Plans
            </h2>
            <p className="text-sm text-gray-600 font-light max-w-2xl">
              Choose from our range of hosting solutions designed to meet 
              different business needs and budgets.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {miniCardLinks.map((item, index) => (
              <SolutionMiniCard
                key={index}
                title={item.label}
                img={item.img}
                href={item.href}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      
    </div>
  );
}