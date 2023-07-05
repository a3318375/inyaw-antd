// @ts-ignore
/* eslint-disable */

declare namespace API {
  type CurrentUser = {
    name?: string;
    avatar?: string;
    userid?: string;
    email?: string;
    signature?: string;
    title?: string;
    group?: string;
    tags?: { key?: string; label?: string }[];
    notifyCount?: number;
    unreadCount?: number;
    country?: string;
    access?: string;
    geographic?: {
      province?: { label?: string; key?: string };
      city?: { label?: string; key?: string };
    };
    address?: string;
    phone?: string;
  };

  type LoginResult = {
    code?: number;
    data?: string;
    errorMessage?: string;
  };

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    username?: string;
    password?: string;
    autoLogin?: boolean;
    type?: string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
type AuthenticationMethod = {
    value?: string;
  };

  type AuthorizationGrantType = {
    value?: string;
  };

  type BaseResultInyaaBlog = {
    code?: number;
    message?: string;
    data?: InyaaBlog;
  };

  type BaseResultInyaaBlogDto = {
    code?: number;
    message?: string;
    data?: InyaaBlogDto;
  };

  type BaseResultInyaaBlogWebInfoVo = {
    code?: number;
    message?: string;
    data?: InyaaBlogWebInfoVo;
  };

  type BaseResultInyaaSysUser = {
    code?: number;
    message?: string;
    data?: InyaaSysUser;
  };

  type BaseResultListInyaaBlog = {
    code?: number;
    message?: string;
    data?: InyaaBlog[];
  };

  type BaseResultListInyaaBlogTag = {
    code?: number;
    message?: string;
    data?: InyaaBlogTag[];
  };

  type BaseResultListInyaaBlogType = {
    code?: number;
    message?: string;
    data?: InyaaBlogType[];
  };

  type BaseResultListInyaaBlogWebVo = {
    code?: number;
    message?: string;
    data?: InyaaBlogWebVo[];
  };

  type BaseResultListInyaaSysDeptDto = {
    code?: number;
    message?: string;
    data?: InyaaSysDeptDto[];
  };

  type BaseResultListInyaaSysMenu = {
    code?: number;
    message?: string;
    data?: InyaaSysMenu[];
  };

  type BaseResultListInyaaSysMenuVo = {
    code?: number;
    message?: string;
    data?: InyaaSysMenuVo[];
  };

  type BaseResultListInyaaSysPermission = {
    code?: number;
    message?: string;
    data?: InyaaSysPermission[];
  };

  type BaseResultListInyaaSysPermissionDto = {
    code?: number;
    message?: string;
    data?: InyaaSysPermissionDto[];
  };

  type BaseResultListInyaaSysPermissionVo = {
    code?: number;
    message?: string;
    data?: InyaaSysPermissionVo[];
  };

  type BaseResultListInyaaSysRoleVo = {
    code?: number;
    message?: string;
    data?: InyaaSysRoleVo[];
  };

  type BaseResultListInyaaSysUser = {
    code?: number;
    message?: string;
    data?: InyaaSysUser[];
  };

  type BaseResultListObject = {
    code?: number;
    message?: string;
    data?: Record<string, any>[];
  };

  type BaseResultListString = {
    code?: number;
    message?: string;
    data?: string[];
  };

  type BaseResultMapStringObject = {
    code?: number;
    message?: string;
    data?: Record<string, any>;
  };

  type BaseResultOAuth2Error = {
    code?: number;
    message?: string;
    data?: OAuth2Error;
  };

  type BaseResultPageInyaaBlogComment = {
    code?: number;
    message?: string;
    data?: PageInyaaBlogComment;
  };

  type BaseResultPageInyaaBlogVo = {
    code?: number;
    message?: string;
    data?: PageInyaaBlogVo;
  };

  type BaseResultPageInyaaBlogWebVo = {
    code?: number;
    message?: string;
    data?: PageInyaaBlogWebVo;
  };

  type BaseResultString = {
    code?: number;
    message?: string;
    data?: string;
  };

  type BaseResultString = {
    code?: number;
    message?: string;
    data?: string[];
  };

  type ClientAuthenticationMethod = {
    value?: string;
  };

  type clientCredentialsGrant1Params = {
    authorizedClient: OAuth2AuthorizedClient;
  };

