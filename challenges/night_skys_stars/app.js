const sky = document.getElementsByTagName('body')[0];
const skyDimensions = {
    width: sky.getBoundingClientRect().width,
    height: sky.getBoundingClientRect().height
};
const STARS_COUNT = 1000;

console.log(skyDimensions)

renderStars();

function renderStars() {
    for(let i=1; i<=1000; i++) {
        console.log(random(skyDimensions.height))
        sky.insertAdjacentHTML('beforeend', `
            <div class="star" 
                style="top: ${random(skyDimensions.height)}px; 
                    left: ${random(skyDimensions.width)}px"
            />
        `)
    }
}

function random(num) {
    console.log(num, Math.random() * num)
    return Math.round(Math.random() * num);
}