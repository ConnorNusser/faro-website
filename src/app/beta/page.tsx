'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Download,
  Rocket,
  CheckCircle2,
  Zap,
  Shield,
  Smartphone,
  Puzzle,
  Brain,
  LucideIcon } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

interface FeatureStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureStep: React.FC<FeatureStepProps> = ({ icon: Icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="flex items-start gap-3 group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ x: 10 }}
    >
      <motion.div 
        className="p-2 bg-[#5D44C8]/10 rounded-lg mt-1"
        animate={{ scale: isHovered ? 1.1 : 1 }}
      >
        <Icon className="w-4 h-4 text-[#5D44C8]" />
      </motion.div>
      <div>
        <div className="font-medium text-[#18181B] group-hover:text-[#5D44C8] transition-colors">
          {title}
        </div>
        <div className="text-sm text-[#18181B]/70">{description}</div>
      </div>
    </motion.div>
  );
};

interface BenefitItemProps {
  children: React.ReactNode;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ children }) => (
  <motion.div 
    className="flex items-center gap-3"
    whileHover={{ x: 5 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <CheckCircle2 className="w-5 h-5 text-[#5D44C8]" />
    <span className="text-[#18181B]/70 hover:text-[#18181B] transition-colors">
      {children}
    </span>
  </motion.div>
);

interface TimelineCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ icon: Icon, title, description, delay }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.3 }}
        viewport={{ once: true }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <Card className="p-6 bg-white/50 backdrop-blur-sm border-[#60A5FA]/20 hover:shadow-md transition-all duration-300">
          <motion.div 
            className="space-y-4"
            animate={{ 
              scale: isHovered ? 1.01 : 1,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
          >
            <motion.div 
              className="p-2 bg-gradient-to-r from-[#5D44C8]/10 to-[#60A5FA]/10 rounded-lg w-fit"
            >
              <Icon className="w-6 h-6 text-[#60A5FA]" />
            </motion.div>
            <h3 className="font-bold text-[#18181B]">{title}</h3>
            <p className="text-sm text-[#18181B]/70">{description}</p>
          </motion.div>
        </Card>
      </motion.div>
    );
  };

interface StatisticProps {
  value: string;
  label: string;
}

const Statistic: React.FC<StatisticProps> = ({ value, label }) => (
  <motion.div 
    className="text-center space-y-1"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <div className="text-2xl font-bold bg-gradient-to-r from-[#5D44C8] to-[#60A5FA] bg-clip-text text-transparent">
      {value}
    </div>
    <div className="text-sm text-[#18181B]/70">{label}</div>
  </motion.div>
);

const BetaPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5D44C8]/5 via-[#60A5FA]/5 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div 
          className="text-center space-y-6 mb-6 mt-6"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          <motion.div variants={fadeInUp}>
            <Badge className="bg-[#5D44C8]/10 text-[#5D44C8] hover:bg-[#5D44C8]/20">
              Beta Program
            </Badge>
          </motion.div>
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-[#18181B]"
          >
            Join the Future of Gym Community Engagement
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-[#18181B]/70 max-w-2xl mx-auto"
          >
            Get early access to innovative features and shape the future of our platform. Start immediately - no approval needed.
          </motion.p>
        </motion.div>

        {/* Quick Start Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 bg-white/50 backdrop-blur-sm border-[#60A5FA]/20 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#18181B]">
                  Get Started in Minutes
                </h2>
                <div className="space-y-4">
                  <FeatureStep
                    icon={Smartphone}
                    title="1. Download the App"
                    description="Available on iOS and Android"
                  />
                  <FeatureStep
                    icon={Shield}
                    title="2. Register Your Gym"
                    description="Quick verification process"
                  />
                  <FeatureStep
                    icon={Rocket}
                    title="3. Start Using Features"
                    description="Instant access to all beta features"
                  />
                </div>
                <motion.div whileHover={{ scale: 1.02 }}>
                <Link href="https://apps.apple.com/us/app/gradient-connect/id6464495135">
                  <Button 
                    className="bg-[#60A5FA] hover:bg-[#60A5FA]/90 text-white group"
                    size="lg"
                  >
                    Download Now
                    <Download className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                  </Link>
                </motion.div>
              </div>
              
              <div className="bg-gradient-to-r from-[#5D44C8]/5 to-[#60A5FA]/5 p-6 rounded-xl">
                <h3 className="font-medium text-[#18181B] mb-4">Beta Benefits</h3>
                <div className="space-y-4">
                  <BenefitItem>Lifetime access to premium features</BenefitItem>
                  <BenefitItem>Priority support and feature requests</BenefitItem>
                  <BenefitItem>Early access to new features</BenefitItem>
                  <BenefitItem>Influence product development</BenefitItem>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#5D44C8]/10">
                  <Statistic value="24/7" label="Support" />
                  <Statistic value="1000" label="Members per gym" />
                  <Statistic value="3" label="Locations included" />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Timeline Section */}
        <div className="space-y-8">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-[#18181B] text-center"
          >
            Beta Program Timeline
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            <TimelineCard
              icon={Zap}
              title="Phase 1: Initial Access"
              description="Get immediate access to core features including member management, workout sharing, and community feed."
              delay={0.2}
            />
            <TimelineCard
              icon={Puzzle}
              title="Phase 2: Enhanced Features"
              description="Access to advanced analytics, custom branding, and integrated payment processing."
              delay={0.4}
            />
            <TimelineCard
              icon={Brain}
              title="Phase 3: Full Platform"
              description="Complete platform access with AI-powered insights and advanced automation tools."
              delay={0.6}
            />
          </div>
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 bg-gradient-to-br from-[#5D44C8] to-[#60A5FA] text-white mt-16">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Want to learn more?</h3>
                <p className="text-white/80">
                  Join leading gyms using our platform to build stronger communities.
                </p>
              </div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button 
                  size="lg" 
                  className="bg-white text-[#5D44C8] hover:bg-white/90 group"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSczypOvIbmy-p-p1HVZRwsMGgRILINdbRjObvXRKN1x--xGKA/viewform', '_blank', 'noopener noreferrer')}
                >
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </Card>
        </motion.div>

        {/* FAQ Notice */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link 
            href="#faq"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#60A5FA]/10 text-sm text-[#60A5FA] hover:bg-[#60A5FA]/20 transition-colors group"
          >
            Have questions? Check our FAQ section
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default BetaPage;