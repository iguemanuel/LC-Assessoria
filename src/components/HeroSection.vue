<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

import desktopBanner1 from '@/assets/images/desktop/banner1.webp'
import desktopBanner2 from '@/assets/images/desktop/banner2.webp'
import desktopBanner3 from '@/assets/images/desktop/banner3.webp'
import desktopBanner4 from '@/assets/images/desktop/banner4.webp'
import mobileBanner1 from '@/assets/images/mobile/banner1.webp'
import mobileBanner2 from '@/assets/images/mobile/banner2.webp'
import mobileBanner3 from '@/assets/images/mobile/banner3.webp'
import mobileBanner4 from '@/assets/images/mobile/banner4.webp'
import teamDesktop from '@/assets/images/employees/web/team-desktop.jpg'
import teamMobile from '@/assets/images/employees/web/team-mobile.webp'

const slides = [
  { desktop: desktopBanner1, mobile: mobileBanner1, alt: 'LC Assessoria de Seguros e Previdência' },
  { desktop: desktopBanner2, mobile: mobileBanner2, alt: 'Está afastado do trabalho?' },
  { desktop: desktopBanner3, mobile: mobileBanner3, alt: 'Ficou com sequelas após um acidente?' },
  { desktop: desktopBanner4, mobile: mobileBanner4, alt: 'Quer garantir um futuro tranquilo?' },
  { desktop: teamDesktop, mobile: teamMobile, alt: 'Equipe LC Assessoria' },
]

const AUTOPLAY_DELAY = 5000
const SWIPE_THRESHOLD = 50

const current = ref(0)
let interval: ReturnType<typeof setInterval> | null = null
let reducedMotion = false
let hovering = false
let focused = false
let touchStartX = 0

function next() {
  current.value = (current.value + 1) % slides.length
}

function prev() {
  current.value = (current.value - 1 + slides.length) % slides.length
}

function stopAutoplay() {
  if (interval) clearInterval(interval)
  interval = null
}

function startAutoplay() {
  stopAutoplay()
  if (reducedMotion || hovering || focused || document.hidden) return
  interval = setInterval(next, AUTOPLAY_DELAY)
}

function resetAutoplay() {
  startAutoplay()
}

function goTo(index: number) {
  current.value = index
  resetAutoplay()
}

function goPrev() {
  prev()
  resetAutoplay()
}

function goNext() {
  next()
  resetAutoplay()
}

function setHovering(value: boolean) {
  hovering = value
  startAutoplay()
}

function setFocused(value: boolean) {
  focused = value
  startAutoplay()
}

function handleFocusOut(event: FocusEvent) {
  const carousel = event.currentTarget as HTMLElement
  if (!carousel.contains(event.relatedTarget as Node | null)) setFocused(false)
}

function handleTouchStart(event: TouchEvent) {
  touchStartX = event.changedTouches[0]?.clientX ?? 0
}

function handleTouchEnd(event: TouchEvent) {
  const deltaX = (event.changedTouches[0]?.clientX ?? 0) - touchStartX
  if (Math.abs(deltaX) < SWIPE_THRESHOLD) return
  if (deltaX < 0) goNext()
  else goPrev()
}

onMounted(() => {
  reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  document.addEventListener('visibilitychange', startAutoplay)
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
  document.removeEventListener('visibilitychange', startAutoplay)
})
</script>

<template>
  <section id="inicio" class="hero">
    <div class="container">
      <div
        class="carousel"
        role="region"
        aria-roledescription="carrossel"
        aria-label="Destaques da LC Assessoria"
        @mouseenter="setHovering(true)"
        @mouseleave="setHovering(false)"
        @focusin="setFocused(true)"
        @focusout="handleFocusOut"
      >
        <div
          class="carousel-viewport"
          @touchstart.passive="handleTouchStart"
          @touchend="handleTouchEnd"
        >
          <div
            v-for="(slide, index) in slides"
            :key="index"
            class="slide"
            :class="{ active: index === current }"
            :aria-hidden="index !== current"
          >
            <picture>
              <source
                :srcset="slide.mobile"
                media="(max-width: 768px)"
                width="1081"
                height="1440"
              />
              <img
                :src="slide.desktop"
                :alt="slide.alt"
                width="2400"
                height="1018"
                class="slide-img"
                :fetchpriority="index === 0 ? 'high' : 'auto'"
              />
            </picture>
          </div>
        </div>

        <div class="carousel-controls">
          <button class="carousel-btn" type="button" @click="goPrev" aria-label="Slide anterior">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div class="carousel-dots">
            <button
              v-for="(_, index) in slides"
              :key="index"
              type="button"
              class="dot"
              :class="{ active: index === current }"
              :aria-current="index === current ? 'true' : undefined"
              :aria-label="`Ir para o slide ${index + 1}`"
              @click="goTo(index)"
            ></button>
          </div>

          <button class="carousel-btn" type="button" @click="goNext" aria-label="Próximo slide">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  margin-top: var(--header-height);
  padding-top: 24px;
}

.carousel-viewport {
  position: relative;
  aspect-ratio: 3168 / 1344;
  border-radius: 20px;
  overflow: hidden;
  background-color: var(--color-bg-alt);
  box-shadow: 0 24px 60px rgba(26, 26, 26, 0.12);
}

.slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.6s ease;
}

.slide.active {
  opacity: 1;
}

.slide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.carousel-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 16px;
}

.carousel-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--color-bg);
  border: 1px solid var(--color-gray-light);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-dark);
  transition: var(--transition);
}

.carousel-btn:hover {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}

.carousel-dots {
  display: flex;
  align-items: center;
}

.dot {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  transition: width 0.3s ease;
}

.dot::before {
  content: '';
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background-color: #8a8a8a;
  transition:
    width 0.3s ease,
    background-color 0.3s ease;
}

.dot:hover::before {
  background-color: var(--color-dark);
}

.dot.active {
  width: 36px;
}

.dot.active::before {
  width: 24px;
  background-color: var(--color-primary);
}

.carousel-btn:focus-visible,
.dot:focus-visible {
  outline: 2px solid var(--color-dark);
  outline-offset: 2px;
}

@media (max-width: 768px) {
  .hero {
    padding-top: 16px;
  }

  .carousel-viewport {
    aspect-ratio: 3 / 4;
    border-radius: 16px;
  }

  .carousel-controls {
    gap: 8px;
    margin-top: 12px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .slide,
  .dot,
  .dot::before {
    transition: none;
  }
}
</style>
