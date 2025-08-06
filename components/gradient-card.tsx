"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Star } from 'lucide-react'
import { useState } from "react"
import { CubeLoader } from "./cube-loader"

interface GradientCardProps {
  tool: {
    name: string
    description: string
    icon: React.ReactNode
    category: string
    url: string
    color: string
    benefits: string[]
  }
  index: number
}

export function GradientCard({ tool, index }: GradientCardProps) {
  const [isLoading, setIsLoading] = useState(false)
  
  const handleVisitTool = () => {
    setIsLoading(true)
    setTimeout(() => {
      window.open(tool.url, '_blank')
      setIsLoading(false)
    }, 1500)
  }

  return (
    <>
      {isLoading && <CubeLoader />}
      <div 
        className="gradient-card"
        style={{
          animationDelay: `${index * 100}ms`,
          animation: 'fadeInUp 0.6s ease-out forwards'
        }}
      >
        <div className="gradient-card-content">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-gray-800/50">
              {tool.icon}
            </div>
            <Badge variant="outline" className="border-purple-400 text-purple-300 text-xs">
              {tool.category}
            </Badge>
          </div>
          
          <h3 className="gradient-heading">{tool.name}</h3>
          
          <p className="gradient-description">{tool.description}</p>
          
          <div className="mt-4 space-y-2">
            {tool.benefits.slice(0, 2).map((benefit, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                <Star className="w-3 h-3 text-purple-400 flex-shrink-0" />
                {benefit}
              </div>
            ))}
          </div>
          
          <Button 
            className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-sm"
            onClick={handleVisitTool}
            disabled={isLoading}
          >
            <span className="flex items-center gap-2">
              {isLoading ? 'Loading...' : 'Explore Tool'}
              <ExternalLink className="w-3 h-3" />
            </span>
          </Button>
        </div>

        <style jsx>{`
          .gradient-card {
            position: relative;
            width: 100%;
            height: 320px;
            background-color: #111827;
            display: flex;
            flex-direction: column;
            justify-content: end;
            padding: 16px;
            gap: 12px;
            border-radius: 12px;
            cursor: pointer;
            color: white;
            overflow: hidden;
          }

          .gradient-card::before {
            content: '';
            position: absolute;
            inset: 0;
            left: -5px;
            margin: auto;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 16px;
            background: linear-gradient(-45deg, #8b5cf6 0%, #06b6d4 100%);
            z-index: -10;
            pointer-events: none;
            transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }

          .gradient-card::after {
            content: "";
            z-index: -1;
            position: absolute;
            inset: 0;
            background: linear-gradient(-45deg, #a855f7 0%, #06b6d4 100%);
            transform: translate3d(0, 0, 0) scale(0.95);
            filter: blur(20px);
          }

          .gradient-heading {
            font-size: 18px;
            text-transform: capitalize;
            font-weight: 700;
            color: white;
            margin-bottom: 8px;
          }

          .gradient-description {
            font-size: 12px;
            color: #d1d5db;
            line-height: 1.4;
          }

          .gradient-card:hover::after {
            filter: blur(30px);
          }

          .gradient-card:hover::before {
            transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
          }

          .gradient-card-content {
            position: relative;
            z-index: 1;
            height: 100%;
            display: flex;
            flex-direction: column;
          }
        `}</style>
      </div>
    </>
  )
}
