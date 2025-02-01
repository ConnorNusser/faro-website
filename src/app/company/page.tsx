'use client';

import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Linkedin, Instagram, Video, Box, CodeSquare } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const TimelineEvent = ({ date, title, description, delay }: any) => (
  <motion.div 
    className="relative pl-8 pb-8 border-l border-cyan-400/20 last:border-0"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
  >
    <div className="absolute left-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400/20 flex items-center justify-center">
      <div className="w-2 h-2 rounded-full bg-cyan-400" />
    </div>
    <div className="space-y-2">
      <Badge variant="outline" className="text-sm font-medium text-cyan-400 border-cyan-400/20">
        {date}
      </Badge>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  </motion.div>
);

const MissionSection = () => (
  <motion.div 
    className="max-w-4xl mx-auto text-center space-y-6"
    initial="initial"
    animate="animate"
    variants={{
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
    }}
  >
    <motion.div variants={fadeIn}>
      <Badge className="bg-cyan-400/10 text-cyan-400">Our Mission</Badge>
    </motion.div>
    <motion.h1 
      variants={fadeIn}
      className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
    >
      Transforming Video Footage into Precise CAD Models
    </motion.h1>
    <motion.p 
      variants={fadeIn}
      className="text-xl text-white/70 max-w-2xl mx-auto"
    >
      We're revolutionizing the engineering workflow by automatically converting video captures into accurate, workable CAD designs, saving countless hours in the design process.
    </motion.p>
  </motion.div>
);

const FoundersMessage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <Card className="max-w-4xl mx-auto p-12 bg-[#061820] bg-opacity-95 border-white/10 shadow-xl">
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <Badge 
            variant="outline" 
            className="border-cyan-400 text-cyan-400 font-medium px-4 py-1"
          >
            From the Founders
          </Badge>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-400/20 to-transparent" />
        </div>

        <div className="space-y-6 text-lg leading-relaxed">
          <p className="text-white font-medium">Dear Faro Community,</p>
          <p className="text-white/80">
            We've seen firsthand how <span className="text-cyan-400 font-medium">traditional CAD modeling processes</span> can bottleneck engineering projects. The manual conversion of real-world objects into CAD models has long been a time-consuming and error-prone process.
          </p>
          <p className="text-white/80">
            Faro was born from this challenge - a platform that <span className="text-cyan-400 font-medium">automates the conversion</span> of video footage into precise CAD models, revolutionizing how engineers and designers work. Our AI-powered solution doesn't just save time - it opens up new possibilities for <span className="text-cyan-400 font-medium">rapid prototyping and iterative design</span>.
          </p>
          <div className="pt-4 border-t border-cyan-400/10">
            <p className="text-white/80">Building the Future of Design,<br /></p>
            <p className="font-semibold text-white bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Connor & Oz
            </p>
          </div>
        </div>
      </div>
    </Card>
  </motion.div>
);

const TimelineSection = () => (
  <div className="max-w-3xl mx-auto">
    <motion.div 
      className="text-center space-y-4 mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold text-white">Our Journey</h2>
      <p className="text-white/70">From concept to innovation</p>
    </motion.div>
    
    <div className="relative">
      <TimelineEvent
        date="Q4 2023"
        title="The Innovation"
        description="Faro emerged from the need to streamline the video-to-CAD conversion process in engineering workflows."
        delay={0.2}
      />
      <TimelineEvent
        date="Q1 2024"
        title="Technology Development"
        description="Developed our core AI technology for accurate video-to-CAD conversion with advanced feature recognition."
        delay={0.4}
      />
      <TimelineEvent
        date="Q2 2024"
        title="Beta Launch"
        description="Released our beta platform to select engineering firms and manufacturing partners."
        delay={0.6}
      />
      <TimelineEvent
        date="Q3 2024"
        title="Industry Recognition"
        description="Achieved breakthrough results in conversion accuracy and processing speed."
        delay={0.8}
      />
    </div>
  </div>
);

const ContactSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <Card className="max-w-3xl mx-auto p-12 bg-[#061820] bg-opacity-95 border-white/10 shadow-xl">
      <div className="text-center space-y-8">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Connect With Us
        </h2>
        <p className="text-lg text-white/80 leading-relaxed max-w-xl mx-auto">
          Interested in transforming your engineering workflow? Reach out at{' '}
          <a 
            href="mailto:oz@faro.ai"
            className="text-cyan-400 hover:text-cyan-300 font-semibold relative inline-block group"
          >
            oz@faro.ai
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </a>
        </p>
        
        <motion.div 
          className="flex justify-center gap-6 pt-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Button 
            size="lg"
            variant="ghost"
            className="hover:bg-cyan-400/10 hover:text-cyan-400 text-white group px-8"
            onClick={() => window.open('https://www.linkedin.com/company/faro-ai/', '_blank')}
          >
            <Linkedin className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-medium">LinkedIn</span>
          </Button>
        </motion.div>
      </div>
    </Card>
  </motion.div>
);

export default function CompanyPage() {
  return (
    <div className="w-full bg-[#082832] min-h-screen bg-opacity-90">
      <div className="max-w-6xl mx-auto px-4 py-20 space-y-20">
        <MissionSection />
        {/* <FoundersMessage /> */}
        <TimelineSection />
        <ContactSection />
      </div>
    </div>
  );
}