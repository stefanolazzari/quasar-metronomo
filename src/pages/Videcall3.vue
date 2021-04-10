<template>
  <div>
    <q-btn
    @click="open"
    label="Open or Join Room"/>
    <q-btn
    @click="close"
    label="Close"/>
  </div>
</template>

<script>
import * as RTCMultiConnection from 'rtcmulticonnection'
export default {
  data () {
    return {
      connection: new RTCMultiConnection()
    }
  },
  methods: {
    open () {
      // this line is VERY_important
      this.connection.socketURL = 'https://rtcmulticonnection.herokuapp.com:443/'
      this.connection.session = {
        audio: true,
        video: true
      }
      this.connection.openOrJoin('your-room-id')
    },
    close () {
      this.connection.getAllParticipants().forEach(function (pid) {
        this.connection.disconnectWith(pid)
      })
      // stop all local cameras
      this.connection.attachStreams.forEach(function (localStream) {
        localStream.stop()
      })

      // close socket.io connection
      this.connection.closeSocket()
    }
  },
  mounted () {

  }
}

</script>

<style>
  video {
    width: 40%;
    border-radius: 15px;
  }
</style>
