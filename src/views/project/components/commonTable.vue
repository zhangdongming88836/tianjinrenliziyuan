<template>
  <div>
    <el-table
      :data="tableData"
      style="width:99%"
      border
      @sort-change="tableSort"
      @selection-change="selectArr"
      center
    >
      >
      <el-table-column type="selection" width="55" v-if="msDisplay" >
      </el-table-column>
      <template v-for="item in tableHeader">
        <el-table-column
          :sortable="item.sort"
          :prop="item.aa"
          :label="item.bb"
          :key="item.id"
          v-if="item.slotType === 'slot'"
          align="center"
        >
          <template slot-scope="scope">
            <slot :name="item.slotName" :data="scope.row"></slot>
          </template>
        </el-table-column>
        <el-table-column
          :sortable="item.sort"
          :prop="item.aa"
          :label="item.bb"
          :key="item.id"
          v-else
          align="center"
        ></el-table-column>
      </template>
    </el-table>
    <!-- 分页 -->
    <div class="paging_style">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageNumber"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tableData: {
      type: Array,
      default: () => {
        return [];
      },
    },
    tableHeader: {
      type: Array,
      default: [],
    },
    msDisplay: {
      type: Boolean,
      default: true,
    },
    currentPage:{
     stype:Number,
     default:0
    },
    total:{
        type:Number,
        default:0
    },
    pageNumber:{
        type:Number,
        default:0
    }
  },
  data() {
    return {

    };
  },
  methods: {
    //排序方法
    tableSort(column, prop, order) {
      //console.log(column);
      this.$emit("sortClick", column);
    },
    //多选数组
    selectArr(val) {
      this.$emit("tableArr", val);
    },
      handleSizeChange(val) {
        //console.log(`每页 ${val} 条`);
        this.$emit("numberPages",val);
      },
      handleCurrentChange(val) {
        //console.log(`当前页: ${val}`);
        this.$emit("CurrentPages",val);
      }
  },
    // watch: {
    //     tableHeader:{
    //         immediate:true,
    //         deep:true,
    //         handler(newName ,oldName){
    //             console.log(newName)
    //           //   this.tableData = newName
    //         }
    //     }
    // },
};
</script>
<style lang="scss" scoped>
.el-pagination{
    text-align:right;
}
.paging_style{
  margin-top:30px;  
}
</style>
