import permissionCode from '../../utils/permission'
const _import = require('../_import_' + process.env.NODE_ENV)

export default [
    {
        path: '/',
        component: _import('project/index'),
        name: '',
        funccode: '',
        redirect: 'home',
        meta: { title: '' },
        children: [
            {
                path: '/home',
                component: _import('project/home/index'),
                name: 'home',
                funccode: '',

                meta: { title: '首页', icon: '' },
            },
            {
                path: '/personnelMatters',
                component: _import('project/personnelMatters/index'),
                name: 'personnelMatters',
                funccode: '',

                meta: { title: '人事管理', icon: '' },
                children: [
                    {
                        path: '/partTime',
                        component: _import('project/personnelMatters/partTime'),
                        name: 'partTime',
                        funccode: '',
         
                        meta: { title: '兼任管理', icon: '' },
                    },
                ]
            },
            {
                path: '/timeManagement',
                component: _import('project/timeManagement/index'),
                name: 'timeManagement',
                funccode: '',
                meta: { title: '时间管理', icon: '' },
                children: [
                    {
                        path: '/AttendanceCon',
                        component: _import('project/timeManagement/AttendanceConfiguration/index'),
                        name: 'AttendanceCon',
                        funccode: '',
        
                        meta: { title: '考勤配置', icon: '' },
                        children: [
                            {
                                path: '/HolidayConfiguration',
                                component: _import('project/timeManagement/AttendanceConfiguration/HolidayConfiguration'),
                                name: 'HolidayConfiguration',
                                funccode: '',
                                meta: { title: '节假日配置', icon: '' },
                            },
                            {
                                path: '/ShiftTimeTion',
                                component: _import('project/timeManagement/AttendanceConfiguration/ShiftTimeTion'),
                                name: 'ShiftTimeTion',
                                funccode: '',
                                meta: { title: '班次时间配置', icon: '' },
                            },
                            {
                                path: '/Schedule',
                                component: _import('project/timeManagement/AttendanceConfiguration/Schedule'),
                                name: 'Schedule',
                                funccode: '',
                                meta: { title: '作息安排配置', icon: '' },
                            },
                            {
                                path: '/SchedulingConfiguration',
                                component: _import('project/timeManagement/AttendanceConfiguration/SchedulingConfiguration'),
                                name: 'SchedulingConfiguration',
                                funccode: '',
                                meta: { title: '排班配置', icon: '' },
                            },
                            {
                                path: '/ShiftToPersonCon',
                                component: _import('project/timeManagement/AttendanceConfiguration/ShiftToPersonCon'),
                                name: 'ShiftToPersonCon',
                                funccode: '',
                                meta: { title: '排班到人配置', icon: '' },
                            },
                        ]
                    },
                    {
                        path: '/VacationCon',
                        component: _import('project/timeManagement/VacationConfiguration/index'),
                        name: 'VacationCon',
                        funccode: '',
         
                        meta: { title: '假期配置', icon: '' },
                        children: [
                            {
                                path: '/VacationSchConfig',
                                component: _import('project/timeManagement/VacationConfiguration/VacationSchConfig'),
                                name: 'VacationSchConfig',
                                funccode: '',
               
                                meta: { title: '假期方案配置', icon: '' },
                            },
                            {
                                path: '/AnnualleBalanceCon',
                                component: _import('project/timeManagement/VacationConfiguration/AnnualleBalanceCon'),
                                name: 'AnnualleBalanceCon',
                                funccode: '',
              
                                meta: { title: '年假余额配置', icon: '' },
                            },
                        ]
                    },
                    {
                        path: '/AttendanceReport',
                        component: _import('project/timeManagement/AttendanceReport/index'),
                        name: 'AttendanceReport',
                        funccode: '',
        
                        meta: { title: '考勤报表', icon: '' },
                        children: [
                            {
                                path: '/MonthlyAttendance',
                                component: _import('project/timeManagement/AttendanceReport/MonthlyAttendance'),
                                name: 'MonthlyAttendance',
                                funccode: '',
      
                                meta: { title: '月度考勤', icon: '' },
                            },
                            {
                                path: '/AnnualAttendance',
                                component: _import('project/timeManagement/AttendanceReport/AnnualAttendance'),
                                name: 'AnnualAttendance',
                                funccode: '',
         
                                meta: { title: '年度考勤', icon: '' },
                            },
                            //单独页面不需要显示路由导航开始*****************************************
                            {
                                path: '/personalData',
                                component: _import('project/AuxiliaryPage/HomePageSubassembly/PersonalData'),
                                name: 'personalData',
                                funccode: '',
                                hidden: true,
                                meta: { title: '个人资料', icon: '' },
                            },
                            //单独页面不需要显示路由导航结束*****************************************
                        ]
                    },
                ]
            },
            {
                path: '/performanceManagement',
                component: _import('project/performanceManagement/index'),
                name: 'performanceManagement',
                funccode: '',

                meta: { title: '绩效管理', icon: '' },
                children: [
                    {
                        path: '/PerformanceAllocation',
                        component: _import('project/performanceManagement/PerformanceAllocation/index'),
                        name: 'PerformanceAllocation',
                        funccode: '',
     
                        meta: { title: '绩效配置', icon: '' },
                        children: [
                            {
                                path: '/AppraisalTemplate',
                                component: _import('project/performanceManagement/PerformanceAllocation/AppraisalTemplate'),
                                name: 'AppraisalTemplate',
                                funccode: '',
                                meta: { title: '考核模板', icon: '' },
                            },
                            {
                                path: '/TemplateAssignment',
                                component: _import('project/performanceManagement/PerformanceAllocation/TemplateAssignment'),
                                name: 'TemplateAssignment',
                                funccode: '',
                                meta: { title: '模板分配', icon: '' },
                            },
                        ]
                    },
                    {
                        path: '/PerformanceList',
                        component: _import('project/performanceManagement/PerformanceList/index'),
                        name: 'PerformanceList',
                        funccode: '',
                
                        meta: { title: '绩效列表', icon: '' },
                    },
                    {
                        path: '/PerformanceReMan',
                        component: _import('project/performanceManagement/PerformanceReMan/index'),
                        name: 'PerformanceReMan',
                        funccode: '',
               
                        meta: { title: '绩效结果管理', icon: '' },
                    },
                    {
                        path: '/MyPerformance',
                        component: _import('project/performanceManagement/MyPerformance/index'),
                        name: 'MyPerformance',
                        funccode: '',
                 
                        meta: { title: '我的绩效', icon: '' },
                    },
                ]
            },
            {
                path: '/SalaryManagement',
                component: _import('project/SalaryManagement/index'),
                name: 'SalaryManagement',
                funccode: '',
 
                meta: { title: '薪酬管理', icon: '' },
                children: [
                    {
                        path: '/PaySlip',
                        component: _import('project/SalaryManagement/PaySlip/index'),
                        name: 'PaySlip',
                        funccode: '',
         
                        meta: { title: '工资条', icon: '' },
                    },
                ]
            },
            {
                path: '/ProcessManagement',
                component: _import('project/ProcessManagement/index'),
                name: 'ProcessManagement',
                funccode: '',
       
                meta: { title: '流程管理', icon: '' },
                children: [
                    {
                        path: '/ProcessConfiguration',
                        component: _import('project/ProcessManagement/ProcessConfiguration/index'),
                        name: 'ProcessConfiguration',
                        funccode: '',
                        meta: { title: '流程配置', icon: '' },
                    },
                    {
                        path: '/ProcessMonitoring',
                        component: _import('project/ProcessManagement/ProcessMonitoring/index'),
                        name: 'ProcessMonitoring',
                        funccode: '',
                        meta: { title: '流程监控', icon: '' },
                    },
                ]
            },
            {
                path: '/MyProcess',
                component: _import('project/MyProcess/index'),
                name: 'MyProcess',
                funccode: '',
                meta: { title: '我的流程', icon: '' },
                children: [
                    {
                        path: '/MyProcessSub',
                        component: _import('project/MyProcess/MyProcessSub/index'),
                        name: 'MyProcessSub',
                        funccode: '',
                        meta: { title: '我的流程', icon: '' },
                    },
                    {
                        path: '/ProcessList',
                        component: _import('project/MyProcess/ProcessList/index'),
                        name: 'ProcessList',
                        funccode: '',
                        meta: { title: '流程列表', icon: '' },
                    },

                ]
            },
            {
                path: '/systemManagement',
                component: _import('project/systemManagement/index'),
                name: 'systemManagement',
                funccode: '',
                meta: { title: '系统管理', icon: '' },
                children: [
                    {
                        path: '/userManagement',
                        component: _import('project/systemManagement/userManagement/index'),
                        name: 'userManagement',
                        funccode: '',
                        meta: { title: '用户管理', icon: '' },
                    },
                    {
                        path: '/RoleManagement',
                        component: _import('project/systemManagement/RoleManagement/index'),
                        name: 'RoleManagement',
                        funccode: '',
                        meta: { title: '角色管理', icon: '' },
                    },
                    {
                        path: '/MenuManagement',
                        component: _import('project/systemManagement/MenuManagement/index'),
                        name: 'ProcessLMenuManagementist',
                        funccode: '',
                        meta: { title: '菜单管理', icon: '' },
                    },
                    {
                        path: '/DictionaryManagement',
                        component: _import('project/systemManagement/DictionaryManagement/index'),
                        name: 'DictionaryManagement',
                        funccode: '',
                        meta: { title: '字典管理', icon: '' },
                    },
                ]
            },
            {
                path: '/OrganizationManagement',
                component: _import('project/OrganizationManagement/index'),
                name: 'OrganizationManagement',
                funccode: '',
                meta: { title: '组织管理', icon: '' },
            }
        ]
    }
]
