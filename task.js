const div = document.querySelectorAll(".reveal")
const arrey = [...div]
console.log(arrey)
window.addEventListener("scroll", (e) => {
  for (i=0; i<arrey.length; i++) {
    const {top, botton} = arrey[i].getBoundingClientRect()
    if (top < window.innerHeight) {
      arrey[i].classList.add("reveal_active")
    }
  }
})