import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initAnimations();
  initScrollAnimations();
  addInteractiveEffects();
  setupNavigation();
  setupProgressBar();
});

function initAnimations() {
  // Hero section animations
  const heroTimeline = gsap.timeline({ delay: 0.5 });
  
  // Set initial states
  gsap.set('#hero-badge', { y: 30, scale: 0.8 });
  gsap.set('#main-title', { y: 80, rotationX: 15 });
  gsap.set('#hero-description', { y: 50, opacity: 0 });
  gsap.set('#price-container', { scale: 0.8, rotationY: 15 });
  gsap.set('#hero-cta', { y: 40 });
  gsap.set('#hero-image', { x: 100, scale: 0.9 });
  gsap.set('#scroll-indicator', { y: 20 });

  heroTimeline
    .to('#hero-badge', {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: 'back.out(1.7)'
    })
    .to('#main-title', {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 1.2,
      ease: 'power3.out'
    }, '-=0.4')
    .to('#hero-description', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out'
    }, '-=0.8')
    .to('#price-container', {
      opacity: 1,
      scale: 1,
      rotationY: 0,
      duration: 1,
      ease: 'back.out(1.7)'
    }, '-=0.6')
    .to('#hero-cta', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.4')
    .to('#hero-image', {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 1.2,
      ease: 'power3.out'
    }, '-=1')
    .to('#scroll-indicator', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.3');

  // Floating animations
  gsap.to('#hero-image img', {
    y: -15,
    duration: 3,
    ease: 'power2.inOut',
    yoyo: true,
    repeat: -1
  });

  // Price highlight animation
  gsap.to('#price-container .text-5xl', {
    scale: 1.05,
    duration: 2,
    ease: 'power2.inOut',
    yoyo: true,
    repeat: -1
  });
}

function initScrollAnimations() {
  // Product section animations
  gsap.fromTo('#product-title', 
    { opacity: 0, y: 60, scale: 0.9 },
    {
      opacity: 1, y: 0, scale: 1, duration: 1, ease: 'back.out(1.7)',
      scrollTrigger: { trigger: '#producto', start: 'top 80%', toggleActions: 'play none none reverse' }
    }
  );

  gsap.fromTo('#product-subtitle', 
    { opacity: 0, y: 40 },
    {
      opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
      scrollTrigger: { trigger: '#producto', start: 'top 75%', toggleActions: 'play none none reverse' }
    }
  );

  gsap.fromTo('#product-showcase', 
    { opacity: 0, x: -80, rotationY: 15 },
    {
      opacity: 1, x: 0, rotationY: 0, duration: 1.2, ease: 'power3.out',
      scrollTrigger: { trigger: '#producto', start: 'top 70%', toggleActions: 'play none none reverse' }
    }
  );

  gsap.fromTo('#product-details', 
    { opacity: 0, x: 80, y: 40 },
    {
      opacity: 1, x: 0, y: 0, duration: 1.2, ease: 'power3.out',
      scrollTrigger: { trigger: '#producto', start: 'top 70%', toggleActions: 'play none none reverse' }
    }
  );

  gsap.fromTo('#comparison-table', 
    { opacity: 0, y: 60, scale: 0.95 },
    {
      opacity: 1, y: 0, scale: 1, duration: 1, ease: 'back.out(1.7)',
      scrollTrigger: { trigger: '#comparison-table', start: 'top 80%', toggleActions: 'play none none reverse' }
    }
  );

  // Personas section animations
  gsap.fromTo('#personas-title', 
    { opacity: 0, y: 60, scale: 0.9 },
    {
      opacity: 1, y: 0, scale: 1, duration: 1, ease: 'back.out(1.7)',
      scrollTrigger: { trigger: '#audiencia', start: 'top 80%', toggleActions: 'play none none reverse' }
    }
  );

  gsap.fromTo('#personas-subtitle', 
    { opacity: 0, y: 40 },
    {
      opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
      scrollTrigger: { trigger: '#audiencia', start: 'top 75%', toggleActions: 'play none none reverse' }
    }
  );

  gsap.fromTo('.persona-card', 
    { opacity: 0, y: 100, scale: 0.8, rotationY: 20 },
    {
      opacity: 1, y: 0, scale: 1, rotationY: 0, duration: 1.2, ease: 'back.out(1.7)', stagger: 0.2,
      scrollTrigger: { trigger: '#audiencia', start: 'top 70%', toggleActions: 'play none none reverse' }
    }
  );

  gsap.fromTo('#personas-cta', 
    { opacity: 0, y: 60, scale: 0.95 },
    {
      opacity: 1, y: 0, scale: 1, duration: 1, ease: 'back.out(1.7)',
      scrollTrigger: { trigger: '#personas-cta', start: 'top 80%', toggleActions: 'play none none reverse' }
    }
  );

  // Benefits section animations
  gsap.fromTo('#benefits-title', 
    { opacity: 0, y: 60, scale: 0.9 },
    {
      opacity: 1, y: 0, scale: 1, duration: 1, ease: 'back.out(1.7)',
      scrollTrigger: { trigger: '#beneficios', start: 'top 80%', toggleActions: 'play none none reverse' }
    }
  );

  gsap.fromTo('#benefits-subtitle', 
    { opacity: 0, y: 40 },
    {
      opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
      scrollTrigger: { trigger: '#beneficios', start: 'top 75%', toggleActions: 'play none none reverse' }
    }
  );

  gsap.fromTo('#benefits-list', 
    { opacity: 0, x: -80 },
    {
      opacity: 1, x: 0, duration: 1.2, ease: 'power3.out',
      scrollTrigger: { trigger: '#beneficios', start: 'top 70%', toggleActions: 'play none none reverse' }
    }
  );

  gsap.fromTo('#lifestyle-showcase', 
    { opacity: 0, x: 80, scale: 0.9 },
    {
      opacity: 1, x: 0, scale: 1, duration: 1.2, ease: 'power3.out',
      scrollTrigger: { trigger: '#beneficios', start: 'top 70%', toggleActions: 'play none none reverse' }
    }
  );

  gsap.fromTo('.lifestyle-card', 
    { opacity: 0, y: 60, scale: 0.9 },
    {
      opacity: 1, y: 0, scale: 1, duration: 1, ease: 'back.out(1.7)', stagger: 0.1,
      scrollTrigger: { trigger: '#lifestyle-showcase', start: 'top 80%', toggleActions: 'play none none reverse' }
    }
  );

  gsap.fromTo('#scientific-backing', 
    { opacity: 0, y: 80, scale: 0.95 },
    {
      opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'back.out(1.7)',
      scrollTrigger: { trigger: '#scientific-backing', start: 'top 80%', toggleActions: 'play none none reverse' }
    }
  );

  // Testimonials section animations
  gsap.fromTo('#testimonials-title', 
    { opacity: 0, y: 60, scale: 0.9 },
    {
      opacity: 1, y: 0, scale: 1, duration: 1, ease: 'back.out(1.7)',
      scrollTrigger: { trigger: '#testimonios', start: 'top 80%', toggleActions: 'play none none reverse' }
    }
  );

  gsap.fromTo('#testimonials-subtitle', 
    { opacity: 0, y: 40 },
    {
      opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
      scrollTrigger: { trigger: '#testimonios', start: 'top 75%', toggleActions: 'play none none reverse' }
    }
  );

  gsap.fromTo('.testimonial-card', 
    { opacity: 0, y: 80, scale: 0.9, rotationY: 15 },
    {
      opacity: 1, y: 0, scale: 1, rotationY: 0, duration: 1.2, ease: 'back.out(1.7)', stagger: 0.15,
      scrollTrigger: { trigger: '#testimonios', start: 'top 70%', toggleActions: 'play none none reverse' }
    }
  );

  gsap.fromTo('#social-proof', 
    { opacity: 0, y: 60, scale: 0.95 },
    {
      opacity: 1, y: 0, scale: 1, duration: 1, ease: 'back.out(1.7)',
      scrollTrigger: { trigger: '#social-proof', start: 'top 80%', toggleActions: 'play none none reverse' }
    }
  );

  // Campaign section animations
  gsap.fromTo('#campaign-title', 
    { opacity: 0, scale: 0.8, rotationX: 15 },
    {
      opacity: 1, scale: 1, rotationX: 0, duration: 1.2, ease: 'back.out(1.7)',
      scrollTrigger: { trigger: '#campana', start: 'top 80%', toggleActions: 'play none none reverse' }
    }
  );

  gsap.fromTo('#campaign-timer', 
    { opacity: 0, scale: 0.8 },
    {
      opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)',
      scrollTrigger: { trigger: '#campana', start: 'top 75%', toggleActions: 'play none none reverse' }
    }
  );

  gsap.fromTo('#campaign-info', 
    { opacity: 0, y: 60 },
    {
      opacity: 1, y: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: '#campana', start: 'top 70%', toggleActions: 'play none none reverse' }
    }
  );

  // Marketing Strategy section animations
  gsap.fromTo('#strategy-title', 
    { opacity: 0, y: 60, scale: 0.9 },
    {
      opacity: 1, y: 0, scale: 1, duration: 1, ease: 'back.out(1.7)',
      scrollTrigger: { trigger: '#estrategia', start: 'top 80%', toggleActions: 'play none none reverse' }
    }
  );

  gsap.fromTo('#strategy-subtitle', 
    { opacity: 0, y: 40 },
    {
      opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
      scrollTrigger: { trigger: '#estrategia', start: 'top 75%', toggleActions: 'play none none reverse' }
    }
  );

  gsap.fromTo('#main-objective', 
    { opacity: 0, scale: 0.9, y: 50 },
    {
      opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'back.out(1.7)',
      scrollTrigger: { trigger: '#main-objective', start: 'top 80%', toggleActions: 'play none none reverse' }
    }
  );

  gsap.fromTo('#tactics-grid', 
    { opacity: 0, y: 80 },
    {
      opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
      scrollTrigger: { trigger: '#tactics-grid', start: 'top 80%', toggleActions: 'play none none reverse' }
    }
  );

  gsap.fromTo('#advertising-budget', 
    { opacity: 0, scale: 0.95, y: 60 },
    {
      opacity: 1, scale: 1, y: 0, duration: 1, ease: 'back.out(1.7)',
      scrollTrigger: { trigger: '#advertising-budget', start: 'top 80%', toggleActions: 'play none none reverse' }
    }
  );

  gsap.fromTo('#weekly-timeline', 
    { opacity: 0, y: 100 },
    {
      opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
      scrollTrigger: { trigger: '#weekly-timeline', start: 'top 80%', toggleActions: 'play none none reverse' }
    }
  );

  gsap.fromTo('#kpis-section', 
    { opacity: 0, scale: 0.95, y: 80 },
    {
      opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'back.out(1.7)',
      scrollTrigger: { trigger: '#kpis-section', start: 'top 80%', toggleActions: 'play none none reverse' }
    }
  );

  // Final CTA section animations
  gsap.fromTo('#final-cta', 
    { opacity: 0, scale: 0.9, y: 80 },
    {
      opacity: 1, scale: 1, y: 0, duration: 1.5, ease: 'back.out(1.7)',
      scrollTrigger: { trigger: '#contacto', start: 'top 80%', toggleActions: 'play none none reverse' }
    }
  );
}

