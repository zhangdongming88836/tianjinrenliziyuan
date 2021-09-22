<template>
  <div id="AddNewfolderSs">
	<!-- 组织树节点编辑子组件 -->  
    <el-dialog title="编辑树节点" :visible.sync="EditFolders" width="50%" center @open="open" @close="close">
      <div class="addTree_wape">4444444444444444444444444444444444444</div>
      <div style="width: 99.7%; border-top: 1px solid #cccccc"></div>
      <div class="righ">
        <el-button>取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </div>
      <div style="height: 10px"></div>
    </el-dialog>
  </div>
</template>
<script>
// import { directoryTableSave,directoryTabledetails,directoryTableupdate} from '@/api/ProjectManagementinterface'
export default {
  props: {
    openEdit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      EditFolders: false,
    }
  },
  methods: {
    //关闭组件
    close() {
      this.$emit('EditFolderClosed', false)
      //清空验证
      // this.clearValidate('ruleForm')
    },
    //打开组件
    open() {
      //清空验证
      // this.clearValidate('ruleForm')
    },
    //取消
    // resetForm() {
    //  this.$emit('EditFolderClosed', false)
    // },
    //清空验证
    // clearValidate(formName) {
    //   this.$refs[formName].clearValidate();
    // },
  },
  watch: {
    id: {
      handler(val) {
        // console.log(val,"369")
        this.ruleForm.parentIdd = val
      },
    },
    openEdit: {
      deep: true,
      immediate: true,
      handler(val) {
        this.EditFolders = val
      },
    },
  },
}
</script>
<style lang="scss">
#AddNewfolderSs {
  .addTree_wape {
    padding: 20px;
  }
}
</style>