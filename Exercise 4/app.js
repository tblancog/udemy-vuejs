new Vue({
  el: '#exercise',
  data: {
    effects: {
      highlight: false,
      shrink: true
    },
    circle: 'circle',
    shape: '',
    userClass: '',
    roundMe: true,
    userStyle: {
      float: ''
    },
    progress: 0,
    progressBarStyle: {
      width: '0px',
      backgroundColor: 'green',
      height: '5px'
    }
  },
  methods: {
    startEffect: function() {
      var vm = this
      setInterval( () => {
        vm.effects.highlight = !vm.effects.highlight,
        vm.effects.shrink = !vm.effects.shrink
      }, 300)
    },
    startProgress: function() {
      var vm = this
      var width = 0
      setInterval( () => {
        if(width >= 100) {
          return 
        }
        width++
        vm.progress = width + '%'
        vm.progressBarStyle.width = width + 'px'
      }, 30)
    }
  }
});
