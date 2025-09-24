// src/app/api/hello/route.js

export async function GET(request) {

  const price = Math.floor(Math.random() * (150 - 90 + 1)) + 90;

  const mockData = {
    "asin": "B08N5WRWNW",
    "title": "16-Port Fast Ethernet Unmanaged Desktop Switch DES-1016D",
    "description": "With the D-Link 16-Port Fast Ethernet Unmanaged Switches, you can easily expand your business or home network by adding more computers and devices, each achieving speeds up to 200 Mbps per port in full-duplex mode. Quickly and securely connect employees working in small offices with one another and with all of the servers, printers, and other devices they use.",
    "bullet_points": ["Point 1", "Point 2"],
    "images": {
      "primary": "url_imagem_main",
      "gallery": ["url1", "url2", "url3"]
    },
    "specifications": {
      "dimensions": "10x10x10",
      "weight": "1kg",
      "material": "Plastic"
    },
    "pricing": {
      "current_price": {price},
      "currency": "USD"
    }
  };

  return Response.json(mockData);
}