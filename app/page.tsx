"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Text, Environment } from "@react-three/drei"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Shapes, Image, Layers, Box, Sparkles, Zap, Users, Download, Smartphone, Monitor, Scissors, Brush, Grid3X3, FileImage, Component, CuboidIcon as Cube, Share2, Heart, Star, CheckCircle, Blocks } from 'lucide-react'
import { Suspense, useState, useEffect } from "react"
import { CubeLoader } from "@/components/cube-loader"
import { AnimatedBackground } from "@/components/animated-background"
import { EnhancedCard3D } from "@/components/enhanced-card-3d"
import { AnimatedNavbar } from "@/components/animated-navbar"
import { FeedbackSection } from "@/components/feedback-section"
import { SocialCard } from "@/components/social-card"

function FloatingShape({ position, color }: { position: [number, number, number], color: string }) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </Float>
  )
}

function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <Suspense fallback={null}>
        <Environment preset="night" />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
          <Text
            fontSize={1.2}
            position={[-2, 0, 0]}
            color="#7c3aed"
            anchorX="center"
            anchorY="middle"
            font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyeMZhrib2Bg-4.woff"
          >
            FlickerKit
          </Text>
        </Float>
        
        <FloatingShape position={[-4, 2, -2]} color="#0891b2" />
        <FloatingShape position={[4, -1, -1]} color="#7c3aed" />
        <FloatingShape position={[2, 3, -3]} color="#ec4899" />
        <FloatingShape position={[-2, -2, -2]} color="#9333ea" />
        
        <OrbitControls enableZoom={false} enablePan={false} />
      </Suspense>
    </Canvas>
  )
}

