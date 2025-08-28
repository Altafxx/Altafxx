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
  social?: { name: string; show: boolean; link: string[] }[];
}


function getSocialIcon(name: string) {
  switch (name.toLowerCase()) {
    case 'linkedin':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    case 'github':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      )
    case 'website':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      )
    case 'email':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      )
    default:
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
      )
  }
}

function getHoverColor(name: string) {
  switch (name.toLowerCase()) {
    case 'linkedin':
      return 'hover:text-blue-400'
    case 'github':
      return 'hover:text-gray-300'
    case 'website':
      return 'hover:text-green-400'
    case 'email':
      return 'hover:text-red-400'
    default:
      return 'hover:text-cyan-400'
  }
}

export default function PersonalInfoCard({ name, position, location, social }: PersonalInfoCardProps) {
  return (
    <Card className="h-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-slate-700/50 backdrop-blur-sm overflow-visible">
      <div className="relative h-full flex flex-col justify-center items-center p-6 text-center">
        {/* Avatar */}
        {/* <div className="mb-6">
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
        </div> */}

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

          {social && social.filter(item => item.show).length > 0 && (
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              {social.filter(item => item.show).map((item, index) => (
                <a
                  key={index}
                  href={item.link.join('')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white/70 ${getHoverColor(item.name)} transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-slate-700/30`}
                  title={item.name}
                >
                  {getSocialIcon(item.name)}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-xl"></div>
      </div>
    </Card>
  )
}
