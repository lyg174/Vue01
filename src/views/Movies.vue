<template>
    <div>
        <div class="topTab">
            <ul class="flex justify-around h-50px items-center">
                <li :class="index == 0 ? 'active' : ''" @click="changeTab(0)">正在热映</li>
                <li :class="index == 1 ? 'active' : ''" @click="changeTab(1)">即将上映</li>
            </ul>
        </div>

        <div class="hotMovie">
            <ul class="p-10px">
                <li v-for="item in list" class="flex mb-30px">
                    <img :src="item.poster" alt="" class="w-66px">
                    <div class="flex-1 my-0 mx-10px">
                        <div class="leading-19px">
                            <h3 class="text-16px mt-6px mb-2px">{{ item.name }} {{ item.type }}</h3>
                            <p class="mt-3px">观众评分:<span style="color: #ffb232;">{{ item.grade }}</span>
                            </p>
                            <p class="mt-1px">主演:{{ item.director }}</p>
                            <p class="mt-1px">{{ item.nation }} | 时长:{{ item.runtime }}</p>
                        </div>
                    </div>
                    <button class="btn mr-5px">购票</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<style>
    p {
        font-size: 13px;
        color: #797D82;
    }

    .active{
        color: red;
        border-bottom: 2px solid red;
    }

    .btn{
        padding: 0px 8.2px;
        height: 25px;
        margin-top: 31.2px;
        background: transparent;
        border: 1px solid #ff5f16;
        border-radius: 5px;
        color: #ff5f16;
    }
</style>


<script>
// 安装axios npm i axios
// 导入axios
import axios from 'axios'

export default {
    name: 'Movies',
    data() {
        return {
            index: 0,
            // hotMovie:[
            //   {
            //     id:0,
            //     img:'https://pic.maizuo.com/usr/movie/149ddb9a7f64e06ed474d963cfc6c405.jpg?x-oss-process=image/quality,Q_70',
            //     title:'消失的他',
            //     type:'2D',
            //     score:7.1,
            //     zhuyan:'崔睿 刘翔 朱一龙 倪妮 文咏珊',
            //     addr:'中国大陆',
            //     time:'122分钟'
            //   },
            //   {
            //     id:0,
            //     img:'https://pic.maizuo.com/usr/movie/19dbbdc52057e722a4c6d76a788fc417.jpg?x-oss-process=image/quality,Q_70',
            //     title:'我爱你！',
            //     type:'2D',
            //     score:7.1,
            //     zhuyan:'韩延 倪大红 惠英红 梁家辉 叶童',
            //     addr:'中国大陆',
            //     time:'116分钟'
            //   },
            //   {
            //     id:0,
            //     img:'https://pic.maizuo.com/usr/movie/618a0120902e3f48e5e15be0daa710c6.jpg?x-oss-process=image/quality,Q_70',
            //     title:'变形金刚：超能勇士崛起',
            //     type:'3D',
            //     score:7.1,
            //     zhuyan:'小斯蒂芬·卡普尔 擎天柱 擎天圣 大黄蜂 幻影',
            //     addr:'美国',
            //     time:'128分钟'
            //   }
            // ]
            list: []
        }
    },
    methods: {
        changeTab(num) {// 点击按钮切换
            console.log(num);
            this.index = num;// 改变序号

            // 重新发起接口请求
            axios.get('/api/gateway?cityId=110100&pageNum=1&pageSize=10&type='+(num+1)+'&k=7318328').then(res => {
                console.log(res);
                this.list = res.data.data.films
                console.log(this.list);
            })
        }
    },
    // 生命周期 钩子函数
    // beforeCreate(){
    //   console.log('创建前');
    // },
    // created(){
    //   console.log('创建后');
    // },
    beforeMount() {
        console.log('挂载前');
        axios.defaults.headers['X-Host'] = 'mall.film-ticket.film.list'
        axios.get('/api/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=7318328').then(res => {
            console.log(res);

            // 请求回来后 改变data中的数据
            this.list = res.data.data.films
            console.log(this.list);
        })
    },
    // mounted(){
    //   console.log('挂载后');
    // }
}

</script>