  type ClientRegistration = {
    registrationId?: string;
    clientId?: string;
    clientSecret?: string;
    clientAuthenticationMethod?: ClientAuthenticationMethod;
    authorizationGrantType?: AuthorizationGrantType;
    redirectUri?: string;
    scopes?: string[];
    providerDetails?: ProviderDetails;
    clientName?: string;
  };

  type delete6Params = {
    id: number;
  };

  type findBlogCommentListParams = {
    req: InyaaBlogDto;
  };

  type findBlogListParams = {
    req: InyaaBlog;
  };

  type findBlogPageParams = {
    req: InyaaBlogDto;
  };

  type findMenuList1Params = {
    enable: boolean;
  };

  type findMenuListParams = {
    isWx: number;
  };

  type findPermissionListParams = {
    enable: boolean;
  };

  type getConfigParams = {
    type: number;
  };

  type info1Params = {
    id?: number;
    title?: string;
    cover?: string;
    comments?: number;
    status?: string;
    summary?: string;
    views?: number;
    createTime?: string;
    updateTime?: string;
    userId?: string;
    isComment?: boolean;
    isHot?: string;
    'type.id'?: number;
    'type.name'?: string;
    'type.createTime'?: string;
    'type.remark'?: string;
    tagList?: InyaaBlogTag[];
    'article.id'?: number;
    'article.context'?: string;
    commentList?: InyaaBlogComment[];
  };

  type InyaaBlog = {
    id?: number;
    /** 文章标题 */
    title?: string;
    cover?: string;
    comments?: number;
    /** 发布状态 */
    status?: boolean;
    summary?: string;
    views?: number;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 作者 */
    userId?: number;
    isComment?: boolean;
    /** 是否热门 */
    isHot?: boolean;
    type?: InyaaBlogType;
    tagList?: InyaaBlogTag[];
    article?: InyaaBlogArticle;
    commentList?: InyaaBlogComment[];

    context?: string;
  };

  type InyaaBlogArticle = {
    id?: number;
    context?: string;
  };

  type InyaaBlogComment = {
    id?: number;
    userId?: InyaaSysUser;
    toUserId?: InyaaSysUser;
    type?: number;
    pid?: number;
    content?: string;
    blogId?: number;
    createTime?: string;
  };

  type InyaaBlogDto = {
    id?: number;
    /** 文章标题 */
    title?: string;
    cover?: string;
    comments?: number;
    /** 发布状态 */
    status?: boolean;
    summary?: string;
    views?: number;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 作者 */
    userId?: number;
    isComment?: boolean;
    /** 是否热门 */
    isHot?: boolean;
    type?: InyaaBlogType;
    tagList?: InyaaBlogTag[];
    article?: InyaaBlogArticle;
    commentList?: InyaaBlogComment[];
    context?: string;
    previousBlog?: InyaaBlog;
    nextBlog?: InyaaBlog;
    /** 页码 */
    page?: number;
    /** 每页条数 */
    size?: number;
  };

  type InyaaBlogTag = {
    id?: number;
    name?: string;
    createTime?: string;
    remark?: string;

    value?: number;
    label?: string;
  };

  type InyaaBlogType = {
    id?: number;
    name?: string;
    createTime?: string;
    remark?: string;

    value?: number;
    label?: string;
  };

  type SelectType = {
    value?: number;
    label?: string;
  };

  type InyaaBlogVo = {
    id?: number;
    title?: string;
    cover?: string;
    comments?: number;
    status?: boolean;
    summary?: string;
    views?: number;
    createTime?: string;
    updateTime?: string;
    userId?: number;
    isComment?: boolean;
    isHot?: boolean;
  };

  type InyaaBlogWebInfoVo = {
    id?: number;
    title?: string;
    cover?: string;
    comments?: number;
    status?: boolean;
    summary?: string;
    views?: number;
    createTime?: string;
    updateTime?: string;
    userId?: number;
    isComment?: boolean;
    isHot?: boolean;
    type?: InyaaBlogType;
    tagList?: InyaaBlogTag[];
    article?: InyaaBlogArticle;
    commentList?: InyaaBlogComment[];
    previousBlog?: InyaaBlogVo;
    nextBlog?: InyaaBlogVo;
  };

