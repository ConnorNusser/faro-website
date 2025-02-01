'use client';

import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Linkedin, Instagram } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};


const TimelineEvent = ({ date, title, description, delay }: any) => (
  <motion.div 
    className="relative pl-8 pb-8 border-l border-[#5D44C8]/20 last:border-0"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
  >
    <div className="absolute left-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#5D44C8]/20 flex items-center justify-center">
      <div className="w-2 h-2 rounded-full bg-[#5D44C8]" />
    </div>
    <div className="space-y-2">
      <Badge variant="outline" className="text-sm font-medium text-[#5D44C8]">
        {date}
      </Badge>
      <h3 className="text-lg font-semibold text-[#18181B]">{title}</h3>
      <p className="text-[#18181B]/70">{description}</p>
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
      <Badge className="bg-[#5D44C8]/10 text-[#5D44C8]">Our Mission</Badge>
    </motion.div>
    <motion.h1 
      variants={fadeIn}
      className="text-4xl sm:text-5xl font-bold tracking-tight text-[#18181B]"
    >
      Building the future of gym communities
    </motion.h1>
    <motion.p 
      variants={fadeIn}
      className="text-xl text-[#18181B]/70 max-w-2xl mx-auto"
    >
      We're on a mission to transform how gym communities connect, engage, and grow together. No more awkward interactions or missed connections.
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
    <Card className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-white via-[#5D44C8]/2 to-transparent">
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <Badge 
            variant="outline" 
            className="border-[#5D44C8] text-[#5D44C8] font-medium px-4 py-1"
          >
            From the Founders
          </Badge>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#5D44C8]/20 to-transparent" />
        </div>

        <div className="space-y-6 text-lg leading-relaxed">
          <p className="text-[#18181B] font-medium">Dear Gradient Community,</p>
          <p className="text-[#18181B]/80">
            For years, we've grappled with the challenge of <span className="text-[#5D44C8] font-medium">connecting with others at the gym</span> without the awkwardness of interrupting their workouts. We saw a community eager to connect but lacking the right platform to do so.
          </p>
          <p className="text-[#18181B]/80">
            Gradient was born from this need - a platform that not only <span className="text-[#5D44C8] font-medium">eliminates the anxiety</span> of approaching strangers but actively <span className="text-[#5D44C8] font-medium">fosters meaningful connections</span> within the gym community.
          </p>
          <div className="pt-4 border-t border-[#5D44C8]/10">
            <p>In Good Health,<br /></p>
            <p className="font-semibold text-[#18181B] bg-gradient-to-r from-[#5D44C8] to-[#60A5FA] bg-clip-text text-transparent">
            Christian, Sharatt, Connor, Kinan & Caroline
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
      <h2 className="text-2xl font-bold text-[#18181B]">Our Journey</h2>
      <p className="text-[#18181B]/70">From idea to reality</p>
    </motion.div>
    
    <div className="relative">
      <TimelineEvent
        date="October 2023"
        title="The Idea"
        description="Gradient was conceived from personal experiences and the need for better gym community connections."
        delay={0.2}
      />
      <TimelineEvent
        date="December 2023"
        title="Development Begins"
        description="Started building the first version of Gradient with a focus on community features."
        delay={0.4}
      />
      <TimelineEvent
        date="February 2024"
        title="Beta Launch"
        description="Released our beta version to select partner gyms in Texas and Virginia."
        delay={0.6}
      />
      <TimelineEvent
        date="March 2024"
        title="First 1000 Users"
        description="Reached our first milestone of 1000 active users across partner gyms."
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
    <Card className="max-w-3xl mx-auto p-12 bg-gradient-to-br from-[#5D44C8]/5 via-[#5D44C8]/2 to-transparent border-none shadow-lg">
      <div className="text-center space-y-8">
        <h2 className="text-3xl font-bold tracking-tight text-[#18181B]">
          Connect With Us
        </h2>
        <p className="text-lg text-[#18181B]/80 leading-relaxed max-w-xl mx-auto">
          Have questions or want to join the Gradient community? Reach out at{' '}
          <a 
            href="mailto:christian@gradientapp.net"
            className="text-[#5D44C8] hover:text-[#5D44C8]/80 font-semibold relative inline-block group"
          >
            christian@gradientapp.net
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#5D44C8]/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
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
            className="hover:bg-[#5D44C8]/10 hover:text-[#5D44C8] group px-8"
            onClick={() => window.open('https://www.instagram.com/gradientconnect/', '_blank')}
          >
            <Instagram className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-medium">Instagram</span>
          </Button>
          <Button 
            size="lg"
            variant="ghost"
            className="hover:bg-[#5D44C8]/10 hover:text-[#5D44C8] group px-8"
            onClick={() => window.open('https://www.linkedin.com/company/gradient-connect/', '_blank')}
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
    <div className="w-full bg-gradient-to-b from-[#5D44C8]/5 to-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-20 space-y-20">
        <MissionSection />
        <FoundersMessage />
        <TimelineSection />
        <ContactSection />
      </div>
    </div>
  );
}