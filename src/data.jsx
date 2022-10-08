import {
  CardGiftcard,
  Checkroom,
  VolunteerActivism,
} from "@mui/icons-material";

export const feedbacks = [
  {
    id: 1,
    name: "Super travail !",
    message: "Un magnifique avis pour un magnifique travail.",
    note: 5,
  },
  {
    id: 2,
    name: "Super travail !",
    message: "Un magnifique avis pour un magnifique travail.",
    note: 3,
  },
  {
    id: 3,
    name: "Super travail !",
    message: "Un magnifique avis pour un magnifique travail.",
    note: 2,
  },
  {
    id: 4,
    name: "Super travail !",
    message: "Un magnifique avis pour un magnifique travail.",
    note: 5,
  },
  {
    id: 5,
    name: "Super travail !",
    message: "Un magnifique avis pour un magnifique travail.",
    note: 4,
  },
  {
    id: 6,
    name: "Super travail !",
    message: "Un magnifique avis pour un magnifique travail.",
    note: 4,
  },
];

export const categories = [
  {
    id: 1,
    icon: <Checkroom fontSize="large" />,
    img: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Broderie personnalisée",
  },
  {
    id: 2,
    icon: <CardGiftcard fontSize="large" />,
    img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Cadeau anniversaire",
  },
  {
    id: 3,
    icon: <VolunteerActivism fontSize="large" />,
    img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "Confections",
  },
];

export const products = [
  {
    id: 1,
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    name: "T-shirt",
    category: "Broderie personnalisée",
    price: 20,
    maxStock: 20,
  },
  {
    id: 2,
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    name: "T-shirt",
    category: "Cadeau anniversaire",
    price: 20,
    maxStock: 20,
  },
  {
    id: 3,
    img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
    name: "T-shirt",
    category: "Confections",
    price: 20,
    maxStock: 20,
  },
  {
    id: 4,
    img: "https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
    name: "T-shirt",
    category: "Confections",
    price: 20,
    maxStock: 20,
  },
  {
    id: 5,
    img: "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
    name: "T-shirt",
    category: "Confections",
    price: 20,
    maxStock: 20,
  },
  {
    id: 6,
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    name: "T-shirt",
    category: "Broderie personnalisée",
    price: 20,
    maxStock: 20,
  },
  {
    id: 7,
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    name: "T-shirt",
    category: "Broderie personnalisée",
    price: 20,
    maxStock: 20,
  },
  {
    id: 8,
    img: "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
    name: "T-shirt",
    category: "Broderie personnalisée",
    price: 20,
    maxStock: 20,
  },
];

export const productFilters = {
  colors: [
    { name: "Blanc", value: "white" },
    { name: "Noir", value: "black" },
    { name: "Rouge", value: "red" },
    { name: "Bleue", value: "blue" },
    { name: "Jaune", value: "yellow" },
    { name: "Vert", value: "green" },
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  others: ["Nouveau", "Prix (asc)", "Prix (desc)"],
};
