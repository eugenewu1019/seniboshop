# Senibo.shop - Global Logistics Solutions (Portfolio)

![Project Status](https://img.shields.io/badge/Status-Portfolio_Ready-0F172A?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Tech-Vanilla_JS_x_Tailwind-F59E0B?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

> **Live Demo**: [https://eugenewu1019.github.io/seniboshop/](https://eugenewu1019.github.io/seniboshop/)

## 📖 Project Overview

**Senibo.shop** is a high-end, futuristic logistics platform design concept. This project demonstrates a transition from a complex **React/Next.js** architecture to a highly optimized **Static (Vanilla JS + Tailwind)** implementation, focusing on performance, SEO, and "Micro-glow" aesthetics.

The goal was to create a site that *feels* like a heavy Single Page Application (SPA) in terms of interactivity and smoothness, but loads with the speed of a static site.

### 🎨 Design Philosophy: "Atmospheric Blur"
The UI language follows a strict set of design principles:
*   **Micro-glow (微光)**: Subtle amber gradients (`#F59E0B`) that breathe life into the dark mode interface.
*   **Visual Displacement**: Glassmorphism (`backdrop-filter`) combined with parallax-like floating elements.
*   **Kinetic Typography**: Using `Inter` and `Outfit` for a clean, editorial look that scales perfectly across devices.

---

## 🛠 Tech Transformation: React → Static

This project started as a standard **React** application but was refactored into a **Static Architecture** for this portfolio release.

### Why the shift?
1.  **Performance**: Zero hydration delay. The "First Contentful Paint" is instantaneous.
2.  **Architecture**: We maintained the **Component-Based Mental Model** even in Vanilla JS.
    *   `data.js`: Acts as the "State Store" (Redux-lite) holding all translations and content.
    *   `script.js`: Functions as the "Render Engine", dynamically hydrating the DOM based on the selected language and theme.
3.  **Deployment**: fully compatible with GitHub Pages without complex build steps.

### Key Technical Features
*   **Custom i18n Engine**: A lightweight JSON-based internationalization system supporting **English, Traditional Chinese (繁體中文), and Japanese**.
*   **Simulated Backend**:
    *   **Live Dashboard**: A real-time `setInterval` loop that simulates server logs, latency ticks, and active route calculations.
    *   **Dynamic Quote Calculator**: Logic that calculates freight costs based on distance, mode (Sea/Air/Land), and volatility factors.
*   **Dark Mode 2.0**: Instead of just inverting colors, we use completely different shadow and gradient stacks for "Day" vs "Night" atmospheres.

---

## ⚡️ Key Features

### 1. Real-time Operations Dashboard
A fully simulated "Mission Control" center featuring:
*   **Live Clock Sync**: Tracking 4 major timezones (Singapore, London, NY, Dubai).
*   **Terminal Logs**: An auto-scrolling terminal window showing "system events".
*   **Metric Tickers**: Randomly fluctuating values for Server Load and Latency to mimic a live environment.

### 2. Smart Quote Engine
*   Validates input (Origin/Destination).
*   Calculates estimated shipping time and costs dynamically.
*   Generates a detailed "Quote Receipt" modal.

### 3. Progressive Enhancement
*   **Animations**: Built with CSS `cubic-bezier` for that specific "Apple-like" smooth feel.
*   **Forms**: Interactive inputs with floating labels and validation.

---

## 🚀 Getting Started

### Prerequisites
*   A modern browser (Chrome/Edge/Safari).
*   No `npm install` required!

### running Locally
1.  Clone the repository:
    ```bash
    git clone https://github.com/eugenewu1019/seniboshop.git
    ```
2.  Open `index.html` directly in your browser or use a live server:
    ```bash
    # If you have python installed
    python3 -m http.server
    ```

---

## 📂 Project Structure

```bash
├── index.html       # Main DOM Structure (Tailwind classes)
├── style.css        # Custom Animations & Glassmorphism
├── script.js        # Core Logic (Router, i18n, Interactive State)
├── data.js          # Content Database (Translations, Locations)
└── assets/          # Static assets
```

---

## 👨‍💻 Author

**Eugene Wu**
*   **GitHub**: [@eugenewu1019](https://github.com/eugenewu1019)
*   **Focus**: React, Next.js, High-Performance UI/UX.

---
*Built with ❤️ in 2026.*
