(function (){
    var first = document.getElementById('first'),
        second = document.getElementById('second'),
        third = document.getElementById('third'),
        menu = document.getElementsByClassName('burger-menu')[0],
        nav = document.getElementsByClassName('nav')[0],
        button = document.getElementsByClassName('button')[0],
        timerId = null

  menu.addEventListener('click', function () {
      first.classList.toggle('first-active')
      second.classList.toggle('second-active')
      third.classList.toggle('third-active')
      nav.classList.toggle('open')
  })  

  function scrollToImges () {
      var element = document.getElementsByClassName('main-header')[0]
      var elementPos = element.getBoundingClientRect().top + pageYOffset
      timerId = setInterval(()=> {
        if (Math.abs(window.pageYOffset - elementPos) < 10) {
            clearInterval(timerId)
            return
        }
            document.documentElement.scrollTop += 10
      },10)
  }

  button.addEventListener('click', scrollToImges)
})()