var nav = new Vue({
    el: '#navbar',
    data: {
        isActive: false,
    },
});

var carousel = new Vue({
    el: '#carousel',
    data: {
        slides: [false, true, true],
        hideMore: true,
    },
    methods: {
        left: function() {
            this.slides.push(this.slides.shift());
        },
        right: function() {
            this.slides.unshift(this.slides.pop());
        }
    }
});