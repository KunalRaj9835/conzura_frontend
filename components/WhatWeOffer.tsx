"use client";

import OfferCard from "./OfferCard";
import AnimationFadeUp from "@/components/AnimationFadeUp";
export default function WhatWeOffer() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* Heading */}
      <div className="text-center mb-14">
        <AnimationFadeUp>
          <h2 className="text-3xl font-bold text-[#0e355d]">
            Technology Expertise
          </h2>
        </AnimationFadeUp>

        <AnimationFadeUp>
          <div className="h-1 w-20 bg-red-400 mx-auto mt-3 rounded-full"></div>
        </AnimationFadeUp>
      </div>

      {/* GRID — ONLY 6 CARDS */}
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-10
        "
      >

        <AnimationFadeUp>
          <OfferCard
            icon="tech/cloud.svg"
            title="Cloud & Analytics"
            description="AWS, Azure, GCP, BigQuery, Snowflake, Power BI, Tableau, Looker & BI ecosystem."
            href="/tech/cloud-analytics"
          />
        </AnimationFadeUp>

        <AnimationFadeUp>
          <OfferCard
            icon="tech/framework.png"
            title="Frameworks"
            description="Spring Boot, Kafka, Microservices and high-performance backend architectures."
            href="/tech/frameworks"
          />
        </AnimationFadeUp>

        <AnimationFadeUp>
          <OfferCard
            icon="tech/infrastructure.png"
            title="Infrastructure"
            description="RedHat, SUSE, Ubuntu Linux and enterprise-grade infrastructure ecosystems."
            href="/tech/infrastructure"
          />
        </AnimationFadeUp>

        <AnimationFadeUp>
          <OfferCard
            icon="tech/orchestration.png"
            title="Orchestration Platforms"
            description="Apache Spark, Airflow — automation, data pipelines, workflow scheduling."
            href="/tech/orchestration"
          />
        </AnimationFadeUp>

        <AnimationFadeUp>
          <OfferCard
            icon="tech/backend.png"
            title="Backend Engineering"
            description="Java, .NET, Python — scalable and reliable application development."
            href="/tech/backend-engineering"
          />
        </AnimationFadeUp>

        <AnimationFadeUp>
          <OfferCard
            icon="tech/database.svg"
            title="Storage & Databases"
            description="Oracle, MySQL, PostgreSQL, SQL Server — secure on-premise & hybrid data storage."
            href="/tech/storage-databases"
          />
        </AnimationFadeUp>

      </div>
    </section>
  );
}
