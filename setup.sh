#!/bin/bash

# Verifica se o Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "Node.js não está instalado. Por favor, instale antes de continuar."
    exit 1
fi

# Verifica se o npm está instalado
if ! command -v npm &> /dev/null; then
    echo "npm não está instalado. Por favor, instale antes de continuar."
    exit 1
fi

echo "Node.js e npm detectados. Continuando com a configuração do projeto..."

# Cria o projeto com Vite e React TypeScript
echo "Criando projeto com Vite..."
npx create-vite@latest globalforests --template react-ts

# Navega para o diretório do projeto
cd globalforests || exit

# Instala dependências
echo "Instalando dependências do projeto..."
npm install
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer

# Inicializa o Tailwind CSS
echo "Configurando Tailwind CSS..."
npx tailwindcss init -p

echo "Configuração concluída com sucesso!"
