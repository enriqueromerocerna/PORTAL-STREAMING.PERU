// Lógica de interacción para el Image Accordion
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remover clase active de todas las tarjetas
    accordionItems.forEach(i => i.classList.remove('active'));
    // Añadir clase active a la tarjeta seleccionada
    item.classList.add('active');
  });
});
