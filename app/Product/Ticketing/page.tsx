"use client";

import React from "react";
import { 
  Ticket, 
  Users, 
  Settings, 
  Shield, 
  BarChart3, 
  Zap,
  Building2,
  UserCheck,
  MessageSquare,
  FileText,
  Clock,
  CheckCircle2
} from "lucide-react";
import Image from "next/image";
import Footer from "@/components/Footer";
import SlideIn from "@/components/SlideIn";
import Link from "next/link";

export default function ConzuraTicketingPage() {
  return (
    <main className="w-full text-gray-900">
      {/* HERO */}
   <section className="relative min-h-[55vh]  md:h-[55vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6">
  <div className="absolute inset-0 bg-black/30" />

  <div className="relative z-10 max-w-7xl mx-auto h-full
    grid grid-cols-1 md:grid-cols-2 gap-10
    pt-20 md:pt-0
    md:items-center
    text-white
  ">
    
    {/* LEFT: Text */}
    <div>
      <h1 className="text-3xl lg:text-5xl font-semibold max-w-xl leading-tight">
        Enterprise Ticketing Platform
      </h1>

      <p className="mt-4 max-w-lg text-base lg:text-lg text-gray-300">
        Conzura Groups delivers a comprehensive ticketing solution that empowers teams to manage support requests efficiently through multi-account architecture, intelligent routing, and real-time collaboration.
      </p>
      <Link href="/contact-us">
  <button
    className="
      mt-6
      px-6 py-3
      rounded-md
      bg-red-500 text-white text-sm font-medium
      hover:bg-red-400 transition
      mb-10 md:mb-0
    "
  >
    Contact Us →
  </button>
</Link>

    </div>

    {/* RIGHT: Video 
    <div className="flex md:justify-end pb-10 md:pb-0">
      <div className="w-full max-w-md">
        <div className="aspect-video rounded-xl overflow-hidden border border-white/10 shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Product Overview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
    */}

  </div>
</section>





      {/* OVERVIEW - Text Left, Image Right */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">Platform Overview</span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Built for Enterprise-Scale Support Operations
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Conzura Groups provides a powerful ticketing platform designed for organizations managing complex support structures. Create isolated accounts for different departments or clients, organize teams with granular permissions, and track every support request from creation to resolution.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              With comprehensive dashboards, real-time analytics, and intelligent workflow automation, your support teams can deliver exceptional service while maintaining complete visibility and control across your entire organization.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <Building2 className="w-8 h-8 text-red-600 mb-2" />
                <h4 className="font-semibold mb-1">Multi-Account</h4>
                <p className="text-sm text-gray-600">Isolated environments for departments</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <Users className="w-8 h-8 text-red-600 mb-2" />
                <h4 className="font-semibold mb-1">Team Structure</h4>
                <p className="text-sm text-gray-600">Flexible role-based organization</p>
              </div>
            </div>
          </div>
          
          <SlideIn direction="right">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200">
              <Image 
                src="/ticket/dashboard.png" 
                width={900} 
                height={600} 
                className="w-full h-auto" 
                alt="Conzura Dashboard showing ticket analytics and metrics"
              />
            </div>
          </SlideIn>
        </div>
      </section>

      {/* TICKET MANAGEMENT - Image Left, Text Right */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideIn direction="left">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200">
              <Image 
                src="/ticket/ticket.png" 
                width={900} 
                height={600} 
                className="w-full h-auto" 
                alt="Ticket management interface showing active support tickets"
              />
            </div>
          </SlideIn>
          
          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">Ticket Management</span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Track Every Request with Precision
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              The ticket management system provides complete visibility into all support requests. View ticket status, assigned agents, customer groups, due dates, and update timestamps in a clean, organized interface. Filter and search through tickets effortlessly to find exactly what you need.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Real-Time Status Tracking</h4>
                  <p className="text-sm text-gray-600">Monitor ticket progress with instant updates and status indicators</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Smart Assignment</h4>
                  <p className="text-sm text-gray-600">Automatically route tickets to the right agents based on group and team structure</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Priority Management</h4>
                  <p className="text-sm text-gray-600">Set priorities and due dates to ensure critical issues are handled first</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM & ORGANIZATION - Text Left, Image Right */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">Team Organization</span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Build Flexible Team Structures
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Create and manage teams across your organization with complete flexibility. From HR & Recruiting to IT Development, Software Development to Sales & Marketing, organize your workforce into logical units with clear responsibilities and member assignments.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Each team can have its own members, permissions, and workflows. The visual interface shows team composition at a glance, making it easy to understand your organizational structure and quickly add or remove team members as needed.
            </p>
          </div>
          
          <SlideIn direction="right">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200">
              <Image 
                src="/ticket/teams.png" 
                width={900} 
                height={600} 
                className="w-full h-auto" 
                alt="Team management showing multiple departments and team members"
              />
            </div>
          </SlideIn>
        </div>
      </section>

      {/* DEPARTMENTS - Image Left, Text Right */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideIn direction="left">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200">
              <Image 
                src="/ticket/Depertment.png" 
                width={900} 
                height={600} 
                className="w-full h-auto" 
                alt="Department hierarchy showing teams and groups structure"
              />
            </div>
          </SlideIn>
          
          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">Department Structure</span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Hierarchical Organization at Scale
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Departments provide a higher-level organizational structure that groups related teams and customer groups together. Create departments like Business Administration, Support, or Technology & Operations, and associate multiple teams with each department for comprehensive organizational hierarchy.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              This hierarchical structure enables sophisticated routing rules, reporting by department, and clear accountability across your entire support organization.
            </p>
          </div>
        </div>
      </section>

      {/* PERMISSIONS & ROLES - Text Left, Image Right */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">Access Control</span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Granular Permission Management
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Define roles like Admin, Support Agent, User, Sales, and HR with precise permission controls. Configure who can create, view, update, or delete tickets. Enable role hierarchy to allow managers to oversee resources owned by team members beneath them.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The permission system ensures data security and compliance by restricting access based on user roles, while the toggle-based interface makes it simple to configure complex permission structures without confusion.
            </p>
          </div>
          
          <SlideIn direction="right">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200">
              <Image 
                src="/ticket/role-per.png" 
                width={900} 
                height={600} 
                className="w-full h-auto" 
                alt="Role permissions showing granular access control settings"
              />
            </div>
          </SlideIn>
        </div>
      </section>

      {/* CUSTOMER MANAGEMENT - Image Left, Text Right */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideIn direction="left">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200">
              <Image 
                src="/ticket/Ticket-Cus.png" 
                width={900} 
                height={600} 
                className="w-full h-auto" 
                alt="Customer profiles showing contact details and group assignments"
              />
            </div>
          </SlideIn>
          
          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">Customer Management</span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Organized Customer Profiles
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Manage customer information with detailed profiles including roles, email addresses, and group memberships. Organize customers into groups like Default Group or IT Services for efficient ticket routing and team assignment.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The visual card-based interface makes it easy to browse customers, understand their group associations, and quickly access their ticket history and support interactions.
            </p>
          </div>
        </div>
      </section>

      {/* COMMUNICATION - Text Left, Image Right */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">Real-Time Communication</span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Built-In Conversation System
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Every ticket includes an integrated conversation thread, allowing seamless communication between support agents and customers. Track conversation history, see message timestamps, and maintain complete context for every support interaction.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The conversation system ensures nothing gets lost, provides full audit trails, and keeps all communication organized within the relevant ticket context.
            </p>
          </div>
          
          <SlideIn direction="right">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200">
              <Image 
                src="/ticket/converstion.png" 
                width={900} 
                height={600} 
                className="w-full h-auto" 
                alt="Conversation interface showing message threads between agents and customers"
              />
            </div>
          </SlideIn>
        </div>
      </section>

      {/* SETTINGS & CONFIGURATION - Image Left, Text Right */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideIn direction="left">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200">
              <Image 
                src="/ticket/Gen-Setting.png" 
                width={900} 
                height={600} 
                className="w-full h-auto" 
                alt="General settings page showing site configuration options"
              />
            </div>
          </SlideIn>
          
          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">Configuration</span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Comprehensive System Settings
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Configure your platform with granular control over site title, URLs, server timezone, and date/time formats. Manage ticket types, priorities with SLA overrides, appearance settings, permissions, and backup/restore operations all from a centralized settings interface.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The settings system provides administrators with complete control over platform behavior, ensuring the ticketing system adapts perfectly to your organizational requirements.
            </p>
          </div>
        </div>
      </section>

      {/* KEY FEATURES GRID */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Complete Feature Set</h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Everything you need to run enterprise-grade support operations
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureCard 
            icon={<Ticket className="w-6 h-6 text-red-600" />}
            title="Ticket Types & Priorities"
            description="Configure custom ticket types (Issue, Task) with priority levels (Normal, Urgent, Critical) and SLA overrides"
          />
          <FeatureCard 
            icon={<Users className="w-6 h-6 text-red-600" />}
            title="Customer Groups"
            description="Organize customers into groups like Default Group and IT Services for efficient routing"
          />
          <FeatureCard 
            icon={<Building2 className="w-6 h-6 text-red-600" />}
            title="Multi-Tenant Architecture"
            description="Create isolated accounts with independent teams, groups, and workflows"
          />
          <FeatureCard 
            icon={<Shield className="w-6 h-6 text-red-600" />}
            title="Role-Based Access Control"
            description="Define admin, agent, and user roles with granular permission management"
          />
          <FeatureCard 
            icon={<BarChart3 className="w-6 h-6 text-red-600" />}
            title="Analytics Dashboard"
            description="Track total tickets, completion rates, average response times, and ticket breakdowns"
          />
          <FeatureCard 
            icon={<FileText className="w-6 h-6 text-red-600" />}
            title="Report Generation"
            description="Generate reports by groups, priorities, status, tags, types, and assignees"
          />
          <FeatureCard 
            icon={<MessageSquare className="w-6 h-6 text-red-600" />}
            title="Notice System"
            description="Create and manage system-wide notices for users and teams"
          />
          <FeatureCard 
            icon={<Settings className="w-6 h-6 text-red-600" />}
            title="Backup & Restore"
            description="Complete backup of database, attachments, and assets with easy restoration"
          />
          <FeatureCard 
            icon={<Zap className="w-6 h-6 text-red-600" />}
            title="Elasticsearch Integration"
            description="Optional Elasticsearch support for advanced search and indexing capabilities"
          />
        </div>
      </section>
      <Footer />

      
    </main>
  );
}



function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}