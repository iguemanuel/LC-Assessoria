<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { team } from '@/data/team'

const statsRef = ref<HTMLElement | null>(null)
const animated = ref(false)

const stats = [
  {
    target: 1000,
    suffix: '+',
    label: 'Clientes Atendidos',
    note: 'Base sólida de clientes atendidos com acompanhamento próximo.',
  },
  {
    target: 99,
    suffix: '%',
    label: 'Aprovação',
    note: 'Índice alto de aprovação nos casos acompanhados pela equipe.',
  },
  {
    target: 6,
    suffix: '+',
    label: 'Anos de Experiência',
    note: 'Know-how acumulado para orientar com mais precisão.',
  },
]

const displayValues = ref(stats.map(() => 0))
let frameId = 0

function formatStatValue(value: number | undefined) {
  return new Intl.NumberFormat('pt-BR').format(value ?? 0)
}

function showFinalValues() {
  displayValues.value = stats.map((stat) => stat.target)
}

function animateCountUp() {
  if (animated.value) return
  animated.value = true

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    showFinalValues()
    return
  }

  const duration = 2000
  const start = performance.now()

  function tick(now: number) {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    displayValues.value = stats.map((stat) => Math.round(eased * stat.target))

    if (progress < 1) frameId = requestAnimationFrame(tick)
  }

  frameId = requestAnimationFrame(tick)
}

function getWhatsAppLink(firstName: string, phone: string) {
  const message = `Olá, ${firstName}! Gostaria de solicitar uma consultoria sobre os serviços da LC Assessoria. Poderia me ajudar, por favor?`
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        animateCountUp()
        observer.disconnect()
      }
    },
    { threshold: 0.15 },
  )

  if (statsRef.value) {
    observer.observe(statsRef.value)
  }
})

onUnmounted(() => cancelAnimationFrame(frameId))
</script>

<template>
  <section id="equipe" class="section team">
    <div class="container">
      <div class="hiw-badge">
        <span class="hiw-arrows">&#9654;</span>
        QUEM CUIDA DO SEU CASO
      </div>
      <h2 class="section-title">Nossa Equipe</h2>
      <p class="section-subtitle">
        As pessoas que acompanham você de perto, do primeiro contato até a conclusão do processo.
      </p>

      <article
        v-for="(member, index) in team"
        :key="member.name"
        class="member"
        :class="{ 'member--reverse': index % 2 === 1 }"
      >
        <div class="member-photo">
          <img
            :src="member.image"
            :alt="member.imageAlt"
            width="900"
            height="1200"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div class="member-text">
          <h3 class="member-name">{{ member.name }}</h3>
          <p class="member-meta">
            <span class="member-role">{{ member.role }}</span>
            <span v-if="member.oab" class="member-oab">{{ member.oab }}</span>
          </p>
          <p v-for="paragraph in member.paragraphs" :key="paragraph" class="member-desc">
            {{ paragraph }}
          </p>
          <a
            :href="getWhatsAppLink(member.firstName, member.whatsappPhone)"
            target="_blank"
            rel="noopener"
            class="btn btn-outline"
            :aria-label="`Falar com ${member.firstName} pelo WhatsApp`"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
              />
            </svg>
            Falar pelo WhatsApp
          </a>
        </div>
      </article>

      <div ref="statsRef" class="about-stats">
        <div class="about-stats-header">
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
            <span class="stat-note">{{ stat.note }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.team {
  background-color: var(--color-bg);
  scroll-margin-top: var(--header-height);
  padding-top: 48px;
}

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
  margin-bottom: 16px;
}

.hiw-arrows {
  font-size: 0.625rem;
  letter-spacing: -2px;
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
  margin: 12px auto 64px;
}

.member {
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: 56px;
  align-items: center;
}

.member + .member {
  margin-top: 72px;
  padding-top: 72px;
  border-top: 1px solid rgba(249, 178, 52, 0.25);
}

.member--reverse {
  grid-template-columns: 1.05fr 1fr;
}

.member--reverse .member-photo {
  order: 2;
}

.member-photo {
  position: relative;
}

.member-photo::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 20px;
  background-color: var(--color-bg-alt);
  transform: translate(16px, 16px);
}

.member--reverse .member-photo::before {
  transform: translate(-16px, 16px);
}

.member-photo img {
  position: relative;
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
  box-shadow: 0 24px 60px rgba(26, 26, 26, 0.14);
}

.member-name {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-dark);
  line-height: 1.25;
  margin-bottom: 14px;
  text-wrap: balance;
}

.member-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}

.member-role,
.member-oab {
  display: inline-block;
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.4;
}

.member-role {
  background-color: rgba(249, 178, 52, 0.16);
  color: #7a5300;
}

.member-oab {
  background-color: #f1f1f1;
  color: var(--color-dark);
}

.member-desc {
  font-size: 1.0625rem;
  color: var(--color-gray);
  line-height: 1.7;
  margin-bottom: 16px;
  max-width: 62ch;
}

.member-text .btn {
  margin-top: 8px;
}

.about-stats {
  margin-top: 96px;
}

.about-stats-header {
  max-width: 640px;
  margin: 0 auto 32px;
  text-align: center;
}

.about-stats-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 1.25;
  color: var(--color-dark);
  margin-bottom: 10px;
  text-wrap: balance;
}

.about-stats-desc {
  font-size: 1rem;
  color: var(--color-gray);
  line-height: 1.7;
}

.about-stats-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.stat {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  min-height: 190px;
  padding: 28px;
  border-radius: 20px;
  background: var(--color-bg);
  border: 1px solid rgba(249, 178, 52, 0.28);
  box-shadow: 0 10px 30px rgba(26, 26, 26, 0.06);
}

.stat--featured {
  background: var(--color-primary);
  border-color: var(--color-primary);
}

.stat-label {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-gray);
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: var(--color-dark);
  line-height: 1;
}

.stat-note {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-gray);
}

.stat--featured .stat-label,
.stat--featured .stat-note {
  color: var(--color-dark);
}

@media (max-width: 768px) {
  .team {
    padding-top: 32px;
  }

  .section-title {
    font-size: 1.875rem;
  }

  .section-subtitle {
    font-size: 1rem;
    margin-bottom: 48px;
  }

  .member,
  .member--reverse {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .member + .member {
    margin-top: 48px;
    padding-top: 48px;
  }

  .member--reverse .member-photo {
    order: 0;
  }

  .member-photo::before,
  .member--reverse .member-photo::before {
    transform: translate(10px, 10px);
  }

  .member-name {
    font-size: 1.75rem;
  }

  .about-stats {
    margin-top: 64px;
  }

  .about-stats-title {
    font-size: 1.375rem;
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

  .stat-number {
    font-size: 2.25rem;
  }

  .stat-note {
    font-size: 0.9rem;
  }
}
</style>
