const floating = document.querySelector('.floating')

function showFloating() {
  setTimeout(() => {
    floating.className = 'floating'
  }, 10000)
}

showFloating()

function closeFloating() {
  floating.className = 'floating disabled'
}