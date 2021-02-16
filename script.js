const video = document.getElementById('video')

function startVideo(params) {
  navigator.getUserMedia(
    { video: {}},
    stream => video.srcObject = stream,
    err => console.error(err)
  )
}

startVideo()
