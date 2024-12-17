
## React Native Basics

---

A simple React Native component using JSX:

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
## Adding State with useState
---

The useState hook allows you to manage state in functional components:

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
## Styling with StyleSheet
---

React Native uses the StyleSheet API for styling components:

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
## Navigation with React Navigation
---

React Navigation allows you to handle navigation in React Native apps. Here’s an example of using stack navigation:

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