function addInteractiveEffects() {
  // Parallax effects
  gsap.to('#hero', {
    backgroundPosition: '50% 100%',
    ease: 'none',
    scrollTrigger: {
      trigger: '#hero',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });

  // Continuous animations
  gsap.to('#campaign-timer .animate-pulse', {
    scale: 1.1,
    duration: 1,
    ease: 'power2.inOut',
    yoyo: true,
    repeat: -1
  });

  // Navigation scroll effect
  ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    toggleClass: {
      className: 'nav-scrolled',
      targets: 'nav'
    }
  });

  // Enhanced hover effects for navigation
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, {
        scale: 1.1,
        duration: 0.3,
        ease: 'back.out(1.7)'
      });
    });

    link.addEventListener('mouseleave', () => {
      gsap.to(link, {
        scale: 1,
        duration: 0.3,
        ease: 'back.out(1.7)'
      });
    });
  });

  // Price container subtle emphasis
  gsap.to('#price-container > div', {
    scale: 1.02,
    duration: 3,
    ease: 'power2.inOut',
    yoyo: true,
    repeat: -1
  });

  // Floating elements animation
  gsap.to('.animate-float', {
    y: -20,
    duration: 3,
    ease: 'power2.inOut',
    yoyo: true,
    repeat: -1,
    stagger: 0.5
  });

  // Enhanced hover effects
  document.querySelectorAll('.persona-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card.querySelector('div'), {
        scale: 1.05,
        y: -10,
        rotationY: 5,
        duration: 0.4,
        ease: 'back.out(1.7)'
      });
      
      // Add elegant shadow effect
      gsap.to(card.querySelector('div'), {
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
        duration: 0.4,
        ease: 'power2.out'
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card.querySelector('div'), {
        scale: 1,
        y: 0,
        rotationY: 0,
        boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
        duration: 0.4,
        ease: 'back.out(1.7)'
      });
    });
  });

  document.querySelectorAll('.lifestyle-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        scale: 1.02,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });

  document.querySelectorAll('.testimonial-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card.querySelector('div'), {
        scale: 1.02,
        y: -5,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card.querySelector('div'), {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });

  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        scale: 1.08,
        y: -3,
        duration: 0.3,
        ease: 'back.out(1.7)'
      });
      
      // Add ripple effect
      const ripple = document.createElement('div');
      ripple.className = 'absolute inset-0 bg-white/20 rounded-full scale-0';
      button.style.position = 'relative';
      button.style.overflow = 'hidden';
      button.appendChild(ripple);
      
      gsap.to(ripple, {
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
        onComplete: () => ripple.remove()
      });
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: 'back.out(1.7)'
      });
    });
  });

  const productShowcase = document.querySelector('#product-showcase img');
  if (productShowcase) {
    productShowcase.addEventListener('mouseenter', () => {
      gsap.to(productShowcase, {
        scale: 1.05,
        rotationY: 5,
        duration: 0.4,
        ease: 'power2.out'
      });
    });

    productShowcase.addEventListener('mouseleave', () => {
      gsap.to(productShowcase, {
        scale: 1,
        rotationY: 0,
        duration: 0.4,
        ease: 'power2.out'
      });
    });
  }
}

