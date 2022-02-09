const cardsInRow = 8;
let cardWidth = Math.ceil(window.innerWidth/cardsInRow);
cardWidth -= 15;
let columnMap = [0, 0, 0, 0, 0, 0, 0, 0];

let cards = Array.from(document.getElementsByClassName('card'));
cards.forEach((elm, index) => {
    elm.style.width = cardWidth + 'px';
    elm.textContent = index;
    // let elmTop = elm.getClientRects()[0].top;
    // let offset = elmTop - columnMap[index%cardsInRow] - 5;
    // console.log(index, elmTop, columnMap[index%cardsInRow], offset);
    // if(offset > 0) {
    //     elm.style.transform = `translateY(${-offset}px)`;
    // }
    // columnMap[index%cardsInRow] += elm.scrollHeight;

    let firstRow = (index-8) < 0 ? true : false;
    if(!firstRow) {
        let prevElmEnd = cards[index-8].getClientRects()[0].bottom;
        let currElmStart =  elm.getClientRects()[0].top;
        let offset = currElmStart - prevElmEnd - 10;
        console.log(index-8, index, prevElmEnd, currElmStart, offset);
        if(offset) {
            elm.style.transform = `translateY(${-offset}px)`;
        }
    }

    // const nthRow = Math.floor(index/8);
    // console.log(elm.style.width, columnMap, elm.scrollHeight, nthRow, elm.getClientRects()[0].top);
});