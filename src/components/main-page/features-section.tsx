'use client'
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Dumbbell, 
  LineChart, 
  Users, 
  ArrowUpRight, 
  Trophy,
  Target,
  LucideIcon
} from "lucide-react";

interface Stats {
  label: string;
  value: string;
}

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  stats?: Stats;
}

interface Feature extends FeatureCardProps {
  icon: LucideIcon;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, stats, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className={`relative p-6 transition-all duration-300 border border-gray-100 hover:border-${color}/20 group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-${color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      <div className="relative space-y-4">
        <div className={`w-12 h-12 rounded-lg bg-${color}/10 flex items-center justify-center`}>
          <Icon className={`w-6 h-6 text-${color}`} />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#18181B] mb-2 flex items-center gap-2">
            {title}
            <ArrowUpRight 
              className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1 -translate-y-1' : ''}`}
            />
          </h3>
          <p className="text-[#18181B]/70">{description}</p>
        </div>

        {stats && (
          <div className="pt-4 mt-4 border-t border-gray-100">
            <div className="flex justify-between items-center">
              <div className="text-sm text-[#18181B]/70">{stats.label}</div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className={`bg-${color}/10 text-${color} hover:bg-${color}/20`}>
                  {stats.value}
                </Badge>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

const ModernFeatures: React.FC = () => {
  const features: Feature[] = [
    {
      icon: Dumbbell,
      title: "Easy to use workout plans",
      description: "Workout routines from all over the planet. Learn what your friends are doing and your communtiy.",
      color: "[#5D44C8]",
      stats: {
        label: "Workout Plans Created",
        value: "632"
      }
    },
    {
      icon: Target,
      title: "Media Content posting",
      description: "Share posts of you working out, to connect, get advice, and improve",
      color: "[#60A5FA]",
    },
    {
      icon: LineChart,
      title: "Leaderboards for everything",
      description: "Comprehensive leaderboard system to keep you motivated and you keep you competitive.",
      color: "[#5D44C8]",
      stats: {
        label: "Data Points",
        value: "1350"
      }
    },
    {
      icon: Trophy,
      title: "Measure Progress",
      description: "Staying motivated is easier when you can see how far you've come.",
      color: "[#60A5FA]",
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50/50" id='smart-features'>
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="space-y-16">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <Badge 
              className="bg-[#5D44C8]/10 text-[#5D44C8] hover:bg-[#5D44C8]/20"
            >
              Smart Features
            </Badge>
            
            <h2 className="text-4xl font-bold tracking-tight text-[#18181B]">
              Train Better, Log workouts, Stay Motivated
            </h2>
            
            <p className="text-lg text-[#18181B]/70">
              An all encompassing platform to keep you engaged in your workouts and keep connected with your community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>

          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#60A5FA]/10 text-sm text-[#60A5FA]">
              <Users className="w-4 h-4" />
              30% User Growth Month over Month
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModernFeatures;