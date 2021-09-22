/**
 * Created by binwang on 17/8/24.
 */
import _ from 'lodash'
import moment from 'moment'

function util(_context) {
  'use strict'
  let fields = []

  let $this = _context

  this.defaultQuery = (_q = {}) => {
    return {
      offset: 1,
      limit: 10,
      filter: null,
      sortField: null,
      sortOrder: null,
      ..._q,
    }
  }
  this.initFields = fields => {
    this.fields(fields)
    return this
  }
  this.fields = field => {
    if (_.isArray(field)) {
      field.map(f => this.fields(f))
    } else if (_.isObject(field)) {
      fields.push(field)
    } else {
      return _.sortBy(fields, f => f.formIndex)
    }
  }
  this.editFields = () => {
    return _.chain(fields)
      .filter(f => {
        return !f.scope || _.indexOf(f.scope, 'form') > -1
      })
      .map(f => {
        return {
          onchange: () => {},
          onclick: () => {},
          onfocus: () => {},
          onblur: () => {},
          ...f,
        }
      })
      .sortBy(f => f.formIndex)
      .value()
  }
  this.forms = () => {
    var forms = {}
    _.forEach(fields, f => {
      if (!f.scope || _.indexOf(f.scope, 'form') > -1) {
        let initValue = null
        if ((f.type === 'select' && f.multiple) || f.type === 'checkbox') {
          initValue = []
        }
        _.assign(forms, { [f.id]: f.defaultValue || initValue })
      }
    })
    return forms
  }
  let I18n = key => {
    if (!key) return ''

    return _.reduce(
      key.split(' '),
      (n1, n2) => {
        if (/^[A-Za-z\s]+$/.test(n1)) n1 = n1 + ' '
        return n1 + $this.$t(`h.${_.lowerCase(n2)}`)
      },
      '',
    )
  }
  this.columns = () => {
    return _.chain(fields)
      .filter(f => {
        return f.type !== 'hidden' && (!f.scope || _.indexOf(f.scope, 'column') > -1)
      })
      .map(f => {
        return {
          key: f.id,
          title: I18n(f.label),
          ...f,
        }
      })
      .value()
  }
  this.rules = () => {
    var rules = {}
    _.forEach(fields, f => {
      if (!f.scope || _.indexOf(f.scope, 'form') > -1) _.assign(rules, { [f.id]: f.rules || null })
    })
    return rules
  }
  this.queryFields = () => {
    var queryFields = _.filter(fields, f => {
      if (!f.scope || _.indexOf(f.scope, 'searchForm') > -1) return true
    })
    return queryFields
  }
  this.validator = {
    noSpecialWord: (rule, value, callback, source, options) => {
      var errors = []
      if (/[/\\\&\<\>\']/.test(value)) {
        callback($this.$t('valid.noSpecial'))
      }
      callback(errors)
    },
    equalTo: (rule, value, callback, source, options) => {},
    userName: (rule, value, callback, source, options) => {
      var errors = []
      if (!/^[a-zA-Z0-9_-]{4,16}$/.test(value)) {
        callback($this.$t('valid.userName'))
      }
      callback(errors)
    },
    url: (rule, value, callback, source, options) => {
      var errors = []
      if (!/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(value)) {
        callback($this.$t('valid.url'))
      }
      callback(errors)
    },
    number: (rule, value, callback, source, options) => {
      var errors = []
      if (isNaN(value)) {
        callback($this.$t('valid.url'))
      }
      callback(errors)
    },
    telNumber: (rule, value, callback, source, options) => {
      var errors = []
      if (!/^((1[3-9][0-9])\d{8})|(0\d{2}-\d{8})|(0\d{3}-\d{7})$/.test(value)) {
        callback($this.$t('valid.tel'))
      }
      callback(errors)
    },
    lowerCaseAndNumber: (rule, value, callback, source, options) => {
      var errors = []
      if (!/^[a-z0-9]+$/.test(value)) {
        callback($this.$t('valid.lowerCaseAndNumber'))
      }
      callback(errors)
    },
  }
  this.timeFormat = (timestamp, format = 'YYYY-MM-DD hh:mm:ss') => {
    return moment(timestamp).format(format)
  }
  this.dateFormat = (timestamp, format = 'YYYY-MM-DD') => {
    return moment(timestamp).format(format)
  }
  this.toTimestamp = data => {
    return moment(data).unix()
  }
}

export default context => new util(context)
