class SortBlocks {
    constructor () {
        this.sorted = false;
        this.container = document.querySelector('.containers');       
        this.blocks = document.querySelectorAll('.block-container');
        this.dataBlocks = [].map.call(this.blocks, block => {
            return {
                top: (block.getBoundingClientRect().top + window.pageYOffset) - (this.container.getBoundingClientRect().top + window.pageYOffset) ,
                left: (block.getBoundingClientRect().left + window.pageXOffset) - (this.container.getBoundingClientRect().left + window.pageXOffset),
                price: parseInt(block.dataset.price),
                target: block,
            }
        })
        this.sortedBlocks = [...this.dataBlocks].sort((first, second) => {
            return first.price - second.price;
        })
        const button = document.querySelector('.sort');
        button.addEventListener('click', () => this.sort());
        this.init();
    }

    sort () {
        [].forEach.call(this.blocks, block => {
            [].forEach.call(this.sortedBlocks, (sortBlock, index) => {
                if (block === sortBlock.target) {
                    if (!this.sorted) {
                        block.style.top = this.dataBlocks[index].top + 'px';
                        block.style.left = this.dataBlocks[index].left + 'px';
                    } else {
                        block.style.top = sortBlock.top + 'px';
                        block.style.left = sortBlock.left + 'px';
                    }
                }
            })
        })
        this.sorted = !this.sorted;
    }

    init () {
        this.container.style.height = this.container.clientHeight + 'px';
        this.container.style.display = 'block';
        this.blocks.forEach((block, index) => {
            block.style.position = 'absolute';
            block.style.left = this.dataBlocks[index].left + 'px';
            block.style.top = this.dataBlocks[index].top + 'px';
        })  
    }
}


const sortBlocks = new SortBlocks();
