<template>
  <div>
    <div class="Tree_search">
    <el-input
      placeholder="输入关键字进行过滤"
      v-model="filterText"
       prefix-icon="el-icon-search"
      v-if="AllRenders.Render"
      style="width:200px;"
    >
    </el-input>
    <el-button  type="primary" icon="el-icon-search" @click="queryTree">查询</el-button>
    </div>
    <el-tree
      ref="tree"
      :data="data"
      :show-checkbox="AllRenders.CheckBoxRendering"
      :expand-on-click-node="false"
      :load="loadNode"
      lazy
      accordion
      node-key="id"
      @check-change="SelectNode"
      @node-click="handleNodeClick"
    >
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span v-if="AllRenders.OverallButton">
          <el-button
            type="text"
            size="mini"
            v-if="AllRenders.ModifyRendering"
            @click="() => modify(node, data)"
          >
            修改
          </el-button>
          <el-button
            type="text"
            size="mini"
            v-if="AllRenders.AddRendering"
            @click="() => append(data)"
          >
            添加
          </el-button>
          <el-button
            type="text"
            size="mini"
            v-if="AllRenders.DeleteRendering"
            @click="() => remove(node, data)"
          >
            删除
          </el-button>
        </span>
      </span>
    </el-tree>
    <AddTreeNode :openAdd="openAdd" @CloseNewFolder="CloseNewFolder" ></AddTreeNode>
    <EditTreeNode :openEdit="openEdit" @EditFolderClosed="EditFolderClosed"></EditTreeNode>
  </div>
</template>
<script>
import AddTreeNode from '../AuxiliaryPage/TreeNodeChange/AddTreeNode'
import EditTreeNode from '../AuxiliaryPage/TreeNodeChange/EditTreeNode'
let id = 1000;
export default {
  props: {
    //结构树数据
    treeData: {
      type: Array,
      default: [],
    },
    //功能的显示隐藏对象
    AllRenders: {
      type: Object,
      default: {},
    },
    MultipleChoice: {
      type: Array,
      default: [],
    },
  },
  components:{
    AddTreeNode,
    EditTreeNode
  },
  data() {
    //获取后端结构树数据
    const data = [];
    return {
      //结构树搜索框要搜索的关键字
      filterText: "",
      data: JSON.parse(JSON.stringify(data)),
      data: JSON.parse(JSON.stringify(data)),
       //新增打开关闭
      openAdd: false,
      //编辑文件打开
      openEdit: false,
    };
  },
  methods: {
       //点击该节点获取当前点击数据
    handleNodeClick(data) {
        console.log(data)
    }, 
    //修改节点
    modify(node, data) {
      console.log(node);
      console.log(data);
      this.openEdit = true
    //   const parent = node.parent;
    //   const children = parent.data.children || parent.data;
    //   const index = children.findIndex((d) => d.id === data.id);
    //   children.splice(index, 1);

    },
       //编辑子组件返回的组件关闭数据
    EditFolderClosed(val) {
      this.openEdit = val
    },
    //添加节点
    append(data) {
      //console.log(data);
     this.openAdd = true
    //   const newChild = { id: id++, label: "testtest", children: [] };
    //   if (!data.children) {
    //     this.$set(data, "children", []);
    //   }
    //   data.children.push(newChild);
    },
      //新增子组件返回的组件关闭数据
    CloseNewFolder(val) {
      this.openAdd = val
    },
    //删除节点
    remove(node, data) {
      console.log(node);
      console.log(data);
          if (this.level > 7) {
        this.$confirm('是否删除该文件?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(() => {
            //发送删除请求
            // directoryTableremove(this.id).then(res => {
            //   // console.log(res)
            //   if (res.data.code == 200) {
            //     this.$message({
            //       message: `${res.data.msg}`,
            //       type: 'success',
            //     })
            //     this.resetNodeb()
            //   } else {
            //     this.$message({
            //       message: `${res.data.msg}`,
            //       type: 'warning',
            //     })
            //   }
            // })
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除',
            })
          })
      } else {
        this.$message({
          message: '该文件不能删除',
          type: 'warning',
        })
      }
    //   const parent = node.parent;
    //   const children = parent.data.children || parent.data;
    //   const index = children.findIndex((d) => d.id === data.id);
    //   children.splice(index, 1);
    },
    //复选框选中节点
    SelectNode() {
      //console.log(val);
      let SelectArr = this.$refs.tree.getCheckedKeys();
      this.$emit("AcceptMultiTions", SelectArr);
    },
    //点击查询
    queryTree(){
      if(this.filterText!==''){
      this.$emit("GetKeyword", this.filterText);
      this.filterText = '';
      }else{
        this.$message({
          message:"请输入要查询的内容",
          type:"warning"
        })
      }
    },
    //获取复选框选中
    setCheckedKeys() {
      this.$refs.tree.setCheckedKeys(this.MultipleChoice);
    },
       //懒加载
    loadNode(node, resolve) {
      if (node.level === 0) {
        // let data = this.data
       
          return resolve(this.data)
        
      }
      if (node.level > 0) {
      
        setTimeout(() => {
        //   let data = this.data
          // console.log(this.id)
         
            return resolve(this.data)
          
        }, 50)
      }
    },
  },
     /*****************懒加载局部刷新******************** */
    //新增的局部刷新
    resetNode() {
      //console.log("123+123+123")
      var theChildren = this.rootNode.childNodes
      theChildren.splice(0, theChildren.length)
      this.loadNode(this.rootNode, this.rootReslove)
    },
    //删除局部刷新
    resetNodeb() {
      // console.log(this.$refs.asyncTree)
      // console.log(this.rootNode)
      let paentId = this.rootNode.parent
      paentId.loaded = false
      // paentId.expanded = true
      paentId.expand()
      this.loadNode(this.rootNode, this.rootReslove)
    },
    /**************************************** */
  watch: {
    //监听搜索树机构数据的变化
    // filterText(val) {
    //   // this.$refs.tree.filter(val);
    //   //发生变化将数据给父组件
    //   this.$emit("GetKeyword", val);
    // },
    //监听结构树数据变化
    treeData: {
      deep: true,
      immediate: true,
      handler(newName, oldName) {
        // console.log(newName)
        this.data = newName;
      },
    },
  },
  mounted() {
    //挂载之前获取复选框选中数据
    this.setCheckedKeys();
  },
};
</script>
<style lang="scss" scoped>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.Tree_search{
  padding:20px 10px 10px 10px;
  border-bottom:1px solid rgb(215, 215, 215);
}
</style>