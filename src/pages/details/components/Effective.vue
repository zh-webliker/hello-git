<template>
    <div class="time">
        <ul v-for='(item,index) in times' :key="index">
            <li @click="chooseTime(index)" :class="{'active':index == nowIndex}">
                {{item.title}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Effective",
    data(){
        return{
            nowIndex:0
        }
    },
    props:{
        times:{
            type:Array,
            default(){
                return[
                    {
                        title:'text',
                        value:1
                    }
                ]
            }
        }
    },
    methods:{
        chooseTime(index){
            this.nowIndex = index;
            this.$emit('times',this.times[index].value);
        }
    }
}
</script>

<style scoped>
.time ul{
    list-style: none;
}
.time{
    display: flex;
}
.time li{
    border-color: rgb(93, 85, 85);
    background-color: #ced4d1;
    color: rgb(0, 0, 0);
    width: 50px;
    height: 25px;
}
 .time .active{
    border-color: #4fc08d;
    background-color: #4fc08d;
    color: #fff;
}
</style>


