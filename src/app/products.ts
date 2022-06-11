export interface IProduct {
  id: number;
  description: string;
  composition: string[];
  allergens: string[];
  price: number;
  stock: number;
  picture: string;
  paymentTerms: string;
}

export interface IBasketProduct extends IProduct {
  quantity: number;
}

export const products: IProduct[] = [
  {
    id: 1, description: "Barra de chocolate ao leite", composition: ["Cacau", "Leite", "Baunilha"], allergens: ["Contém lactose"], price: 7.89, stock: 0, picture: "./assets/images/products/1.webp", paymentTerms: "à vista no PIX"
  },
  {
    id: 2, description: "Doce de Leite com Morangos", composition: ["Açúcar", "Leite", "Morango"], allergens: ["Contém lactose"], price: 15.49, stock: 9, picture: "./assets/images/products/2.webp", paymentTerms: "à vista no PIX"
  },
  {
    id: 3, description: "Torta de Abacaxi", composition: ["Farinha de Trigo", "Leite", "Ovo", "Abacaxi"], allergens: ["Contém glúten", "Contém lactose"], price: 19.99, stock: 20, picture: "./assets/images/products/3.webp", paymentTerms: "à vista no PIX"
  },
  {
    id: 4, description: "Bombons Dakazza", composition: ["Cacau", "Leite", "Baunilha"], allergens: ["Contém lactose"], price: 9.99, stock: 15, picture: "./assets/images/products/4.webp", paymentTerms: "à vista no PIX"
  },
  {
    id: 5, description: "Cocada Baiana", composition: ["Coco", "Leite", "Açúcar"], allergens: ["Contém lactose"], price: 3, stock: 0, picture: "./assets/images/products/5.webp", paymentTerms: "à vista no PIX"
  },
  {
    id: 6, description: "Beijinho", composition: ["Leite Ninho", "Açúcar", "Baunilha"], allergens: ["Contém lactose"], price: 1.99, stock: 13, picture: "./assets/images/products/6.webp", paymentTerms: "à vista no PIX"
  },
  {
    id: 7, description: "Sonho", composition: ["Farinha de Trigo", "Leite", "Ovo", "Açúcar"], allergens: ["Contém glúten", "Contém lactose"], price: 3.5, stock: 0, picture: "./assets/images/products/7.webp", paymentTerms: "à vista no PIX"
  },
  {
    id: 8, description: "Bomba de Chocolate", composition: ["Farinha de Trigo", "Chocolate", "Leite"], allergens: ["Contém glúten", "Contém lactose"], price: 3.9, stock: 11, picture: "./assets/images/products/8.webp", paymentTerms: "à vista no PIX"
  },
  {
    id: 9, description: "Bomba de Nutela", composition: ["Farinha de Trigo", "Leite", "Nutela"], allergens: ["Contém glúten", "Contém lactose"], price: 4.5, stock: 0, picture: "./assets/images/products/9.webp", paymentTerms: "à vista no PIX"
  },
  {
    id: 10, description: "Bomba de Leite Ninho", composition: ["Farinha de Trigo", "Leite Ninho", "Baunilha"], allergens: ["Contém glúten", "Contém lactose"], price: 4.5, stock: 10, picture: "./assets/images/products/10.webp", paymentTerms: "à vista no PIX"
  },
  {
    id: 11, description: "Brigadeiro", composition: ["Chocolate", "Leite", "Baunilha"], allergens: ["Contém lactose"], price: 1, stock: 0, picture: "./assets/images/products/11.webp", paymentTerms: "à vista no PIX"
  },
  {
    id: 12, description: "Pudim de Leite Condensado", composition: ["Ovo", "Leite condensado", "Açúcar"], allergens: ["Contém lactose"], price: 3.5, stock: 0, picture: "./assets/images/products/12.webp", paymentTerms: "à vista no PIX"
  }
];
