import React from 'react';
import { ArrowRight, Code, Layers, Database, Cloud, GitBranch, Server, CheckCircle, Zap, Shield, Users, LineChart, Settings , Boxes,Network} from 'lucide-react';
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
      
      {/* Icon */}
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500 group-hover:bg-red-500 group-hover:text-white transition">
        <Icon className="h-5 w-5" />
      </div>

      {/* Text */}
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



export default function WebDevelopmentPage() {
  const miniCardLinks = [
 { label: "Cloud & Analytics", href: "/tech/cloud-analytics", img: "/mini/cloud.jpeg" },
    { label: "Frameworks", href: "/tech/frameworks", img: "/mini/framework.jpeg" },
    { label: "Infrastructure", href: "/tech/infrastructure", img: "/mini/infrastructure.jpeg" },
    { label: "Orchestration Platforms", href: "/tech/orchestration", img: "/mini/orchestration.jpeg" },
    { label: "Backend Engineering", href: "/tech/backend-engineering", img: "/mini/backend.jpeg" },
    { label: "Storage & Databases", href: "/tech/storage-databases", img: "/mini/storage.jpeg" },
  ];

  const features = [
    {
      icon: Code,
      title: "Modern Architecture",
      description: "Build scalable applications with microservices, serverless, and cloud-native architectures that grow with your business."
    },
    {
      icon: Layers,
      title: "Full Stack Solutions",
      description: "End-to-end development from frontend frameworks to backend services, databases, and deployment pipelines."
    },
    {
      icon: Server,
      title: "Enterprise Grade",
      description: "Production-ready solutions with security, monitoring, and performance optimization built in from day one."
    }
  ];

  const developmentProcess = [
    {
      number: "01",
      title: "Discovery & Architecture",
      description: "We analyze your business requirements, define technical specifications, and design a scalable system architecture that aligns with your goals."
    },
    {
      number: "02",
      title: "Development & Integration",
      description: "Our engineering teams build robust applications using modern frameworks, implement APIs, and integrate third-party services for seamless functionality."
    },
    {
      number: "03",
      title: "Testing & Quality Assurance",
      description: "Comprehensive testing across units, integration points, and user flows ensures reliability, performance, and security before deployment."
    },
    {
      number: "04",
      title: "Deployment & Support",
      description: "We deploy your application to production environments with CI/CD automation and provide ongoing maintenance, monitoring, and optimization."
    }
  ];

  const capabilities = [
    { icon: Zap, title: "High Performance", desc: "Optimized for speed and efficiency" },
    { icon: Shield, title: "Security First", desc: "Built with enterprise security standards" },
    { icon: Users, title: "Scalable Teams", desc: "Flexible resource allocation" },
    { icon: LineChart, title: "Data-Driven", desc: "Analytics and insights integration" }
  ];

 const techStack = [
  {
    name: "React & Next.js",
    description: "Modern frontend frameworks for dynamic user interfaces",
    icon: Code
  },
  {
    name: "Node.js & Express",
    description: "Scalable backend APIs and microservices",
    icon: Server
  },
  {
    name: "AWS & Azure",
    description: "Cloud infrastructure and serverless computing",
    icon: Cloud
  },
  {
    name: "PostgreSQL & MongoDB",
    description: "Relational and NoSQL database solutions",
    icon: Database
  },
  {
    name: "Docker & Kubernetes",
    description: "Containerization and orchestration platforms",
    icon: Boxes
  },
  {
    name: "GraphQL & REST",
    description: "API design and data fetching strategies",
    icon: Network
  }
];

   return (
    <div className="w-full bg-white text-gray-900">
      
      {/* Hero Section */}
      <section className="w-full bg-[#111827] text-white py-20 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.25em] text-xs text-red-400 mb-4">
              Enterprise Solutions
            </p>
            <h1 className="text-4xl md:text-5xl font-extralight leading-tight mb-6">
              Web Development
            </h1>
            <p className="text-lg text-gray-200 mb-6 font-light">
              Transform your ideas into powerful web applications with cutting-edge technologies 
              and scalable architectures. From cloud infrastructure to modern frameworks, we build 
              solutions that drive innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-md bg-red-500 text-white font-medium hover:bg-red-400 transition">
                Get Started
              </button>
              <button className="px-6 py-3 rounded-md border border-gray-500 text-sm hover:border-red-400 hover:text-red-300 transition">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-[#F5F7FB] py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <StatCard number="500+" label="Projects Delivered" />
            <StatCard number="99.9%" label="Uptime SLA" />
            <StatCard number="50+" label="Technologies" />
            <StatCard number="24/7" label="Support" />
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
              Why Choose Our Solutions
            </h2>
            <p className="text-sm text-gray-600 font-light max-w-2xl">
              We combine technical expertise with business understanding to deliver 
              web solutions that exceed expectations.
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
      <section className="w-full bg-[#F5F7FB] text-black py-16 md:py-16  border-slate-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.1fr,1.1fr] gap-10">
          <div>
            <p className="uppercase text-xs tracking-[0.25em] text-red-400 mb-4">
              Development Process
            </p>
            <h2 className="text-3xl font-extralight mb-4">
              Our Development Process
            </h2>
            <p className="text-sm md:text-base text-black font-light">
              A structured approach to building web applications that deliver results, from initial 
              concept through deployment and beyond.
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
              Built on proven engineering practices and modern tooling
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
              Technology Stack
            </h2>
            <p className="text-sm text-gray-300 font-light max-w-2xl">
              We work with industry-leading technologies to build reliable, maintainable applications
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
              Solution Modules
            </h2>
            <p className="text-sm text-gray-600 font-light max-w-2xl">
              Explore our comprehensive suite of web development solutions designed 
              to power modern applications.
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