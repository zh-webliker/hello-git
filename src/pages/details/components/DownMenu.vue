<template>
    <div>
        <div class='menu-first'>
            <span>{{this.DownData[nowIndex].name}}</span>
            <div class='arrow' @click="showList"></div>
        </div>
        <div class='menu-list'>
            <ul>
                <li v-for="(item,index) in DownData" :key='index' @click="selectList(index)" v-show="show">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"DownMenu",
    data(){
        return{
            nowIndex:0,
            show:false
        }
    },
    props:{
        DownData:{
            type:Array,
            default:function(){
                return [
                    {
                        name:"text",
                        value:1
                    },
                ]
            }
        }
    },
    methods:{
        selectList(index){
            this.nowIndex = index;
            this.show = false;
            this.$emit('downmenu',this.DownData[index].value)
        },
        showList(){
            this.show = !this.show
        }
    }
}
</script>

<style scoped>

.arrow{
    display: inline-block;
    border-left:4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 5px solid #e3e3e3;
    width:0;
    height: 0;
    margin-top:-1px;
    margin-left:6px;
    margin-right:-14px;
    vertical-align: middle;
}
.menu-list ul{
    list-style: none;
    margin-left:0px;
    padding-left: 0px;
}
.menu-list li :hover{
    background-color: #e3e3e3;
}


/* .menu-first,.menu-list{
    margin-left:0px;
    padding-left: 0px;
    text-align: left;
} */
</style>
