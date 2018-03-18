$(document).ready(function() {

	// new Vue({
	//   el: '#app',
	//   data: function data() {
	//     return {
	//       counter: 0
	//     };
	//   }
	// });

	new Vue({
	  el: "#video-app",
	  mounted: function() {
	  	this.$refs.videoRef.src = "http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4";
	    //this.$refs.videoRef.play();
	  }
	});

    //core of each application
    //instances have one major job
    //lesson 2 + 3
	new Vue({
		//el takes string as a value
		el: '#app', 
		data: {
			title: 'Hello World!', 
			link: 'http://www.google.com', 
			finishedLink:'<a href="http://www.google.com">google</a>'
		},
		methods: {
			// changeTitle: function() {
			// 	this.title = event.target.value;
			// }
			sayHello: function() {
				this.title = "Hello!";
				return this.title;
			}
		}
	});

	new Vue({
		el:'#counter', 
		data: {
			counter: 0
		}, 
		methods: {
			increase: function() {
				this.counter++;
			}
		}
	})
});

