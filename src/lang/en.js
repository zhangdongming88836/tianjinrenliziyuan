export default {
  route: {
    dashboard: 'Dashboard',
    introduction: 'Introduction',
    documentation: 'Documentation',
    guide: 'Guide',
    permission: 'Permission',
    pagePermission: 'Page Permission',
    directivePermission: 'Directive Permission',
    icons: 'Icons',
    components: 'Components',
    componentIndex: 'Introduction',
    markdown: 'Markdown',
    jsonEditor: 'JSON Editor',
    dndList: 'Dnd List',
    splitPane: 'SplitPane',
    avatarUpload: 'Avatar Upload',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'CountTo',
    componentMixin: 'Mixin',
    backToTop: 'BackToTop',
    dragDialog: 'Drag Dialog',
    dragKanban: 'Drag Kanban',
    charts: 'Charts',
    keyboardChart: 'Keyboard Chart',
    lineChart: 'Line Chart',
    mixChart: 'Mix Chart',
    example: 'Example',
    Table: 'Table',
    dynamicTable: 'Dynamic Table',
    dragTable: 'Drag Table',
    inlineEditTable: 'Inline Edit',
    complexTable: 'Complex Table',
    treeTable: 'Tree Table',
    customTreeTable: 'Custom TreeTable',
    tab: 'Tab',
    form: 'Form',
    createArticle: 'Create Article',
    editArticle: 'Edit Article',
    articleList: 'Article List',
    errorPages: 'Error Pages',
    page401: '401',
    page404: '404',
    errorLog: 'Error Log',
    excel: 'Excel',
    exportExcel: 'Export Excel',
    selectExcel: 'Export Selected',
    uploadExcel: 'Upload Excel',
    zip: 'Zip',
    exportZip: 'Export Zip',
    theme: 'Theme',
    clipboardDemo: 'Clipboard',
    i18n: 'I18n',
  },
  navbar: {
    logOut: 'Log Out',
    dashboard: 'Dashboard',
    github: 'Github',
    screenfull: 'screenfull',
    theme: 'theme',
  },
  documentation: {
    documentation: 'Documentation',
    github: 'Github Repository',
  },
  permission: {
    roles: 'Your roles',
    switchRoles: 'Switch roles',
  },
  guide: {
    description:
      'The guide page is useful for some people who entered the project for the first time. You can briefly introduce the features of the project. Demo is based on ',
    button: 'Show Guide',
  },
  components: {
    documentation: 'Documentation',
    dropzoneTips:
      'Because my business has special needs, and has to upload images to qiniu, so instead of a third party, I chose encapsulate it by myself. It is very simple, you can see the detail code in @/components/Dropzone.',
    stickyTips: 'when the page is scrolled to the preset position will be sticky on the top.',
    backToTopTips1: 'When the page is scrolled to the specified position, the Back to Top button appears in the lower right corner',
    backToTopTips2:
      'You can customize the style of the button, show / hide, height of appearance, height of the return. If you need a text prompt, you can use element-ui el-tooltip elements externally',
    imageUploadTips:
      'Since I was using only the vue@1 version, and it is not compatible with mockjs at the moment, I modified it myself, and if you are going to use it, it is better to use official version.',
  },
  table: {
    dynamicTips1: 'Fixed header, sorted by header order',
    dynamicTips2: 'Not fixed header, sorted by click order',
    dragTips1: 'The default order',
    dragTips2: 'The after dragging order',
    title: 'Title',
    importance: 'Imp',
    type: 'Type',
    remark: 'Remark',
    search: 'Search',
    add: 'Add',
    export: 'Export',
    reviewer: 'reviewer',
    id: 'ID',
    date: 'Date',
    author: 'Author',
    readings: 'Readings',
    status: 'Status',
    actions: 'Actions',
    edit: 'Edit',
    publish: 'Publish',
    draft: 'Draft',
    delete: 'Delete',
    cancel: 'Cancel',
    confirm: 'Confirm',
  },
  errorLog: {
    tips: 'Please click the bug icon in the upper right corner',
    description:
      'Now the management system are basically the form of the spa, it enhances the user experience, but it also increases the possibility of page problems, a small negligence may lead to the entire page deadlock. Fortunately Vue provides a way to catch handling exceptions, where you can handle errors or report exceptions.',
    documentation: 'Document introduction',
  },
  excel: {
    export: 'Export',
    selectedExport: 'Export selected items',
    placeholder: 'Please enter the file name(default excel-list)',
  },
  zip: {
    export: 'Export',
    placeholder: 'Please enter the file name(default file)',
  },
  theme: {
    change: 'Theme change',
    documentation: 'Theme documentation',
    tips:
      'Tips: It is different from the theme-pick on the navbar is two different skinning methods, each with different application scenarios. Refer to the documentation for details.',
  },
  tagsView: {
    close: 'Close',
    closeOthers: 'Close Others',
    closeAll: 'Close All',
  },
  error: {
    DEVOPS_00000: 'SYSTEM_ERROR',
    DEVOPS_00001: 'ILLEGAL_PARAMETER',
    DEVOPS_00002: 'UNAUTHORIZED_ERROR',
    DEVOPS_00003: 'NOT_LOGIN',
    DEVOPS_00004: 'LOCK_ACQUIRED_TIMEOUT',
    DEVOPS_00005: 'OUT_OF_USER_COUNT',
    DEVOPS_00008: 'OUT_OF_PROJECT_COUNT!',
    DEVOPS_00009: 'license ERROR',
    DEVOPS_00010: 'DevOpsRootUrl config ERROR',
    DEVOPS_UC_10005: 'USER_ALREADY_EXISTED',
    DEVOPS_UC_10015: 'ROLE_ALREADY_EXISTED',
    DEVOPS_UC_10016: 'ROLE_NOT_EXISTED',
    DEVOPS_UC_10020: 'ROLE_ALREADY_EXISTED_RELATION',
    DEVOPS_UC_10021: 'ROLE_NAME_DUPLICAT',
    DEVOPS_UC_10035: 'EMPLOYEE_ALREADY_EXISTED',
    DEVOPS_UC_10045: 'ORG_ALREADY_EXISTED',
    DEVOPS_UC_10047: 'ORG_EXISTED_EMPLOYEE',
    DEVOPS_UC_20001: 'ROLE_TEMPLATE_ALREADY_EXISTED',
    DEVOPS_UC_20002: 'ROLE_TEMPLATE_NOT_EXISTED',
    DEVOPS_UC_20003: 'ROLE_TEMPLATE_NAME_DUPLICAT',
    DEVOPS_PM_01002: 'MILESTONE_NOT_EXISTED',
    DEVOPS_PM_01004: 'MILESTONE_ALREADY_EXISTED',
    DEVOPS_PM_02002: 'DELIVERY_NOT_EXISTED',
    DEVOPS_PM_02004: 'DELIVERY_ALREADY_EXISTED',
    DEVOPS_PM_10001: 'PROJECT_NOT_EXISTS',
    DEVOPS_PM_10002: 'PROJECT_NOT_FINISHED',
    DEVOPS_PM_10007: 'PROJECT_ALREADY_EXISTS',
    DEVOPS_PM_10012: 'PROJECT_ALREADY_SUBMIT',
    DEVOPS_PM_10013: 'JIRA_PROJECT_CREATE_FAILED',
    DEVOPS_PM_10014: 'JIRA_PROJECT_NO_TEMPLATE_PROJECT_FAILED',
    DEVOPS_PM_10022: 'JIRA_EPIC_CREATE_FAILED',
    DEVOPS_PM_10026: 'JIRA_ISSUE_QUERY_FAILED',
    DEVOPS_PM_10027: 'JIRA_TEMPLATEPROJECT_QUERY_FAILED',
    DEVOPS_PM_40009: 'PROJECT_TEAM_CHECK_REPEAT',
    DEVOPS_PM_50001: 'PROJECT_APPROVAL_NOT_EXISTS',
    DEVOPS_PM_50012: 'PROJECT_ALREADY_APPROVED',
    DEVOPS_PM_50012: 'PROJECT_APPROVAL_WRONG_ACTION',
    DEVOPS_PM_30001: 'COMPONENT_NOT_EXISTS',
    DEVOPS_PM_30002: 'COMPONENT_NAME_DUPLICATE',
    DEVOPS_PCM_10010: 'SYSCONF_ALIAS_ALREADY_EXISTS',
    DEVOPS_PCM_10011: 'SYSCONF_NOT_EXISTS',
    DEVOPS_PCM_10019: 'SYSCONF_ANSIBLE_SCRIPT_REPOSITORY_NOT_EXISTS',
    DEVOPS_PCM_11001: 'TAG_ALREADY_EXISTS',
    DEVOPS_PCM_13001: 'SYSTEM_PREFERENCE_ALREADY_EXISTS',
    DEVOPS_PCM_13002: 'SYSTEM_PREFERENCE_NOT_EXISTED',
    DEVOPS_PCM_13005: 'PASS_NOT_CONFORM_POLICY',
    DEVOPS_PCM_13006: 'PASS_POLICY_DICTS_LOAD_FAILD',
    DEVOPS_PCM_20005: 'WORKITEM_NOT_EXISTS',
    DEVOPS_PCM_10001: 'WORKLIST_NOT_EXISTED',
    DEVOPS_PCM_10002: 'WORKLIST_APPROVAL_ACTION_NOT_SUPPORT',
    DEVOPS_PCM_10003: 'WORKLIST_NOT_HAVE_APPROVER',
    DEVOPS_PCM_20001: 'ENV_TYPE_ALREADY_EXISTED',
    DEVOPS_PCM_20002: 'ENV_TYPE_ALREADY_USED',
    DEVOPS_PCM_30001: 'TEMPLATE_NOT_EXISTED',
    DEVOPS_PCM_30002: 'TEMPLATE_NAME_DUPLICAT',
    DEVOPS_LM_30001: 'TASK_INIT_FAILED',
    DEVOPS_VCS_04001: 'GITLAB_SERVICE_UNKNOWN_EXCEPTION',
    DEVOPS_VCS_04002: 'GITLAB_SERVICE_NOT_FOUND_EXCEPTION',
    DEVOPS_VCS_04003: 'GITLAB_SERVICE_TIMEOUT_EXCEPTION',
    DEVOPS_VCS_04004: 'GITLAB_SERVICE_API_EXCEPTION',
    DEVOPS_VCS_04005: 'GITLAB_BRANCH_CONFLICTS',
    DEVOPS_VCS_04006: 'GITHUB_SERVICE_API_EXCEPTION',
    DEVOPS_VCS_04014: 'VCS_REPOSITORY_INFO_ERROR',
    DEVOPS_VCS_04015: 'VCS_REPOSITORY_NOT_EXISTED',
    DEVOPS_VCS_04018: 'VCS_REPOSITORY_IN_USE',
    DEVOPS_VCS_04051: 'VCS_REPOSITORY_ALREADY_EXISTS',
    DEVOPS_VCS_04052: 'VCS_REPOSITORY_BRANCH_ALREADY_EXISTS',
    DEVOPS_VCS_04055: 'VCS_REPOSITORY_TAG_ALREADY_EXISTS',
    DEVOPS_VCS_04056: 'VCS_NO_TARGET_SYS_USER_FAILED',
    DEVOPS_VCS_04057: 'VCS_NO_TARGET_SYS_ERROR',
    DEVOPS_VCS_04058: 'VCS_RELATION_REPOSITORY_POJECT_ALREADY_EXISTS',
    DEVOPS_VCS_04060: 'VCS_REPOSITORY_RELATE_DIFFERENT_PRODUCT_ERROR',
    DEVOPS_VCS_04061: 'VCS_RELATION_REPOSITORY_POJECT_NOT_EXISTS',
    DEVOPS_VCS_04062: 'VCS_UNSPPORTED_ACCESSLEVEL',
    DEVOPS_VCS_04063: 'VCS_CREATE_WEBHOOK_ERROR',
    DEVOPS_VCS_04064: 'VCS_DELETE_WEBHOOK_ERROR',
    DEVOPS_CI_10014: 'BUILD_DEFINITION_ALREADY_EXISTED',
    DEVOPS_CI_10015: 'BUILD_DEFINITION_NOT_EXISTED',
    DEVOPS_CI_10018: 'BUILD_DEFINITION_CAUSE_CYCLIC_INVOKE',
    DEVOPS_CI_10020: 'BUILD_DEFINITION_NOT_PERMISSION',
    DEVOPS_CI_10030: 'BUILD_ARTIFACT_REPOSITORY_ALREADY_EXISTED',
    DEVOPS_CI_10031: 'BUILD_ARTIFACT_REPOSITORY_NOT_EXISTED',
    DEVOPS_CI_10040: 'BUILD_ARTIFACT_GROUP_ALREADY_EXISTED',
    DEVOPS_CI_10041: 'BUILD_ARTIFACT_GROUP_NOT_EXISTED',
    DEVOPS_CD_10024: 'PROJECT_RESOURCE_DUPLICAT_RES_IP_ADDRESS',
    DEVOPS_CD_10025: 'PROJECT_RESOURCE_NOT_EXISTED',
    DEVOPS_CD_10026: 'MIDDLEWARE_IS_EMPTY',
    DEVOPS_CD_10102: 'CMDB_API_INVOKE_ERROR',
    DEVOPS_CD_10110: 'CMDB_ADD_LABEL_ERROR',
    DEVOPS_CD_10113: 'CMDB_ADD_LABEL_MAPPING_ERROR',
    DEVOPS_CD_20001: 'DEPLOY_DESIGN_NAME_DUPLICAT',
    DEVOPS_CD_20002: 'DEPLOY_DESIGN_NOT_EXISTED',
    DEVOPS_CD_20003: 'DEPLOY_COMPONENT_NOT_EXISTED',
    DEVOPS_CD_20004: 'COMPONENT_ID_DUPLICAT',
    DEVOPS_CD_30001: 'RELEASE_DEFINITION_NAME_DUPLICAT',
    DEVOPS_CD_30002: 'RELEASE_DEFINITION_NOT_EXISTED',
    DEVOPS_CD_30003: 'RELEASE_ENV_NOT_EXISTED',
    DEVOPS_CD_30004: 'RELEASE_ENV_NOT_NEED_APPROVAL',
    DEVOPS_CD_30005: 'RELEASE_ENV_APPROVAL_USER_NOT_MATCH',
    DEVOPS_CD_30006: 'RELEASE_ENV_FINISH_NOT_MANUAL_CONFIRM',
    DEVOPS_CD_30007: 'RELEASE_ENV_FINISH_USER_NOT_MATCH',
    DEVOPS_CD_30008: 'RELEASE_ENV_FINISH_USER_NOT_MATCH_ORDER',
    DEVOPS_CD_30009: 'RELEASE_ENV_NAME_DUPLICAT',
    DEVOPS_CD_30010: 'RELEASE_ENV_NOT_PERMISSION',
    DEVOPS_CD_30100: 'RELEASE_INSTANCE_NOT_EXISTED',
    DEVOPS_CD_30101: 'RELEASE_INSTANCE_STATUS_CANNOT_OPERATE',
    DEVOPS_CD_30102: 'RELEASE_ENV_INSTANCE_NOT_EXISTED',
    DEVOPS_CD_30103: 'RELEASE_ENV_INSTANCE_STATUS_NOT_WAITING_CONFIRM',
    DEVOPS_CD_30104: 'RELEASE_ENV_INSTANCE_STATUS_CANNOT_FINISH_CONFIRM',
    DEVOPS_CD_30105: 'RELEASE_ENV_IINSTANCE_STATUS_CANNOT_DEPLOY',
    DEVOPS_CD_30106: 'RELEASE_ENV_INSTANCE_STATUS_CANNOT_FINISH',
    DEVOPS_CD_30107: 'DEPLOY_STAGE_INSTANCE_NOT_EXISTED',
    DEVOPS_CD_30200: 'RELEASE_VERSION_NUMBER_DUPLICAT',
    DEVOPS_CD_40001: 'DEPLOY_COMPONENT_INSTANCE_NOT_EXISTED',
    DEVOPS_CD_40002: 'UNLOADED_DEPLOY_COMPONENT_INSTANCE_CANNOT_DELETE',
    DEVOPS_CD_40003: 'DEPLOY_COMPONENT_INSTANCE_OPERATION_NOT_EXISTED',
    DEVOPS_CD_40004: 'DEPLOY_COMPONENT_INSTANCE_IS_OPERATING',
    DEVOPS_CD_40005: 'COMPONENT_TEMPLATE_OPERATE_NOT_SUPPORT',
    DEVOPS_ENGINE_10001: 'ENGINE_PIPELINE_NOT_EXISTED',
    DEVOPS_ENGINE_10002: 'ENGINE_PIPELINE_NAME_DUPLICAT',
    DEVOPS_ENGINE_10003: 'ENGINE_PIPELINE_INSTANCE_NOT_EXISTED',
    DEVOPS_ENGINE_10004: 'ENGINE_STAGE_INSTANCE_NOT_EXISTED',
    DEVOPS_ENGINE_10005: 'ENGINE_PIPELINE_INSTANCE_APPROVAL_USER_NOT_MATCH',
    DEVOPS_ENGINE_20001: 'ENGINE_IS_UNAVAILABLE',
  },
}
