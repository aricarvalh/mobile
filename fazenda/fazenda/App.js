import React, { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";
import Login from "./src/telas/Login";
import Cadastro from "./src/telas/Cadastro";
import Cesta from "./src/telas/Cesta";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [telaAtual, setTelaAtual] = useState("Login"); // controle de telas

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const itens = [
    { id: "1", nome: "Alface", imagem: "https://cdn.awsli.com.br/2500x2500/1982/1982052/produto/174027508/53c931b15d.jpg"},
    { id: "2", nome: "Tomate", imagem: "https://www.infoescola.com/wp-content/uploads/2011/01/tomate_345187874.jpg" },
    { id: "3", nome: "Cenoura", imagem: "https://cdn.awsli.com.br/300x300/2283/2283132/produto/273214079/bffac282bd2d4c0bd7d9ae4bfb1c21c8-mg2d7de0qz.jpeg" },
    { id: "4", nome: "Batata", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_z4I9RjESPVAM_Er72KgA_vCB9_oIE0EJsw&s" },
  ];

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
        <Image source={require("./assets/splash.png")} style={{ width: 200, height: 200, resizeMode: "contain" }} />
        <Text style={{ marginTop: 20, fontSize: 18, fontWeight: "bold" }}>Compras App</Text>
      </View>
    );
  }

  if (telaAtual === "Login") {
    return (
      <Login
        irParaCatalogo={() => setTelaAtual("Cesta")}
        irParaCadastro={() => setTelaAtual("Cadastro")}
      />
    );
  }

  if (telaAtual === "Cadastro") {
    return <Cadastro voltar={() => setTelaAtual("Login")} />;
  }

  return (
    <Cesta
      nome="Cesta de Verduras"
      fazenda="Fazenda Boa Terra"
      preco="R$ 40,00"
      imagemFazenda="https://img.freepik.com/vetores-gratis/cesta-de-compras-com-ilustracao-vetorial-de-comida-carrinho-com-compra-do-produto-no-supermercado-ilustracao-vetorial_1284-47048.jpg?semt=ais_hybrid&w=740&q=80"
      itens={itens}
    />
  );
}

