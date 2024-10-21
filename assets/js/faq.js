document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach((item, index) => {
        const toggleButton = item.querySelector('.faq__toggle');
        const answer = document.querySelectorAll('.faq__answer')[index]; // Получаем ответ по индексу

        toggleButton.addEventListener('click', () => {
            answer.classList.toggle('active'); // Переключаем класс active

            // Установка aria-expanded атрибута
            toggleButton.setAttribute('aria-expanded', answer.classList.contains('active'));
        });
    });
});
