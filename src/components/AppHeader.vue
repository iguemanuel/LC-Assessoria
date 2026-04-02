<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import logoSrc from '@/assets/images/logo.jpg'

const mobileMenuOpen = ref(false)
const scrolled = ref(false)

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

function closeMobile() {
  mobileMenuOpen.value = false
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header class="header" :class="{ scrolled }">
    <div class="container header-inner">
      <a href="#inicio" class="logo">
        <img
          src="../assets/images/logo.png"
          alt="LC Assessoria - Seguros e Previdência"
          class="logo-img"
        />
      </a>

      <nav class="nav" :class="{ open: mobileMenuOpen }">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="nav-link"
          @click="closeMobile"
        >
          {{ link.label }}
        </a>
        <a href="#contato" class="btn btn-primary nav-cta" @click="closeMobile"
          >Fale com um consultor</a
        >
      </nav>

      <button
        class="menu-toggle"
        :class="{ open: mobileMenuOpen }"
        @click="mobileMenuOpen = !mobileMenuOpen"
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #ffffff;
  backdrop-filter: none;
  transition: var(--transition);
}

.header.scrolled {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-height);
}

.logo {
  display: flex;
  align-items: center;
}

.logo-img {
  height: 56px;
  width: auto;
}

.nav {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-link {
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--color-text);
  transition: var(--transition);
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-primary);
  transition: var(--transition);
}

.nav-link:hover {
  color: var(--color-primary);
}

.nav-link:hover::after {
  width: 100%;
}

.nav-cta {
  padding: 10px 24px;
  font-size: 0.875rem;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  background-color: #ffffff;
}

.menu-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--color-dark);
  transition: var(--transition);
  border-radius: 2px;
}

.menu-toggle.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.menu-toggle.open span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.open span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav {
    position: fixed;
    top: var(--header-height);
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ffffff !important;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 40px;
    gap: 0;
    transform: translateX(100%);
    transition: var(--transition);
  }

  .nav.open {
    transform: translateX(0);
  }

  .nav-link {
    font-size: 1.125rem;
    padding: 16px 24px;
    width: 100%;
    text-align: center;
  }

  .nav-link::after {
    display: none;
  }

  .nav-cta {
    margin-top: 16px;
    width: auto;
  }
}
</style>
