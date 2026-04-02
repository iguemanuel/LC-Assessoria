<script setup lang="ts">
import { ref, onMounted } from 'vue'

const statsRef = ref<HTMLElement | null>(null)
const animated = ref(false)

const stats = [
  { target: 1000, suffix: '+', label: 'Clientes Atendidos' },
  { target: 99, suffix: '%', label: 'Aprovação' },
  { target: 6, suffix: '+', label: 'Anos de Experiência' },
]

const displayValues = ref(stats.map(() => 0))

function formatStatValue(value: number | undefined) {
  return new Intl.NumberFormat('pt-BR').format(value ?? 0)
}

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
        <div class="about-stats-header">
          <span class="about-stats-tag">Nossos números</span>
          <h3 class="about-stats-title">Resultados que reforçam nossa credibilidade</h3>
          <p class="about-stats-desc">
            Atuação consistente, aprovação elevada e experiência prática para conduzir cada etapa
            com segurança.
          </p>
        </div>

        <div class="about-stats-grid">
          <div
            v-for="(stat, index) in stats"
            :key="stat.label"
            class="stat"
            :class="{ 'stat--featured': index === 0 }"
          >
            <span class="stat-label">{{ stat.label }}</span>
            <span class="stat-number"
              >{{ formatStatValue(displayValues[index]) }}{{ stat.suffix }}</span
            >
            <span class="stat-note">
              {{
                index === 0
                  ? 'Base sólida de clientes atendidos com acompanhamento próximo.'
                  : index === 1
                    ? 'Índice alto de aprovação nos casos acompanhados pela equipe.'
                    : 'Know-how acumulado para orientar com mais precisão.'
              }}
            </span>
          </div>
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
  margin-top: 48px;
  padding: 36px;
  border-radius: 24px;
  border: 1px solid rgba(249, 178, 52, 0.2);
  background:
    radial-gradient(circle at top left, rgba(249, 178, 52, 0.18), transparent 42%),
    linear-gradient(180deg, rgba(255, 244, 214, 0.9), rgba(255, 255, 255, 0.98));
  box-shadow: 0 20px 60px rgba(26, 26, 26, 0.08);
}

.about-stats-header {
  max-width: 640px;
  margin-bottom: 28px;
}

.about-stats-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(249, 178, 52, 0.14);
  color: var(--color-primary-dark);
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.about-stats-title {
  font-size: 1.5rem;
  line-height: 1.25;
  color: var(--color-dark);
  margin-bottom: 10px;
}

.about-stats-desc {
  font-size: 1rem;
  color: var(--color-gray);
  line-height: 1.7;
}

.about-stats-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.stat {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 190px;
  padding: 24px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(249, 178, 52, 0.18);
  box-shadow: 0 10px 30px rgba(26, 26, 26, 0.06);
  overflow: hidden;
}

.stat::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(249, 178, 52, 0.14), transparent 55%);
  opacity: 0.8;
  pointer-events: none;
}

.stat > * {
  position: relative;
  z-index: 1;
}

.stat--featured {
  background: linear-gradient(180deg, var(--color-primary), var(--color-primary-dark));
  color: var(--color-text-light);
  transform: translateY(-8px);
}

.stat--featured::before {
  background: radial-gradient(circle at top right, rgba(255, 255, 255, 0.25), transparent 50%);
}

.stat--featured .stat-label,
.stat--featured .stat-note,
.stat--featured .stat-number {
  color: var(--color-text-light);
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1;
}

.stat-label {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-gray);
}

.stat-note {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-gray);
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
    margin-top: 32px;
    padding: 24px;
  }

  .about-stats-title {
    font-size: 1.25rem;
  }

  .about-stats-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .stat {
    min-height: 0;
    gap: 14px;
    padding: 22px;
  }

  .stat--featured {
    transform: none;
  }

  .stat-number {
    font-size: 2.25rem;
  }

  .stat-note {
    font-size: 0.9rem;
  }
}
</style>
