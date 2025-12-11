# BioMotion Pro

**BioMotion Pro** é uma ferramenta profissional de análise biomecânica de vídeo desenvolvida para atletas, treinadores e fisioterapeutas. O aplicativo permite análise quadro a quadro, anotações de desenho, observações em áudio e criação de clipes automáticos com zoom.

## 🚀 Funcionalidades

- **Player de Vídeo Avançado**: Controle de velocidade, frame a frame e zoom.
- **Ferramentas de Desenho**: Caneta livre e pontos de marcação para análise angular/postural.
- **Clipes Inteligentes**: Criação automática de loops com zoom em áreas de interesse.
- **Notas de Áudio**: Grave observações de voz sincronizadas com a análise.
- **Suporte PWA**: Instale como aplicativo nativo no Android, iOS e Desktop.
- **Offline First**: Funciona sem internet após o primeiro acesso.
- **Exportação**: Compartilhe análises via arquivo ZIP contendo vídeos, áudios e dados JSON.

## 🛠️ Tecnologias Utilizadas

- **React 18** + **Vite**
- **TypeScript**
- **Tailwind CSS**
- **PWA (Vite Plugin PWA)**
- **JSZip** (Compactação de dados)

## 📦 Como rodar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/biomotion-pro.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Para gerar a versão de produção:
   ```bash
   npm run build
   ```

## 📱 Mobile (Android/iOS)

Este projeto é um **PWA (Progressive Web App)**. Para "transformar" em app:
1. Acesse a URL do projeto no navegador do celular (Chrome no Android, Safari no iOS).
2. Toque em "Compartilhar" (iOS) ou Menu (Android).
3. Selecione **"Adicionar à Tela de Início"**.

O ícone aparecerá como um aplicativo nativo.

## 📄 Licença

Distribuído sob a licença MIT.
