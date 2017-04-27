new Vue({
        el: '#body',
        data: {
            value: 0,
            timeout: 2000
        },
        computed: {
          result: function() {
            return this.value != 37 ? "Not  there yet" : "Done"
          }
        },
        watch: {
          result: function () {
            var vm = this
            setTimeout(function () {
              vm.value = 0
            }, vm.timeout)
          }
        },
        methods: {
          setTimeout: function () {
            this.timeout = event.target.value
          }
        }
    });
