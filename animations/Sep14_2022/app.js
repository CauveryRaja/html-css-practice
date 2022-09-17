function heavyWork() {
    console.log('heavy work started')
    for(let i=0; i<1000000000; i++) {}
    console.log('heavy work ended')
}

// setInterval(heavyWork, 300)
requestAnimationFrame(heavyWork)