'use client'
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Users, 
  MessageCircle, 
  Trophy,
  Heart 
} from "lucide-react";
import ScrollingLogos from '../trademark/ScrollingSponsorBar';
import Link from 'next/link';

export default function GymOwnerSalesPitch() {
  return (
    <div className="w-full">
      <div className="w-full bg-gradient-to-br from-[#5D44C8]/5 via-[#60A5FA]/5 to-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <Card className="p-8 bg-white/50 backdrop-blur-sm border-[#60A5FA]/20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <Badge className="bg-[#5D44C8]/10 text-[#5D44C8] hover:bg-[#5D44C8]/20">
                  Limited Beta Access
                </Badge>
                
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tight text-[#18181B]">
                    Transform your gym into a thriving community
                  </h2>
                  <p className="text-2xl font-semibold text-[#5D44C8]">
                    Early partners get lifetime premium features
                  </p>
                </div>
                
                <p className="text-[#18181B]/70 text-lg">
                  Build lasting relationships with your members through challenges, events, and social features that keep them engaged and coming back.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/beta" className="w-full sm:w-auto">
                      <Button 
                        className="bg-[#5D44C8] hover:bg-[#5D44C8]/90 text-white w-full"
                        size="lg"
                      >
                        Join beta program
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="#smart-features" className="w-full sm:w-auto">
                      <Button 
                        variant="outline"
                        size="lg"
                        className="border-[#60A5FA] text-[#60A5FA] hover:bg-[#60A5FA]/10 w-full"
                      >
                        View features
                      </Button>
                    </Link>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-[#5D44C8]/5 to-[#60A5FA]/5 p-6">
                <div className="space-y-6">
                  <div className="text-[#18181B]/70 font-medium">
                    Community Features
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-[#5D44C8]/10 rounded-lg mt-1">
                        <Trophy className="w-4 h-4 text-[#5D44C8]" />
                      </div>
                      <div>
                        <div className="font-medium text-[#18181B]">Share Workouts</div>
                        <div className="text-sm text-[#18181B]/70">Share and copy workouts with your friends</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-[#5D44C8]/10 rounded-lg mt-1">
                        <MessageCircle className="w-4 h-4 text-[#5D44C8]" />
                      </div>
                      <div>
                        <div className="font-medium text-[#18181B]">Community Feed</div>
                        <div className="text-sm text-[#18181B]/70">Share achievements and motivate others</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-[#5D44C8]/10 rounded-lg mt-1">
                        <Users className="w-4 h-4 text-[#5D44C8]" />
                      </div>
                      <div>
                        <div className="font-medium text-[#18181B]">Event Planning</div>
                        <div className="text-sm text-[#18181B]/70">Organize classes and social meetups</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-[#5D44C8]/10 rounded-lg mt-1">
                        <Heart className="w-4 h-4 text-[#5D44C8]" />
                      </div>
                      <div>
                        <div className="font-medium text-[#18181B]">Member Recognition</div>
                        <div className="text-sm text-[#18181B]/70">Celebrate member milestones automatically</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          {/* <div>
            <ScrollingLogos />
          </div> */}

          <div className="mt-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#60A5FA]/10 text-sm text-[#60A5FA]">
              <Users className="w-4 h-4" />
              Join growing community of forward-thinking gyms
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}