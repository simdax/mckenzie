import Vue from 'vue'
import VueChartJs from 'vue-chartjs'

Vue.component('chart', {
    extends: VueChartJs.Pie,
    mixins: [VueChartJs.mixins.reactiveProp],
    updated () {
	console.log('⚡ I am updated')
    },
    mounted () {
	this.renderChart(this.data, this.options)
    },
    data() {return  {
	show: true,
	message: {},
	data: ["coucou", 546],
	options: {
	    responsive: true,
	    maintainAspectRatios: false,
	    scales: {
		yAxes: [{
		    ticks: {
			callback: function(value, index, values) {
			    return `£ ${value}`;
			},
		    },
		}],
	    },
	    tooltips: {
		enabled: true,
		callbacks: {
		    label:function (tooltipItems, data) {
			console.log(data)
			return tooltipItems.yLabel + '£'
		    }
		}
	    }
	}
    }
	   }
})
