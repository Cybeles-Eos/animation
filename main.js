
const leftBoxs = document.querySelectorAll('.b-left');
const rightBoxs = document.querySelectorAll('.b-right');


const observerLeft = new IntersectionObserver(entries =>{
   entries.forEach(entry => {
      if(entry.isIntersecting){
         entry.target.classList.add("showToRight")
      }
      
   })
}, {
   rootMargin: "-30px",
   threshold: 0.7
})

const observerRight = new IntersectionObserver(entries =>{
   entries.forEach(entry => {
      if(entry.isIntersecting){
         entry.target.classList.add("showToLeft")
      }
   })
}, {
   rootMargin: "-30px",
   threshold: 0.5
})

leftBoxs.forEach(box => observerLeft.observe(box));
rightBoxs.forEach(box => observerRight.observe(box))




