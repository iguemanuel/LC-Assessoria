<script setup lang="ts">
import { ref, onMounted } from 'vue'

const statsRef = ref<HTMLElement | null>(null)
const animated = ref(false)

const stats = [
  { target: 20, suffix: '+', label: 'Clientes Atendidos' },
  { target: 99, suffix: '%', label: 'Aprovação' },
  { target: 10, suffix: '+', label: 'Anos de Experiência' },
]

const displayValues = ref(stats.map(() => 0))

function animateCountUp() {
  if (animated.value) return
  animated.value = true

  const duration = 2000
  const frameRate = 16
  const totalFrames = duration / frameRate

  stats.forEach((stat, index) => {
    let frame = 0
    const interval = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      const eased = 1 - Math.pow(1 - progress, 3)
      displayValues.value[index] = Math.round(eased * stat.target)

      if (frame >= totalFrames) {
        displayValues.value[index] = stat.target
        clearInterval(interval)
      }
    }, frameRate)
  })
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        animateCountUp()
        observer.disconnect()
      }
    },
    { threshold: 0.5 },
  )

  if (statsRef.value) {
    observer.observe(statsRef.value)
  }
})
</script>

<template>
  <section id="sobre" class="section about">
    <div class="container">
      <div class="about-grid">
        <div class="about-image">
          <img src="../assets/images/negociando.jpg" alt="" />
        </div>
        <div class="about-text">
          <span class="about-tag">Sobre Nós</span>
          <h2 class="about-title">Experiência e compromisso com seus direitos</h2>
          <p class="about-desc">
            A LC Assessoria de Seguros atua há anos no mercado, oferecendo suporte completo para
            pessoas que sofreram acidentes de qualquer natureza. Nossa equipe é especializada em
            garantir que você receba todas as indenizações e benefícios a que tem direito.
          </p>
          <p class="about-desc">
            Trabalhamos com transparência, agilidade e dedicação para que nossos clientes tenham a
            melhor experiência possível durante todo o processo.
          </p>
        </div>
      </div>

      <div ref="statsRef" class="about-stats">
        <div v-for="(stat, index) in stats" :key="stat.label" class="stat">
          <span class="stat-number">{{ displayValues[index] }}{{ stat.suffix }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.about-image img {
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
}

.about-tag {
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 12px;
}

.about-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-dark);
  line-height: 1.3;
  margin-bottom: 20px;
}

.about-desc {
  font-size: 1.0625rem;
  color: var(--color-gray);
  line-height: 1.7;
  margin-bottom: 16px;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 48px;
  border-radius: 12px;
  padding: 40px;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-primary);
}

.stat-label {
  font-size: 0.9375rem;
  margin-top: 4px;
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about-title {
    font-size: 1.625rem;
  }

  .about-stats {
    grid-template-columns: 1fr;
    gap: 28px;
    padding: 32px;
    margin-top: 32px;
  }

  .stat-number {
    font-size: 2rem;
  }
}
</style>
