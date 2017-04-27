new Vue({
  el: '#exercise',
  data: {
    value: ''
  },
  methods: {
    showAlert: function (){
      alert("Alert shown!!")
    },
    keyPressed: function (event){
      this.value= event.target.value;
    }
  }
})
