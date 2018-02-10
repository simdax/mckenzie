<template>
  <div>
    <div class="tooltip">
      Prix total des transactions
      <br>
      - 150 euros
      <br>
      - 20 euros
    </div>
<pie-chart :options="options" @click="bon" :data="data"></pie-chart>
</div>
</template>

<script>
  
  
export default {
    mounted(){
	var remove = function(ev){
	    let tool=document.querySelector('.tooltip')
	    tool.style.visibility = "hidden"
	    document.removeEventListener("click", remove)
	    document.addEventListener("click", click_event)
	}.bind(this)
	var click_event = function(event){
	    let tool=document.querySelector('.tooltip')
	    tool.style.top = event.pageY + 'px'
	    tool.style.left = event.pageX + 'px'
	    tool.style['min-width'] = '100px'
	    tool.style['min-height'] = '200px'
	    tool.style.visibility = "visible"
	    document.removeEventListener("click", click_event)
	    document.addEventListener("click", remove)
	}.bind(this)
	document.addEventListener("click", click_event)
    },
    methods: {
	bon(ev) {
	    console.log(ev)
	}
    },
    data() {
	return {
	    count: 0,
	    active: true,
	    canvasId: 'myCanvas',
	    type: 'pie',
	    width: 500,
	    height: 400,
	    data: [
		['2014',1342],
		['2015',2123],
		['2016',1654],
		['2017',1795],
	    ],
	    options: {
		tooltips: {
		enabled: true,
		callbacks: {
		    title:function (tooltipItems, data) {
			console.log(data)
			return tooltipItems.yLabel + '£'
		    }
		}
		}
	    }
	}
    },
}
</script>

<style>
  .tooltip{
      position: absolute;
      padding: 10px;
      visibility: hidden;
      display: block;
      background: hsl(100, 50%, 50%);
      transition: all 1s easy-in;
  }
</style>
