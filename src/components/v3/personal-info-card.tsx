"use client"
import React from 'react'
import { Card } from "@/components/ui/card"
import Image from 'next/image'

interface PersonalInfoCardProps {
  name: {
    first: string;
    last: string;
  };
  position: string;
  location: {
    city: string;
    country: string;
  };
}

export default function PersonalInfoCard({ name, position, location }: PersonalInfoCardProps) {
  return (
    <Card className="h-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-slate-700/50 backdrop-blur-sm overflow-hidden">
      <div className="h-full flex flex-col justify-center items-center p-6 text-center">
        {/* Avatar */}
        <div className="mb-6">
          <div className="relative">
            <Image
              src="/images/MCSkin.png"
              height={120}
              width={120}
              alt="Avatar"
              className="rounded-full border-4 border-slate-600/50 shadow-lg"
            />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-slate-800"></div>
          </div>
        </div>

        {/* Name and Title */}
        <div className="space-y-3">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            {name.first} {name.last}
          </h1>
          
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-200 rounded-full text-sm font-medium border border-purple-500/30">
            {position}
          </div>
          
          <div className="flex items-center justify-center gap-2 text-white/70 text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {location.city}, {location.country}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-xl"></div>
      </div>
    </Card>
  )
}
