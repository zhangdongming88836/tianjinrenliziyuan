//This file is automatically generated

// member-controller

import { MemberController } from '@controller';
export default {
    actions: {
        [MemberController.addMembers.method] : {
            summary: '添加成员',
            method: 'post',
            url: (payload) => `/api/members/`,
            parameters: [{'in':'body','name':'members','description':'members','required':true,'schema':{'type':'array','items':{'$ref':'#/definitions/Member'}}}],
        },
        [MemberController.deleteMembers.method] : {
            summary: '删除成员',
            method: 'delete',
            url: (payload) => `/api/members/`,
            parameters: [{'in':'body','name':'members','description':'members','required':true,'schema':{'type':'array','items':{'$ref':'#/definitions/Member'}}}],
        },
        [MemberController.pagingMembers.method] : {
            summary: '分页查询所有成员',
            method: 'get',
            url: (payload) => `/api/members/page-search`,
            parameters: [{'name':'ownerId','in':'query','description':'ownerId','required':true,'type':'string'},{'name':'ownerType','in':'query','description':'ownerType','required':true,'type':'string'},{'name':'pageNum','in':'query','required':false,'type':'integer','format':'int32'},{'name':'pageSize','in':'query','required':false,'type':'integer','format':'int32'},{'name':'userName','in':'query','description':'userName','required':false,'type':'string'}],
        },
    },
    // state: {},
    // mutations: {},
    // getters: {}
}
