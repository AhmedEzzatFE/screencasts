<template>
  <div>
    <h1>Videos</h1>
    <div class="video-container">
      <div v-for="video in videos" :key="video.name">
        <router-link :to="{ name: 'VideoWatch', params: { id: video.id } }">
          <div class="video-box">
            <img :src="video.thumbnail" alt="imagesrc" />
            <div>
              <h3>{{ video.name }}</h3>
              <div v-html="video.description"></div>
            </div></div
        ></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
  components: {},
  data() {
    return {
      videos: this.$store.state.videos,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.video-container {
}
.video-box {
  border: 1px solid black;
  border-radius: 3px;
  padding: 20px;
  margin: 20px;
  text-align: left;
  display: flex;
  justify-content: flex-start;
}
.video-box img {
  max-height: 150px;
  padding: 20px;
  width: 20%;
}
</style>
