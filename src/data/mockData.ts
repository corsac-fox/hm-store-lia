// Временный набор данных для раздела "Товары"

export interface Products {
    id: number;
    name: string;
    price: number;
    image: string;
}

export const mockProducts: Products[] = [
  {
    id: 1,
    name: 'Шоппер с курочкой',
    price: 2700,
    image: '/products/shopper-bag-1.jpg'
  },
  {
    id: 2,
    name: 'Косметичка пчелиная',
    price: 700,
    image: '/products/cosmetic-bag-with-bees-1.jpg'
  },
  {
    id: 3,
    name: 'Сумка Азума-букуро',
    price: 2700,
    image: '/products/shopper-bag-azuma-bukuro-1.jpg'
  },
  {
    id: 4,
    name: 'Сумка с тыквой',
    price: 2000,
    image: '/products/pumpkin-bag-1.jpg'
  },
  {
    id: 5,
    name: 'Панно "Дзениба и Тихиро"',
    price: 2500,
    image: '/products/panel-zeniba-and-chihiro-1.jpg'
  },
  {
    id: 6,
    name: 'Кошелёк с лягушкой',
    price: 950,
    image: '/products/wallet-with-a-frog-1.jpg'
  },
  {
    id: 7,
    name: 'Воротник "Мухоморы"',
    price: 2000,
    image: '/products/collar-with-fly-agarics-1.jpg'
  }
];