<template>
  <div class="Home_OuterLayer">
    <div class="Home_type">
      <!-- 时间管理 -->
      <div class="Page_label">
        <span class="label_size">时间管理</span>
        <i class="label_branch">/</i>
        <span class="label_current">考勤配置</span>
      </div>
      <div class="Hone_content">
        <div class="content_area">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
</style>