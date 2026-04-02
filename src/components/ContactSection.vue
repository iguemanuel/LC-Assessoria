<script setup lang="ts"></script>

<template>
  <section id="contato" class="contact">
    <div class="container">
      <div class="contact-grid">
        <!-- Left side -->
        <div class="contact-info">
          <span class="contact-tag">Fale Conosco</span>
          <h2 class="contact-title">Pronto para garantir seus direitos?</h2>
          <p class="contact-subtitle">
            Entre em contato agora mesmo. Nossa equipe de especialistas está pronta para analisar
            seu caso e orientar você em cada etapa do processo.
          </p>

          <div class="contact-details">
            <div class="contact-item">
              <div class="contact-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                  />
                </svg>
              </div>
              <div>
                <span class="contact-item-label">Telefone</span>
                <span class="contact-item-value">(42)99846-8323</span>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <span class="contact-item-label">Horário de Atendimento</span>
                <span class="contact-item-value">Seg - Sex, 8h às 18h</span>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <span class="contact-item-label">Localização</span>
                <span class="contact-item-value"
                  >R. Barão do Rio Branco, 1378 - Batel, Guarapuava - PR</span
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Right side - CTA card -->
        <div class="contact-cta">
          <div class="cta-card">
            <div class="cta-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                />
              </svg>
            </div>
            <h3 class="cta-title">Consulta Gratuita</h3>
            <p class="cta-desc">
              Envie uma mensagem pelo WhatsApp e receba uma análise inicial do seu caso sem nenhum
              custo.
            </p>
            <a
              href="https://wa.me/5542998468323?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20uma%20consultoria%20sobre%20os%20servi%C3%A7os%20da%20LC%20Assessoria.%20Poderia%20me%20ajudar%2C%20por%20favor%3F"
              target="_blank"
              rel="noopener"
              class="btn btn-whatsapp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                />
              </svg>
              Falar pelo WhatsApp
            </a>
          </div>

          <div class="contact-social">
            <span class="social-label">Siga-nos</span>
            <div class="social-links">
              <a
                href="https://www.instagram.com/lc.assessoriaseguros/"
                target="_blank"
                rel="noopener"
                class="social-link"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                  />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61580988283366"
                target="_blank"
                rel="noopener"
                class="social-link"
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 80px 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;
}

.contact::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: rgba(249, 178, 52, 0.05);
}

.contact::after {
  content: '';
  position: absolute;
  bottom: -30%;
  left: -10%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: rgba(249, 178, 52, 0.05);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.contact-tag {
  display: inline-block;
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 12px;
}

.contact-title {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text-light);
  line-height: 1.2;
  margin-bottom: 16px;
}

.contact-subtitle {
  font-size: 1.0625rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
  margin-bottom: 36px;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 16px;
}

.contact-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(249, 178, 52, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  flex-shrink: 0;
}

.contact-item-label {
  display: block;
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 2px;
}

.contact-item-value {
  display: block;
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-light);
}

/* CTA Card */
.contact-cta {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.cta-card {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  text-align: center;
}

.cta-icon {
  color: var(--color-primary);
  margin-bottom: 20px;
}

.cta-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-light);
  margin-bottom: 12px;
}

.cta-desc {
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  margin-bottom: 28px;
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;
}

.btn-whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 36px;
  background-color: #25d366;
  color: var(--color-text-light);
  font-size: 1.0625rem;
  font-weight: 600;
  border-radius: 50px;
  transition: var(--transition);
  border: none;
  cursor: pointer;
}

.btn-whatsapp:hover {
  background-color: #1fb855;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
}

/* Social */
.contact-social {
  text-align: center;
}

.social-label {
  display: block;
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 16px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.social-link {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: var(--color-text-light);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
}

.social-link:hover {
  background-color: var(--color-text-light);
  color: var(--color-primary);
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .contact {
    padding: 60px 0;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contact-title {
    font-size: 1.875rem;
  }

  .cta-card {
    padding: 32px 24px;
  }

  .btn-whatsapp {
    padding: 14px 28px;
    font-size: 1rem;
  }
}
</style>
