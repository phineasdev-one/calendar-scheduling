"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-6 py-12 max-w-lg mx-auto">
        <h1 className="text-6xl font-bold text-indigo-500 mb-6">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mb-4">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <p className="text-gray-600 mb-8">
          It looks like the page has been moved, deleted, or never existed.
        </p>
        <Button
          size="lg"
          className="bg-indigo-500 text-white font-semibold px-8 py-3"
          onClick={() => (window.location.href = "/")} // Redirect to homepage
        >
          Go Back to Home
        </Button>
      </div>
    </div>
  );
}
