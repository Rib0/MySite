class PopUp {
    constructor () {
        this.images = document.getElementsByClassName('popUp');
        this.chevronLeft = document.getElementById('chevron-left');
        this.chevronRight = document.getElementById('chevron-right');
        this.dialog = document.getElementById('dialog');
        this.shadowField = document.getElementById('shadowField')
        this.imageIndex;

        [].forEach.call(this.images, (image, index) => {
            image.onclick = () => this.openPopUp(index);
        })
        this.chevronLeft.onclick = this.chevronRight.onclick = (e) => {
            this.slideImage(e);
        }
        this.shadowField.onclick = () => {
            this.closePopUp();
        }
    }

    openPopUp (index) {
        this.shadowField.style.display = "block";
        this.dialog.style.display = 'block';
        const image = document.createElement('img');
        image.src = this.images[index].src;
        image.onload = () => this.dialog.appendChild(image);
        this.active = true;
        this.imageIndex = index;
    }

    closePopUp () {
        const img = this.dialog.querySelector('img');      
        this.dialog.removeChild(img);               
        this.dialog.style.display = '';
        this.shadowField.style.display = "";
        this.active = false;
    }

    slideImage (e) {
        const img = this.dialog.querySelector('img');
        const {role} = e.currentTarget.dataset;
        if (role === 'left') this.imageIndex--;
        if (role === 'right') this.imageIndex++;

        if (this.imageIndex > this.images.length - 1) this.imageIndex = 0;
        if (this.imageIndex < 0) this.imageIndex = this.images.length - 1;

        this.dialog.removeChild(img);
        const image = document.createElement('img');
        image.src = this.images[this.imageIndex].src;
        image.onload = () => this.dialog.appendChild(image);    
    }
}

const popUp = new PopUp();
