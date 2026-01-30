const products = [
    { id: 1, name: "iPhone 14", brand: "Apple", price: 69999 ,image: "/images/apple1.jpg"},
  { id: 2, name: "iPhone 13", brand: "Apple", price: 59999 ,image: "/images/apple2.jpg" },
  { id: 3, name: "iPhone 12", brand: "Apple", price: 49999 ,image: "/images/apple3.jpg" },
  { id: 4, name: "Samsung S23", brand: "Samsung", price: 65999  ,image: "/images/sam1.jpg" },
  { id: 5, name: "Samsung S22", brand: "Samsung", price: 55999  ,image: "/images/sam2.jpg" },
  { id: 6, name: "Samsung A54", brand: "Samsung", price: 30999 , image: "/images/sam3.jpg" },
  { id: 7, name: "Redmi Note 13", brand: "Redmi", price: 20999, image: "/images/mobile.jpg" },
  { id: 8, name: "Redmi Note 12", brand: "Redmi", price: 18999,image: "/images/mobile1.jpg" },
  { id: 9, name: "Redmi 13C", brand: "Redmi", price: 12999, image: "/images/realme13c.jpg" },
  { id: 10, name: "Realme Narzo 60", brand: "Realme", price: 17999, image: "/images/Realme Narzo 60.jpg" },

  { id: 11, name: "Realme 11 Pro", brand: "Realme", price: 25999, image: "/images/Realme 11 Pro.jpg" },
  { id: 12, name: "Vivo V29", brand: "Vivo", price: 32999, image: "/images/Vivo V29.jpg" },
  { id: 13, name: "Vivo Y100", brand: "Vivo", price: 24999, image: "/images/Vivo Y100.jpg" },
  { id: 14, name: "Oppo Reno 10", brand: "Oppo", price: 33999, image: "/images/Oppo Reno 10.jpg" },
  { id: 15, name: "Oppo A78", brand: "Oppo", price: 19999, image: "/images/Oppo A78.jpg" },
    { id: 15, name: "Oppo F31", brand: "Oppo", price: 22999,image: "/images/mobile1.jpg" },

  { id: 16, name: "OnePlus 11", brand: "OnePlus", price: 56999, image: "/images/OnePlus 11.jpg" },
  { id: 17, name: "OnePlus Nord CE 3", brand: "OnePlus", price: 27999, image: "/images/OnePlus Nord CE 3.jpg" },
  { id: 18, name: "Nothing Phone 2", brand: "Nothing", price: 45999, image: "/images/Nothing Phone 2.jpg" },
  { id: 19, name: "Nothing Phone 1", brand: "Nothing", price: 29999, image: "/images/Nothing Phone 1.jpg" },
  { id: 20, name: "Motorola Edge 40", brand: "Motorola", price: 30999, image: "/images/Motorola Edge 40.jpg" },

  { id: 21, name: "Motorola G84", brand: "Motorola", price: 19999, image: "/images/Motorola G84.jpg" },
  { id: 22, name: "Poco X6 Pro", brand: "Poco", price: 26999, image: "/images/Poco X6 Pro.jpg" },
  { id: 23, name: "Poco M6 Pro", brand: "Poco", price: 15999, image: "/images/Poco M6 Pro.jpg" },
  { id: 24, name: "Infinix Zero 30", brand: "Infinix", price: 23999, image: "/images/Infinix Zero 30.jpg" },
  { id: 25, name: "Infinix Note 30", brand: "Infinix", price: 15999, image: "/images/Infinix Note 30.jpg" },

  { id: 26, name: "Samsung F54", brand: "Samsung", price: 35999, image: "/images/Samsung F54.jpg" },
  { id: 27, name: "Samsung M34", brand: "Samsung", price: 18999, image: "/images/Samsung M34.jpg" },
  { id: 28, name: "Redmi K50i", brand: "Redmi", price: 26999, image: "/images/Redmi K50i.jpg" },
  { id: 29, name: "Realme C55", brand: "Realme", price: 13999, image: "/images/Realme C55.jpg" },
  { id: 30, name: "Vivo T2", brand: "Vivo", price: 16999, image: "/images/Vivo T2.jpg" },

  { id: 31, name: "Oppo F23", brand: "Oppo", price: 25999, image: "/images/Oppo F23.jpg" },
  { id: 32, name: "OnePlus Nord 2T", brand: "OnePlus", price: 30999, image: "/images/OnePlus Nord 2T.jpg" },
  { id: 33, name: "Motorola G54", brand: "Motorola", price: 15999, image: "/images/Motorola G54.jpg" },
  { id: 34, name: "Poco F5", brand: "Poco", price: 29999, image: "/images/Poco F5.jpg" },
  { id: 35, name: "Nothing CMF Phone", brand: "Nothing", price: 20999, image: "/images/Nothing CMF Phone.jpg" },

  { id: 36, name: "iPhone SE", brand: "Apple", price: 45999, image: "/images/iPhone SE.jpg" },
  { id: 37, name: "iPhone 11", brand: "Apple", price: 42999, image: "/images/iPhone 11.jpg" },
  { id: 38, name: "Samsung Z Flip", brand: "Samsung", price: 90999, image: "/images/Samsung Z Flip.jpg" },
  { id: 39, name: "Vivo X90", brand: "Vivo", price: 60999, image: "/images/Vivo X90.jpg" },
  { id: 40, name: "Oppo Find X5", brand: "Oppo", price: 50999, image: "/images/Oppo Find X5.jpg" },

  { id: 41, name: "Realme GT Neo", brand: "Realme", price: 35999, image: "/images/Realme GT Neo.jpg" },
  { id: 42, name: "Redmi 12", brand: "Redmi", price: 11999, image: "/images/Redmi 12.jpg" },
  { id: 43, name: "Poco C55", brand: "Poco", price: 9999, image: "/images/Poco C55.jpg" },
  { id: 44, name: "Motorola E13", brand: "Motorola", price: 8999,   image: "/images/Motorola E13.jpg" },
  { id: 45, name: "Infinix Smart 8", brand: "Infinix", price: 7999, image: "/images/Infinix Smart 8.jpg" },

  { id: 46, name: "Samsung A15", brand: "Samsung", price: 14999, image: "/images/Samsung A15.jpg" },
  { id: 47, name: "Vivo Y27", brand: "Vivo", price: 15999, image: "/images/Vivo Y27.jpg" },
  { id: 48, name: "Oppo K11x", brand: "Oppo", price: 20999, image: "/images/Oppo K11x.jpg" },
  { id: 49, name: "OnePlus 10R", brand: "OnePlus", price: 38999, image: "/images/OnePlus 10R.jpg" },
  { id: 50, name: "Nothing Phone Lite", brand: "Nothing", price: 18999, image: "/images/Nothing Phone Lite.jpg" },
  ];

export default products;
