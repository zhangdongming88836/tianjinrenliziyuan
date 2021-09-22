import _ from 'lodash'

const dateFormate = (date, step) => {
  const year = date.getFullYear()
  const monthTemp = date.getMonth() + 1
  let month = `${monthTemp}`
  if (monthTemp < 10) {
    month = `0${monthTemp}`
  }
  if (step === 'MONTH') {
    return `${year}-${month}`
  }
  const dayTemp = date.getDate()
  let day = `${dayTemp}`
  if (dayTemp < 10) {
    day = `0${dayTemp}`
  }
  if (step === 'DAY') {
    return `${year}-${month}-${day}`
  }
  const hourTemp = date.getHours()
  let hour = `${hourTemp}`
  if (hourTemp < 10) {
    hour = `0${hourTemp}`
  }
  if (step === 'HOUR') {
    return `${year}-${month}-${day} ${hour}`
  }
  const minuteTemp = date.getMinutes()
  let minute = `${minuteTemp}`
  if (minuteTemp < 10) {
    minute = `0${minuteTemp}`
  }
  if (step === 'MINUTE') {
    return `${year}-${month}-${day} ${hour}${minute}`
  }
}

const dateFormateTime = (date, step) => {
  const year = date.getFullYear()
  const monthTemp = date.getMonth() + 1
  let month = `${monthTemp}`
  if (monthTemp < 10) {
    month = `0${monthTemp}`
  }
  if (step === 'MONTH') {
    return `${year}-${month}`
  }
  const dayTemp = date.getDate()
  let day = `${dayTemp}`
  if (dayTemp < 10) {
    day = `0${dayTemp}`
  }
  if (step === 'DAY') {
    return `${month}-${day}`
  }
  const hourTemp = date.getHours()
  let hour = `${hourTemp}`
  if (hourTemp < 10) {
    hour = `0${hourTemp}`
  }
  if (step === 'HOUR') {
    return `${month}-${day} ${hour}`
  }
  const minuteTemp = date.getMinutes()
  let minute = `${minuteTemp}`
  if (minuteTemp < 10) {
    minute = `0${minuteTemp}`
  }
  if (step === 'MINUTE') {
    return `${hour}:${minute}\n${month}-${day}`
  }
}

const topo = {
  getters: {
    intervalTime(state) {
      if (state.duration.start && state.duration.end) {
        let interval = 946080000000
        switch (state.duration.step) {
          case 'MINUTE':
            interval = 60000
            break
          case 'HOUR':
            interval = 3600000
            break
          case 'DAY':
            interval = 86400000
            break
          case 'MONTH':
            interval =
              (state.duration.end.getTime() - state.duration.start.getTime()) /
              (state.duration.end.getFullYear() * 12 +
                state.duration.end.getMonth() -
                state.duration.start.getFullYear() * 12 -
                state.duration.start.getMonth())
            break
        }
        const startUnix = state.duration.start.getTime()
        const endUnix = state.duration.end.getTime()
        const timeIntervals = []
        for (let i = 0; i <= endUnix - startUnix; i += interval) {
          const temp = dateFormateTime(new Date(startUnix + i), state.duration.step)
          timeIntervals.push(temp)
        }
        return timeIntervals
      } else {
        return []
      }
    },
    durationTime(state) {
      const startTemp = new Date(state.duration.start)
      const endTemp = new Date(state.duration.end)
      const stepTemp = state.duration.step
      return {
        start: dateFormate(startTemp, stepTemp),
        end: dateFormate(endTemp, stepTemp),
        step: stepTemp,
      }
    },
  },
  state: {
    duration: {
      start: null,
      end: null,
      step: 'MINUTE',
    },
    currentNode: null,
    getResponseTimeTrend: [],
    getSlowEndpoints: [],
    getSLATrend: [],
    getThroughputTrend: [],
  },
  mutations: {
    SET_DURATION: (state, data) => {
      state.duration = data
    },
    SET_NODE: (state, data) => {
      state.currentNode = data
    },
    SET_TOPO_RELATION: (state, data) => {
      if (!data) return
      state.getResponseTimeTrend = data.responseTimeTrend ? data.responseTimeTrend.values.map(i => i.value) : []
      state.getSlowEndpoints = data.slowEndpoints
      state.getSLATrend = data.slaTrend ? data.slaTrend.values.map(i => i.value) : []
      state.getThroughputTrend = data.throughputTrend ? data.throughputTrend.values.map(i => i.value) : []
    },
  },
  actions: {
    setNode({ commit }, status) {
      commit('SET_NODE', status)
    },
    setTopoRelation({ commit }, status) {
      commit('SET_TOPO_RELATION', status)
    },
    setDuration({ commit }, status) {
      commit('SET_DURATION', status)
    },
  },
}

export default topo
