"use client"

import { useState } from "react"
import { Heart, ThumbsUp, ThumbsDown, Meh } from 'lucide-react'

export function FeedbackSection() {
  const [selectedFeedback, setSelectedFeedback] = useState<string>("")
  const [showThankYou, setShowThankYou] = useState(false)

  const handleFeedbackChange = (value: string) => {
    setSelectedFeedback(value)
    setTimeout(() => {
      setShowThankYou(true)
      setTimeout(() => setShowThankYou(false), 3000)
    }, 500)
  }

  return (
    <section className="py-20 px-4 bg-black/30 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Did FlickerKit Toolkit Help You?
        </h3>
        <p className="text-lg text-gray-300 mb-12 leading-relaxed">
          Your feedback helps us improve and discover more amazing tools for the community
        </p>

        <div className="flex justify-center mb-8">
          <div className="feedback-container">
            <div className="feedback-pane">
              <label className="feedback-label">
                <span className="label-text">
                  <ThumbsUp className="w-4 h-4 mb-1" />
                  Yes
                </span>
                <input 
                  className="feedback-input" 
                  name="feedback" 
                  type="radio" 
                  value="yes"
                  onChange={(e) => handleFeedbackChange(e.target.value)}
                />
              </label>
              <label className="feedback-label">
                <span className="label-text">
                  <ThumbsDown className="w-4 h-4 mb-1" />
                  No
                </span>
                <input 
                  className="feedback-input" 
                  name="feedback" 
                  type="radio" 
                  value="no"
                  onChange={(e) => handleFeedbackChange(e.target.value)}
                />
              </label>
              <label className="feedback-label">
                <span className="label-text">
                  <Meh className="w-4 h-4 mb-1" />
                  Maybe
                </span>
                <input 
                  className="feedback-input" 
                  name="feedback" 
                  type="radio" 
                  value="maybe"
                  onChange={(e) => handleFeedbackChange(e.target.value)}
                />
              </label>
              <span className="feedback-selection"></span>
            </div>
          </div>
        </div>

        {showThankYou && (
          <div className="thank-you-message">
            <Heart className="w-6 h-6 text-red-400 mx-auto mb-2" />
            <p className="text-purple-300 font-semibold">
              Thank you for your feedback! 💜
            </p>
          </div>
        )}

        <style jsx>{`
          .feedback-container {
            transform-style: preserve-3d;
            perspective: 1000px;
          }

          .feedback-pane {
            outline: 2px solid #8b5cf6;
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.4), inset 0 0 20px rgba(139, 92, 246, 0.2);
            height: 60px;
            width: 240px;
            border-radius: 12px;
            position: relative;
            overflow: hidden;
            transition: 0.7s ease;
            background: rgba(17, 24, 39, 0.8);
            backdrop-filter: blur(10px);
          }

          .feedback-input {
            display: none;
          }

          .feedback-label {
            height: 60px;
            width: 80px;
            float: left;
            font-weight: 600;
            letter-spacing: -0.5px;
            font-size: 12px;
            padding: 0px;
            position: relative;
            z-index: 1;
            color: #8b5cf6;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .label-text {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .feedback-selection {
            display: none;
            position: absolute;
            height: 60px;
            width: 80px;
            z-index: 0;
            left: 0;
            top: 0;
            box-shadow: 0 0 15px rgba(139, 92, 246, 0.6);
            transition: 0.15s ease;
            border-radius: 8px;
          }

          .feedback-label:has(input:checked) {
            color: #111827;
            font-weight: 700;
          }

          .feedback-pane:has(.feedback-label:nth-child(1):hover) {
            transform: rotateY(-15deg);
          }

          .feedback-pane:has(.feedback-label:nth-child(3):hover) {
            transform: rotateY(15deg);
          }

          .feedback-label:has(input:checked) ~ .feedback-selection {
            background: linear-gradient(135deg, #8b5cf6, #06b6d4);
            display: inline-block;
          }

          .feedback-label:nth-child(1):has(input:checked) ~ .feedback-selection {
            transform: translateX(0px);
          }

          .feedback-label:nth-child(2):has(input:checked) ~ .feedback-selection {
            transform: translateX(80px);
          }

          .feedback-label:nth-child(3):has(input:checked) ~ .feedback-selection {
            transform: translateX(160px);
          }

          .thank-you-message {
            animation: fadeInUp 0.5s ease-out;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </section>
  )
}
