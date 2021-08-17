var app = new Vue({
    el: '#root',
    data: {
        counterPhotos: 0,
        photos: [
            "img/Boolflix.JPG",
            "img/Boolzap.JPG",
            "img/Spotify.JPG",
            "img/DigitalOcean.JPG"
        ]
    },
    methods: {
        prevPhoto: function() {
            this.counterPhotos--;
            if (this.counterPhotos < 0) {
                this.counterPhotos = (this.photos.length - 1);
            }
        },
        nextPhoto: function() {
            this.counterPhotos++;
            if (this.counterPhotos > this.photos.length - 1) {
                this.counterPhotos = 0;
            }
        },
        clickCircle(index) {
            this.counterPhotos = index;
        },
    }
});

console.log(app);