function setupNavigation() {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.getAttribute('href')?.startsWith('#')) {
      e.preventDefault();
      const targetId = target.getAttribute('href')?.substring(1);
      const targetElement = document.getElementById(targetId || '');
      
      if (targetElement) {
        gsap.to(window, {
          duration: 1.5,
          scrollTo: targetElement,
          ease: 'power3.inOut'
        });
      }
    }
  });
}

function setupProgressBar() {
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = `${scrolled}%`;
  });
}

// Add final interactive enhancements
document.addEventListener('DOMContentLoaded', () => {
  // Add click effects to interactive elements
  document.querySelectorAll('.interactive-card, button').forEach(element => {
    element.addEventListener('click', (e: Event) => {
      const mouseEvent = e as MouseEvent;
      // Create ripple effect
      const ripple = document.createElement('div');
      const rect = element.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = mouseEvent.clientX - rect.left - size / 2;
      const y = mouseEvent.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 50%;
        transform: scale(0);
        pointer-events: none;
        z-index: 1000;
      `;
      
      const htmlElement = element as HTMLElement;
      htmlElement.style.position = 'relative';
      htmlElement.style.overflow = 'hidden';
      element.appendChild(ripple);
      
      gsap.to(ripple, {
        scale: 2,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        onComplete: () => ripple.remove()
      });
    });
  });

  // Add smooth reveal animations for numbers
  document.querySelectorAll('.number-highlight').forEach(number => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetElement = entry.target as HTMLElement;
          const finalValue = targetElement.textContent;
          const numericValue = finalValue?.match(/[\d,]+/)?.[0]?.replace(',', '') || '0';
          
          gsap.fromTo(targetElement, 
            { textContent: '0' },
            {
              textContent: numericValue,
              duration: 2,
              ease: 'power2.out',
              snap: { textContent: 1 },
              onUpdate: function() {
                const target = this.targets()[0] as HTMLElement;
                const currentValue = Math.floor(parseFloat(target.textContent || '0'));
                target.textContent = finalValue?.replace(/[\d,]+/, currentValue.toLocaleString()) || currentValue.toString();
              }
            }
          );
          
          observer.unobserve(entry.target);
        }
      });
    });
    
    observer.observe(number);
  });
});