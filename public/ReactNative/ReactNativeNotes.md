# React Native Notes

---

<span class="emphasis">React Native</span> enables developers to build <span class="emphasis">mobile applications</span> using <span class="emphasis">JavaScript</span> and <span class="emphasis">React</span>. It allows cross-platform development for <span class="emphasis">iOS</span> and <span class="emphasis">Android</span> using a single codebase.

---

## Differences Between React JS and React Native

---

React JS and React Native share a foundation in React but differ significantly in their purpose, components, and styling.

### Purpose

<span class="bullet2">

- **React JS**: Used to build web applications that run in the browser.
- **React Native**: Used to build mobile applications, including:
  - **Non-game applications**: Business apps, social apps, productivity tools.
  - **Games**: Simple or 2D games, such as puzzles, quizzes, or turn-based games.

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

## How to Create a React Native App

---

React Native apps can be created using either the **React Native CLI** or **Expo CLI**. Both approaches provide tools for developing cross-platform mobile applications.

---

### Using React Native CLI

---

1. Install React Native CLI.
2. Initialize the project using the `npx react-native init` command.
3. Run the project on an emulator (Android or iOS) or a connected device.

---

### Using Expo CLI

---

1. Install Expo CLI.
2. Initialize the project using the `npx expo-cli init` command.
3. Start the project and scan the QR code using the Expo Go app.

---

### Notes

- React Native CLI offers full access to native code and customization but requires setting up Android Studio or Xcode.
- Expo CLI simplifies the setup process and is ideal for beginners but has limited access to native code.

---
