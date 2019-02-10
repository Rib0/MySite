class ScrollButton {
    constructor () {
        this.scroll = this.scroll.bind(this);

        this.scrollTargetCoords = document.getElementById("scroll-target").getBoundingClientRect().top + document.documentElement.scrollTop;
        const button = document.getElementById("scroll-button");
        button.addEventListener('click', this.scroll);
    }

	scroll () {
		if (window.pageYOffset >= this.scrollTargetCoords) return;
		setTimeout(() => {
			window.scrollBy(0, 20);
			this.scroll();
		}, 20)
	}
    
}

const scrollButton = new ScrollButton();
