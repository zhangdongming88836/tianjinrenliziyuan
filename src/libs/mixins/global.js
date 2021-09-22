import { VueUtil } from '@/libs'

export default {
  methods: {
    async dispatch(action, data, fn) {
      return await VueUtil(this).dispatchAsync(action, data, fn || null)
    },
  },
}
