<script setup lang="ts">
import logoSrc from '@/assets/images/logo.jpg'

const quickLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]

const services = [
  'Seguro de Vida',
  'Seguro para Terceiros',
  'Seguro DPVAT',
  'Seguro Acidente Pessoal',
  'Auxílio-Acidente',
  'Auxílio-Doença',
]

const whatsappMessage =
  'Olá! Gostaria de solicitar uma consultoria sobre os serviços da LC Assessoria. Poderia me ajudar, por favor?'
const whatsappLink = `https://wa.me/5542998468323?text=${encodeURIComponent(whatsappMessage)}`
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <img
              src="../assets/images/logo.png"
              alt="LC Assessoria - Seguros e Previdência"
              class="footer-logo-img"
            />
          </div>
          <p class="footer-desc">
            Garantindo seus direitos indenizatórios e benefícios previdenciários com agilidade e
            transparência.
          </p>
        </div>

        <div class="footer-col">
          <h4 class="footer-heading">Links Rápidos</h4>
          <ul>
            <li v-for="link in quickLinks" :key="link.href">
              <a :href="link.href" class="footer-link">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-heading">Serviços</h4>
          <ul>
            <li v-for="s in services" :key="s">
              <span class="footer-link">{{ s }}</span>
            </li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-heading">Contato</h4>
          <ul>
            <li>
              <a :href="whatsappLink" target="_blank" rel="noopener" class="footer-link"
                >WhatsApp</a
              >
            </li>
            <li>
              <a
                href="https://www.instagram.com/lc.assessoriaseguros/"
                target="_blank"
                rel="noopener"
                class="footer-link"
                >Instagram</a
              >
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61580988283366"
                target="_blank"
                rel="noopener"
                class="footer-link"
                >Facebook</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 LC Assessoria - Seguros e Previdência. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-dark);
  padding: 64px 0 0;
  color: rgba(255, 255, 255, 0.7);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-logo {
  margin-bottom: 16px;
}

.footer-logo-img {
  height: 60px;
  width: auto;
  filter: brightness(0) invert(1);
}

.footer-desc {
  font-size: 0.9375rem;
  line-height: 1.6;
}

.footer-heading {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-light);
  margin-bottom: 20px;
}

.footer-col ul {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-link {
  font-size: 0.9375rem;
  transition: var(--transition);
}

a.footer-link:hover {
  color: var(--color-primary);
}

.footer-bottom {
  padding: 24px 0;
  text-align: center;
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 480px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
