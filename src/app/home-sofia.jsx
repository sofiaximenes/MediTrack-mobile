import React from "react";
import { View, StyleSheet, Text, Button, TextInput } from "react-native";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Edite seus dados</Text>
        
        <TextInput 
          label="Nome completo" 
          placeholder="Digite seu nome completo" 
          style={styles.input} 
        />
        
        <TextInput 
          label="E-mail" 
          placeholder="Digite seu e-mail" 
          keyboardType="email-address"
          style={styles.input} 
        />
        
        <TextInput 
          label="Senha" 
          placeholder="Digite sua senha" 
          secureTextEntry
          style={styles.input} 
        />
        
        <TextInput 
          label="Data de nascimento" 
          placeholder="Digite sua data de nascimento" 
          style={styles.input} 
        />
        
        <Button mode="contained" style={styles.button} onPress={() => {}}>
          Salvar
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  content: {
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 20,
  },
});
