import { StatusBar } from "expo-status-bar";

import React, { cloneElement } from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  Alert,
} from "react-native";

import { useState } from "react"; //
import LandingP from "./src/LandingP";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <LandingP></LandingP>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#514F59",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    color: "#000",
    backgroundColor: "#514F59",
  },
});
