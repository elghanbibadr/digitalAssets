"use client"
import { useState } from 'react';
import { Crown, Mail, Lock, Eye, EyeOff } from 'lucide-react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = () => {
    // Handle sign in logic here
    console.log('Sign in:', { email, password });
  };

  const handleSignUp = () => {
    // Handle sign up navigation/logic here
    console.log('Navigate to sign up');
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    console.log('Forgot password');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        {/* Crown Icon */}
        <div className="flex justify-center mb-8">
          <div className="bg-yellow-500 rounded-2xl p-4">
            <Crown className="h-8 w-8 text-gray-900" />
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome back
          </h1>
          <p className="text-gray-600">
            Sign in to your DigitalEstates account
          </p>
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label className="flex items-center gap-2 text-gray-900 font-medium mb-2">
            <Mail className="h-4 w-4" />
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label className="flex items-center gap-2 text-gray-900 font-medium mb-2">
            <Lock className="h-4 w-4" />
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Sign In Button */}
        <button
          onClick={handleSignIn}
          className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 mb-6"
        >
          Sign In
        </button>

        {/* Sign Up Link */}
        <div className="text-center text-gray-600 mb-4">
          Don't have an account?{' '}
          <button
            onClick={handleSignUp}
            className="text-gray-900 font-medium hover:underline"
          >
            Sign up
          </button>
        </div>

        {/* Forgot Password Link */}
        <div className="text-center">
          <button
            onClick={handleForgotPassword}
            className="text-gray-600 hover:text-gray-900 hover:underline"
          >
            Forgot your password?
          </button>
        </div>
      </div>
    </div>
  );
}