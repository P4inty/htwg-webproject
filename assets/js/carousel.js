var carousel = new Vue({
    el: '#carousel',
    data: {
        slides: [false, true, true],
        hideMore: true,
        button: "Mehr anzeigen"
    },
    methods: {
        left: function() {
            this.hideMore = true;
            this.slides.push(this.slides.shift());
        },
        right: function() {
            this.hideMore = true;
            this.slides.unshift(this.slides.pop());
        },
        showMore: function() {
            this.hideMore ? this.button = "Weniger anzeigen" : this.button = "Mehr anzeigen";
            this.hideMore = !this.hideMore;
        }
    }
});