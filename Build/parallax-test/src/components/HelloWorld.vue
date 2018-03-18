<template>
  <div id="app">
    <div style="background-color: #fff; height: 100vh;">
    <h1 style="margin-top: 0; padding-top: 20px;">Scroll down ⬇</h1>
    </div>
    <!-- <div style="position: relative; z-index: 9999; background-color: #fff;">
      <h1 style="margin:0;">Parallax Effect</h1>
      <parallax>
        <img src="https://apertureless.github.io/vue-parallax/static/img/pexels-photo-241307.jpeg">
      </parallax>
    </div> -->
    <!--<div style="background-color: red; height: 100vh;"></div>-->
    <h1>Parallax fixed position </h1>

    <div style="position: relative;">
      <parallax :fixed="true">
        <img src="https://apertureless.github.io/vue-parallax/static/img/pexels-photo-196416.jpeg">
      </parallax>
    </div>

      <div class="text">
        <div class="wrapper">
          <p>While the mayor is embracing the fake news operation being run from his city, others are not quite so forgiving. Website-owners in Veles have faced new curbs from Google and Facebook, who since the November election have been under pressure to tackle fake news on their platforms.</p>

          <p>Several fake news producers CNN spoke to say they have had their Google AdSense accounts suspended and their Facebook fan pages blocked. Mikhail said that just last month he “heard about two or three big pages – million, million and a half [followers] – that were down”.</p>

          <p>Google would not share specific data on the number of Macedonian AdSense accounts it has closed, but said nearly 200 publishers were kicked out of the Google network permanently after the election last year. This was after a review of sites that were deemed to misrepresent themselves or their content. source</p>

          <p>The company uses an automated flagging system to spot the signals of what it calls “bad publishers” which is evolving all the time. It also has a dedicated enforcement team which carries out manual reviews of sites and says it relies on users to flag misinformation.</p>
        </div>
    </div>

    <!--<div style="background-color: orange; height: 100vh;"></div>-->
  </div>
</template>

<script>
import Parallax from 'vue-parallaxy'

export default {
  name: 'app',
  components: {
    Parallax
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
</style>
