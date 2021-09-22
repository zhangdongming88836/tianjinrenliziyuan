<template>
  <div id="AddNewfolderS">
    <!-- 组织树节点添加子组件 -->
    <el-dialog title="添加节点" :visible.sync="addFolders" width="50%" center @open="open" @close="close" :before-close="gbq">
        <div class="addTree_wape">
          4444444444444444444444444444444444444
        </div>
      <div style="width:99.7%;border-top:1px solid #cccccc"></div>
      <div class="righ">
          <el-button>取 消</el-button>
          <el-button type="primary">确 定</el-button>
      </div>
      <div style="height:10px"></div>
    </el-dialog>
  </div>
</template>
<script>
// import { directoryTableSave } from '@/api/ProjectManagementinterface'
export default {
   props:{
   openAdd:{
     type:Boolean,
     default:false,
   },
 },
  data() {
    return {
        addFolders:false,
    }
  },
  methods: {
    //关闭组件
    close() {
      this.$emit('CloseNewFolder', false)
      //清空验证
        // this.clearValidate('ruleForm')
    },
    //打开组件
    open() {
        // 清空验证
        // this.clearValidate('ruleForm')
    },


     //清空验证
    // clearValidate(formName) {
    //   this.$refs[formName].clearValidate();
    // }, 
  },
  watch: {
    openAdd:{
      deep:true,
      immediate:true,
      handler(val){
        //console.log(val,'dasdasd')
        this.addFolders = val
      }
    },
  },
}
</script>
<style lang="scss">
#AddNewfolderS {
  .addTree_wape{
    padding:20px ;
  }
}
</style>