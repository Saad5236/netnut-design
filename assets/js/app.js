const faqsBtns = document.querySelectorAll(".faqs-qna button")
const faqsParagraphs = document.querySelectorAll(".faqs-qna p")

for (let i = 0; i < faqsBtns.length; i++) {
  faqsBtns[i].addEventListener("click", (e) => {
    faqsParagraphs[i].classList.toggle("d-none")
    faqsBtns[i].querySelectorAll("img")[0].classList.toggle("d-none")
    faqsBtns[i].querySelectorAll("img")[1].classList.toggle("d-none")
  })
}
