<template>
  <div class="Home_OuterLayer">
    <div class="Home_type">
      <!-- 组织管理 -->
      <div class="Page_label">
        <span class="label_size">组织机构</span>
         <i class="label_branch">/</i>
        <span class="label_current">组织机构管理</span>
      </div>
      <div class="Hone_content">
        <div class="content_area">
          <div :class="Treeshow === true ? 'wrap_left' : 'wrap_lefts'">
            <Tree
              :treeData="treeData"
              :AllRenders="AllRenders"
              :MultipleChoice="MultipleChoice"
              @GetKeyword="GetKeyword"
              @AcceptMultiTions="AcceptMultiTions"
              v-if="Treeshow"
            ></Tree>
            <img class="Tree_btn" @click="showTree" :src="require('../../../assets/menu/tree_btn.png')" />
          </div>
          <div class="wrap_right">
            <div class="wrap_right_title">员工信息</div>
            <!-- tible组件 -->
            <Table
              :tableData="tableData"
              :tableHeader="tableHeader"
              :msDisplay="msDisplay"
              :currentPage="currentPage"
              :total="total"
              :pageNumber="pageNumber"
              @sortClick="sortClick"
              @tableArr="tableArr"
              @CurrentPages="CurrentPages"
              @numberPages="numberPages"
            >
              <template v-slot:nuNames="data">
                <el-tag v-for="item in data.data.fileType" :key="item.id">{{ item.nn }}</el-tag>
              </template>
              <template v-slot:nuName="data">
                <el-button type="primary" size="mini">编辑</el-button>
              </template>
            </Table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Table from '../components/commonTable'
import Tree from '../components/commonTree.vue'
export default {
  components: {
    Table,
    Tree,
  },
  data() {
    return {
      //子组件组织结构树数据区域开始***********************************************
      //子组件树结构数据
      treeData: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1',
                },
                {
                  id: 10,
                  label: '三级 1-1-2',
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1',
            },
            {
              id: 6,
              label: '二级 2-2',
            },
          ],
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1',
            },
            {
              id: 8,
              label: '二级 3-2',
            },
          ],
        },
      ],
      //子组件组织树功能的显示隐藏的对象
      AllRenders: {
        //子组件树结构搜索框的显示隐藏
        Render: true,
        //整体按钮的显示隐藏
        OverallButton: true,
        //修改按钮的显示隐藏
        ModifyRendering: true,
        //删除按钮的显示隐藏
        DeleteRendering: true,
        //添加按钮道德显示隐藏
        AddRendering: true,
        //复选框的显示隐藏
        CheckBoxRendering: true,
      },
      //后端获取的多选id发送给子组件渲染
      MultipleChoice: [9],
      //子组件树整体的显示隐藏
      Treeshow: true,
      //子组件组织结构树数据区域结束***********************************************
      // tatle组件数据**************************************************************
      //是否有多选框
      msDisplay: true,
      //当前选中第几页
      currentPage: 1,
      //总页数
      total: 40,
      //每页条数
      pageNumber: 10,
      //接受后端的表格的数据
      tableData: [
        {
          jdName: '2018/3/9',
          fileType: [{ nn: '深圳' }, { nn: '深圳' }],
        },
        {
          jdName: '2018/3/9',
          fileType: [{ nn: '深圳' }, { nn: '深圳' }],
        },
      ],
      //表格的头部有信息
      tableHeader: [
        {
          bb: '日期',
          aa: 'jdName',
          sort: false, //不显示排序功能
        },
        {
          bb: '地点',
          aa: 'fileType',
          sort: 'custom', //显示排序功能
          slotName: 'nuNames',
          slotType: 'slot',
        },
        {
          bb: '操作',
          slotName: 'nuName',
          slotType: 'slot',
        },
      ],
      //table组件数据结束*****************************************************
    }
  },
  methods: {
    //table方法区域开始***************************************************************
    //获取子组件排序
    sortClick(val) {
      console.log(val, 'dadasda')
      //异步请求排序
    },
    //获取子组件多选数组
    tableArr(val) {
      console.log(val)
      //异步请求
    },
    //当前第几页
    CurrentPages(val) {
      //console.log(val)
      this.currentPage = val
      //异步请求
    },
    //每页条数
    numberPages(val) {
      this.pageNumber = val
      this.currentPage = 1
      //异步请求
      console.log(val)
    },
    //table方法区域结束***************************************************************
    //子组件组织结构树的方法区域开始***********************************************
    //接受子组件树组织结构关键字进行搜索
    GetKeyword(val) {
      //console.log(val);
      //这里是向后端发送组织树结构关键字进行搜索
    },
    //接受子组件树组织多选的数据
    AcceptMultiTions(val) {
      console.log(val)
      //这里是向后端发送组织树结构多选的id
    },
    //子组件树显示隐藏
    showTree() {
      if (this.Treeshow) {
        this.Treeshow = false
      } else {
        this.Treeshow = true
      }
    },
    //子组件组织结构树的方法区域结束***********************************************
  },
}
</script>
<style lang="scss" scoped>
.wrap_left {
  height: 100%;
  border-right: 1px solid #d7d7d7;
  padding: 0px 10px 0px 10px;
  position: relative;
}
.wrap_lefts {
  height: 100%;
  border-right: 1px solid #d7d7d7;
  position: relative;
}
.Tree_btn {
  position: absolute;
  top: 50%;
  right: -16px;
  margin-top: -30px;
  cursor: pointer;
}
.wrap_right {
  flex: 1;
  box-sizing: border-box;
  padding: 10px 15px 10px 20px;
}
.wrap_right_title {
  color: lightseagreen;
  padding: 20px 0px 10px 0px;
  margin-bottom: 20px;
  border-bottom: 1px dashed #d7d7d7;
}
</style>