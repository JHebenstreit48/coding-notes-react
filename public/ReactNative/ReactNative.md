# Basics

---

<span class="emphasis">React Native</span> enables developers to build <span class="emphasis">mobile applications</span> using <span class="emphasis">JavaScript</span> and <span class="emphasis">React</span>. It allows cross-platform development for <span class="emphasis">iOS</span> and <span class="emphasis">Android</span> using a single codebase.

---

## What is React Native?

---

React Native builds upon React.js, which is:

- **React.js**: A JavaScript library for building user interfaces, primarily used for web development.
  - Note: React.js is made web-compatible by **React-DOM**, not React itself.
  - React itself is platform-agnostic.

- **React Native**: A collection of special React components designed to compile down to native UI elements for mobile platforms.
  - React Native enables creating real native mobile apps for **iOS** and **Android**.
  - Unlike React-DOM, React Native components are compiled into native mobile UI elements.
  - Provides access to **native platform APIs** (e.g., Camera, Geolocation) to interact with mobile hardware and system features directly via JavaScript.
  - Acts as a bridge, connecting React to native platforms like iOS and Android, similar to how React-DOM connects React to the web.

---

## Differences Between React JS and React Native

---

React JS and React Native share a foundation in React but differ significantly in their purpose, components, and styling.

### Purpose

<span class="bullet2">

- **React JS**: Used to build web applications that run in the browser.
- **React Native**: Used to build mobile applications, including:
  1. **Non-game applications**: Business apps, social apps, productivity tools.
  2. **Games**: Simple or 2D games, such as puzzles, quizzes, or turn-based games.

</span>

---

### Games vs Non-Game Applications in React Native

React Native’s suitability for games depends on the complexity and performance requirements of the game:

#### **Games**
<span class="bullet3">
- Best for lightweight, 2D games or games with simple interactivity.
- Examples: Quiz games, card games, turn-based games.
- Limited for graphics-intensive or real-time 3D games due to performance constraints.
</span>

#### **Non-Game Applications**
<span class="bullet3">
- Ideal for creating cross-platform mobile apps.
- Examples: Messaging apps, e-commerce platforms, productivity tools, or social networking apps.
- Offers seamless integration with native mobile APIs like Camera and Geolocation.
</span>

---

## Tools and Extensions

---

<span class="emphasis">VS Code Extensions</span> that enhance React Native development:

<span class="bullet1">

- **React Native Tools**: Debug and run React Native apps.
- **Prettier**: Format your code consistently.
- **ESLint**: Ensure code quality.
- **Expo Tools**: Specifically for Expo projects.

</span>

---

## React and Platform Agnosticism

---

<span class="emphasis">React</span> is platform-agnostic, providing tools for managing state and building virtual component trees. For actual rendering, external libraries are used:

- **React-DOM**: Converts React components to browser-compatible HTML, CSS, and JavaScript.
- **React Native**: Converts React components into native UI elements for mobile platforms.

React itself focuses on defining the logic and structure of components, leaving the platform-specific rendering to libraries like React-DOM and React Native.

---

## How to Create a React Native App

---

React Native apps can be created using either the **React Native CLI** or **Expo CLI**. Both approaches provide tools for developing cross-platform mobile applications.

---

### Using React Native CLI

---

1. Ensure you have the required tools installed for React Native CLI, including a development environment for Android or iOS.
2. Set up a new React Native project by following the official React Native documentation for the CLI.
3. Use an emulator or a connected mobile device to run and test your project.

---

### Using Expo CLI

---

1. Make sure you have the tools required for Expo development.
2. Create a new React Native project using Expo by following the guidelines in the Expo documentation.
3. Open the project in the Expo Go app on your mobile device to preview and test your application.

---

### Notes

- React Native CLI offers full access to native code and customization but requires setting up Android Studio or Xcode.
- Expo CLI simplifies the setup process and is ideal for beginners but has limited access to native code.

---

## Leveraging Native APIs with React Native

---

React Native allows developers to interact with a device’s native features, such as:

- **Camera**: Access the device's camera to capture photos or videos.
- **Location Services**: Use GPS to get the device's location.
- **Other Features**: Access hardware like accelerometers, gyroscopes, and more.

This capability is achieved by bridging JavaScript code with native APIs, enabling seamless integration of mobile hardware into your application.

---

## Placeholder for Additional Notes

---
