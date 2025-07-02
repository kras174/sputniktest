enum Currency {
  USD = 'USD',
  EUR = 'EUR',
  RUB = 'RUB',
}

type ProductCartProps = {
  title: string;
  origin: string;
  price?: number;
  currency?: Currency;
  imageUrl?: string;
};

export default function ProductCart(props: ProductCartProps) {
  const {
    title,
    origin,
    price = 34900,
    currency = Currency.RUB,
    imageUrl = 'https://via.placeholder.com/150',
  } = props;

  return (
    <div className="border border-gray-300 rounded-lg p-4 mt-4 flex flex-col gap-4">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="flex-1 flex flex-col justify-center">
        <div className="text-lg font-semibold">
          {new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(price)}
        </div>
        <div className="mt-2 text-sm text-gray-500 font-bold">{title}</div>
        <div className="mt-2 text-sm text-gray-500">{origin}</div>
      </div>
    </div>
  );
}
