'use client'
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface JobCardProps {
  role: string;
  type: string;
  description: string;
  link: string;
}

const JobCard: React.FC<JobCardProps> = ({ role, type, description, link }) => (
  <Card className="p-6 border-[#60A5FA]/20 hover:border-[#5D44C8]/20 transition-all duration-300">
    <div className="space-y-4">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-[#18181B]">{role}</h3>
          <div className="flex gap-2">
            <Badge 
              variant="secondary" 
              className="bg-[#5D44C8]/10 text-[#5D44C8] hover:bg-[#5D44C8]/20"
            >
              {type}
            </Badge>
            <Badge 
              variant="secondary" 
              className="bg-[#60A5FA]/10 text-[#60A5FA]"
            >
              Remote
            </Badge>
          </div>
        </div>
        <Button 
          variant="ghost" 
          size="sm"
          className="text-[#5D44C8] hover:bg-[#5D44C8]/10"
          onClick={() => window.open(link, '_blank')}
        >
          Apply Now
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <p className="text-[#18181B]/70">{description}</p>
    </div>
  </Card>
);

const CareersPage: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#5D44C8]/5 to-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <Badge 
              className="bg-[#5D44C8]/10 text-[#5D44C8] hover:bg-[#5D44C8]/20"
            >
              We're Hiring
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#18181B]">
              Build the Future of Fitness Communities
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg text-[#18181B]/70">
              Join our mission to revolutionize how gyms build and engage with their communities. We're looking for passionate individuals who want to make a real impact.
            </p>
          </div>

          {/* Open Positions */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-[#18181B]">Open Positions</h2>
              <p className="text-[#18181B]/70">
                Join our growing team and help shape the future of fitness
              </p>
            </div>

            <div className="space-y-4">
              <JobCard 
                role="Software Engineer"
                type="Full-time"
                description="Work on our core platform, building features that help gyms create thriving communities. Experience with React, Node.js, and modern web technologies required."
                link="https://docs.google.com/forms/d/e/1FAIpQLSf0AYuA9SkoDiKof9YgM0NGGPlHAgIifzPNs7_B73iwF9iBaA/viewform"
              />
              <JobCard 
                role="Software Engineering Intern"
                type="Internship"
                description="Learn and contribute to real features while working alongside experienced engineers. Great opportunity for students passionate about fitness and technology."
                link="https://docs.google.com/forms/d/e/1FAIpQLSd_S6A9BkvdMzBpSJnvWViJHY0huPIOry7posUjIK0Egwb29w/viewform"
              />
            </div>
          </div>

          {/* Culture Section */}
          <Card className="p-8 bg-gradient-to-br from-[#5D44C8]/5 to-[#60A5FA]/5 border-none">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="space-y-4 flex-1">
                <h3 className="text-2xl font-bold text-[#18181B]">
                  Our Culture
                </h3>
                <p className="text-[#18181B]/70">
                  We're building a culture of innovation, collaboration, and impact. Our team is passionate about fitness, technology, and creating meaningful connections.
                </p>
                <div className="flex gap-2">
                  <Badge variant="secondary" className="bg-white/50">🌍 Remote-first</Badge>
                  <Badge variant="secondary" className="bg-white/50">🚀 Fast-paced</Badge>
                  <Badge variant="secondary" className="bg-white/50">💪 Impact-driven</Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default CareersPage;