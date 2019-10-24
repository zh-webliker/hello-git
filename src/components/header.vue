<template>
    <div class='head'>
        <div class='left'>上机堂</div>
        <div class='right'>
            <div>登陆</div>
            <div>|</div>
            <div>注册</div>
            <div>|</div>
            <div>关于</div>
        </div>
    </div>
</template>

<script>

export default{
    name:"top",
    data(){
        return{

        }
    }
}

</script>

<style scoped>
.head{
    width: 100%;
    height:80px;
    background-color: rgb(54, 52, 52);
    color: #e4e2e2;
    font-size: 15px;
    display:flex;
    flex-flow: row nowrap;
}
.left{
    margin-left: 80px;
    margin-top:30px;
}
.right{
    width:120px;
    margin-left: 75%;
    margin-top:30px;
    display:flex;
    justify-content: space-between;
}
</style>