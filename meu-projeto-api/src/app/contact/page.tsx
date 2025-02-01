export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center justify-center p-6">
      {/* Cabeçalho */}
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Contato</h1>
        <p className="text-lg text-gray-600">
          Entre em contato conosco para dúvidas, sugestões ou parcerias.
        </p>
      </header>

      {/* Conteúdo Principal */}
      <main className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        {/* Formulário de Contato */}
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Seu nome"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="seuemail@exemplo.com"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Escreva sua mensagem..."
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Enviar Mensagem
            </button>
          </div>
        </form>

        {/* Informações de Contato */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Outras Formas de Contato
          </h2>
          <div className="space-y-2 text-gray-600">
            <p>E-mail: contato@empresa.com</p>
            <p>Telefone: (11) 1234-5678</p>
            <p>Endereço: Rua Exemplo, 123 - São Paulo, SP</p>
          </div>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="mt-8 text-center text-gray-500">
        <p>&copy; 2023 Nossa Empresa. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
