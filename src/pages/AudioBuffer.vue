<template>
<div class="q-pa-md q-gutter-sm">
  <q-btn
    @click="init"
    label="White Noise"/>
</div>
</template>

<script>
export default {
  methods: {
    init () {
      console.log('ciao')
      // const AudioContext = window.AudioContext || window.webkitAudioContext
      let audioCtx

      // Stereo
      const channels = 2

      function init () {
        audioCtx = new AudioContext()
      }

      if (!audioCtx) {
        init()

        // Create an empty two second stereo buffer at the
        // sample rate of the AudioContext
        const frameCount = audioCtx.sampleRate * 2.0

        const myArrayBuffer = audioCtx.createBuffer(channels, frameCount, audioCtx.sampleRate)

        // Fill the buffer with white noise;
        // just random values between -1.0 and 1.0
        for (let channel = 0; channel < channels; channel++) {
          // This gives us the actual array that contains the data
          const nowBuffering = myArrayBuffer.getChannelData(channel)
          for (let i = 0; i < frameCount; i++) {
            // Math.random() is in [0; 1.0]
            // audio needs to be in [-1.0; 1.0]
            nowBuffering[i] = Math.random() * 2 - 1
          }
        }

        // Get an AudioBufferSourceNode.
        // This is the AudioNode to use when we want to play an AudioBuffer
        const source = audioCtx.createBufferSource()
        // set the buffer in the AudioBufferSourceNode
        source.buffer = myArrayBuffer
        // connect the AudioBufferSourceNode to the
        // destination so we can hear the sound
        source.connect(audioCtx.destination)
        // start the source playing
        source.start()

        source.onended = () => {
          console.log('White noise finished')
        }
      }
    }
  }
}
</script>
