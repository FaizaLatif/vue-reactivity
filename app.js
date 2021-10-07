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
                return  37
            }
        }
    },
    watch: {
        result() {
            const that = this;
            setTimeout(function () {
                that.counter = 0; }, 5000);
        }
    }

}).mount('#assignment');
