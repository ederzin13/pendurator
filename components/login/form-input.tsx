import { sen } from "@/assets/fonts/custom-font";
import { typo } from "@/constants/Typography";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

type FormInputProps = {
  label: string;
  placeholder?: string;
  error?: boolean;
  value: string;
  keyboardType?: "number-pad" | "default";
  onChangeText: (text: string) => void;
};

export default function FormInput({
  label,
  placeholder,
  error,
  value,
  keyboardType = "default",
  onChangeText,
}: FormInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.input}>
        <TextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          keyboardType={keyboardType}
        ></TextInput>

        {error && <Text style={styles.error}>This field is mandatory!</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },

  input: {
    height: 40,
    width: 200,
    borderWidth: 2,
    borderColor: "#a6a6a6",
    borderRadius: 5,
    marginBottom: 10,
  },

  label: {
    fontSize: typo.s,
    fontFamily: sen.regular,
  },

  error: {
    fontSize: typo.s,
    fontFamily: sen.regular,
    color: "#530a0a",
  },
});
