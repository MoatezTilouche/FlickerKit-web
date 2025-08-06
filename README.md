<div align="center">

# 🌟 FlickerKit Toolkit

### *That lights up frontend development with amazing tools and resources*

[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js%2015-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Powered by React](https://img.shields.io/badge/Powered%20by-React%2019-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Styled with Tailwind](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![3D with Three.js](https://img.shields.io/badge/3D%20with-Three.js-000000?style=for-the-badge&logo=three.js)](https://threejs.org/)

[🚀 **Live Demo**](https://your-demo-link.vercel.app) • [📖 **Documentation**](#-tools-included) • [🛠️ **Installation**](#-installation) • [🤝 **Contributing**](#-contributing)

---

*A beautifully crafted, interactive showcase of essential frontend development tools with comprehensive documentation, 3D animations, and modern UI components.*

</div>

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎨 **Visual Excellence**
- **3D Interactive Hero Section** with floating elements
- **Animated Particle Background** for immersive experience  
- **3D Card Components** with hover transformations
- **Gradient Animations** and smooth transitions
- **Responsive Design** across all devices

</td>
<td width="50%">

### 🚀 **Performance & UX**
- **Lightning Fast** with Next.js 15 App Router
- **Optimized Animations** using Canvas API
- **Smooth Navigation** with animated navbar
- **Interactive Feedback** system
- **Progressive Loading** with custom loaders

</td>
</tr>
</table>

## 🛠️ Tools Included

<div align="center">

| Tool | Category | Description | Features |
|------|----------|-------------|----------|
| **[Flexbox Labs](https://fountn.design/resource/flexbox-labs/)** | Layout | Interactive Flexbox learning tool | 🎯 Visual playground, 📱 Responsive testing |
| **[PatternPad](https://patternpad.com)** | Design | Geometric pattern generator | 🎨 Custom colors, 📥 HD exports |
| **[Shape Divider App](https://www.shapedivider.app)** | SVG | Beautiful section dividers | ✂️ Custom shapes, 🎨 Color customization |
| **[unDraw](https://undraw.co)** | Assets | Open-source illustrations | 🖼️ 1000+ SVGs, 🎨 Color customization |
| **[Uiverse](https://uiverse.io)** | Components | UI components library | ⚡ Animations, 👥 Community driven |
| **[Spline](https://spline.design)** | 3D Design | Browser-based 3D editor | 🌐 Web integration, 👥 Real-time collaboration |
| **[21st.dev](https://21st.dev)** | Components | Modern component platform | ⭐ Community ratings, 🔧 Multiple frameworks |
| **[React Bits](https://www.reactbits.dev/)** | React | React components & hooks | 🔧 TypeScript support, ⚡ Performance optimized |

</div>

## 🚀 Installation

### Prerequisites
- **Node.js** 18.0 or later
- **npm**, **yarn**, or **pnpm**

### Quick Start

\`\`\`bash
# Clone the repository
git clone https://github.com/yourusername/flickerkit-toolkit.git

# Navigate to project directory
cd flickerkit-toolkit

# Install dependencies
npm install
# or
yarn install
# or
pnpm install

# Start development server
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the project in your browser.

## 📁 Project Structure

\`\`\`
flickerkit-toolkit/
├── 📁 app/                    # Next.js App Router
│   ├── 📄 layout.tsx         # Root layout
│   ├── 📄 page.tsx           # Home page
│   └── 📄 globals.css        # Global styles
├── 📁 components/             # React components
│   ├── 📄 animated-background.tsx
│   ├── 📄 animated-navbar.tsx
│   ├── 📄 cube-loader.tsx
│   ├── 📄 enhanced-card-3d.tsx
│   ├── 📄 feedback-section.tsx
│   ├── 📄 social-card.tsx
│   └── 📁 ui/                # shadcn/ui components
├── 📁 lib/                   # Utility functions
├── 📄 package.json
├── 📄 tailwind.config.ts
└── 📄 README.md
\`\`\`

## 🎨 Tech Stack

<div align="center">

### Frontend Framework
![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)

### Styling & UI
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.9-38B2AC?style=flat-square&logo=tailwind-css)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-Latest-000000?style=flat-square)
![Radix UI](https://img.shields.io/badge/Radix%20UI-Latest-161618?style=flat-square)

### 3D & Animation
![Three.js](https://img.shields.io/badge/Three.js-Latest-000000?style=flat-square&logo=three.js)
![React Three Fiber](https://img.shields.io/badge/R3F-Latest-000000?style=flat-square)
![React Three Drei](https://img.shields.io/badge/Drei-Latest-000000?style=flat-square)

</div>

## 🎯 Key Features Breakdown

### 🌌 **3D Interactive Hero**
- **Three.js Integration**: Immersive 3D scene with floating shapes
- **Dynamic Text**: Animated "FlickerKit" text with custom fonts
- **Camera Controls**: Smooth orbit controls for user interaction

### 🎴 **Enhanced 3D Cards**
- **Tabbed Interface**: Overview, Features, and Guide sections
- **3D Transformations**: Hover effects with perspective transforms
- **Comprehensive Documentation**: Detailed guides for each tool

### 🎨 **Particle Background**
- **Canvas-based Animation**: Smooth 60fps particle system
- **Interactive Connections**: Dynamic lines between nearby particles
- **Performance Optimized**: Efficient rendering with cleanup

### 📱 **Responsive Design**
- **Mobile-First**: Optimized for all screen sizes
- **Touch-Friendly**: Gesture support for mobile interactions
- **Adaptive Layout**: Flexible grid system

## 🎨 Customization

### Color Scheme
The project uses a cosmic theme with customizable CSS variables:

\`\`\`css
:root {
  --primary-purple: #8b5cf6;
  --secondary-cyan: #06b6d4;
  --accent-pink: #ec4899;
  --background-dark: #0f0f23;
}
\`\`\`

### Adding New Tools
1. Update the `tools` array in `app/page.tsx`
2. Include all required properties:
   \`\`\`typescript
   {
     name: "Tool Name",
     description: "Tool description",
     icon: <IconComponent />,
     category: "Category",
     url: "https://tool-url.com",
     features: [...],
     useCases: [...],
     benefits: [...],
     documentation: {...}
   }
   \`\`\`

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### 🐛 **Bug Reports**
- Use the [issue tracker](https://github.com/yourusername/flickerkit-toolkit/issues)
- Include steps to reproduce
- Provide browser/device information

### ✨ **Feature Requests**
- Suggest new tools to include
- Propose UI/UX improvements
- Request new animations or interactions

### 🔧 **Pull Requests**
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

<div align="center">

### **Moatez Tilouch**
*Frontend Developer & Tool Explorer*

[![GitHub](https://img.shields.io/badge/GitHub-MoatezTilouche-181717?style=for-the-badge&logo=github)](https://github.com/MoatezTilouche)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Moatez%20Tilouch-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/moatez-tilouch-a58a96284/)
[![Email](https://img.shields.io/badge/Email-moateztilouch%40gmail.com-EA4335?style=for-the-badge&logo=gmail)](mailto:moateztilouch@gmail.com)

</div>

## 🙏 Acknowledgments

- **[shadcn/ui](https://ui.shadcn.com/)** for the beautiful component library
- **[Lucide React](https://lucide.dev/)** for the icon system
- **[Vercel](https://vercel.com/)** for hosting and deployment
- **[Three.js](https://threejs.org/)** for 3D graphics capabilities
- All the amazing tool creators featured in this showcase

---

<div align="center">

### 💜 **Made with love for the frontend community**

*If this project helped you, please consider giving it a ⭐ star on GitHub!*

**[⬆ Back to Top](#-flickerkit-toolkit)**

</div>
