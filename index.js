  function scrollToCard(card) {
    const wrapper = document.getElementById("carouselWrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();

    const offset = cardRect.left - wrapperRect.left - (wrapper.offsetWidth / 2) + (card.offsetWidth / 2);
    wrapper.scrollLeft += offset;
  }



  document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const toggle = question.querySelector(".toggle");

    const isOpen = answer.style.display === "block";

    document.querySelectorAll(".faq-answer").forEach((el) => (el.style.display = "none"));
    document.querySelectorAll(".toggle").forEach((el) => (el.textContent = "+"));

    if (!isOpen) {
      answer.style.display = "block";
      toggle.textContent = "×";
    }
  });
});


  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');    
  });