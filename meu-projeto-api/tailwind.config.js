/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',   // Diretório das páginas
    './src/app/**/*.{js,ts,jsx,tsx}', // Para que ele busque arquivos também dentro de 'src/app'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

