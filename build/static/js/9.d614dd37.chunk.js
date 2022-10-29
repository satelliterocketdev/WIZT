(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1825:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(8),c=a(13),l=a(12),o=a(14),s=a(21),i=a(0),u=a.n(i),m=a(1),d=a(43),p=a(10),f=a(38),b=a.n(f),h=a(64),E=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={id:null,name:null,email:null,email_verified:null,phone_number:null,phone_number_verified:null,username:null,picture:null},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("item_id");b.a.get(h.a.baseUrl+"/admin/users/"+t+"/").then(function(t){e.setState(t.data)})}},{key:"render",value:function(){var e=this.state,t=e.id,a=e.name,n=e.email,r=e.email_verified,c=e.phone_number,l=e.phone_number_verified,o=e.username,s=e.picture,i=e.photo_in_use,d=e.label_in_use,f=e.total_label_count,b=e.friends_count;return u.a.createElement("div",{className:"md:flex"},u.a.createElement("div",{className:"flex flex-col flex-1 md:pr-32"},u.a.createElement(p.c,{enter:{animation:"transition.slideUpBigIn"}},t&&u.a.createElement(m.d,{className:"w-full mb-16"},u.a.createElement(m.a,{position:"static",elevation:0},u.a.createElement(m.Y,{className:"pl-16 pr-8"},u.a.createElement(m.ab,{variant:"subtitle1",color:"inherit",className:"flex-1"},"General Information"))),u.a.createElement(m.e,null,u.a.createElement("div",{className:"mb-24"},u.a.createElement(m.b,{src:s})),u.a.createElement("div",{className:"mb-24"},u.a.createElement(m.ab,{className:"font-bold mb-4 text-15"},"name"),u.a.createElement(m.ab,null,a)),u.a.createElement("div",{className:"mb-24"},u.a.createElement(m.ab,{className:"font-bold mb-4 text-15"},"username"),u.a.createElement(m.ab,null,o)),u.a.createElement("div",{className:"mb-24"},u.a.createElement(m.ab,{className:"font-bold mb-4 text-15"},"email"),u.a.createElement(m.ab,null,n)),u.a.createElement("div",{className:"mb-24"},u.a.createElement(m.ab,{className:"font-bold mb-4 text-15"},"email_verified"),u.a.createElement(m.ab,null,r.toString())),u.a.createElement("div",{className:"mb-24"},u.a.createElement(m.ab,{className:"font-bold mb-4 text-15"},"phone_number"),u.a.createElement(m.ab,null,c)),u.a.createElement("div",{className:"mb-24"},u.a.createElement(m.ab,{className:"font-bold mb-4 text-15"},"phone_number_verified"),u.a.createElement(m.ab,null,l.toString())))))),u.a.createElement("div",{className:"flex flex-col md:w-512"},u.a.createElement(p.c,{enter:{animation:"transition.slideUpBigIn"}},t&&u.a.createElement(m.d,{className:"w-full mb-16"},u.a.createElement(m.a,{position:"static",elevation:0},u.a.createElement(m.Y,{className:"pl-16 pr-8"},u.a.createElement(m.ab,{variant:"subtitle1",color:"inherit",className:"flex-1"},"Label Information"))),u.a.createElement(m.e,null,u.a.createElement("div",{className:"mb-24"},u.a.createElement(m.ab,{className:"font-bold mb-4 text-15"},"Photo in use"),u.a.createElement(m.ab,null,i)),u.a.createElement("div",{className:"mb-24"},u.a.createElement(m.ab,{className:"font-bold mb-4 text-15"},"Label in use"),u.a.createElement(m.ab,null,d)),u.a.createElement("div",{className:"mb-24"},u.a.createElement(m.ab,{className:"font-bold mb-4 text-15"},"Total label count"),u.a.createElement(m.ab,null,f)),u.a.createElement("div",{className:"mb-24"},u.a.createElement(m.ab,{className:"font-bold mb-4 text-15"},"Friends count"),u.a.createElement(m.ab,null,b)))))))}}]),t}(i.Component),C=a(1816),g=a(1817),v=a(741),O=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={value:0},a.handleChange=function(e,t){a.setState({value:t})},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.value,a={name:localStorage.getItem("name"),imgURL:localStorage.getItem("imgURL")};return"null"===a.imgURL&&console.log("user.imgURL"),u.a.createElement(p.m,{classes:{header:e.layoutHeader,toolbar:"px-16 sm:px-24"},header:u.a.createElement("div",{className:"p-24 flex flex-1 flex-col items-center justify-center md:flex-row"},u.a.createElement("div",{className:"flex flex-1 flex-col items-center justify-center md:flex-row md:items-center md:justify-start"},u.a.createElement(p.b,{animation:"transition.expandIn",delay:300},u.a.createElement(m.b,{className:"w-96 h-96",src:"null"===a.imgURL?"":a.imgURL})),u.a.createElement(p.b,{animation:"transition.slideLeftIn",delay:300},u.a.createElement(m.ab,{className:"md:ml-24",variant:"h4",color:"inherit"},a.name)))),contentToolbar:u.a.createElement(m.W,{value:t,onChange:this.handleChange,indicatorColor:"secondary",textColor:"secondary",variant:"scrollable",scrollButtons:"off",classes:{root:"h-64 w-full border-b-1"}},u.a.createElement(m.V,{classes:{root:"h-64"},label:"Profile"}),u.a.createElement(m.V,{classes:{root:"h-64"},label:"Labels"}),u.a.createElement(m.V,{classes:{root:"h-64"},label:"Floor Plans"}),u.a.createElement(m.V,{classes:{root:"h-64"},label:"Friends"})),content:u.a.createElement("div",{className:"p-16 sm:p-24"},0===t&&u.a.createElement(E,null),1===t&&u.a.createElement(C.default,null),2===t&&u.a.createElement(v.default,null),3===t&&u.a.createElement(g.default,null))})}}]),t}(i.Component);t.default=Object(d.withStyles)(function(e){return{layoutHeader:Object(s.a)({height:150,minHeight:150},e.breakpoints.down("md"),{height:240,minHeight:240})}},{withTheme:!0})(O)},741:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(8),c=a(13),l=a(12),o=a(14),s=a(0),i=a.n(s),u=a(43),m=a(10),d=a(22),p=a(93),f=a(23),b=a(172),h=a(6),E=a(1),C=a(491),g=a(38),v=a.n(g),O="[CONTACTS APP] GET USER DATA";function y(){var e=v.a.get("/api/contacts-app/user");return function(t){return e.then(function(e){return t({type:O,payload:e.data})})}}var T=a(64),N="[CONTACTS APP] GET CONTACTS",A="[CONTACTS APP] SET SEARCH TEXT",S="[CONTACTS APP] TOGGLE IN SELECTED CONTACTS",j="[CONTACTS APP] SELECT ALL CONTACTS",P="[CONTACTS APP] DESELECT ALL CONTACTS",D="[CONTACTS APP] OPEN NEW CONTACT DIALOG",x="[CONTACTS APP] CLOSE NEW CONTACT DIALOG",w="[CONTACTS APP] OPEN EDIT CONTACT DIALOG",I="[CONTACTS APP] CLOSE EDIT CONTACT DIALOG",L="[CONTACTS APP] ADD CONTACT",_="[CONTACTS APP] UPDATE CONTACT",k="[CONTACTS APP] REMOVE CONTACTS",M="[CONTACTS APP] TOGGLE STARRED CONTACT",R="[CONTACTS APP] TOGGLE STARRED CONTACTS",U="[CONTACTS APP] SET CONTACTS STARRED ",F="[CONTACTS APP] OPEN CONFIRM DIALOG",H="[CONTACTS APP] CLOSE CONFIRM DIALOG";function G(e){var t=v.a.get(T.a.baseUrl+"/admin/users/"+e+"/");return function(e){return t.then(function(t){e({type:N,payload:t.data.floorplans})})}}function W(e){return{type:S,contactId:e}}function B(){return{type:j}}function V(){return{type:P}}function q(){return{type:D}}function z(){return{type:x}}function X(e){return{type:F,data:e}}function J(){return{type:H}}function Y(e){return{type:w,data:e}}function K(){return{type:I}}function Q(e){return function(t,a){var n=a().contactsApp.contacts.routeParams;return v.a.post("/api/contacts-app/add-contact",{newContact:e}).then(function(e){return Promise.all([t({type:L})]).then(function(){return t(G(n))})})}}function Z(e){return function(t,a){var n=a().contactsApp.contacts.routeParams;return v.a.post("/api/contacts-app/update-contact",{contact:e}).then(function(e){return Promise.all([t({type:_})]).then(function(){return t(G(n))})})}}function $(e){return function(t,a){var n=a().contactsApp.contacts.routeParams;return v.a.post("/api/contacts-app/remove-contacts",{contactIds:e}).then(function(e){return Promise.all([t({type:k}),t({type:P})]).then(function(){return t(G(n))})})}}function ee(e){return function(t,a){var n=a().contactsApp.contacts.routeParams;return v.a.post("/api/contacts-app/toggle-starred-contact",{contactId:e}).then(function(e){return Promise.all([t({type:M}),t(y())]).then(function(){return t(G(n))})})}}function te(e){return function(t,a){var n=a().contactsApp.contacts.routeParams;return v.a.post("/api/contacts-app/toggle-starred-contacts",{contactIds:e}).then(function(e){return Promise.all([t({type:R}),t({type:P}),t(y())]).then(function(){return t(G(n))})})}}function ae(e){return function(t,a){var n=a().contactsApp.contacts.routeParams;return v.a.post("/api/contacts-app/set-contacts-starred",{contactIds:e}).then(function(e){return Promise.all([t({type:U}),t({type:P}),t(y())]).then(function(){return t(G(n))})})}}function ne(e){return function(t,a){var n=a().contactsApp.contacts.routeParams;return v.a.post("/api/contacts-app/set-contacts-unstarred",{contactIds:e}).then(function(e){return Promise.all([t({type:U}),t({type:P}),t(y())]).then(function(){return t(G(n))})})}}var re=a(1739),ce=a(65),le=a.n(ce),oe=a(249),se=a.n(oe),ie=a(250),ue=a.n(ie),me=a(251),de=a.n(me),pe=a(253),fe=a.n(pe),be=a(252),he=a.n(be),Ee=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={open:!1},a.handleClickOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a.removeContact=function(e){var t=localStorage.getItem("item_id");v.a.delete(T.a.baseUrl+"/admin/users/"+t+"/floorplans/"+e+"/").then(function(e){return a.ReturnMainPage()})},a.ReturnMainPage=function(){var e=a.props,t=e.history,n=e.page;t.push({pathname:"/app/pages/profile",page:n}),a.props.closeConfirmDialog()},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.closeConfirmDialog,n=t.confirmDialog;return i.a.createElement(se.a,{open:n.props.open,onClose:this.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},i.a.createElement(he.a,{id:"alert-dialog-title"},"Permanently delete?"),i.a.createElement(de.a,null,i.a.createElement(fe.a,{id:"alert-dialog-description"},"Please note that it will delete all the user data.")),i.a.createElement(ue.a,null,i.a.createElement(le.a,{onClick:function(){e.removeContact(n.user_id)},color:"primary"},"Agree"),i.a.createElement(le.a,{onClick:function(){a()},color:"primary",autoFocus:!0},"Disagree")))}}]),t}(i.a.Component);var Ce=Object(f.b)(function(e){var t=e.floorplansApp;return{confirmDialog:t.contacts.confirmDialog,page:t.contacts.page}},function(e){return Object(d.c)({closeEditContactDialog:K,closeNewContactDialog:z,addContact:Q,updateContact:Z,closeConfirmDialog:J},e)})(Ee),ge=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={selectedContactsMenu:null},a.getFilteredArray=function(e,t){var a=Object.keys(e).map(function(t){return e[t]});return 0===t.length?a:m.t.filterArrayByString(a,t)},a.openSelectedContactMenu=function(e){a.setState({selectedContactsMenu:e.currentTarget})},a.closeSelectedContactsMenu=function(){a.setState({selectedContactsMenu:null})},a.dateFormat=function(e){var t=new Date(e);return t=t.getMonth()+1+"/"+t.getDate()+"/"+t.getFullYear()+" "+(t.getHours()>12?t.getHours()-12:t.getHours())+":"+t.getMinutes()+" "+(t.getHours()>=12?"PM":"AM"),i.a.createElement("div",null,t)},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.contacts,n=t.searchText,r=t.selectedContactIds,c=t.openEditContactDialog,l=t.removeContacts,o=t.confirmDialog,s=(t.removeContact,t.setContactsUnstarred),u=t.setContactsStarred,d=this.getFilteredArray(a,n),p=this.state.selectedContactsMenu;return d||0!==d.length?i.a.createElement(m.b,{animation:"transition.slideUpIn",delay:300},i.a.createElement(C.b,{className:"-striped -highlight border-0",getTrProps:function(e,t,a){return{className:"cursor-pointer",onClick:function(e,a){t&&c(t.original)}}},data:d,columns:[{Header:"No",accessor:"",Cell:function(e){return e.index+1},width:64,filterable:!1,className:"justify-center"},{Header:function(){return r.length>0&&i.a.createElement(i.a.Fragment,null,i.a.createElement(E.x,{"aria-owns":p?"selectedContactsMenu":null,"aria-haspopup":"true",onClick:e.openSelectedContactMenu},i.a.createElement(E.w,null,"more_horiz")),i.a.createElement(E.H,{id:"selectedContactsMenu",anchorEl:p,open:Boolean(p),onClose:e.closeSelectedContactsMenu},i.a.createElement(E.J,null,i.a.createElement(E.I,{onClick:function(){l(r),e.closeSelectedContactsMenu()}},i.a.createElement(E.E,null,i.a.createElement(E.w,null,"delete")),i.a.createElement(E.F,{inset:!0,primary:"Remove"})),i.a.createElement(E.I,{onClick:function(){u(r),e.closeSelectedContactsMenu()}},i.a.createElement(E.E,null,i.a.createElement(E.w,null,"star")),i.a.createElement(E.F,{inset:!0,primary:"Starred"})),i.a.createElement(E.I,{onClick:function(){s(r),e.closeSelectedContactsMenu()}},i.a.createElement(E.E,null,i.a.createElement(E.w,null,"star_border")),i.a.createElement(E.F,{inset:!0,primary:"Unstarred"})))))},accessor:"thumbnail",Cell:function(e){return i.a.createElement(E.b,{className:"mr-8",alt:e.original.name,src:e.value,style:{borderRadius:0}})},className:"justify-center",width:64,sortable:!1},{Header:"Name",accessor:"name",filterable:!1},{Header:"Created at",accessor:"created_at",filterable:!1,Cell:function(t){return e.dateFormat(t.value)}},{Header:"Tags",accessor:"tags",Cell:function(e){return i.a.createElement(re.a,{data:e.value,isEdit:!1})},filterable:!1,sortable:!1},{Header:"",width:64,className:"justify-center",Cell:function(e){return i.a.createElement("div",{className:"flex items-center"},i.a.createElement(E.x,{onClick:function(t){t.stopPropagation(),o(e.original.id)}},i.a.createElement(E.w,null,"delete")))}}],defaultPageSize:10,noDataText:"No contacts found"})):i.a.createElement("div",{className:"flex items-center justify-center h-full"},i.a.createElement(E.ab,{color:"textSecondary",variant:"h5"},"There are no contacts!"))}}]),t}(s.Component);var ve=Object(p.g)(Object(f.b)(function(e){var t=e.floorplansApp;return{contacts:t.contacts.entities,selectedContactIds:t.contacts.selectedContactIds,searchText:t.contacts.searchText,user:t.user}},function(e){return Object(d.c)({getContacts:G,getUserData:y,toggleInSelectedContacts:W,selectAllContacts:B,deSelectAllContacts:V,openEditContactDialog:Y,removeContacts:$,toggleStarredContact:ee,toggleStarredContacts:te,setContactsStarred:ae,setContactsUnstarred:ne,confirmDialog:X},e)})(ge)),Oe=a(16),ye={id:"",name:"",lastName:"",avatar:"assets/images/avatars/profile.jpg",nickname:"",company:"",jobTitle:"",email:"",phone:"",address:"",birthday:"",notes:""},Te=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state=Object(Oe.a)({},ye,{disableEdit:!0}),a.handleChange=function(e){a.setState(h.a.set(Object(Oe.a)({},a.state),e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value))},a.closeComposeDialog=function(){"edit"===a.props.contactDialog.type?a.props.closeEditContactDialog():a.props.closeNewContactDialog()},a.edit=function(){a.setState({disableEdit:!1})},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){!e.contactDialog.props.open&&this.props.contactDialog.props.open&&("edit"===this.props.contactDialog.type&&this.props.contactDialog.data&&!h.a.isEqual(this.props.contactDialog.data,t)&&this.setState(Object(Oe.a)({},this.props.contactDialog.data,{disableEdit:!0})),"new"!==this.props.contactDialog.type||h.a.isEqual(ye,t)||this.setState(Object(Oe.a)({},ye)))}},{key:"canBeSubmitted",value:function(){return this.state.name.length>0}},{key:"render",value:function(){var e=this.props,t=e.contactDialog;e.addContact;return i.a.createElement(E.j,Object.assign({classes:{paper:"m-24"}},t.props,{onClose:this.closeComposeDialog,fullWidth:!0,maxWidth:"xs"}),i.a.createElement(E.a,{position:"static",elevation:1},i.a.createElement("div",{className:"flex flex-col items-center justify-center pb-20 pt-16"},"edit"===t.type&&i.a.createElement(E.ab,{variant:"h6",color:"inherit",className:"pt-8"},this.state.name))),i.a.createElement(E.l,{classes:{root:"p-24"}},i.a.createElement("div",{className:"flex"},i.a.createElement(E.X,{disabled:this.state.disableEdit,className:"mb-16",label:"Name",autoFocus:!0,id:"name",name:"name",value:this.state.name,variant:"outlined",required:!0,fullWidth:!0})),i.a.createElement("div",{className:"flex mb-24"},i.a.createElement("fieldset",{style:{border:"1px solid #c4c4c4",borderRadius:4,width:312}},i.a.createElement("legend",{style:{color:"#757575",marginLeft:10,fontSize:12}},"Tags"),i.a.createElement("div",null,i.a.createElement(re.a,{data:this.state.tags,isEdit:!1})))),i.a.createElement("div",{className:"flex"},i.a.createElement(E.X,{disabled:this.state.disableEdit,className:"mb-24",label:"Created by",id:"created_by",name:"created_by",value:this.state.id,variant:"outlined",fullWidth:!0})),i.a.createElement("div",{className:"flex"},i.a.createElement(E.X,{disabled:this.state.disableEdit,className:"mb-24",label:"Location",id:"address",name:"address",value:"this.state.location",variant:"outlined",fullWidth:!0}))))}}]),t}(s.Component);var Ne=Object(f.b)(function(e){return{contactDialog:e.floorplansApp.contacts.contactDialog}},function(e){return Object(d.c)({closeEditContactDialog:K,closeNewContactDialog:z,addContact:Q,updateContact:Z},e)})(Te),Ae=a(24),Se={entities:[],page:{},totalPage:"",searchText:"",selectedContactIds:[],routeParams:{},contactDialog:{type:"new",props:{open:!1},data:null},confirmDialog:{props:{open:!1},user_id:null}},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(Oe.a)({},e,{entities:t.payload,routeParams:t.routeParams,page:t.params,totalPage:t.totalPage});case A:return Object(Oe.a)({},e,{searchText:t.searchText});case S:var a=t.contactId,n=Object(Ae.a)(e.selectedContactIds);return n=void 0!==n.find(function(e){return e===a})?n.filter(function(e){return e!==a}):Object(Ae.a)(n).concat([a]),Object(Oe.a)({},e,{selectedContactIds:n});case j:var r=Object.keys(e.entities).map(function(t){return e.entities[t]}).map(function(e){return e.id});return Object(Oe.a)({},e,{selectedContactIds:r});case P:return Object(Oe.a)({},e,{selectedContactIds:[]});case D:return Object(Oe.a)({},e,{contactDialog:{type:"new",props:{open:!0},data:null}});case x:return Object(Oe.a)({},e,{contactDialog:{type:"new",props:{open:!1},data:null}});case w:return Object(Oe.a)({},e,{contactDialog:{type:"edit",props:{open:!0},data:t.data}});case I:return Object(Oe.a)({},e,{contactDialog:{type:"edit",props:{open:!1},data:null}});case F:return Object(Oe.a)({},e,{confirmDialog:{props:{open:!0},user_id:t.data}});case H:return Object(Oe.a)({},e,{confirmDialog:{props:{open:!1},user_id:null}});default:return e}},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return t.payload;default:return e}},De=Object(d.d)({contacts:je,user:Pe}),xe=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("item_id");this.props.getContacts(e),this.props.getUserData()}},{key:"componentDidUpdate",value:function(e,t){if(!h.a.isEqual(this.props.location,e.location)){var a=localStorage.getItem("item_id");this.props.getContacts(a)}}},{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.m,{classes:{contentCardWrapper:"p-16 sm:p-24 pb-80",leftSidebar:"w-256 border-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},content:i.a.createElement(ve,null),sidebarInner:!0,onRef:function(t){e.pageLayout=t},innerScroll:!0}),i.a.createElement(Ne,null),i.a.createElement(Ce,{history:this.props.history}))}}]),t}(s.Component);t.default=Object(b.a)("floorplansApp",De)(Object(u.withStyles)(function(e){return{addButton:{position:"absolute",right:12,bottom:12,zIndex:99}}},{withTheme:!0})(Object(p.g)(Object(f.b)(function(e){var t=e.floorplansApp;return{contacts:t.contacts.entities,selectedContactIds:t.contacts.selectedContactIds,searchText:t.contacts.searchText,user:t.user}},function(e){return Object(d.c)({getContacts:G,getUserData:y,openNewContactDialog:q},e)})(xe))))}}]);