const tools = [
  {
    name: "Flexbox Labs",
    description: "Interactive tool for learning and experimenting with CSS Flexbox properties. Perfect for mastering flexible layouts.",
    icon: <Code className="w-6 h-6" />,
    category: "Layout",
    url: "https://fountn.design/resource/flexbox-labs/",
    color: "bg-blue-500/20 border-blue-500/30",
    features: [
      { icon: <Grid3X3 className="w-4 h-4" />, text: "Interactive Flexbox playground" },
      { icon: <Monitor className="w-4 h-4" />, text: "Real-time visual feedback" },
      { icon: <Code className="w-4 h-4" />, text: "Generated CSS code" },
      { icon: <Smartphone className="w-4 h-4" />, text: "Responsive design testing" }
    ],
    useCases: [
      "Learning CSS Flexbox fundamentals",
      "Prototyping layout ideas quickly",
      "Teaching flexbox concepts",
      "Debugging layout issues"
    ],
    benefits: [
      "Visual learning approach",
      "Instant code generation",
      "No setup required",
      "Perfect for beginners"
    ],
    documentation: {
      overview: "Flexbox Labs provides an interactive environment where you can experiment with CSS Flexbox properties and see the results in real-time. It's designed to help developers understand how flexbox works through hands-on practice.",
      gettingStarted: [
        "Visit the Flexbox Labs website",
        "Start with the basic container properties",
        "Experiment with flex-direction and justify-content",
        "Try different flex-wrap and align-items values"
      ],
      bestPractices: [
        "Start with simple layouts before complex ones",
        "Use the generated CSS in your projects",
        "Practice with different screen sizes"
      ],
      tips: [
        "Use the visual guides to understand spacing",
        "Copy the generated CSS directly to your project"
      ]
    }
  },
  {
    name: "PatternPad",
    description: "Create beautiful patterns for presentations, social media or branding. Generate stunning geometric patterns effortlessly.",
    icon: <Palette className="w-6 h-6" />,
    category: "Design",
    url: "https://patternpad.com",
    color: "bg-purple-500/20 border-purple-500/30",
    features: [
      { icon: <Brush className="w-4 h-4" />, text: "Geometric pattern generator" },
      { icon: <Palette className="w-4 h-4" />, text: "Customizable colors" },
      { icon: <Download className="w-4 h-4" />, text: "High-resolution exports" },
      { icon: <Layers className="w-4 h-4" />, text: "Multiple pattern types" }
    ],
    useCases: [
      "Social media backgrounds",
      "Presentation designs",
      "Website hero sections",
      "Brand identity elements"
    ],
    benefits: [
      "Professional quality patterns",
      "Easy customization",
      "Multiple export formats",
      "Commercial use allowed"
    ],
    documentation: {
      overview: "PatternPad is a powerful tool for creating geometric patterns that can be used across various design projects. It offers a wide range of customization options and export formats suitable for both digital and print media.",
      gettingStarted: [
        "Choose a pattern template from the gallery",
        "Customize colors using the color picker",
        "Adjust pattern density and spacing",
        "Export in your preferred format (PNG, SVG, PDF)"
      ],
      bestPractices: [
        "Keep patterns subtle for text overlays",
        "Use brand colors for consistency",
        "Test patterns at different sizes"
      ],
      tips: [
        "Save your favorite patterns for future use",
        "Use high contrast for better visibility"
      ]
    }
  },
  {
    name: "Shape Divider App",
    description: "Export beautiful SVG shape dividers for your websites. Add visual interest with custom section separators.",
    icon: <Shapes className="w-6 h-6" />,
    category: "SVG",
    url: "https://www.shapedivider.app",
    color: "bg-green-500/20 border-green-500/30",
    features: [
      { icon: <Scissors className="w-4 h-4" />, text: "Custom shape dividers" },
      { icon: <Palette className="w-4 h-4" />, text: "Color customization" },
      { icon: <FileImage className="w-4 h-4" />, text: "SVG & CSS export" },
      { icon: <Smartphone className="w-4 h-4" />, text: "Responsive designs" }
    ],
    useCases: [
      "Website section separators",
      "Landing page design",
      "Creative transitions",
      "Modern web aesthetics"
    ],
    benefits: [
      "Lightweight SVG format",
      "Scalable graphics",
      "Easy integration",
      "Unique visual appeal"
    ],
    documentation: {
      overview: "Shape Divider App helps you create custom SVG shape dividers that add visual interest to your website sections. These dividers are perfect for creating smooth transitions between different content areas.",
      gettingStarted: [
        "Select a divider shape from the available options",
        "Customize the height and flip orientation",
        "Choose your preferred colors",
        "Copy the generated SVG or CSS code"
      ],
      bestPractices: [
        "Match divider colors with your design",
        "Keep dividers proportional to content",
        "Test on different screen sizes"
      ],
      tips: [
        "Use subtle colors for better integration",
        "Combine multiple dividers for unique effects"
      ]
    }
  },
  {
    name: "unDraw Illustrations",
    description: "Open-source SVG illustrations and assets. Beautiful, customizable graphics for any project without attribution.",
    icon: <Image className="w-6 h-6" />,
    category: "Assets",
    url: "https://undraw.co",
    color: "bg-orange-500/20 border-orange-500/30",
    features: [
      { icon: <FileImage className="w-4 h-4" />, text: "1000+ SVG illustrations" },
      { icon: <Palette className="w-4 h-4" />, text: "Color customization" },
      { icon: <Heart className="w-4 h-4" />, text: "No attribution required" },
      { icon: <Download className="w-4 h-4" />, text: "Free commercial use" }
    ],
    useCases: [
      "Website illustrations",
      "Mobile app graphics",
      "Presentation visuals",
      "Marketing materials"
    ],
    benefits: [
      "Completely free to use",
      "Consistent art style",
      "Scalable vector format",
      "Regular updates"
    ],
    documentation: {
      overview: "unDraw provides a comprehensive collection of open-source SVG illustrations that can be used in any project without attribution. All illustrations follow a consistent design style and can be customized to match your brand colors.",
      gettingStarted: [
        "Browse the illustration gallery by category",
        "Use the search function to find specific topics",
        "Customize the primary color to match your brand",
        "Download the SVG file for your project"
      ],
      bestPractices: [
        "Maintain consistent color scheme across illustrations",
        "Optimize SVG files for web use",
        "Consider illustration context and meaning"
      ],
      tips: [
        "Use the color picker to match your brand palette",
        "Bookmark frequently used illustrations"
      ]
    }
  },
  {
    name: "Uiverse",
    description: "The largest library of open-source UI elements. Copy-paste beautiful components and animations for your projects.",
    icon: <Layers className="w-6 h-6" />,
    category: "Components",
    url: "https://uiverse.io",
    color: "bg-pink-500/20 border-pink-500/30",
    features: [
      { icon: <Component className="w-4 h-4" />, text: "1000+ UI components" },
      { icon: <Zap className="w-4 h-4" />, text: "CSS animations included" },
      { icon: <Code className="w-4 h-4" />, text: "Copy-paste ready" },
      { icon: <Users className="w-4 h-4" />, text: "Community driven" }
    ],
    useCases: [
      "Rapid prototyping",
      "Component inspiration",
      "Learning CSS animations",
      "Building design systems"
    ],
    benefits: [
      "Save development time",
      "High-quality components",
      "Active community",
      "Regular contributions"
    ],
    documentation: {
      overview: "Uiverse is a community-driven platform offering thousands of open-source UI components and animations. Each component comes with ready-to-use HTML and CSS code that you can directly integrate into your projects.",
      gettingStarted: [
        "Browse components by category or search",
        "Preview components in the live demo",
        "Copy the HTML and CSS code",
        "Paste into your project and customize as needed"
      ],
      bestPractices: [
        "Review code quality before implementation",
        "Adapt components to match your design system",
        "Test components across different browsers"
      ],
      tips: [
        "Contribute your own components to the community",
        "Use the favorites feature to save useful components"
      ]
    }
  },
  {
    name: "Spline",
    description: "3D design tool in the browser with real-time collaboration. Create stunning 3D graphics and animations easily.",
    icon: <Box className="w-6 h-6" />,
    category: "3D Design",
    url: "https://spline.design",
    color: "bg-cyan-500/20 border-cyan-500/30",
    features: [
      { icon: <Cube className="w-4 h-4" />, text: "Browser-based 3D editor" },
      { icon: <Users className="w-4 h-4" />, text: "Real-time collaboration" },
      { icon: <Zap className="w-4 h-4" />, text: "Interactive animations" },
      { icon: <Code className="w-4 h-4" />, text: "Web integration" }
    ],
    useCases: [
      "3D web experiences",
      "Product visualizations",
      "Interactive presentations",
      "Game prototyping"
    ],
    benefits: [
      "No software installation",
      "Team collaboration",
      "Web-ready exports",
      "Intuitive interface"
    ],
    documentation: {
      overview: "Spline is a browser-based 3D design tool that enables designers and developers to create interactive 3D experiences without complex software installations. It features real-time collaboration and direct web integration capabilities.",
      gettingStarted: [
        "Create a free Spline account",
        "Start with basic 3D shapes and materials",
        "Learn the camera and lighting controls",
        "Export your scene for web integration"
      ],
      bestPractices: [
        "Optimize 3D models for web performance",
        "Use appropriate lighting for your scene",
        "Test interactions on different devices"
      ],
      tips: [
        "Use the collaboration features for team projects",
        "Explore the community gallery for inspiration"
      ]
    }
  },
  {
    name: "21st.dev",
    description: "Discover, share, and craft UI components. A modern platform for finding and sharing reusable interface elements.",
    icon: <Sparkles className="w-6 h-6" />,
    category: "Components",
    url: "https://21st.dev",
    color: "bg-yellow-500/20 border-yellow-500/30",
    features: [
      { icon: <Component className="w-4 h-4" />, text: "Curated UI components" },
      { icon: <Share2 className="w-4 h-4" />, text: "Share your creations" },
      { icon: <Star className="w-4 h-4" />, text: "Community ratings" },
      { icon: <Code className="w-4 h-4" />, text: "Multiple frameworks" }
    ],
    useCases: [
      "Component discovery",
      "Design system building",
      "Code sharing",
      "UI inspiration"
    ],
    benefits: [
      "Quality components",
      "Framework agnostic",
      "Community feedback",
      "Easy integration"
    ],
    documentation: {
      overview: "21st.dev is a modern platform for discovering, sharing, and crafting UI components. It provides a curated collection of high-quality components with community ratings and support for multiple frameworks.",
      gettingStarted: [
        "Browse the component library by category",
        "Filter components by framework preference",
        "Preview components in different themes",
        "Copy code or download component files"
      ],
      bestPractices: [
        "Check component compatibility with your framework",
        "Review community ratings and feedback",
        "Contribute your own components to help others"
      ],
      tips: [
        "Use the rating system to find the best components",
        "Follow your favorite component creators"
      ]
    }
  },
  {
    name: "React Bits",
    description: "A collection of React components, hooks, and utilities. Reusable code snippets and patterns for modern React development.",
    icon: <Blocks className="w-6 h-6" />,
    category: "React",
    url: "https://www.reactbits.dev/?ref=madewithreactjs.com",
    color: "bg-blue-500/20 border-blue-500/30",
    features: [
      { icon: <Component className="w-4 h-4" />, text: "React components library" },
      { icon: <Code className="w-4 h-4" />, text: "Custom hooks collection" },
      { icon: <Zap className="w-4 h-4" />, text: "Performance optimized" },
      { icon: <Users className="w-4 h-4" />, text: "TypeScript support" }
    ],
    useCases: [
      "React component development",
      "Custom hooks implementation",
      "Performance optimization patterns",
      "TypeScript React projects"
    ],
    benefits: [
      "Production-ready components",
      "Well-documented code",
      "TypeScript definitions",
      "Regular updates"
    ],
    documentation: {
      overview: "React Bits is a comprehensive collection of React components, custom hooks, and utility functions designed to accelerate modern React development. It provides battle-tested patterns and components that you can use in production applications.",
      gettingStarted: [
        "Browse the components and hooks gallery",
        "Copy the component code you need",
        "Install any required dependencies",
        "Import and use in your React project"
      ],
      bestPractices: [
        "Review component props and TypeScript types",
        "Test components in your specific use case",
        "Customize styling to match your design system"
      ],
      tips: [
        "Use the search function to find specific patterns",
        "Check the TypeScript examples for better integration"
      ]
    }
  }
]

