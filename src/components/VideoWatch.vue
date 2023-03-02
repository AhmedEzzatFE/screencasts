<template>
  <div>
    <h1>Video Detail Page</h1>
    <video-player
      class="video-player-box"
      ref="videoPlayer"
      :options="playerOptions"
      :playsinline="true"
      customEventName="customstatechangedeventname"
      @play="onPlayerPlay($event)"
      @pause="onPlayerPause($event)"
      @ended="onPlayerEnded($event)"
      @waiting="onPlayerWaiting($event)"
      @statechanged="playerStateChanged($event)"
      @ready="playerReadied"
    >
    </video-player>
    <h1>{{ videos.name }}</h1>
    <p v-html="videos.description"></p>
  </div>
</template>

<script>
// require styles
import "video.js/dist/video-js.css";

import { videoPlayer } from "vue-video-player";
export default {
  name: "VideoWatch",
  components: { videoPlayer },
  data() {
    return {};
  },
  computed: {
    videos() {
      const data = this.$store.state.videos.find(
        (vid) => vid.id == this.$route.params.id
      );
      return data;
    },
    playerOptions() {
      return {
        language: "en",
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: "video/webm",
            src: this.videos.WatchUrl,
          },
        ],
        poster: this.videos.thumbnail,
      };
    },
    player() {
      return this.$refs.videoPlayer.player;
    },
  },
  mounted() {
    console.log("this is current player instance object", this.player);
  },
  methods: {
    // listen event
    onPlayerPlay(player) {
      console.log("player play!", player);
    },
    onPlayerPause(player) {
      console.log("player pause!", player);
    },
    // ...player event

    // or listen state event
    playerStateChanged(playerCurrentState) {
      console.log("player current update state", playerCurrentState);
    },

    // player is ready
    playerReadied(player) {
      console.log("the player is readied", player);
      // you can use it to do something...
      // player.[methods]
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.video-player {
  height: 50%;
  width: 50%;
}
</style>
