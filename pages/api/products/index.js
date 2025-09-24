export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }
  
    const products = [
      "B08N5WRWNW",
      "B07XJ8C8F5", 
      "B09KXJP123",
      "B08CDAB456",
      "B07MNOP789"
    ];
  
    const productList = products.map(asin => ({
      asin: asin,
      title: `Product ${asin}`,
      url: `${req.headers.host}/api/products/${asin}`
    }));
  
    res.status(200).json({
      products: productList,
      total: products.length
    });
  }