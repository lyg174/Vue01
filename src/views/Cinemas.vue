<template>
    <div>
        <ul>
            <li v-for="item in cinemas" class="p-3.75 flex">
                <div class="pr-15px flex-1">
                    <h3 class="text-15px to-dark-900 leading-20.9px">{{ item.name }} <span>{{ item.price }}</span></h3>
                    <p class="text-12px mt-5px leading-18px">{{ item.address }} <span>{{ item.range }}</span></p>
                </div>
                <div class="h-45.5px flex-col align-bottom">
                    <div class="h-22.5px text-center">
                        <span class="price">￥</span><span class="price text-15px">{{ item.lowPrice/100 }}</span><span class="price">起</span>
                    </div>
                    <div class="mt-5px w-70px h-18px text-12px text-center">
                        <span class="leading-18px text-gray-500">{{ (item.Distance * 1000).toFixed(1) }}km</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style>
    .price {
        line-height: 22.5px;
        color: #ff5f16;
    }
</style>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                // cinemas:[
                //     {id:0,name:'北京博纳影城悠唐店',addr:'三里屯2号楼',price:'￥49起',range:'1421.5km'},
                //     {id:1,name:'北京环球影城',addr:'房山区大学城2楼',price:'￥49起',range:'1428.5km'},
                //     {id:2,name:'CGV影城',addr:'大兴区华佗路',price:'￥49起',range:'1421.5km'},
                //     {id:3,name:'SFC上影影城',addr:'大兴区永大路',price:'￥49起',range:'1421.5km'},
                // ]
                cinemas:[]// 初始化一个变量 以供template页面中渲染
            }
        },
        // 挂载之前
        beforeMount(){
            // 发起请求
            axios.defaults.headers['X-Host']='mall.film-ticket.cinema.list'
            axios.get('/apigateway?cityId=110100&ticketFlag=1&k=8799971').then(res=>{// then 然后
                console.log(res.data.data.cinemas);// 拿到返回的数据
                this.cinemas = res.data.data.cinemas// 改变data中的数据为请求到的数据
            })
        }
    }
</script>