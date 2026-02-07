<div align="right">

**Language**: [🇺🇸 English](README.md) | [🇹🇼 繁體中文](README.zh-TW.md)

</div>

<div align="center">

# 🌐 Senibo.shop | Global Logistics & Trade Solutions

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://eugenewu1019.github.io/seniboshop/)
[![CI/CD](https://github.com/eugenewu1019/seniboshop/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/eugenewu1019/seniboshop/actions)
[![CodeQL](https://github.com/eugenewu1019/seniboshop/actions/workflows/codeql.yml/badge.svg)](https://github.com/eugenewu1019/seniboshop/actions)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![Vanilla JS](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

**Seamless Global Logistics. Real-time Intelligence.**

[Live Demo](https://eugenewu1019.github.io/seniboshop/) · [Report Bug](https://github.com/eugenewu1019/seniboshop/issues) · [Request Feature](https://github.com/eugenewu1019/seniboshop/issues) · [Discussions](https://github.com/eugenewu1019/seniboshop/discussions)

![Project Banner](https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80)

</div>

---

## 📚 Table of Contents

- [About The Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#️-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 About The Project

**Senibo.shop** is a premium, futuristic logistics platform design concept that demonstrates a sophisticated approach to modern web development. The project showcases a transition from complex React architectures to a highly optimized, **pure Vanilla JavaScript + Tailwind CSS** implementation.

### Why This Project?

- 🎨 **Design Excellence**: Showcase "Micro-glow" aesthetics and "Atmospheric Blur" for a cutting-edge UI/UX
- ⚡ **Performance First**: Achieve instant load times with zero build tools and minimal dependencies
- 🌍 **Multilingual**: Complete i18n implementation (EN/ZH/JA) demonstrating internationalization without frameworks
- 📊 **Real-time Dashboard**: Simulated "Mission Control" with live metrics and multi-timezone support
- 💡 **Modern Vanilla JS**: Prove that sophisticated interactions don't require heavy frameworks

---

## ✨ Key Features

### 🌍 Bilingual Support (Trilingual)
- Complete internationalization supporting:
  - 🇺🇸 English
  - 🇹🇼 Traditional Chinese (繁體中文)
  - 🇯🇵 Japanese (日本語)
- Instant language switching with localStorage persistence
- SEO-friendly with proper language meta tags

### 📊 Operations Dashboard
- **Mission Control Center**: Simulated real-time operations monitoring
- **Multi-timezone Clocks**: Live time display for major logistics hubs
- **System Logs**: Dynamic activity feed with realistic status updates
- **Network Metrics**: Fluctuating statistics to simulate real-time data

### 🧠 Smart Quote Engine
- Interactive freight cost calculator
- Dynamic validation and error handling
- Support for Sea, Air, and Land logistics
- Real-time cost estimation

### 🎨 Premium UI/UX
- **Micro-glow Effects**: Subtle ambient lighting for immersive dark mode
- **Kinetic Typography**: Editorial-style using *Outfit* and *Inter* fonts
- **Glassmorphism**: Sophisticated backdrop blur and floating elements
- **Responsive Design**: Perfect on all devices from mobile to 4K displays

---

## 🛠️ Tech Stack

Built with a philosophy of performance and architectural simplicity, utilizing modern web standards without build tools.

### Core Technologies
- **HTML5** - Semantic markup and accessibility
- **Vanilla JavaScript (ES6+)** - Modern JS features without frameworks
- **CSS3** - Custom animations and glassmorphism effects

### Styling
- [Tailwind CSS](https://tailwindcss.com/) (CDN) - Utility-first CSS framework
- Custom CSS for animations and special effects

### Design
- [Lucide Icons](https://lucide.dev/) - Beautiful, consistent SVG icons
- [Google Fonts](https://fonts.google.com/) - *Outfit* (Headings) & *Inter* (Body)

### Architecture
- **Component-Based Mental Model**: Organized static files with clear separation
- **Data-Driven**: Centralized content database for easy updates
- **Event-Driven**: Clean event handling without dependencies

---

## 🚀 Getting Started

**No build steps. No npm install. Just open and run.**

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- (Optional) Live Server extension for hot reload

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/eugenewu1019/seniboshop.git
   cd seniboshop
   ```

2. **Open in browser**
   
   **Option A**: Direct open
   ```bash
   # Simply open index.html in your browser
   open index.html
   ```

   **Option B**: Python HTTP server
   ```bash
   python3 -m http.server 8000
   # Navigate to http://localhost:8000
   ```

   **Option C**: VS Code Live Server
   - Install "Live Server" extension
   - Right-click on `index.html`
   - Select "Open with Live Server"

---

## 📂 Project Structure

```text
seniboshop/
├── index.html           # Main HTML structure with Tailwind classes
├── style.css            # Custom animations & glassmorphism effects
├── script.js            # Core application logic
├── data.js              # i18n content database & translations
├── logo.svg             # Brand identity assets
├── README.md            # This file
├── README.zh-TW.md      # Traditional Chinese version
├── LICENSE              # MIT License
├── CONTRIBUTING.md      # Contribution guidelines
├── SECURITY.md          # Security policy
└── .github/
    ├── workflows/
    │   ├── ci-cd.yml        # CI/CD pipeline
    │   └── codeql.yml       # Security scanning
    └── pull_request_template.md
```

---

## 🚀 Deployment

### GitHub Pages (Current Setup)

The project is configured to automatically deploy to GitHub Pages on push to `main`.

1. **Enable GitHub Pages**
   - Settings → Pages → Source: GitHub Actions

2. **Push to main branch**
   ```bash
   git push origin main
   ```

3. **GitHub Actions will automatically**:
   - Validate HTML
   - Check for broken links
   - Deploy to GitHub Pages

### Alternative Deployment Options

<details>
<summary><b>Netlify</b></summary>

1. Connect your repository
2. Build command: (leave empty)
3. Publish directory: `/`
4. Deploy!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/eugenewu1019/seniboshop)

</details>

<details>
<summary><b>Vercel</b></summary>

1. Import repository
2. No framework preset needed
3. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/eugenewu1019/seniboshop)

</details>

---

## 🤝 Contributing

Contributions are what make the open source community amazing! Any contributions you make are **greatly appreciated**.

Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on:

- Code of Conduct
- Development process
- How to submit pull requests
- Coding standards
- Commit message conventions

### Quick Start for Contributors

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Test your changes in multiple browsers
4. Commit your Changes (`git commit -m 'feat: add some AmazingFeature'`)
5. Push to the Branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

---

## 🐛 Bug Reports & Feature Requests

Found a bug or have a feature idea?

- **Bug Reports**: [Create an issue](https://github.com/eugenewu1019/seniboshop/issues/new?template=bug_report.md)
- **Feature Requests**: [Create an issue](https://github.com/eugenewu1019/seniboshop/issues/new?template=feature_request.md)
- **Questions**: [Start a discussion](https://github.com/eugenewu1019/seniboshop/discussions)

---

## 📝 License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

---

## 📬 Contact

**Eugene Wu** - UI/UX Designer & Frontend Developer

- LinkedIn: [@owenwuwork](https://www.linkedin.com/in/owenwuwork)
- GitHub: [@eugenewu1019](https://github.com/eugenewu1019)
- Portfolio: [Coming Soon]

**Project Link**: [https://github.com/eugenewu1019/seniboshop](https://github.com/eugenewu1019/seniboshop)

**Live Demo**: [https://eugenewu1019.github.io/seniboshop/](https://eugenewu1019.github.io/seniboshop/)

---

## 🙏 Acknowledgments

Special thanks to:

- [Tailwind CSS](https://tailwindcss.com/) - Amazing utility-first framework
- [Lucide Icons](https://lucide.dev/) - Beautiful icon set
- [Google Fonts](https://fonts.google.com/) - *Outfit* and *Inter* typefaces
- [Unsplash](https://unsplash.com/) - High-quality imagery

---

<div align="center">

**[⬆️ Back to top](#-senibioshop--global-logistics--trade-solutions)**

Made with 🖤 by [Eugene Wu](https://github.com/eugenewu1019)

© 2026 Senibo.shop. All Rights Reserved.

</div>