  type InyaaBlogWebVo = {
    id?: number;
    title?: string;
    cover?: string;
    comments?: number;
    status?: boolean;
    summary?: string;
    views?: number;
    createTime?: string;
    updateTime?: string;
    userId?: number;
    isComment?: boolean;
    isHot?: boolean;
    type?: InyaaBlogType;
    tagList?: InyaaBlogTag[];
  };

  type InyaaSysDept = {
    id?: number;
    name?: string;
    parentId?: number;
    status?: boolean;
    createTime?: string;
    remark?: string;
    sort?: number;
  };

  type InyaaSysDeptDto = {
    id?: number;
    name?: string;
    parentId?: number;
    status?: boolean;
    createTime?: string;
    remark?: string;
    sort?: number;
  };

  type InyaaSysMenu = {
    id?: number;
    name?: string;
    path?: string;
    icon?: string;
    component?: string;
    isShow?: boolean;
    parentId?: number;
    isExt?: boolean;
    sort?: number;
    createTime?: string;
    updateTime?: string;
  };

  type InyaaSysMenuVo = {
    id?: number;
    name?: string;
    path?: string;
    icon?: string;
    component?: string;
    isShow?: boolean;
    parentId?: number;
    isExt?: boolean;
    sort?: number;
    createTime?: string;
    updateTime?: string;
    children?: InyaaSysMenuVo[];
  };

  type InyaaSysPermission = {
    id?: number;
    name?: string;
    path?: string;
    icon?: string;
    wxIcon?: string;
    isShow?: boolean;
    type?: number;
    parentId?: number;
    isExt?: boolean;
    sort?: number;
    createTime?: string;
    updateTime?: string;
  };

  type InyaaSysPermissionDto = {
    id?: number;
    name?: string;
    path?: string;
    icon?: string;
    wxIcon?: string;
    isShow?: boolean;
    type?: number;
    parentId?: number;
    isExt?: boolean;
    sort?: number;
    createTime?: string;
    updateTime?: string;
  };

  type InyaaSysPermissionVo = {
    id?: number;
    name?: string;
    path?: string;
    icon?: string;
    wxIcon?: string;
    isShow?: boolean;
    type?: number;
    parentId?: number;
    isExt?: boolean;
    sort?: number;
    createTime?: string;
    updateTime?: string;
  };

  type InyaaSysRole = {
    id?: number;
    roleName?: string;
    roleKey?: string;
    description?: string;
  };

  type InyaaSysRoleVo = {
    id?: number;
    roleName?: string;
    roleKey?: string;
    description?: string;
    menuIdList?: number[];
    menuList?: number[];
  };

  type InyaaSysUser = {
    id?: number;
    username?: string;
    password?: string;
    name?: string;
    email?: string;
    loginDate?: string;
    loginIp?: string;
    avatar?: string;
    roleId?: number;
    deptId?: number;
    createTime?: string;
    enabled?: boolean;
    accountNonExpired?: boolean;
    accountNonLocked?: boolean;
    credentialsNonExpired?: boolean;
  };

  type list3Params = {
    role: InyaaSysRole;
  };

  type list4Params = {
    permission: InyaaSysPermission;
  };

  type list5Params = {
    permission: InyaaSysMenu;
  };

  type list7Params = {
    dept: InyaaSysDept;
  };

  type list8Params = {
    id?: number;
    title?: string;
    cover?: string;
    comments?: number;
    status?: string;
    summary?: string;
    views?: number;
    createTime?: string;
    updateTime?: string;
    userId?: string;
    isComment?: boolean;
    isHot?: string;
    'type.id'?: number;
    'type.name'?: string;
    'type.createTime'?: string;
    'type.remark'?: string;
    tagList?: InyaaBlogTag[];
    'article.id'?: number;
    'article.context'?: string;
    commentList?: InyaaBlogComment[];
  };

