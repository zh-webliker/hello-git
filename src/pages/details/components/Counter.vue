<template>
    <div class='counter'>
        <div class='counter-btn' @click='reduce'> - </div>
        <div class='counter-show'>
            <input typr='text' v-model="number" @keyup="inputHandler"> 
        </div>
        <div class='counter-btn' @click='add'> + </div>
    </div>
</template>

<script>
export default {
    name:"counter",
    data(){
        return{
            number:1
        }
    },
    props:{
        min:{
            type:Number,
            default:1
        },
        max:{
            type:Number,
            default:5
        }
    },
    methods:{
        reduce(){
            if(this.number <= this.min){
                return this.min
            }
            this.number--;
            this.$emit('counter',this.number)
        },
        add(){
            if(this.number >= this.max){
                return this.max
            }
            this.number++;
            this.$emit('counter',this.number)
        },
        inputHandler(){
            let fix;
            if(typeof this.number === 'string'){
                fix = Number(this.number.replace(/\D/g,""));
            }else{
                fix = this.number
            }if(fix > this.max || fix < this.min){
                fix = this.min
            }
            this.number = fix
            this.$emit('counter',this.number)
        }
    }
}
</script>

<style scoped>
.counter{
    display: flex;
    /* text-align: center; */
}
.counter-btn,.counter-show{
    border: solid 1px gray;
    text-align: center;
}
.counter-btn{
    width: 10%;
}
</style>

