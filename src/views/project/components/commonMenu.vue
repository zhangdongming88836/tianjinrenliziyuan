<template>
  <div id="commonMenu">
     <el-menu
      router
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="transparent"
      text-color="#424e67"
      active-text-color="#077cd3"
      :unique-opened="true"
    >
      <template v-for="v in routes" v-if="!v.hidden">
        <template v-for="item in v.children">
          <el-submenu v-if="item.children" :index="item.path" :key="item.name">
            <template slot="title">
              <i class="iconfont" :class="item.meta.icon"></i>
              <span>{{ item.meta.title }}</span>
            </template>
            <!-- **************************** -->
            <template v-for="item in item.children">
              <el-submenu v-if="item.children" :index="item.path" :key="item.name">
                <template slot="title">
                  <i class="iconfont" :class="item.meta.icon"></i>
                  <span style="margin-left:5px;">{{ item.meta.title }}</span>
                </template>
                <el-menu-item v-if="!value.hidden" v-for="value in item.children" :index="value.path" :key="value.name">
                  {{ value.meta.title }}
                </el-menu-item>
              </el-submenu>
              <el-menu-item v-if="item.meta !== undefined && !item.children" :index="item.path" :key="item.name">
                <i class="iconfont" :class="item.meta.icon"></i>
                <span style="margin-left:-17px;" slot="title">{{ item.meta.title }}</span>
              </el-menu-item>
            </template>
            <!-- ****************************** -->
            <!-- <el-menu-item v-if="!value.hidden" v-for="value in item.children" :index="item.path + '/' + value.path" :key="value.name">
              {{ value.meta.title }}
            </el-menu-item> -->
          </el-submenu>
          <el-menu-item v-if="item.meta !== undefined && !item.children" :index="item.path" :key="item.name">
            <i class="iconfont" :class="item.meta.icon"></i>
            <span style="margin-left:-17px;"  slot="title">{{ item.meta.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: {
    routes: {
      type: Array,
      default: false,
    },
  },
  watch: {
    routes: {
      handler(val, oldVal) {
        console.log(val)
      },
      deep: true,
      immediate: true,
    },
  },
}
</script>
<style lang="scss">
#commonMenu {
  .el-menu {
    border-right: none;
    .el-submenu__title,
    .el-menu-item {
      height: 42px;
      line-height: 42px;
    }
    .el-submenu__title {
      padding-left: 10px !important;
    }
    .el-menu-item {
      padding-left: 28px !important;
    }
    .el-menu-item.is-active,
    .el-submenu__title:hover,
    .el-menu-item:hover,
    .el-submenu.is-active .el-submenu__title {
      //background: #0376cb !important;
      color: #666666 !important;
      i {
        color: #fff !important;
      }
    }
    .el-submenu {
      .el-menu {
        background: #fff !important;
      }
      .el-menu-item:hover,
      .el-menu-item.is-active {
        border-left: 4px solid #077cd3;
        background: #dfe5ee !important;
        color: #077cd3 !important;
      }
    }
    .iconfont {
      margin-right: 3px;
    }
  }
}
</style>