export default function HomePage() {
  const [isInitialLoading, setIsInitialLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isInitialLoading) {
    return <CubeLoader />
  }

  return (
    <div className="min-h-screen text-white relative">
      <AnimatedBackground />
      <AnimatedNavbar />
      
      <div className="relative z-10">
        <style jsx global>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>

        {/* Hero Section with 3D Background */}
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Scene3D />
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <div className="animate-float">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
                FlickerKit Toolkit
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto opacity-0" style={{animation: 'fadeInUp 0.8s ease-out 0.3s forwards'}}>
              That lights up frontend development with amazing tools and resources
            </p>
            <div className="opacity-0" style={{animation: 'fadeInUp 0.8s ease-out 0.6s forwards'}}>
              <Badge className="text-lg px-6 py-3 bg-purple-700 hover:bg-purple-800 transition-colors border-0">
                <Sparkles className="w-4 h-4 mr-2" />
                Curated by Moatez Tilouch
              </Badge>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section id="tools" className="py-20 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Essential Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive documentation and guides for each handpicked tool
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <EnhancedCard3D key={index} tool={tool} index={index} />
            ))}
          </div>
        </section>

        {/* Feedback Section */}
        <FeedbackSection />

        {/* About Section */}
        <section className="py-20 px-4 bg-black/20 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              About FlickerKit Toolkit
            </h3>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              FlickerKit Toolkit is your comprehensive guide to the most powerful frontend development tools available today. 
              Each tool has been carefully selected and documented to help you build better web experiences faster. 
              From layout systems to 3D graphics, these tools will light up your development workflow.
            </p>
            <div className="flex flex-col items-center gap-6">
              <div className="text-2xl font-semibold text-purple-500 flex items-center gap-2">
                <Sparkles className="w-6 h-6" />
                Moatez Tilouch
              </div>
              <div className="text-gray-400 flex items-center gap-2">
                <Code className="w-4 h-4" />
                Frontend Developer & Tool Explorer
              </div>
              
              {/* Social Media Card */}
              <div className="mt-8">
                <SocialCard />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="footer" className="py-12 px-4 border-t border-purple-500/20 bg-black/30 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-400">
              © 2024 FlickerKit Toolkit. Developed by{" "}
              <span className="text-purple-500 font-semibold">Moatez Tilouch</span>
            </p>
            <p className="text-sm text-gray-500 mt-2 flex items-center justify-center gap-2">
              <Heart className="w-4 h-4 text-red-400" />
              Lighting up frontend development, one tool at a time
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
