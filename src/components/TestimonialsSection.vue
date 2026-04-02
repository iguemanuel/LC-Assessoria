<template>
  <section id="depoimentos" class="section testimonials">
    <div class="container">
      <div class="hiw-badge">
        <span class="hiw-arrows">&#9654;</span>
        O QUE DIZEM SOBRE NÓS
      </div>
      <h2 class="section-title">O que nossos clientes dizem</h2>
      <p class="section-subtitle">
        A satisfação dos nossos clientes é o nosso maior reconhecimento.
      </p>
      <div class="reviews-wrapper">
        <div class="elfsight-app-4d7e6699-381b-4e75-aae6-a12dd2eb801d" data-elfsight-app-lazy></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials {
  background-color: var(--color-bg-alt);
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
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
  margin-top: 12px;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.875rem;
  }
}
</style>
