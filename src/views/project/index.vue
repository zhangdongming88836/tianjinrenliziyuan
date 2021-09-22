<template>
    <div class="home_box">
        <CommonHeader></CommonHeader>
        <div class="home_bot">
            <div class="home_bot_left">
                <CommonMenu :routes="routes"></CommonMenu>
                <div class="active_img">
                    <img :src="require('../../assets/menu/img.png')"/>
                </div>
            </div>
            <div class="home_bot_right">
                <router-view></router-view>
            </div>
        </div>	
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    import CommonHeader from '@/views/project/components/commonHeader'
    import CommonMenu from '@/views/project/components/commonMenu'

    export default { 
        data() {
            return {}
        },
        components:{
            CommonHeader,
            CommonMenu
        },
        computed:{
             ...mapGetters(['permission_routers']),
            routes() {
                 return this.permission_routers
               // return  this.$router.options.routes;
            }
        },
    }
</script>
<style lang="scss">
   .home_box{
        display:flex;
        flex-direction: column;
        width:100%;
        min-height:100vh;
        .home_bot{
            flex-grow:1;
            display:flex;
            .home_bot_left{
                position:relative;
                flex:0 0 210px;
                box-sizing: border-box;
                padding-top:10px;
                background:#eaebef;
                border-right:1px solid #ccc;
                .active_img{
                    position:absolute;
                    bottom:0;
                    left:0;
                    right:0;
                    width:210px;
                    height:110px;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
            }
            .home_bot_right{
                flex-grow:1;
                background-color: rgba(242, 242, 242, 1);
                //background:#fff;
            }
        }
    }
</style>