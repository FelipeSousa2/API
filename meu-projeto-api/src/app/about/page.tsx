export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center justify-center p-6">
      {/* Cabeçalho */}
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Sobre Nós</h1>
        <p className="text-lg text-gray-600">
          Conheça mais sobre nossa missão, visão e valores.
        </p>
      </header>

      {/* Conteúdo Principal */}
      <main className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Nossa Missão
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Nossa missão é fornecer soluções inovadoras e de alta qualidade
              para nossos clientes, ajudando-os a alcançar seus objetivos de
              forma eficiente e sustentável.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Nossa Visão
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Queremos ser reconhecidos como líderes no mercado, inspirando
              mudanças positivas e criando um impacto significativo na
              sociedade.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Nossos Valores
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Inovação</li>
              <li>Integridade</li>
              <li>Colaboração</li>
              <li>Sustentabilidade</li>
            </ul>
          </div>
        </section>

        {/* Botão de Ação */}
        <div className="mt-8 text-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Entre em Contato
          </button>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="mt-8 text-center text-gray-500">
        <p>&copy; 2023 Nossa Empresa. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
