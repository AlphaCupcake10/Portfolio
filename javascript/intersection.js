const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        // console.log(entry)
        if(entry.isIntersecting)
        {
            entry.target.classList.add('show');
        }
        else
        {
            if(entry.target.classList.contains("repeat"))
                entry.target.classList.remove('show');
        }
    });
});
const animatedElements = document.querySelectorAll(".animate");
animatedElements.forEach((el) => observer.observe(el));
const bars = document.querySelectorAll(".skill-bar-meter-fill");
bars.forEach((el) => observer.observe(el));