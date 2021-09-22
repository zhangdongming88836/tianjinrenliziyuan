/**
 * Created by binwang on 18/4/3.
 */
export default {
  status: [
    {
      k: 0,
      v: '作废',
      c: 'red',
    },
    {
      k: 1,
      v: '正常',
      c: 'green',
    },
  ],
  TransactionStatus: [
    {
      k: 0,
      v: '失败',
      c: 'red',
    },
    {
      k: 1,
      v: '成功',
      c: 'green',
    },
  ],
  sex: [
    {
      k: '1',
      v: '男',
    },
    {
      k: '0',
      v: '女',
    },
  ],
  OnlineState: [
    {
      label: '上线',
      value: 'UP',
    },
    {
      label: '下线',
      value: 'OUT_OF_SERVICE',
    },
    {
      label: '未知',
      value: 'UNKNOWN',
    },
  ],
  EnableStatus: [
    {
      label: '启用',
      value: 'ENABLED',
    },
    {
      label: '禁用',
      value: 'DISABLED',
    },
  ],

  icon: {
    user: 'person',
    link: 'link',
    column: 'eye',
    topic: 'edit',
    file: 'file',
    list: 'ios-list',
    transaction: 'social-yen',
  },
}
