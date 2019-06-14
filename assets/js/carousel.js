var carousel = new Vue({
    el: '#carousel',
    data: {
        slides: [false, true, true],
        hideMore: true,
        button: "Mehr anzeigen"
    },
    methods: {
        left() {
            this.hideMore = true;
            this.slides.push(this.slides.shift());
        },
        right() {
            this.hideMore = true;
            this.slides.unshift(this.slides.pop());
        },
        showMore() {
            this.hideMore ? this.button = "Weniger anzeigen" : this.button = "Mehr anzeigen";
            this.hideMore = !this.hideMore;
        }
    }
});