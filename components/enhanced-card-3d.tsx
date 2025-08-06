"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, CheckCircle, Star, Zap, BookOpen, Users, Code2, Lightbulb } from 'lucide-react'
import { useState } from "react"
import { CubeLoader } from "./cube-loader"

interface EnhancedCard3DProps {
  tool: {
    name: string
    description: string
    icon: React.ReactNode
    category: string
    url: string
    color: string
    features: Array<{ icon: React.ReactNode; text: string }>
    useCases: string[]
    benefits: string[]
    documentation: {
      overview: string
      gettingStarted: string[]
      bestPractices: string[]
      tips: string[]
    }
  }
  index: number
}

export function EnhancedCard3D({ tool, index }: EnhancedCard3DProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")
  
const handleVisitTool = () => {
  

    // 👇 Open the URL immediately — this ensures mobile support
    window.open(tool.url, '_blank');

    // Optional: reset the loading state after delay
    
  
};

  return (
    <>
      {isLoading && <CubeLoader />}
      <div 
        className="parent-3d-enhanced"
        style={{
          animationDelay: `${index * 100}ms`,
          animation: 'fadeInUp 0.6s ease-out forwards'
        }}
      >
        <div className="card-3d-enhanced">
          <div className="content-box-3d-enhanced">
            <div className="header-section">
              <span className="card-title-3d-enhanced">{tool.name}</span>
              <p className="card-description-3d-enhanced">{tool.description}</p>
            </div>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="tabs-container">
              <TabsList className="tabs-list-3d">
                <TabsTrigger value="overview" className="tab-trigger-3d">
                  <BookOpen className="w-3 h-3 mr-1" />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="features" className="tab-trigger-3d">
                  <Zap className="w-3 h-3 mr-1" />
                  Features
                </TabsTrigger>
                <TabsTrigger value="guide" className="tab-trigger-3d">
                  <Lightbulb className="w-3 h-3 mr-1" />
                  Guide
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="tab-content-3d">
                <div className="overview-section">
                  <h4 className="section-title">What it does</h4>
                  <p className="section-text">{tool.documentation.overview}</p>
                  
                  <h4 className="section-title">Use Cases</h4>
                  <div className="use-cases-grid">
                    {tool.useCases.slice(0, 3).map((useCase, i) => (
                      <div key={i} className="use-case-item">
                        <CheckCircle className="w-3 h-3 text-cyan-300 flex-shrink-0" />
                        <span>{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="features" className="tab-content-3d">
                <div className="features-grid">
                  {tool.features.slice(0, 4).map((feature, i) => (
                    <div key={i} className="feature-item">
                      <div className="feature-icon">{feature.icon}</div>
                      <span className="feature-text">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="guide" className="tab-content-3d">
                <div className="guide-section">
                  <h4 className="section-title">Getting Started</h4>
                  <div className="guide-steps">
                    {tool.documentation.gettingStarted.map((step, i) => (
                      <div key={i} className="guide-step">
                        <span className="step-number">{i + 1}</span>
                        <span className="step-text">{step}</span>
                      </div>
                    ))}
                  </div>
                  
                  <h4 className="section-title">Pro Tips</h4>
                  <div className="tips-list">
                    {tool.documentation.tips.slice(0, 2).map((tip, i) => (
                      <div key={i} className="tip-item">
                        <Star className="w-3 h-3 text-yellow-300 flex-shrink-0" />
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <Button 
              className="explore-button-3d"
              onClick={handleVisitTool}
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Explore Tool'}
              <ExternalLink className="w-3 h-3 ml-1" />
            </Button>
          </div>
          
          <div className="badge-box-3d">
            <span className="category-3d">{tool.category}</span>
            <div className="icon-3d">{tool.icon}</div>
          </div>
        </div>

        <style jsx>{`
          .parent-3d-enhanced {
            width: 100%;
            padding: 20px;
            perspective: 1000px;
          }

          .card-3d-enhanced {
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
            height: 580px;
          }

          .card-3d-enhanced:hover {
            background-position: -100px 100px, -100px 100px;
            transform: rotate3d(0.5, 1, 0, 30deg);
          }

          .content-box-3d-enhanced {
            background: linear-gradient(135deg, #7c3aed 0%, #0891b2 100%);
            transition: all 0.5s ease-in-out;
            padding: 24px;
            transform-style: preserve-3d;
            height: calc(100% - 50px);
            display: flex;
            flex-direction: column;
            border-radius: 8px;
            overflow: hidden;
          }

          .header-section {
            margin-bottom: 16px;
            transform: translate3d(0px, 0px, 40px);
            transition: all 0.5s ease-in-out;
          }

          .header-section:hover {
            transform: translate3d(0px, 0px, 60px);
          }

          .card-title-3d-enhanced {
            display: block;
            color: white;
            font-size: 20px;
            font-weight: 900;
            margin-bottom: 12px;
          }

          .card-description-3d-enhanced {
            font-size: 13px;
            font-weight: 500;
            color: #f3f4f6;
            line-height: 1.3;
            margin: 0;
            margin-bottom: 16px;
          }

          .tabs-container {
            flex: 1;
            display: flex;
            flex-direction: column;
            transform: translate3d(0px, 0px, 30px);
            transition: all 0.5s ease-in-out;
          }

          .tabs-container:hover {
            transform: translate3d(0px, 0px, 50px);
          }

          .tabs-list-3d {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 6px;
            padding: 2px;
            margin-bottom: 12px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 2px;
          }

          .tab-trigger-3d {
            background: transparent;
            color: white;
            font-size: 9px;
            padding: 6px 8px;
            border-radius: 4px;
            border: none;
            cursor: pointer;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .tab-trigger-3d[data-state="active"] {
            background: rgba(255, 255, 255, 0.2);
          }

          .tab-content-3d {
            flex: 1;
            overflow-y: auto;
          }

          .overview-section, .guide-section {
            space-y: 12px;
          }

          .section-title {
            color: white;
            font-size: 13px;
            font-weight: 700;
            margin-bottom: 8px;
            margin-top: 16px;
          }

          .section-title:first-child {
            margin-top: 0;
          }

          .section-text {
            color: #f3f4f6;
            font-size: 12px;
            line-height: 1.4;
            margin-bottom: 16px;
          }

          .use-cases-grid {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }

          .use-case-item {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 12px;
            color: #f3f4f6;
          }

          .features-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
          }

          .feature-item {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 6px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
          }

          .feature-icon {
            color: #a78bfa;
            flex-shrink: 0;
          }

          .feature-text {
            font-size: 11px;
            color: #f3f4f6;
          }

          .guide-steps {
            display: flex;
            flex-direction: column;
            gap: 6px;
            margin-bottom: 12px;
          }

          .guide-step {
            display: flex;
            align-items: flex-start;
            gap: 8px;
            font-size: 12px;
            color: #f3f4f6;
          }

          .step-number {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 8px;
            font-weight: 700;
            flex-shrink: 0;
          }

          .step-text {
            line-height: 1.3;
          }

          .tips-list {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }

          .tip-item {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 12px;
            color: #f3f4f6;
          }

          .explore-button-3d {
            margin-top: 24px;
            display: inline-flex;
            align-items: center;
            font-weight: 700;
            font-size: 12px;
            text-transform: uppercase;
            color: #7c3aed;
            background: white;
            padding: 8px 12px;
            transition: all 0.5s ease-in-out;
            transform: translate3d(0px, 0px, 20px);
            border: none;
            border-radius: 6px;
            width: 100%;
            justify-content: center;
          }

          .explore-button-3d:hover {
            transform: translate3d(0px, 0px, 60px);
            background: #f3f4f6;
          }

          .badge-box-3d {
            position: absolute;
            top: 30px;
            right: 30px;
            height: 60px;
            width: 60px;
            background: #111827;
            border: 2px solid #7c3aed;
            border-radius: 8px;
            padding: 8px;
            transform: translate3d(0px, 0px, 80px);
            box-shadow: rgba(139, 92, 246, 0.3) 0px 17px 10px -10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .category-3d {
            color: #7c3aed;
            font-size: 7px;
            font-weight: 700;
            text-transform: uppercase;
            text-align: center;
            margin-bottom: 4px;
          }

          .icon-3d {
            color: #7c3aed;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}</style>
      </div>
    </>
  )
}
