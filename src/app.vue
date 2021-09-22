<template>
    <div id="app">
        <router-view v-if="isRouterAlive"></router-view>
    </div>
</template>
<script>
    import { getStore } from '@/utils/localStorage'

    export default {
        name: 'App',
        provide() {
            return {
              reload: this.reload,
            }
        },
        data() {
            return {
              isRouterAlive: true,
            }
        },
        methods: {
            reload() {
                this.isRouterAlive = false
                this.$nextTick(() => {
                    this.isRouterAlive = true
                })
            },
        },
        created() {
            let platform = getStore('platform')
            if (platform) {
                this.$store.dispatch('setPlatform', platform)
            }
        },
    }
</script>

<style lang="scss">
    @import 'styles/common.scss';
    @import 'styles/iconfont.scss';
    @import 'styles/element.scss';
</style>
