'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Box, ArrowRight } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useRouter } from 'next/navigation';
import supabaseClient from '@/app/db/client';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password,
      });

      if (error) {
        throw error;
      }

      router.push('/dashboard'); 
      router.refresh(); 
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sign in');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#082832] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        {/* Left side - Login Form */}
        <Card className="w-full max-w-md mx-auto bg-white/5 backdrop-blur-lg border-white/10">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl font-bold text-white">
              Welcome back
            </CardTitle>
            <CardDescription className="text-gray-400">
              Login to your account to continue converting videos to CAD designs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/10 text-white placeholder:text-gray-400"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white/10 border-white/10 text-white"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign in"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
          <CardFooter className="justify-center">
            <p className="text-sm text-gray-400">
              Don't have an account?{' '}
              <a href="/signup" className="text-cyan-400 hover:text-cyan-300">
                Sign up
              </a>
            </p>
          </CardFooter>
        </Card>

        {/* Right side - Features */}
        <div className="hidden md:flex flex-col space-y-8 text-white p-8">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              Transform Video Footage into Precise CAD Designs
            </h2>
            <p className="text-gray-400 text-lg">
              Upload your video footage and let our AI convert it into accurate CAD models ready for engineering and manufacturing.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-cyan-500/10 p-3 rounded-lg w-fit">
                <Video className="h-6 w-6 text-cyan-500" />
              </div>
              <h3 className="font-semibold">Video Processing</h3>
              <p className="text-gray-400">
                Advanced algorithms analyze your footage frame by frame
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-cyan-500/10 p-3 rounded-lg w-fit">
                <Box className="h-6 w-6 text-cyan-500" />
              </div>
              <h3 className="font-semibold">CAD Generation</h3>
              <p className="text-gray-400">
                Automatic conversion to industry-standard CAD formats
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;