import React from 'react';
import { Smartphone, Layers, Zap, Shield, Users, LineChart, Code, Database, Cloud, Bell, Lock, Wifi, Battery, Download, Share2 } from 'lucide-react';
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

export default function AppDevelopmentPage() {
  const miniCardLinks = [
    { label: "Native Development", href: "/tech/native-development", img: "/mini/native.jpeg" },
    { label: "Cross-Platform", href: "/tech/cross-platform", img: "/mini/crossplatform.jpeg" },
    { label: "Mobile Backend", href: "/tech/mobile-backend", img: "/mini/mobilebackend.jpeg" },
    { label: "App Security", href: "/tech/app-security", img: "/mini/appsecurity.jpeg" },
    { label: "UI/UX Design", href: "/tech/mobile-design", img: "/mini/mobiledesign.jpeg" },
    { label: "Testing & QA", href: "/tech/mobile-testing", img: "/mini/mobiletesting.jpeg" },
  ];

  const features = [
    {
      icon: Smartphone,
      title: "Native & Cross-Platform",
      description: "Build high-performance mobile applications for iOS and Android using native technologies or cross-platform frameworks like React Native and Flutter."
    },
    {
      icon: Layers,
      title: "End-to-End Solutions",
      description: "Complete mobile app development from UI/UX design to backend integration, app store deployment, and post-launch support."
    },
    {
      icon: Zap,
      title: "Performance Optimized",
      description: "Apps engineered for speed, smooth animations, and efficient resource usage to deliver exceptional user experiences."
    }
  ];

  const developmentProcess = [
    {
      number: "01",
      title: "Strategy & Design",
      description: "We define your app's core features, create wireframes and prototypes, and design intuitive interfaces that resonate with your target audience."
    },
    {
      number: "02",
      title: "Development & APIs",
      description: "Our mobile teams build feature-rich applications using modern frameworks, integrate backend services, and implement real-time functionality."
    },
    {
      number: "03",
      title: "Testing & Optimization",
      description: "Rigorous testing across devices, OS versions, and network conditions ensures your app performs flawlessly in real-world scenarios."
    },
    {
      number: "04",
      title: "Launch & Maintenance",
      description: "We handle app store submissions, monitor performance metrics, and provide continuous updates to keep your app competitive."
    }
  ];

  const capabilities = [
    { icon: Zap, title: "Fast Performance", desc: "Optimized for speed and responsiveness" },
    { icon: Shield, title: "Secure by Design", desc: "Data encryption and secure APIs" },
    { icon: Users, title: "User-Centric", desc: "Intuitive and engaging interfaces" },
    { icon: LineChart, title: "Analytics Ready", desc: "Built-in tracking and insights" }
  ];

  const techStack = [
    {
      name: "React Native & Flutter",
      description: "Cross-platform frameworks for iOS and Android",
      icon: Smartphone
    },
    {
      name: "Swift & Kotlin",
      description: "Native iOS and Android development",
      icon: Code
    },
    {
      name: "Firebase & AWS Amplify",
      description: "Backend services and real-time databases",
      icon: Database
    },
    {
      name: "Push Notifications",
      description: "Engagement through FCM and APNs",
      icon: Bell
    },
    {
      name: "Authentication & Security",
      description: "OAuth, biometrics, and data encryption",
      icon: Lock
    },
    {
      name: "Offline Support",
      description: "Local storage and sync strategies",
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
              Mobile Solutions
            </p>
            <h1 className="text-4xl md:text-5xl font-extralight leading-tight mb-6">
              App Development
            </h1>
            <p className="text-lg text-gray-200 mb-6 font-light">
              Create powerful mobile experiences that users love. From native iOS and Android apps 
              to cross-platform solutions, we build applications that drive engagement and deliver 
              measurable results.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-md bg-red-500 text-white font-medium hover:bg-red-400 transition">
                Get Started
              </button>
              <button className="px-6 py-3 rounded-md border border-gray-500 text-sm hover:border-red-400 hover:text-red-300 transition">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-[#F5F7FB] py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <StatCard number="300+" label="Apps Launched" />
            <StatCard number="10M+" label="Total Downloads" />
            <StatCard number="4.8★" label="Average Rating" />
            <StatCard number="95%" label="Client Retention" />
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
              Why Choose Our Mobile Solutions
            </h2>
            <p className="text-sm text-gray-600 font-light max-w-2xl">
              We combine mobile expertise with user-centered design to create apps 
              that stand out in crowded app stores.
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
              Development Process
            </p>
            <h2 className="text-3xl font-extralight mb-4">
              Our App Development Process
            </h2>
            <p className="text-sm md:text-base text-black font-light">
              A proven methodology for building mobile applications that users download, engage with, 
              and recommend to others.
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
              What We Deliver
            </p>
            <h2 className="text-3xl font-extralight mb-4">
              Core Capabilities
            </h2>
            <p className="text-sm text-gray-600 font-light max-w-2xl">
              Built on mobile-first principles and platform best practices
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
              Technology Stack
            </p>
            <h2 className="text-2xl md:text-3xl font-extralight mb-3">
              Mobile Technology Stack
            </h2>
            <p className="text-sm text-gray-300 font-light max-w-2xl">
              We leverage the latest mobile technologies to build apps that users love
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
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
              Mobile Development Solutions
            </h2>
            <p className="text-sm text-gray-600 font-light max-w-2xl">
              Discover our specialized mobile development services designed 
              to bring your app vision to life.
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