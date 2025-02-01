'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Box, ArrowRight } from "lucide-react";
import { useRouter } from 'next/navigation';
import { Alert, AlertDescription } from "@/components/ui/alert";

const SignupPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);

      const response = await fetch('api/auth/sign-up', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      // Show success message and redirect
      router.push('/login?message=Check your email to confirm your account');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#082832] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        {/* Left side - Signup Form */}
        <Card className="w-full max-w-md mx-auto bg-white/5 backdrop-blur-lg border-white/10">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl font-bold text-white">
              Create an account
            </CardTitle>
            <CardDescription className="text-gray-400">
              Sign up to start converting videos to CAD designs
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
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-white">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-white/10 border-white/10 text-white"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Sign up"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
          <CardFooter className="justify-center">
            <p className="text-sm text-gray-400">
              Already have an account?{' '}
              <a href="/login" className="text-cyan-400 hover:text-cyan-300">
                Sign in
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
              Join our platform and start converting your video footage into accurate CAD models ready for engineering and manufacturing.
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

export default SignupPage;