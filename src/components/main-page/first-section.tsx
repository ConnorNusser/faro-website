'use client';
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { 
  Video,
  Timer,
  Calendar,
  LucideIcon,
  Map,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  subtext?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ icon: Icon, label, value, subtext }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex items-center gap-3"
  >
    <div className="p-2 bg-white/10 rounded-lg">
      <Icon className="w-5 h-5 text-white" />
    </div>
    <div>
      <div className="text-2xl font-bold text-white font-[var(--font-dm-serif)]">{value}</div>
      <div className="text-sm text-white/80">{label}</div>
      {subtext && <div className="text-xs text-white/60 mt-1">{subtext}</div>}
    </div>
  </motion.div>
);

const DemoButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <motion.a 
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#082832] rounded-lg hover:bg-white/90 transition-colors font-medium cursor-pointer"
  >
    <Calendar className="w-4 h-4" />
    Schedule Demo
  </motion.a>
);

const HeroSection: React.FC = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Add form submission logic here
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    
    setIsSubmitting(false);
    setShowDemoForm(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full relative"
    >
      <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-[var(--font-dm-serif)]">
              From video footage to{' '}
              <span className="text-cyan-400">cad designs</span>{' '}
              in minutes
            </h1>
            
            <p className="text-lg text-white/80">
              Argos is revolutionizing traffic engineering by automatically converting traffic camera footage into detailed strip maps, eliminating hundreds hours of manual work.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {!showDemoForm ? (
              <motion.div
                key="metrics"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <Card className="p-6 bg-white/5 backdrop-blur-sm border-white/10">
                  <div className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <MetricCard 
                        icon={Timer}
                        value="95%"
                        label="Time Savings"
                        subtext="Potential reduction in processing time"
                      />
                      <MetricCard 
                        icon={Video}
                        value="∞"
                        label="Video Processing"
                        subtext="Support for any traffic footage"
                      />
                      <MetricCard 
                        icon={Map}
                        value="1-Click"
                        label="Cad Design Generation"
                        subtext="Fully automated process"
                      />
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                      <div className="text-sm text-white/80">
                        Be among the first to transform your traffic analysis workflow
                      </div>
                      <DemoButton onClick={() => setShowDemoForm(true)} />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <Card className="p-6 bg-white/5 backdrop-blur-sm border-white/10">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-[var(--font-dm-serif)] text-white">Schedule a Demo</h2>
                    <button
                      onClick={() => setShowDemoForm(false)}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Work Email"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Company"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                      />
                    </div>
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-cyan-400 hover:bg-cyan-500 text-[#082832] font-medium disabled:opacity-50"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Request"}
                    </Button>
                  </form>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </motion.div>
  );
}

export default HeroSection;