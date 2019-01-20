class ScrollButton {
    constructor () {
        this.scroll = this.scroll.bind(this);

        this.timerId = null;
        this.scrollTargetCoords = document.getElementById("scroll-target").getBoundingClientRect().top + document.documentElement.scrollTop;
        const button = document.getElementById("scroll-button");
        button.addEventListener('click', this.scroll);
    }

    scroll () {
        this.timerId = setInterval(() => {
            const currentScroll = document.documentElement.scrollTop;
            console.log(currentScroll);
            console.log(this.scrollTargetCoords);
            if (currentScroll < this.scrollTargetCoords)
                window.scrollBy(0, 20)
            else 
                clearInterval(this.timerId);
        }, 20)
    }
}

const scrollButton = new ScrollButton();
