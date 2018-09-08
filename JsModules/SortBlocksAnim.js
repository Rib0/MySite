(function () {
    var elems = document.getElementsByClassName('blocks'),
        timerId = false,
        blockArray = [],
        firstArray = [],
        button = document.getElementsByClassName('sort-blocks')[0],
        buttonInfo = document.getElementsByClassName('button-info')[0],
        sortPointer = document.getElementsByClassName('sort-pointer')[0]		

    function createArray () {
        blockArray = []
        var tempLeft
        for (var i = 0; i < elems.length; i++) {
            if (!parseFloat(getComputedStyle(elems[i]).left)) {
                tempLeft = 0
            } else {
                tempLeft = 49 + '%'
            }
            blockArray.push({
                top: getComputedStyle(elems[i]).top,
                left: tempLeft,
                price: elems[i].getAttribute('data-price'),
                id: i
            })
        }
        blockArray.sort(function (first, second) {
            return first.price - second.price
        })
        console.log(blockArray)
    }

    function moveBlocks () {
        for (var i = 0; i < elems.length; i++) {
            for (var j = 0; j < blockArray.length; j++) {
                if (i === blockArray[j].id) {
                    for (var k = 0; k < blockArray.length; k++) {
                        if (j === blockArray[k].id) {
                            elems[i].style.top = blockArray[k].top
                            elems[i].style.left = blockArray[k].left
                        }
                    }
                }
            }
        }
    }

    function canselSort () {
        firstArray = blockArray.slice()
        firstArray.sort((first, second)=> {
            return first.id - second.id
        })
        if (timerId) {
            console.log('too fast')
            return
        }
        for (var i = 0; i < elems.length; i++) {
            elems[i].style.top = firstArray[i].top
            elems[i].style.left = firstArray[i].left
        }
        timerId = setTimeout(()=> {
            timerId = false
        },1000)
        button.removeEventListener('click', canselSort)
        button.addEventListener('click', sort)
        buttonInfo.innerHTML = 'Сортировать круизы по цене'
        sortPointer.classList.toggle('sorted')
    }

    function sort () {
        if (timerId) {
            console.log('too fast')               
            return
        }
        moveBlocks()           
        timerId = setTimeout(()=> {
            timerId = false
        },1000)
        button.removeEventListener('click', sort)
        button.addEventListener('click', canselSort)
        buttonInfo.innerHTML = 'Отменить сортировку'
        sortPointer.classList.toggle('sorted')
    }

    document.documentElement.onload = createArray()
    button.addEventListener('click', sort)
})()