  type list9Params = {
    context?: string;
    'previousBlog.id'?: number;
    'previousBlog.title'?: string;
    'previousBlog.cover'?: string;
    'previousBlog.comments'?: number;
    'previousBlog.status'?: string;
    'previousBlog.summary'?: string;
    'previousBlog.views'?: number;
    'previousBlog.createTime'?: string;
    'previousBlog.updateTime'?: string;
    'previousBlog.userId'?: string;
    'previousBlog.isComment'?: boolean;
    'previousBlog.isHot'?: string;
    'previousBlog.type.id'?: number;
    'previousBlog.type.name'?: string;
    'previousBlog.type.createTime'?: string;
    'previousBlog.type.remark'?: string;
    'previousBlog.tagList'?: InyaaBlogTag[];
    'previousBlog.article.id'?: number;
    'previousBlog.article.context'?: string;
    'previousBlog.commentList'?: InyaaBlogComment[];
    'nextBlog.id'?: number;
    'nextBlog.title'?: string;
    'nextBlog.cover'?: string;
    'nextBlog.comments'?: number;
    'nextBlog.status'?: string;
    'nextBlog.summary'?: string;
    'nextBlog.views'?: number;
    'nextBlog.createTime'?: string;
    'nextBlog.updateTime'?: string;
    'nextBlog.userId'?: string;
    'nextBlog.isComment'?: boolean;
    'nextBlog.isHot'?: string;
    'nextBlog.type.id'?: number;
    'nextBlog.type.name'?: string;
    'nextBlog.type.createTime'?: string;
    'nextBlog.type.remark'?: string;
    'nextBlog.tagList'?: InyaaBlogTag[];
    'nextBlog.article.id'?: number;
    'nextBlog.article.context'?: string;
    'nextBlog.commentList'?: InyaaBlogComment[];
    page?: string;
    size?: string;
    id?: number;
    title?: string;
    cover?: string;
    comments?: number;
    status?: string;
    summary?: string;
    views?: number;
    createTime?: string;
    updateTime?: string;
    userId?: string;
    isComment?: boolean;
    isHot?: string;
    'type.id'?: number;
    'type.name'?: string;
    'type.createTime'?: string;
    'type.remark'?: string;
    tagList?: InyaaBlogTag[];
    'article.id'?: number;
    'article.context'?: string;
    commentList?: InyaaBlogComment[];
  };

  type listParams = {
    user: InyaaSysUser;
  };

  type OAuth2AccessToken = {
    tokenValue?: string;
    issuedAt?: string;
    expiresAt?: string;
    tokenType?: TokenType;
    scopes?: string[];
  };

  type OAuth2AuthorizedClient = {
    clientRegistration?: ClientRegistration;
    principalName?: string;
    accessToken?: OAuth2AccessToken;
    refreshToken?: OAuth2RefreshToken;
  };

  type OAuth2Error = {
    errorCode?: string;
    description?: string;
    uri?: string;
  };

  type OAuth2RefreshToken = {
    tokenValue?: string;
    issuedAt?: string;
    expiresAt?: string;
  };

  type PageableObject = {
    offset?: number;
    sort?: SortObject;
    paged?: boolean;
    unpaged?: boolean;
    pageNumber?: number;
    pageSize?: number;
  };

  type PageInyaaBlogComment = {
    totalPages?: number;
    totalElements?: number;
    size?: number;
    content?: InyaaBlogComment[];
    number?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    numberOfElements?: number;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
  };

  type PageInyaaBlogVo = {
    totalPages?: number;
    totalElements?: number;
    size?: number;
    content?: InyaaBlogVo[];
    number?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    numberOfElements?: number;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
  };

  type PageInyaaBlogWebVo = {
    totalPages?: number;
    totalElements?: number;
    size?: number;
    content?: InyaaBlogWebVo[];
    number?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    numberOfElements?: number;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
  };

  type ProviderDetails = {
    authorizationUri?: string;
    tokenUri?: string;
    userInfoEndpoint?: UserInfoEndpoint;
    jwkSetUri?: string;
    issuerUri?: string;
    configurationMetadata?: Record<string, any>;
  };

  type saveBlogCommentParams = {
    req: InyaaBlogComment;
  };

  type SortObject = {
    empty?: boolean;
    sorted?: boolean;
    unsorted?: boolean;
  };

  type TokenType = {
    value?: string;
  };

  type uploadParams = {
    type: number;
  };

  type UserInfoEndpoint = {
    uri?: string;
    authenticationMethod?: AuthenticationMethod;
    userNameAttributeName?: string;
  };

  type webInfoParams = {
    blog: InyaaBlog;
  };
}
