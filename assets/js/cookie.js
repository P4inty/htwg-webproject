var query = new Vue({
    el: '#cookie',
    methods: {
        setCookie(key, value) {
            if($cookies.isKey('cookie_disclaimer')) {
                if($cookies.get('cookie_disclaimer') == 'true') {
                    $cookies.set(key, value);
                }
            }
        }
    }
});