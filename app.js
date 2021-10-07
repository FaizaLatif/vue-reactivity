Vue.createApp({
    data() {
        return {
            counter: 0,
        }
    },
    methods: {
        addFive() {
             this.counter = this.counter + 5;
        },
        addOne() {
             this.counter = this.counter + 1;
        }
    },
    computed: {
        result() {
            console.log('running');
            if(this.counter < 37) {
                return  'not there yet'
            }
            if(this.counter > 37) {
                return  'too much!'
            }
            if(this.counter == 37) {
                return  'You\'re there!'
            }
        }
    },
    watch: {
        result(value) {
            setTimeout(function () {
                this.counter = 0; }, 5000);
        }
    }

}).mount('#assignment');
