## Basics

---

## Creating a React Native App

React Native provides two main tools for creating apps: the React Native CLI and Expo CLI. These tools allow you to set up projects and manage builds.

---

### Using React Native CLI

To set up a project with the React Native CLI, follow these steps:

1. Install the <span class="emphasis">React Native CLI</span> globally if not already installed.
2. Use the following command to initialize a new project:

```shell
npx react-native init MyReactNativeApp
```

3. Navigate to the project directory and run the app on your desired platform:
   - For Android:

   ```shell
   npx react-native run-android
   ```

   - For iOS:

   ```shell
   npx react-native run-ios
   ```

   Make sure you have the appropriate <span class="emphasis">emulator</span> or <span class="secondEmphasis">device</span> setup to run the app.

---

### Using Expo CLI

To create and run a project using <span class="emphasis">Expo CLI</span>:

1. Install the <span class="emphasis">Expo CLI</span> globally if not already installed.
2. Initialize a new project with the following command:

```shell
npx expo-cli init MyExpoApp
```

3. Start the project with the command:

```shell
npx expo start
```

4. Use the <span class="emphasis">Expo Go app</span> on your mobile device to scan the QR code and preview the app.

---

## Example: React Native Component with JSX

A simple React Native component using <span class="emphasis">JSX</span>:

```javascript
import React from "react";
import { Text, View } from "react-native";

function HelloWorld() {
  return (
    <View>
      <Text>Hello, World!</Text>
    </View>
  );
}

export default HelloWorld;
```

---

## Adding State with <span class="emphasis">useState</span>

The <span class="emphasis">useState</span> hook allows you to manage <span class="secondEmphasis">state</span> in functional components:

```javascript
import React, { useState } from "react";
import { View, Text, Button } from "react-native";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>You clicked {count} times</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />
    </View>
  );
}

export default Counter;
```

---

## Styling with <span class="emphasis">StyleSheet</span>

React Native uses the <span class="emphasis">StyleSheet API</span> for styling components:

```javascript
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  text: {
    fontSize: 20,
    color: "#333",
  },
});

function StyledComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Styled Text</Text>
    </View>
  );
}

export default StyledComponent;
```

---

## Navigation with <span class="emphasis">React Navigation</span>

<span class="emphasis">React Navigation</span> allows you to handle <span class="secondEmphasis">navigation</span> in React Native apps. Here’s an example of using <span class="emphasis">stack navigation</span>:

```javascript
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, View, Text } from "react-native";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate("Details")} />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View>
      <Text>Details Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

---

## Additional Notes and Future Concepts

This section is reserved for additional notes and concepts you encounter while learning <span class="emphasis">React Native</span>. Possible topics to include:

- <span class="emphasis">Lifecycle methods</span> in functional components.
- Using <span class="secondEmphasis">Context API</span> for global state management.
- Advanced navigation techniques (e.g., <span class="emphasis">drawer navigation</span>).
- Performance optimizations in <span class="emphasis">React Native</span> apps.


