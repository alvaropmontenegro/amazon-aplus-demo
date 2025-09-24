// src/app/api/hello/route.js

export async function GET(request) {
  const mockData = {
    "asin": "B08N5WRWNW",
    "title": "Nome do Produto",
    "description": "Descrição completa",
    "bullet_points": ["Ponto 1", "Ponto 2"],
    "images": {
      "primary": "url_imagem_principal",
      "gallery": ["url1", "url2", "url3"]
    },
    "specifications": {
      "dimensions": "10x10x10",
      "weight": "1kg",
      "material": "Plástico"
    },
    "pricing": {
      "current_price": 99.99,
      "currency": "USD"
    }
  };

  return Response.json(mockData);
}