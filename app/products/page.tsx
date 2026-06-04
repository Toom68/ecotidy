'use client';
import React, { useEffect } from 'react';

export default function ProductsPage() {
  useEffect(() => {
    // Micro-interaction: Add to Cart
    const btns = document.querySelectorAll('.product-card__btn');
    btns.forEach(btn => {
      btn.addEventListener('click', function handleClick(this: HTMLButtonElement) {
        this.textContent = 'Added!';
        this.disabled = true;
        (this as HTMLButtonElement).style.background = 'var(--color-accent)';
        setTimeout(() => {
          this.textContent = 'Add to Cart';
          this.disabled = false;
          (this as HTMLButtonElement).style.background = '';
        }, 1200);
      });
    });
    return () => {
      btns.forEach(btn => {
        btn.replaceWith(btn.cloneNode(true));
      });
    };
  }, []);

  return (
    <main>
      <section className="products-section" id="products">
        <div className="products-grid">
          {/* Product 1 */}
          <div className="product-card" tabIndex={0}>
            <div className="product-card__badge">Best Seller</div>
            <img
              className="product-card__img"
              src="https://source.unsplash.com/600x400/?bamboo,storage,bin"
              alt="Bamboo Storage Bins"
            />
            <div className="product-card__body">
              <div className="product-card__title">Bamboo Storage Bins</div>
              <div className="product-card__price">$39.00</div>
              <button className="product-card__btn" aria-label="Add Bamboo Storage Bins to cart">Add to Cart</button>
            </div>
          </div>
          {/* Product 2 */}
          <div className="product-card" tabIndex={0}>
            <img
              className="product-card__img"
              src="https://source.unsplash.com/600x400/?closet,organizer,recycled,fabric"
              alt="Recycled Fabric Closet Organizers"
            />
            <div className="product-card__body">
              <div className="product-card__title">Recycled Fabric Closet Organizers</div>
              <div className="product-card__price">$54.00</div>
              <button className="product-card__btn" aria-label="Add Recycled Fabric Closet Organizers to cart">Add to Cart</button>
            </div>
          </div>
          {/* Product 3 */}
          <div className="product-card" tabIndex={0}>
            <img
              className="product-card__img"
              src="https://source.unsplash.com/600x400/?drawer,divider,biodegradable"
              alt="Biodegradable Drawer Dividers"
            />
            <div className="product-card__body">
              <div className="product-card__title">Biodegradable Drawer Dividers</div>
              <div className="product-card__price">$27.00</div>
              <button className="product-card__btn" aria-label="Add Biodegradable Drawer Dividers to cart">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
