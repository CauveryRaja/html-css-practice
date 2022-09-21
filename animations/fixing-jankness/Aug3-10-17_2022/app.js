const relativeElm = document.getElementsByClassName('relative')[0];
const transformElm = document.getElementsByClassName('transform')[0];

let count = 0;

setInterval(() => {
    relativeElm.innerHTML = `<h1>${count}</h1>`;
    transformElm.innerHTML = `<h1>${count}</h1>`;
    count++;
}, 500);