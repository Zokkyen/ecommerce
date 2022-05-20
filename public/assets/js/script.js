const body = document.body;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

window.addEventListener('scroll',()=>{
    const currentScroll = window.scrollY;
    if (currentScroll<=0){
        // body.classList.remove(scrollDown);
        return;
    }


if (currentScroll >=lastScroll && !body.classList.contains(scrollUp)){
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
}else if (
    currentScroll < lastScroll &&
    body.classList.contains(scrollUp)
  ) {
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
  }
  lastScroll = currentScroll;
});