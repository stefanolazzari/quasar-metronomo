<template>
    <div>
        <audio src="kinga.mp3"></audio>
    <button @click="start" id=playBtn data-playing="false" role="switch" aria-checked="false">
        <span>Play/Pause</span>
    </button>
    <button id=stopBtn data-playing="false" role="switch" aria-checked="true">
        <span>Stop</span>
    </button>
    </div>
</template>

<script>
export default {
  methods: {
    start () {
      const AudioContext = window.AudioContext || window.webkitAudioContext
      const audioContext = new AudioContext()
      const audioElement = document.querySelector('audio')
      const track = audioContext.createMediaElementSource(audioElement)
      track.connect(audioContext.destination)

      // select our play button
      const playButton = document.getElementById('playBtn')
      const stopButton = document.getElementById('stopBtn')

      playButton.addEventListener('click', function () {
        if (audioContext.state === 'suspended') {
          audioContext.resume()
        }
        if (this.dataset.playing === 'false') {
          audioElement.play()
          this.dataset.playing = 'true'
        } else if (this.dataset.playing === 'true') {
          audioElement.pause()
          this.dataset.playing = 'false'
        }
      }, false)

      audioElement.addEventListener('ended', () => {
        playButton.dataset.playing = 'false'
      }, false)
      stopButton.addEventListener('click', function () { audioElement.load() })
    }
  }
}
</script>
