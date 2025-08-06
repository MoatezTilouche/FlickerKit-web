"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, CheckCircle } from 'lucide-react'
import { useState } from "react"
import { CubeLoader } from "./cube-loader"

interface Card3DProps {
  tool: {
    name: string
    description: string
    icon: React.ReactNode
    category: string
    url: string
    color: string
    useCases: string[]
  }
  index: number
}

export function Card3D({ tool, index }: Card3DProps) {
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
        className="parent-3d"
        style={{
          animationDelay: `${index * 100}ms`,
          animation: 'fadeInUp 0.6s ease-out forwards'
        }}
      >
        <div className="card-3d">
          <div className="content-box-3d">
            <span className="card-title-3d">{tool.name}</span>
            <p className="card-content-3d">{tool.description}</p>
            
            <div className="use-cases">
              {tool.useCases.slice(0, 2).map((useCase, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-gray-200 mb-1">
                  <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                  {useCase}
                </div>
              ))}
            </div>
            
            <Button 
              className="see-more-3d"
              onClick={handleVisitTool}
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Explore'}
              <ExternalLink className="w-3 h-3 ml-1" />
            </Button>
          </div>
          
          <div className="date-box-3d">
            <span className="month-3d">{tool.category}</span>
            <div className="icon-3d">{tool.icon}</div>
          </div>
        </div>

        <style jsx>{`
          .parent-3d {
            width: 100%;
            padding: 20px;
            perspective: 1000px;
          }

          .card-3d {
            padding-top: 50px;
            border: 3px solid #374151;
            transform-style: preserve-3d;
            background: linear-gradient(135deg, #0000 18.75%, #1f2937 0 31.25%, #0000 0),
                        repeating-linear-gradient(45deg, #1f2937 -6.25% 6.25%, #111827 0 18.75%);
            background-size: 60px 60px;
            background-position: 0 0, 0 0;
            background-color: #111827;
            width: 100%;
            box-shadow: rgba(139, 92, 246, 0.3) 0px 30px 30px -10px;
            transition: all 0.5s ease-in-out;
            border-radius: 12px;
            position: relative;
            height: 320px;
          }

          .card-3d:hover {
            background-position: -100px 100px, -100px 100px;
            transform: rotate3d(0.5, 1, 0, 30deg);
          }

          .content-box-3d {
            background: linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%);
            transition: all 0.5s ease-in-out;
            padding: 25px;
            transform-style: preserve-3d;
            height: calc(100% - 50px);
            display: flex;
            flex-direction: column;
            border-radius: 8px;
          }

          .content-box-3d .card-title-3d {
            display: inline-block;
            color: white;
            font-size: 20px;
            font-weight: 900;
            transition: all 0.5s ease-in-out;
            transform: translate3d(0px, 0px, 50px);
            margin-bottom: 12px;
          }

          .content-box-3d .card-title-3d:hover {
            transform: translate3d(0px, 0px, 60px);
          }

          .content-box-3d .card-content-3d {
            font-size: 12px;
            font-weight: 500;
            color: #f3f4f6;
            transition: all 0.5s ease-in-out;
            transform: translate3d(0px, 0px, 30px);
            line-height: 1.4;
            margin-bottom: 16px;
          }

          .content-box-3d .card-content-3d:hover {
            transform: translate3d(0px, 0px, 60px);
          }

          .use-cases {
            margin-bottom: 16px;
            transform: translate3d(0px, 0px, 25px);
            transition: all 0.5s ease-in-out;
          }

          .use-cases:hover {
            transform: translate3d(0px, 0px, 50px);
          }

          .see-more-3d {
            cursor: pointer;
            margin-top: auto;
            display: inline-flex;
            align-items: center;
            font-weight: 700;
            font-size: 11px;
            text-transform: uppercase;
            color: #8b5cf6;
            background: white;
            padding: 8px 12px;
            transition: all 0.5s ease-in-out;
            transform: translate3d(0px, 0px, 20px);
            border: none;
            border-radius: 6px;
            width: fit-content;
          }

          .see-more-3d:hover {
            transform: translate3d(0px, 0px, 60px);
            background: #f3f4f6;
          }

          .date-box-3d {
            position: absolute;
            top: 30px;
            right: 30px;
            height: 60px;
            width: 60px;
            background: #111827;
            border: 2px solid #8b5cf6;
            border-radius: 8px;
            padding: 8px;
            transform: translate3d(0px, 0px, 80px);
            box-shadow: rgba(139, 92, 246, 0.3) 0px 17px 10px -10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .date-box-3d .month-3d {
            color: #8b5cf6;
            font-size: 8px;
            font-weight: 700;
            text-transform: uppercase;
            text-align: center;
            margin-bottom: 4px;
          }

          .icon-3d {
            color: #8b5cf6;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}</style>
      </div>
    </>
  )
}
