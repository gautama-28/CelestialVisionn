import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const galleryImages = [
  { src: 'https://ik.imagekit.io/j3wlbkiu2/gallery-crystals.jpg', alt: 'Dark green crystals and minerals', span: 'row-span-2' },
  { src: 'https://ik.imagekit.io/j3wlbkiu2/gallery-tarot.jpg', alt: 'Vintage tarot deck with gold edges', span: '' },
  { src: 'https://ik.imagekit.io/j3wlbkiu2/gallery-botanical.jpg', alt: 'Moody botanical interior', span: '' },
  { src: 'https://ik.imagekit.io/j3wlbkiu2/gallery-stones.jpg', alt: 'Curated crystal collection', span: '' },
  { src: 'https://ik.imagekit.io/j3wlbkiu2/gallery-candles.jpg', alt: 'Ritual candles and natural elements', span: '' },
];

export function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="gallery" className="section-padding bg-cream-dark" ref={ref}>
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body tracking-wide-premium uppercase text-sage mb-4 block">
            Visual Journey
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-forest mb-4">
            The Aesthetic
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A glimpse into the world of Celestial Visionn where nature meets intention.
          </p>
        </motion.div>

        {/* Gallery Grid - Static, no hover effects */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-lg ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover aspect-square"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
