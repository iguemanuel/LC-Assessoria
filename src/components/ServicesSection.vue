<script setup lang="ts">
import { services } from '@/data/services'
</script>

<template>
  <section id="servicos" class="section services">
    <div class="container">
      <div class="hiw-badge">
        <span class="hiw-arrows">&#9654;</span>
        OQUE OFERECEMOS
      </div>

      <h2 class="section-title">Nossos Serviços</h2>
      <p class="section-subtitle">
        Oferecemos assessoria especializada em diversas áreas para garantir que você receba todos os
        seus direitos.
      </p>
      <div class="services-grid">
        <div v-for="service in services" :key="service.title" class="service-card">
          <div class="service-image">
            <img
              v-if="service.image"
              :src="service.image"
              :alt="service.title"
              class="service-img"
            />
            <div v-else class="service-img-placeholder">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
          </div>
          <div class="service-body">
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-desc">{{ service.description }}</p>
            <a
              href="https://wa.me/5542998468326"
              target="_blank"
              rel="noopener"
              class="service-link"
            >
              Falar com Consultor
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hiw-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--color-primary);
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  color: var(--color-dark);
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--color-gray);
  text-align: center;
  margin-top: 12px;
}

.services {
  background-color: var(--color-bg-alt);
}

.services-grid {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.service-card {
  display: grid;
  grid-template-columns: 400px 1fr;
  background-color: var(--color-bg);
  border-radius: 16px;
  overflow: hidden;
  transition: var(--transition);
  border: 1px solid var(--color-gray-light);
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  border-color: var(--color-primary);
}

.service-card:hover .service-img {
  transform: scale(1.05);
}

.service-card:hover .service-img-placeholder {
  background-color: #e8e0c8;
}

.service-card:hover .service-link {
  color: var(--color-primary);
  gap: 10px;
}

.service-image {
  overflow: hidden;
  min-height: 220px;
}

.service-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.service-img-placeholder {
  width: 100%;
  height: 100%;
  background-color: var(--color-bg-alt);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  transition: var(--transition);
}

.service-body {
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.service-title {
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 12px;
}

.service-desc {
  font-size: 1rem;
  color: var(--color-gray);
  line-height: 1.7;
  margin-bottom: 20px;
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--color-dark);
  transition: var(--transition);
}

.service-link:hover {
  color: var(--color-primary);
  gap: 10px;
}

@media (max-width: 768px) {
  .service-card {
    grid-template-columns: 1fr;
  }

  .service-image {
    min-height: 200px;
    aspect-ratio: 16 / 9;
  }

  .service-body {
    padding: 24px;
  }
}
</style>
