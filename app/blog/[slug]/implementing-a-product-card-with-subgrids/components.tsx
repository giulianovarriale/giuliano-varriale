import wirelessNoiseCancellingImage from '/public/wireless_noise_canceling_headphones.png';
import Image from 'next/image';
import './components.css';

const products = [
  {
    id: 1,
    category: 'Electronics',
    title: 'Wireless Noise-Canceling Headphones',
    description:
      'Experience immersive sound with our premium wireless noise-canceling headphones.',
    promotionLabels: ['Best Seller!', 'Limited Time: 20% Off!'],
    price: 149.99,
    image: wirelessNoiseCancellingImage.src,
  },
  {
    id: 2,
    category: 'Furniture',
    title: 'Ergonomic Office Chair',
    description:
      'Upgrade your workspace with our ergonomic office chair, designed for all-day comfort.',
    promotionLabels: [],
    price: 199.59,
    image: wirelessNoiseCancellingImage.src,
  },
  {
    id: 3,
    category: 'Wearable Tech and Advanced Fitness Tracking Devices',
    title: 'Smartwatch with Fitness Tracking',
    description:
      'Stay on top of your health and notifications with our advanced smartwatch.',
    promotionLabels: ['New Arrival!'],
    price: 129.99,
    image: wirelessNoiseCancellingImage.src,
  },
  {
    id: 4,
    category: 'Kitchen',
    title: 'Professional Blender',
    description:
      'Blend, mix, and puree with ease using our professional-grade blender. Features a powerful motor, multiple speed settings, and durable stainless steel blades.',
    promotionLabels: ['Best Seller!', 'Limited Time: 15% Off!'],
    price: 79.99,
    image: wirelessNoiseCancellingImage.src,
  },
];

export function InitialDesign() {
  const product = products[0];

  return (
    <div className="preview-background">
      <div className="product-card">
        <div className="product-card__header">
          <p className="product-card__category">{product.category}</p>

          <Image
            src={product.image}
            width={200}
            height={200}
            alt={product.title}
            className="product-card__image"
          />
        </div>

        <div className="product-card__content">
          <h2 className="product-card__title">{product.title}</h2>
          <p className="product-card__description">{product.description}</p>
        </div>

        <div className="product-card__footer">
          <div className="product-card__promo-labels">
            {product.promotionLabels.map((label, index) => (
              <div
                key={index}
                className={`product-card__promo-label product-card__promo-label--${index}`}
              >
                {label}
              </div>
            ))}
          </div>

          <p className="product-card__price">{product.price}</p>
        </div>
      </div>
    </div>
  );
}

export function WithRealData() {
  return (
    <div className="preview-background">
      <div className="product-cards">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-card__header">
              <p className="product-card__category">{product.category}</p>

              <Image
                src={product.image}
                width={200}
                height={200}
                alt={product.title}
                className="product-card__image"
              />
            </div>

            <div className="product-card__content">
              <h2 className="product-card__title">{product.title}</h2>
              <p className="product-card__description">{product.description}</p>
            </div>

            <div className="product-card__footer">
              <div className="product-card__promo-labels">
                {product.promotionLabels.map((label, index) => (
                  <div
                    key={index}
                    className={`product-card__promo-label product-card__promo-label--${index}`}
                  >
                    {label}
                  </div>
                ))}
              </div>

              <p className="product-card__price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function WithSubgrid() {
  return (
    <div className="preview-background">
      <div className="product-cards product-cards--subgrid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-card__header">
              <p className="product-card__category">{product.category}</p>

              <Image
                src={product.image}
                width={200}
                height={200}
                alt={product.title}
                className="product-card__image"
              />
            </div>

            <div className="product-card__content">
              <h2 className="product-card__title">{product.title}</h2>
              <p className="product-card__description">{product.description}</p>
            </div>

            <div className="product-card__footer">
              <div className="product-card__promo-labels">
                {product.promotionLabels.map((label, index) => (
                  <div
                    key={index}
                    className={`product-card__promo-label product-card__promo-label--${index}`}
                  >
                    {label}
                  </div>
                ))}
              </div>

              <p className="product-card__price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
