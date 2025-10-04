# 🎮 Projeto Sonic com Parallax  

Este projeto é uma implementação em **JavaScript com Canvas** que simula um jogo 2D no estilo clássico, com **parallax dinâmico** e o **Sonic animado e controlável** pelo teclado.  

O objetivo foi explorar **spritesheets**, manipulação de **animações frame a frame** e **camadas de fundo com efeito parallax**.  

---

## 🚀 Funcionalidades  

- ✅ Personagem Sonic animado com spritesheet (3 linhas × 8 colunas).  
- ✅ Movimentação para **esquerda** e **direita** com setas do teclado.  
- ✅ Controle suave das animações usando **requestAnimationFrame**.  
- ✅ Sistema de **parallax** com múltiplas camadas:  
  - Fundo do espaço 🌌  
  - Estrelas ✨  
  - Nuvens ☁️  
- ✅ Estrutura organizada em múltiplos arquivos (`spritesheet.js`, `animacao.js`, `fundo.js`, `sonic.js`, `teclado.js`).  

---

## 📂 Estrutura do Projeto  

```
📁 projeto-sonic
 ├── animacao.js
 ├── fundo.js
 ├── teclado.js
 ├── sonic.js
 ├── spritesheet.js
 ├── index.html
 ├── spritesheet.png
 ├── fundo-espaco.png
 ├── fundo-estrelas.png
 ├── fundo-nuvens.png
 └── README.md
```

---

## ⌨️ Controles  

- ▶️ **Seta Direita** → Sonic corre para a direita.  
- ◀️ **Seta Esquerda** → Sonic corre para a esquerda.  
- ⏹️ Ao soltar as setas → Sonic para na posição inicial.  

---

## 🖼️ Pré-visualização  

### Fundo com Parallax
- Camada 1: Espaço  
- Camada 2: Estrelas  
- Camada 3: Nuvens  

### Sonic Animado
Spritesheet do Sonic rodando em **3 linhas × 8 colunas** para diferentes movimentos.  

---

## ⚙️ Como Executar  

1. Clone o repositório:
   ```bash
   git clone https://github.com/SEU-USUARIO/projeto-sonic.git
   ```
2. Abra o arquivo **index.html** em um navegador moderno (Chrome/Firefox).  
3. Use as setas para movimentar o Sonic e ver o efeito de parallax.  

---

## 📚 Tecnologias Utilizadas  

- **HTML5 Canvas**  
- **JavaScript (ES6)**  
- **Spritesheet Animation**  
- **Efeito Parallax**  

---

## ✨ Melhorias Futuras  

- [ ] Adicionar pulo (tecla espaço).  
- [ ] Incluir inimigos para o Sonic desviar.  
- [ ] Sistema de pontuação.  
- [ ] Sons de movimento e música de fundo.  

---

## 👨‍💻 Autor  

Projeto desenvolvido para fins de estudo em **HTML5 + Canvas + JavaScript**.  
