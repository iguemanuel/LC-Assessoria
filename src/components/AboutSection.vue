<template>
  <section id="sobre" class="section about">
    <div class="container">
      <div class="about-grid">
        <div class="about-image">
          <img src="../assets/images/employees/web/team-about.jpg" alt="Equipe LC Assessoria" />
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
    </div>
  </section>
</template>

<style scoped>
.about {
  padding-bottom: 24px;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: stretch;
}

.about-image {
  min-height: 0;
}

.about-image img {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: cover;
  object-position: center;
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

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about-image img {
    height: auto;
  }

  .about-title {
    font-size: 1.625rem;
  }
}
</style>
