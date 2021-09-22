import _ from 'lodash'

export default {
  computed: {
    gridList() {
      if (this.gridData) {
        if (!_.isArray(this.gridData)) {
          return this.gridData.content
        } else {
          return this.gridData
        }
      } else {
        return []
      }
    },
    gridTotal() {
      if (this.gridData && !_.isArray(this.gridData)) {
        return this.gridData.totalElements
      } else return 0
    },
    isShowPaging() {
      return this.gridTotal > 10
    },
  },
  data() {
    return {
      dialogVisible: false,
      selectRow: null,
      gridData: {
        data: [],
        total: 0,
      },
      query: {
        limit: 10,
        offset: 1,
      },
    }
  },
  watch: {
    dialogVisible(val) {
      if (!val) {
        this.selectRow = null
      }
    },
  },
  methods: {
    async changePageSizer(pageSize) {
      this.query.limit = pageSize
      this.changePage()
    },

    openAdd() {
      this.dialogVisible = true
    },
    openEdit(row) {
      this.selectRow = row
      this.dialogVisible = true
    },
    remove(row, message) {
      this.$confirm(message || '此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(async () => {
          if (this.removeResolve) {
            let resp = await this.removeResolve.call(this, row)
            if (!resp.error) {
              this.search && this.search.call(this)
            }
          }
        })
        .catch(() => {
          ;``
          this.removeReject && this.removeReject.call(this, row)
        })
    },
    async changePage(index) {
      this.query = { ...this.query, offset: index || 1 }
      this.search()
    },
    async search(page) {
      if (!isNaN(page)) {
        this.query.offset = page
      }
      if (this.searchBody) {
        let resp = await this.searchBody.call(this)
        if (resp) {
          return (this.gridData = resp.data)
        } else {
          return null
        }
      }
      return null
    },
  },
}
