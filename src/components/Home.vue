<template>
	
	<div class="home">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="el-col">
        <el-card shadow="hover" class="cl-float">
          <div class="me-icon">
            <i class="el-icon-message" style="color: rgb(245, 108, 108);"></i>
          </div>
          <div class="me-content">
            <p>系统消息</p>
            <p>6</p>
          </div>
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="el-col">
        <el-card shadow="hover" class="cl-float">
          <div class="me-icon">
            <i class="el-icon-tickets" style="color: rgb(230, 162, 60);"></i>
          </div>
          <div class="me-content">
            <p>待办项</p>
            <p>3</p>
          </div>
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="el-col">
        <el-card shadow="hover" class="cl-float">
          <div class="me-icon">
            <i class="el-icon-star-on" style="color: #EB2F96;"></i>
          </div>
          <div class="me-content">
            <p>点击量</p>
            <p>9999</p>
          </div>
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="el-col">
        <el-card shadow="hover" class="cl-float">
          <div class="me-icon">
            <i class="el-icon-message" style="color: rgb(245, 108, 108);"></i>
          </div>
          <div class="me-content">
            <p>任务进度</p>
            <p>88%</p>
          </div>
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="6">
        <el-card shadow="hover" class="cl-float">
          <v-chart ref="polar" :options="polar" :auto-resize="resize" style="width: auto;height: 400px"></v-chart>
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="6">
        <el-card shadow="hover" class="cl-float">
          <v-chart ref="bar" :options="bar" :auto-resize="resize" style="width: auto;height: 400px"></v-chart>
        </el-card>
      </el-col>

      <el-col :span="24" >
        <el-card shadow="hover" class="cl-float" style="background-color: #404a59">
          <v-chart ref="map" :options="map" :auto-resize="resize" style="width: auto;height: 600px"></v-chart>
        </el-card>
      </el-col>
    </el-row>
	</div>
</template>

<script>

  import store from  "../vuex/store.js";
  import getPolarData from  "../echartsData/polar.js";
  import getBarData from  "../echartsData/Bar.js";
  import getMapData from  "../echartsData/map.js";
  import ECharts from 'vue-echarts/components/ECharts'
  import 'echarts/lib/chart/bar'
  import 'echarts/lib/chart/line'
  import 'echarts/lib/component/polar'
  import 'echarts/lib/component/title'
  import 'echarts/lib/component/brush'
  import 'echarts/lib/component/toolbox'
  import 'echarts/lib/component/tooltip'
  import 'echarts/lib/component/legend'
  import 'echarts/lib/component/visualMap'
  import 'echarts/lib/component/geo'
  import 'echarts/lib/chart/bar'
  import 'echarts/lib/chart/line'
  import 'echarts/lib/chart/pie'
  import 'echarts/lib/chart/map'
  import 'echarts/lib/chart/radar'
  import 'echarts/lib/chart/scatter'
  import 'echarts/lib/chart/effectScatter'


  import 'echarts/map/js/world'
  import 'echarts/map/js/china'

	export default{
    components: {
      'v-chart': ECharts
    },
		data(){
			return{
				msg:"首页",
        polar:getPolarData(),
        bar:getBarData(),
        map:getMapData,
        resize:true
			}
		},
    store,
		mounted(){


		}
	}
</script>

<style scoped="scoped">
  .home{
    min-width: 550px;
  }
  .el-col {
    margin-bottom: 10px;
  }
  .me-icon{
    font-size: 50px;
    float: left;
    vertical-align: top;
    width: 55px;
  }
  .me-icon i{
    vertical-align: top;
  }
  .me-content{
    margin-left: 50px;
  }
  .me-content p{
    margin: 0;
    padding-top: 3px;
  }
  .cl-float:after{
    content: "";
    height: 0;
    clear: both;
    display: block;
  }
</style>
