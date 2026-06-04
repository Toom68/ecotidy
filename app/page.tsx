'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';

export default function HomePage() {
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
      {/* Hero Section */}
      <section className="hero" id="home">
        <img
          className="hero__bg"
          src="https://source.unsplash.com/1920x900/?eco-friendly,home,organization"
          alt="Eco-Friendly Home Organization"
        />
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <h1 className="hero__headline">Eco-Friendly Organization Solutions</h1>
          <p className="hero__subtext">Transform your space with sustainable and stylish storage options.</p>
          <div className="hero__actions">
            <a href="#products" className="btn">Shop Now</a>
            <a href="#features" className="btn btn--alt">Learn More</a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trustbar">
        <span className="trustbar__item"><span className="trustbar__icon">🚚</span> Free Shipping over $50</span>
        <span className="trustbar__item"><span className="trustbar__icon">🔄</span> 30-Day Returns</span>
        <span className="trustbar__item"><span className="trustbar__icon">🔒</span> Secure Checkout</span>
        <span className="trustbar__item"><span className="trustbar__icon">🌱</span> Organize Sustainably, Live Beautifully</span>
      </div>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="feature-card" tabIndex={0}>
          <div className="feature-card__icon" aria-hidden="true">♻️</div>
          <div className="feature-card__title">Sustainable Materials</div>
          <div className="feature-card__desc">All EcoTidy products are crafted from renewable or recycled resources, reducing your carbon footprint while keeping your home organized.</div>
        </div>
        <div className="feature-card" tabIndex={0}>
          <div className="feature-card__icon" aria-hidden="true">🧺</div>
          <div className="feature-card__title">Stylish & Versatile</div>
          <div className="feature-card__desc">Our minimalist designs blend seamlessly into any decor, making it easy to organize every room beautifully and efficiently.</div>
        </div>
        <div className="feature-card" tabIndex={0}>
          <div className="feature-card__icon" aria-hidden="true">🌍</div>
          <div className="feature-card__title">Earth-Friendly Impact</div>
          <div className="feature-card__desc">From biodegradable dividers to recycled fabric organizers, every purchase supports a cleaner, greener planet.</div>
        </div>
      </section>

      {/* Products Grid */}
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

      {/* CTA Banner */}
      <section className="cta-banner" id="about">
        <div className="cta-banner__headline">Ready to Organize Sustainably?</div>
        <a href="#products" className="cta-banner__btn">Explore Our Collection</a>
      </section>
    </main>
  );
}
