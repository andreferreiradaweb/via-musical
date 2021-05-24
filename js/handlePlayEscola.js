function handlePlayEscola(item) {
  let video = item.children[0]
  let image = item.children[1]
  let info = item.children[2]

  if (video.paused) {
    video.play()
    image.className = 'video-image playing'
    info.className = 'escola-video-info playing'
  } else {
    video.pause()
    image.className = 'video-image'
    info.className = 'escola-video-info'
  }
  
  video.addEventListener("ended", () => {
    image.className = 'video-image' 
    info.className = 'escola-video-info'
  });

}

handlePlayEscola()
