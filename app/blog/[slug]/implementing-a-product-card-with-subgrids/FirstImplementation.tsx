import wirelessNoiseCancellingImage from '/public/wireless_noise_canceling_headphones.png';
import Image from 'next/image';

import './FirstImplementation.css';

const product = {
  id: 1,
  category: 'Electronics',
  title: 'Wireless Noise-Canceling Headphones',
  description:
    'Experience immersive sound with our premium wireless noise-canceling headphones.',
  promotionLabels: ['Best Seller!', 'Limited Time: 20% Off!'],
  price: 149.99,
  image: wirelessNoiseCancellingImage.src,
};

export function FirstImplementation() {
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
