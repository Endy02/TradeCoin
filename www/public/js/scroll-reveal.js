const ratio = .1;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
};

const handleIntersect = (entries, observer) => {
    entries.forEach( entry => {
       if (entry.intersectionRatio > ratio)  {
           entry.target.classList.add('reveal-visible');
           observer.unobserve(entry.target);
       }
        console.log(entry.intersectionRatio);
    });
};

const observer = new IntersectionObserver(handleIntersect, options);

document.querySelectorAll('.reveal-vertical').forEach((r) => {
    observer.observe(r);
})

document.querySelectorAll('.reveal-horizontal').forEach((r) => {
    observer.observe(r);
})
