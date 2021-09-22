import _ from 'lodash'
export default {
  props: {
    formData: {},
    dialogVisible: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    formData: {
      immediate: true,
      handler: function(val, oval) {
        if (val) {
          this.form = {
            ...this.model,
            ..._.cloneDeep(val),
          }
          if (this.afterFormChanged) {
            this.afterFormChanged.call(this)
          }
          this.clearValidate()
        }
      },
    },
    dialogVisible(val) {
      if (!val) {
        this.cancel()
      }
    },
  },
  data() {
    return {
      formRef: 'form',
      form: null,
    }
  },
  methods: {
    clearValidate() {
      this.$nextTick(() => {
        this.$refs[this.formRef] && this.$refs[this.formRef].clearValidate()
      })
    },
    resetFields() {
      this.$nextTick(() => {
        this.$refs[this.formRef] && this.$refs[this.formRef].resetFields()
      })
    },
    cancel() {
      this.$emit('update:formData', null)
      this.$emit('update:dialogVisible', false)
      if (this.afterCancel) {
        this.afterCancel.call(this)
      }
      setTimeout(() => {
        this.form = _.cloneDeep(this.model || {})
        this.clearValidate()
      }, 300)
    },
    submit(args) {
      this.$refs[this.formRef].validate(async valid => {
        if (valid) {
          this.validateResolve && this.validateResolve.call(this, args)
        } else {
          this.validateReject && this.validateReject.call(this, args)
        }
      })
    },
  },
}
