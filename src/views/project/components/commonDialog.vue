<template>
    <el-dialog 
        custom-class="commonDialog"
        :visible.sync="visibleDialog" 
        :title="title"
        :close-on-click-modal="false"
        :close-on-press-escapel="false"
        :destroy-on-close="true"
        :show-close="showClose"
    >
        <slot></slot>
        <span slot="footer" class="dialog-footer">
            <el-button 
                type="primary" 
                @click="$_handleConfirm" 
                v-if="buttonText.a!==''"
            >
                {{buttonText.a}}
            </el-button>
            <el-button 
                @click="$_handleCancel" 
                v-if="buttonText.b!==''"
            >
                {{buttonText.b}}
            </el-button>
        </span>
    </el-dialog>
</template>
<script>
    export default {
        inheritAttrs: false,
        props: {
            visible: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: false
            },
            showClose: {
                type: Boolean,
                default: true
            },
            buttonText: {
                type: Object,
                default: false
            }
        },
        data(){
            return {}
        },
        computed: {
            visibleDialog: {
                get() {
                    return this.visible;
                },
                set() {
                    this.$emit("update:visible");
                }
            }
        },
        methods: {
            $_handleCancel() {
                this.$emit("cancel");
            },
            $_handleConfirm() {
                this.$emit("confirm");
            }
        }
    }
</script>
<style lang="scss">
    .el-dialog__wrapper .commonDialog{
        .el-dialog__header{
            padding:10px 20px 10px;
            background:#0b65b8;
            color:#fff;
            .el-dialog__title{
                font-size:16px;
                color:#fff;
            }
            .el-dialog__headerbtn{
                top:14px;
                i{
                    color:#fff;
                }
            }
        }
        .el-dialog__footer{
            padding:7px 20px 8px;
            border-top:1px solid #ccc;
        }
    }
</style>
