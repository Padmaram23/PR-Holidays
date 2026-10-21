import React, { useState } from 'react';
import { ShoppingCart, X, Plus, Minus, ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import SiteHeader from '@/components/site/SiteHeader';
import SiteFooter from '@/components/site/SiteFooter';
import HashScroller from '@/components/site/HashScroller';
import SectionLabel from '@/components/site/SectionLabel';
import Motif from '@/components/site/Motif';
import { images } from '@/data/images';

// ─── Mock product catalogue ───────────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 'tb-01',
    category: 'Traditional Dolls',
    name: 'Thalaiyatti Bommai',
    subtitle: 'Hand-painted terracotta, Thanjavur tradition',
    description:
      'A classic Thanjavur "nodding-head" doll depicting a temple dancer in full regalia. Crafted from terracotta and gessoed with chalk, then finished with natural pigments and real gold leaf detail. Each piece takes three days to make.',
    price: 280,
    unit: '₹',
    image: images.dollPair,
    badge: 'Bestseller',
  },
  {
    id: 'tb-02',
    category: 'Kalamkari',
    name: 'Devi Saraswati Kalamkari Painting',
    subtitle: 'Hand-painted terracotta, Thanjavur tradition',
    description:
      'Lord Nataraja in the cosmic dance pose, rendered as a traditional Thanjavur nodding doll. Gold leaf accents on the prabhavali ring catch the light with every breeze. A collector\'s heirloom.',
    price: 3400,
    unit: '₹',
    image: images.DeviSaraswatiPainting,
    badge: 'Limited',
  },
  
];

const CATEGORIES = ['All', ...Array.from(new Set(PRODUCTS.map((p) => p.category)))];

function formatPrice(price) {
  return `₹${price.toLocaleString('en-IN')}`;
}

// ─── Cart context (local state) ───────────────────────────────────────────────
function useCart() {
  const [items, setItems] = useState([]);

  const add = (product) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const remove = (id) => setItems((prev) => prev.filter((i) => i.id !== id));

  const updateQty = (id, delta) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0)
    );
  };

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const count = items.reduce((sum, i) => sum + i.qty, 0);

  return { items, add, remove, updateQty, total, count };
}

