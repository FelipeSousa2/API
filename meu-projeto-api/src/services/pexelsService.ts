const API_KEY = "OoCQgPc0LPahFshIZP676C5qdBeNcuQrObhaCkyNpa803dR9Pqk5xxW0"; // 👈 Remova antes de commitar!
const BASE_URL = "https://api.pexels.com/v1/";

export const fetchPhotos = async (query: string, perPage: number = 10) => {
  try {
    const response = await fetch(
      `${BASE_URL}search?query=${encodeURIComponent(
        query
      )}&per_page=${perPage}`, // ✅ Codifica caracteres especiais
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`, // ✅ Adicionado 'Bearer'
        },
      }
    );

    if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);

    const data = await response.json();
    return data.photos;
  } catch (error) {
    console.error("Erro na requisição:", error);
    return [];
  }
};
