<template>
    <div>
        <input type="checkbox" v-model="show">
        <select v-model="src" style="width: 30em">
            <option v-for="item in pdfList" :value="item" v-text="item"></option>
        </select>
        <input v-model.number="page" type="number" style="width: 5em"> /{{numPages}}
        <button @click="rotate += 90">&#x27F3;</button>
        <button @click="rotate -= 90">&#x27F2;</button>
        <button @click="$refs.pdf.print()">print</button>
        <div style="width: 50%">
            <div v-if="loadedRatio > 0 && loadedRatio < 1" style="background-color: green; color: white; text-align: center" :style="{ width: loadedRatio * 100 + '%' }">{{ Math.floor(loadedRatio * 100) }}%</div>
            <pdf v-if="show" ref="pdf" style="border: 1px solid blue; margin-left: 30px;" :src="src" :page="page" :rotate="rotate" @password="password" @progress="loadedRatio = $event" @error="error" @num-pages="numPages = $event"></pdf>
        </div>
    </div>
</template>

<script>
import pdf from 'vue-pdf'

export default {
    components: {
        pdf: pdf
    },
    data () {
        return {
            show: true,
            pdfList: ["0"],
            src: '/static/pdf.pdf',
            loadedRatio: 0,
            page: 1,
            numPages: 0,
            rotate: 0,
        }
    },
    methods: {
        password: function(updatePassword, reason) {

            updatePassword(prompt('password is "test"'));
        },
        error: function(err) {

            console.log(err);
        }
    }
}
</script>
