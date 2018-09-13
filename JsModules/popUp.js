(function () {
    var images = document.getElementsByClassName('main-img'),
        modal = document.getElementsByClassName('popup-modal')[0],
        next = document.getElementById('next'),
        prev = document.getElementById('prev'),
        currentImg,
        exit = document.getElementById('exit'),
        active = false

    for (let i = 0; i < images.length; i++) {
        images[i].onclick = function (e) {
            if (!active) {
                var img = document.createElement('img')
                img.src = images[i].src
                modal.appendChild(img)
                modal.classList.add('popup-modal-active')
                currentImg = i
                active = true
            }
        }
    }

    prev.addEventListener('click', function () {
        modal.removeChild(modal.lastChild)
        var img = document.createElement('img')
        currentImg -=1
        if (currentImg < 0) {
            currentImg = images.length - 1
        }
        img.src = images[currentImg].src
        modal.appendChild(img)
    })

    next.addEventListener('click', function () {
        modal.removeChild(modal.lastChild)
        var img = document.createElement('img')
        currentImg +=1
        if (currentImg > 4) {
            currentImg = 0
        }
        img.src = images[currentImg].src
        modal.appendChild(img)
    })

    exit.onclick = function () {
        modal.removeChild(modal.lastChild)
        modal.classList.remove('popup-modal-active')
        active = false
    }
})()