// ─── Product card ─────────────────────────────────────────────────────────────
function ProductCard({ product, onAdd, inCart }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col border border-heritage-charcoal/10 bg-white"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-heritage-sand">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 bg-heritage-maroon px-2 py-0.5 text-[9px] uppercase tracking-[0.2em] text-heritage-ivory">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-[9px] uppercase tracking-[0.25em] text-heritage-bronze">
          {product.category}
        </p>
        <h3 className="font-heading text-[1.15rem] leading-snug text-heritage-charcoal">
          {product.name}
        </h3>
        <p className="text-[11px] text-heritage-earth/60 italic">{product.subtitle}</p>
        <p className="mt-1 flex-1 text-[0.85rem] leading-relaxed text-heritage-charcoal/70">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-heritage-charcoal/8 pt-4">
          <span className="font-heading text-[1.25rem] text-heritage-charcoal">
            {formatPrice(product.price)}
          </span>
          <button
            type="button"
            onClick={() => onAdd(product)}
            className={`flex items-center gap-2 border px-4 py-2 text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
              inCart
                ? 'border-heritage-maroon bg-heritage-maroon text-heritage-ivory'
                : 'border-heritage-charcoal/30 text-heritage-charcoal hover:border-heritage-maroon hover:bg-heritage-maroon hover:text-heritage-ivory'
            }`}
          >
            {inCart ? 'Add More' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Cart drawer ──────────────────────────────────────────────────────────────
function CartDrawer({ cart, open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-heritage-charcoal/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.aside
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-0 right-0 top-0 z-50 flex w-full max-w-[420px] flex-col bg-heritage-ivory shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-heritage-charcoal/10 px-6 py-4">
              <span className="font-heading text-[1.2rem] text-heritage-charcoal">
                Your Cart ({cart.count})
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close cart"
                className="inline-flex h-9 w-9 items-center justify-center border border-heritage-charcoal/20 transition-colors hover:bg-heritage-charcoal/5"
              >
                <X className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-5">
              {cart.items.length === 0 ? (
                <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
                  <Motif className="h-5 w-32 text-heritage-bronze/50" />
                  <p className="font-heading text-[1.1rem] text-heritage-charcoal/60">
                    Your cart is empty.
                  </p>
                  <p className="text-[0.82rem] text-heritage-earth/50">
                    Add a piece of Tamil heritage to begin.
                  </p>
                </div>
              ) : (
                <ul className="space-y-4">
                  {cart.items.map((item) => (
                    <li
                      key={item.id}
                      className="flex gap-4 border-b border-heritage-charcoal/8 pb-4"
                    >
                      <div className="h-20 w-20 flex-shrink-0 overflow-hidden bg-heritage-sand">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col gap-1">
                        <p className="text-[11px] uppercase tracking-[0.18em] text-heritage-bronze">
                          {item.category}
                        </p>
                        <p className="font-heading text-[0.95rem] leading-snug text-heritage-charcoal">
                          {item.name}
                        </p>
                        <p className="mt-auto text-[0.88rem] text-heritage-charcoal/70">
                          {formatPrice(item.price)}
                        </p>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <button
                          type="button"
                          onClick={() => cart.remove(item.id)}
                          aria-label="Remove item"
                          className="text-heritage-earth/40 hover:text-heritage-maroon"
                        >
                          <X className="h-3.5 w-3.5" strokeWidth={1.5} />
                        </button>
                        <div className="flex items-center gap-2 border border-heritage-charcoal/15">
                          <button
                            type="button"
                            onClick={() => cart.updateQty(item.id, -1)}
                            aria-label="Decrease quantity"
                            className="flex h-7 w-7 items-center justify-center text-heritage-charcoal/60 hover:bg-heritage-sand"
                          >
                            <Minus className="h-3 w-3" strokeWidth={1.5} />
                          </button>
                          <span className="min-w-[1.5rem] text-center text-[0.82rem] text-heritage-charcoal">
                            {item.qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => cart.updateQty(item.id, 1)}
                            aria-label="Increase quantity"
                            className="flex h-7 w-7 items-center justify-center text-heritage-charcoal/60 hover:bg-heritage-sand"
                          >
                            <Plus className="h-3 w-3" strokeWidth={1.5} />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {cart.items.length > 0 && (
              <div className="border-t border-heritage-charcoal/10 px-6 py-6">
                <div className="mb-5 flex items-baseline justify-between">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-heritage-earth/60">
                    Order Total
                  </span>
                  <span className="font-heading text-[1.4rem] text-heritage-charcoal">
                    {formatPrice(cart.total)}
                  </span>
                </div>
                <p className="mb-4 text-[11px] leading-relaxed text-heritage-earth/55">
                  This is a demonstration store. No real payment will be processed. Shipping and
                  final pricing are confirmed on enquiry.
                </p>
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-3 bg-heritage-maroon px-6 py-4 text-[10px] uppercase tracking-[0.24em] text-heritage-ivory transition-opacity hover:opacity-90"
                >
                  Enquire to Order
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Shop() {
  const cart = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-background">
      <HashScroller />
      <SiteHeader />

      {/* Floating cart button */}
      <button
        type="button"
        onClick={() => setCartOpen(true)}
        aria-label={`Open cart (${cart.count} items)`}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center bg-heritage-maroon text-heritage-ivory shadow-lg transition-transform hover:scale-105"
      >
        <ShoppingCart className="h-5 w-5" strokeWidth={1.5} />
        {cart.count > 0 && (
          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center bg-heritage-charcoal text-[10px] text-heritage-ivory">
            {cart.count}
          </span>
        )}
      </button>

      <CartDrawer cart={cart} open={cartOpen} onClose={() => setCartOpen(false)} />

      <main>
        {/* Hero */}
        <section className="relative isolate flex min-h-[56svh] items-end overflow-hidden bg-heritage-charcoal">
          <div className="absolute inset-0">
            <img
              src={images.shopCover}
              alt="Hand-crafted Tamil heritage artefacts"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 veil-hero" />
          </div>
          <div className="relative mx-auto w-full max-w-[1180px] px-6 pb-16 pt-36 sm:px-8 sm:pb-20">
            <SectionLabel tone="light">Heritage Shop</SectionLabel>
            <h1 className="mt-7 max-w-3xl text-balance font-heading text-[clamp(2.3rem,6vw,4.8rem)] font-light leading-[1.02] text-heritage-ivory">
              Carry a Piece of Tamil Culture Home.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-[1rem] leading-[1.8] text-heritage-ivory/80">
              Thalaiyatti Bommai dolls, Pragadeeswaran temple paintings, Kanjivaram silk, and
              more — each piece is made by artisans whose families have practised their craft for
              generations.
            </p>
          </div>
        </section>

        {/* Products */}
        <section className="bg-background py-20 md:py-24 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-14">
            {/* Section heading + filter */}
            <div className="flex flex-col gap-6 border-b border-heritage-charcoal/15 pb-10 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <SectionLabel>The Collection</SectionLabel>
                <h2 className="mt-6 text-balance font-heading text-[clamp(1.85rem,3.4vw,2.9rem)] font-light leading-[1.12] text-heritage-charcoal">
                  Handmade. Heritage. Meaningful.
                </h2>
              </div>
              {/* Category filter */}
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`border px-4 py-2 text-[10px] uppercase tracking-[0.2em] transition-colors duration-200 ${
                      activeCategory === cat
                        ? 'border-heritage-maroon bg-heritage-maroon text-heritage-ivory'
                        : 'border-heritage-charcoal/25 text-heritage-charcoal/70 hover:border-heritage-maroon hover:text-heritage-maroon'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <motion.div
              layout
              className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAdd={cart.add}
                    inCart={cart.items.some((i) => i.id === product.id)}
                  />
                ))}
              </AnimatePresence>
            </motion.div>

            <div className="mt-20 text-center">
              <Motif className="mx-auto h-4 w-36 text-heritage-bronze/60" />
              <p className="mx-auto mt-8 max-w-md font-heading text-[1.4rem] italic leading-snug text-heritage-earth/70">
                All prices are indicative. Final costs and shipping are confirmed on enquiry.
              </p>
              <p className="mx-auto mt-3 max-w-sm text-[0.82rem] leading-relaxed text-heritage-earth/50">
                This is a demonstration store — no real transactions occur.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

