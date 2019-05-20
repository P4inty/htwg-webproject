var nav = new Vue({
    el: '#navbar',
    data: {
        isActive: false,
    },
});

var disclaimer = new Vue({
    el: '#disclaimer',
    data: {
        show: true,
    },
    methods: {
        accept: function(accept) {
            $cookies.config('365d');
            $cookies.set('cookie_disclaimer', accept);
            this.show = false;
        }
    },
    beforeMount: function() {
        if($cookies.isKey('cookie_disclaimer')) {
            this.show = false;
        }
    }
});