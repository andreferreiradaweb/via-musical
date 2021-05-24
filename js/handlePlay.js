function handlePlay(item) {
  let video = item.children[0]
  let image = item.children[1]

  if (video.paused) {
    video.play()
    image.className = 'video-image playing'
  } else {
    video.pause()
    image.className = 'video-image'
  }
  
  video.addEventListener("ended", () => {
    image.className = 'video-image' 
  });

}

handlePlay()
