import{G as Ne,s as f,A as je,B as He,D as Ke,C as Ge,Y as We,F as pe,H as Xe,J as Be,I as Je,e as _,K as Qe,L as Ye,Z as U,V as Ze,$ as et,M as tt,a0 as it,a1 as ve,a2 as he,a3 as ge,R as be,a4 as ke,S as $,Q as nt,a5 as lt,o as S,W as j,j as o,w as s,i,a6 as J,h as K,a7 as at,a8 as ot,a9 as ut,g as se,p as dt,f as oe,l as H,k as rt,X as ye,q as st,v as ct,N as X}from"./index-cfa27ed4.js";import{_ as mt}from"./CommonPage-4f39ed42.js";import{_ as ft}from"./QueryItem-d17f875d.js";import{_ as pt}from"./CrudModal-388e823f.js";import{_ as vt}from"./CrudTable-f7b664e6.js";import{u as ht,N as D}from"./Input-9d39db42.js";import{u as gt}from"./useCRUD-d1880a98.js";import{A as bt}from"./Add-54f78e8b.js";import{N as ue}from"./Switch-9d78124c.js";import{N as kt,a as B}from"./FormItem-0c6ab39e.js";import{N as yt,a as we}from"./RadioGroup-3711a790.js";import{b as wt}from"./Space-c006c775.js";import{N as xt}from"./Popconfirm-c434d7b3.js";import"./AppPage-a5c29498.js";import"./Checkbox-13b79107.js";import"./Forward-d629ea4a.js";import"./get-slot-1efb97e5.js";const _t=Ne({name:"Remove",render(){return f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},f("line",{x1:"400",y1:"256",x2:"112",y2:"256",style:`
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      `}))}}),It=t=>{const{textColorDisabled:c}=t;return{iconColorDisabled:c}},Vt=je({name:"InputNumber",common:He,peers:{Button:Ke,Input:Ge},self:It}),Nt=Vt;function Bt(t){return t==null||typeof t=="string"&&t.trim()===""?null:Number(t)}function Rt(t){return t.includes(".")&&(/^(-)?\d+.*(\.|0)$/.test(t)||/^\.\d+$/.test(t))}function de(t){return t==null?!0:!Number.isNaN(t)}function xe(t,c){return t==null?"":c===void 0?String(t):t.toFixed(c)}function re(t){if(t===null)return null;if(typeof t=="number")return t;{const c=Number(t);return Number.isNaN(c)?null:c}}const Mt=We([pe("input-number-suffix",`
 display: inline-block;
 margin-right: 10px;
 `),pe("input-number-prefix",`
 display: inline-block;
 margin-left: 10px;
 `)]),_e=800,Ie=100,St=Object.assign(Object.assign({},Be.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},buttonPlacement:{type:String,default:"right"},readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},parse:Function,format:Function,precision:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]}),Ct=Ne({name:"InputNumber",props:St,setup(t){const{mergedBorderedRef:c,mergedClsPrefixRef:g,mergedRtlRef:h}=Xe(t),m=Be("InputNumber","-input-number",Mt,Nt,t,g),{localeRef:b}=ht("InputNumber"),I=Je(t),{mergedSizeRef:F,mergedDisabledRef:y,mergedStatusRef:T}=I,v=_(null),d=_(null),A=_(null),R=_(t.defaultValue),Q=Qe(t,"value"),k=Ye(Q,R),V=_(""),l=e=>{const n=String(e).split(".")[1];return n?n.length:0},u=e=>{const n=[t.min,t.max,t.step,e].map(a=>a===void 0?0:l(a));return Math.max(...n)},r=U(()=>{const{placeholder:e}=t;return e!==void 0?e:b.value.placeholder}),C=U(()=>{const e=re(t.step);return e!==null?e===0?1:Math.abs(e):1}),ce=U(()=>{const e=re(t.min);return e!==null?e:null}),me=U(()=>{const e=re(t.max);return e!==null?e:null}),z=e=>{const{value:n}=k;if(e===n){P();return}const{"onUpdate:value":a,onUpdateValue:p,onChange:x}=t,{nTriggerFormInput:N,nTriggerFormChange:O}=I;x&&$(x,e),p&&$(p,e),a&&$(a,e),R.value=e,N(),O()},w=({offset:e,doUpdateIfValid:n,fixPrecision:a,isInputing:p})=>{const{value:x}=V;if(p&&Rt(x))return!1;const N=(t.parse||Bt)(x);if(N===null)return n&&z(null),null;if(de(N)){const O=l(N),{precision:q}=t;if(q!==void 0&&q<O&&!a)return!1;let M=parseFloat((N+e).toFixed(q??u(N)));if(de(M)){const{value:le}=me,{value:ae}=ce;if(le!==null&&M>le){if(!n||p)return!1;M=le}if(ae!==null&&M<ae){if(!n||p)return!1;M=ae}return t.validator&&!t.validator(M)?!1:(n&&z(M),M)}}return!1},P=()=>{const{value:e}=k;if(de(e)){const{format:n,precision:a}=t;n?V.value=n(e):e===null||a===void 0||l(e)>a?V.value=xe(e,void 0):V.value=xe(e,a)}else V.value=String(e)};P();const Re=U(()=>w({offset:0,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})===!1),Y=U(()=>{const{value:e}=k;if(t.validator&&e===null)return!1;const{value:n}=C;return w({offset:-n,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1}),Z=U(()=>{const{value:e}=k;if(t.validator&&e===null)return!1;const{value:n}=C;return w({offset:+n,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1});function Me(e){const{onFocus:n}=t,{nTriggerFormFocus:a}=I;n&&$(n,e),a()}function Se(e){var n,a;if(e.target===((n=v.value)===null||n===void 0?void 0:n.wrapperElRef))return;const p=w({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});if(p!==!1){const O=(a=v.value)===null||a===void 0?void 0:a.inputElRef;O&&(O.value=String(p||"")),k.value===p&&P()}else P();const{onBlur:x}=t,{nTriggerFormBlur:N}=I;x&&$(x,e),N(),nt(()=>{P()})}function Ce(e){const{onClear:n}=t;n&&$(n,e)}function ee(){const{value:e}=Z;if(!e){ne();return}const{value:n}=k;if(n===null)t.validator||z(fe());else{const{value:a}=C;w({offset:a,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}function te(){const{value:e}=Y;if(!e){ie();return}const{value:n}=k;if(n===null)t.validator||z(fe());else{const{value:a}=C;w({offset:-a,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}const Ue=Me,De=Se;function fe(){if(t.validator)return null;const{value:e}=ce,{value:n}=me;return e!==null?Math.max(0,e):n!==null?Math.min(0,n):0}function Fe(e){Ce(e),z(null)}function Te(e){var n,a,p;!((n=A.value)===null||n===void 0)&&n.$el.contains(e.target)&&e.preventDefault(),!((a=d.value)===null||a===void 0)&&a.$el.contains(e.target)&&e.preventDefault(),(p=v.value)===null||p===void 0||p.activate()}let L=null,E=null,G=null;function ie(){G&&(window.clearTimeout(G),G=null),L&&(window.clearInterval(L),L=null)}function ne(){W&&(window.clearTimeout(W),W=null),E&&(window.clearInterval(E),E=null)}function Pe(){ie(),G=window.setTimeout(()=>{L=window.setInterval(()=>{te()},Ie)},_e),he("mouseup",document,ie,{once:!0})}let W=null;function Oe(){ne(),W=window.setTimeout(()=>{E=window.setInterval(()=>{ee()},Ie)},_e),he("mouseup",document,ne,{once:!0})}const $e=()=>{E||ee()},Ae=()=>{L||te()};function ze(e){var n,a;if(e.key==="Enter"){if(e.target===((n=v.value)===null||n===void 0?void 0:n.wrapperElRef))return;w({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&((a=v.value)===null||a===void 0||a.deactivate())}else if(e.key==="ArrowUp"){if(!Z.value||t.keyboard.ArrowUp===!1)return;e.preventDefault(),w({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&ee()}else if(e.key==="ArrowDown"){if(!Y.value||t.keyboard.ArrowDown===!1)return;e.preventDefault(),w({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&te()}}function Le(e){V.value=e,t.updateValueOnInput&&!t.format&&!t.parse&&t.precision===void 0&&w({offset:0,doUpdateIfValid:!0,isInputing:!0,fixPrecision:!1})}Ze(k,()=>{P()});const Ee={focus:()=>{var e;return(e=v.value)===null||e===void 0?void 0:e.focus()},blur:()=>{var e;return(e=v.value)===null||e===void 0?void 0:e.blur()},select:()=>{var e;return(e=v.value)===null||e===void 0?void 0:e.select()}},qe=et("InputNumber",h,g);return Object.assign(Object.assign({},Ee),{rtlEnabled:qe,inputInstRef:v,minusButtonInstRef:d,addButtonInstRef:A,mergedClsPrefix:g,mergedBordered:c,uncontrolledValue:R,mergedValue:k,mergedPlaceholder:r,displayedValueInvalid:Re,mergedSize:F,mergedDisabled:y,displayedValue:V,addable:Z,minusable:Y,mergedStatus:T,handleFocus:Ue,handleBlur:De,handleClear:Fe,handleMouseDown:Te,handleAddClick:$e,handleMinusClick:Ae,handleAddMousedown:Oe,handleMinusMousedown:Pe,handleKeyDown:ze,handleUpdateDisplayedValue:Le,mergedTheme:m,inputThemeOverrides:{paddingSmall:"0 8px 0 10px",paddingMedium:"0 8px 0 12px",paddingLarge:"0 8px 0 14px"},buttonThemeOverrides:tt(()=>{const{self:{iconColorDisabled:e}}=m.value,[n,a,p,x]=it(e);return{textColorTextDisabled:`rgb(${n}, ${a}, ${p})`,opacityDisabled:`${x}`}})})},render(){const{mergedClsPrefix:t,$slots:c}=this,g=()=>f(ke,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:"minusButtonInstRef"},{icon:()=>ge(c["minus-icon"],()=>[f(be,{clsPrefix:t},{default:()=>f(_t,null)})])}),h=()=>f(ke,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:"addButtonInstRef"},{icon:()=>ge(c["add-icon"],()=>[f(be,{clsPrefix:t},{default:()=>f(bt,null)})])});return f("div",{class:[`${t}-input-number`,this.rtlEnabled&&`${t}-input-number--rtl`]},f(D,{ref:"inputInstRef",autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,textDecoration:this.displayedValueInvalid?"line-through":void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,internalLoadingBeforeSuffix:!0},{prefix:()=>{var m;return this.showButton&&this.buttonPlacement==="both"?[g(),ve(c.prefix,b=>b?f("span",{class:`${t}-input-number-prefix`},b):null)]:(m=c.prefix)===null||m===void 0?void 0:m.call(c)},suffix:()=>{var m;return this.showButton?[ve(c.suffix,b=>b?f("span",{class:`${t}-input-number-suffix`},b):null),this.buttonPlacement==="right"?g():null,h()]:(m=c.suffix)===null||m===void 0?void 0:m.call(c)}}))}}),Ve=["mdi-air-humidifier-off","mdi-chili-off","mdi-cigar-off","mdi-clock-time-eight","mdi-clock-time-eight-outline","mdi-clock-time-eleven","mdi-clock-time-eleven-outline","mdi-clock-time-five","mdi-clock-time-five-outline","mdi-clock-time-four","mdi-clock-time-four-outline","mdi-clock-time-nine","mdi-clock-time-nine-outline","mdi-clock-time-one","mdi-clock-time-one-outline","mdi-clock-time-seven","mdi-clock-time-seven-outline","mdi-clock-time-six","mdi-clock-time-six-outline","mdi-clock-time-ten","mdi-clock-time-ten-outline","mdi-clock-time-three","mdi-clock-time-three-outline","mdi-clock-time-twelve","mdi-clock-time-twelve-outline","mdi-clock-time-two","mdi-clock-time-two-outline","mdi-cog-refresh","mdi-cog-refresh-outline","mdi-cog-sync","mdi-cog-sync-outline","mdi-content-save-cog","mdi-content-save-cog-outline","mdi-cosine-wave","mdi-cube-off","mdi-cube-off-outline","mdi-dome-light","mdi-download-box","mdi-download-box-outline","mdi-download-circle","mdi-download-circle-outline","mdi-fan-alert","mdi-fan-chevron-down","mdi-fan-chevron-up","mdi-fan-minus","mdi-fan-plus","mdi-fan-remove","mdi-fan-speed-1","mdi-fan-speed-2","mdi-fan-speed-3","mdi-food-drumstick","mdi-food-drumstick-off","mdi-food-drumstick-off-outline","mdi-food-drumstick-outline","mdi-food-steak","mdi-food-steak-off","mdi-fuse-alert","mdi-fuse-off","mdi-heart-minus","mdi-heart-minus-outline","mdi-heart-off-outline","mdi-heart-plus","mdi-heart-plus-outline","mdi-heart-remove","mdi-heart-remove-outline","mdi-hours-24","mdi-incognito-circle","mdi-incognito-circle-off","mdi-lingerie","mdi-microwave-off","mdi-minus-circle-off","mdi-minus-circle-off-outline","mdi-motion-sensor-off","mdi-pail-minus","mdi-pail-minus-outline","mdi-pail-off","mdi-pail-off-outline","mdi-pail-outline","mdi-pail-plus","mdi-pail-plus-outline","mdi-pail-remove","mdi-pail-remove-outline","mdi-pine-tree-fire","mdi-power-plug-off-outline","mdi-power-plug-outline","mdi-printer-eye","mdi-printer-search","mdi-puzzle-check","mdi-puzzle-check-outline","mdi-rug","mdi-sawtooth-wave","mdi-set-square","mdi-smoking-pipe-off","mdi-spoon-sugar","mdi-square-wave","mdi-table-split-cell","mdi-ticket-percent-outline","mdi-triangle-wave","mdi-waveform","mdi-wizard-hat","mdi-ab-testing","mdi-abjad-arabic","mdi-abjad-hebrew","mdi-abugida-devanagari","mdi-abugida-thai","mdi-access-point","mdi-access-point-network","mdi-access-point-network-off","mdi-account","mdi-account-alert","mdi-account-alert-outline","mdi-account-arrow-left","mdi-account-arrow-left-outline","mdi-account-arrow-right","mdi-account-arrow-right-outline","mdi-account-box","mdi-account-box-multiple","mdi-account-box-multiple-outline","mdi-account-box-outline","mdi-account-cancel","mdi-account-cancel-outline","mdi-account-cash","mdi-account-cash-outline","mdi-account-check","mdi-account-check-outline","mdi-account-child","mdi-account-child-circle","mdi-account-child-outline","mdi-account-circle","mdi-account-circle-outline","mdi-account-clock","mdi-account-clock-outline","mdi-account-cog","mdi-account-cog-outline","mdi-account-convert","mdi-account-convert-outline","mdi-account-cowboy-hat","mdi-account-details","mdi-account-details-outline","mdi-account-edit","mdi-account-edit-outline","mdi-account-group","mdi-account-group-outline","mdi-account-hard-hat","mdi-account-heart","mdi-account-heart-outline","mdi-account-key","mdi-account-key-outline","mdi-account-lock","mdi-account-lock-outline","mdi-account-minus","mdi-account-minus-outline","mdi-account-multiple","mdi-account-multiple-check","mdi-account-multiple-check-outline","mdi-account-multiple-minus","mdi-account-multiple-minus-outline","mdi-account-multiple-outline","mdi-account-multiple-plus","mdi-account-multiple-plus-outline","mdi-account-multiple-remove","mdi-account-multiple-remove-outline","mdi-account-music","mdi-account-music-outline","mdi-account-network","mdi-account-network-outline","mdi-account-off","mdi-account-off-outline","mdi-account-outline","mdi-account-plus","mdi-account-plus-outline","mdi-account-question","mdi-account-question-outline","mdi-account-remove","mdi-account-remove-outline","mdi-account-search","mdi-account-search-outline","mdi-account-settings","mdi-account-settings-outline","mdi-account-star","mdi-account-star-outline","mdi-account-supervisor","mdi-account-supervisor-circle","mdi-account-supervisor-outline","mdi-account-switch","mdi-account-switch-outline","mdi-account-tie","mdi-account-tie-outline","mdi-account-tie-voice","mdi-account-tie-voice-off","mdi-account-tie-voice-off-outline","mdi-account-tie-voice-outline","mdi-account-voice","mdi-adjust","mdi-adobe","mdi-adobe-acrobat","mdi-air-conditioner","mdi-air-filter","mdi-air-horn","mdi-air-humidifier","mdi-air-purifier","mdi-airbag","mdi-airballoon","mdi-airballoon-outline","mdi-airplane","mdi-airplane-landing","mdi-airplane-off","mdi-airplane-takeoff","mdi-airport","mdi-alarm","mdi-alarm-bell","mdi-alarm-check","mdi-alarm-light","mdi-alarm-light-outline","mdi-alarm-multiple","mdi-alarm-note","mdi-alarm-note-off","mdi-alarm-off","mdi-alarm-plus","mdi-alarm-snooze","mdi-album","mdi-alert","mdi-alert-box","mdi-alert-box-outline","mdi-alert-circle","mdi-alert-circle-check","mdi-alert-circle-check-outline","mdi-alert-circle-outline"],Ut={class:"w-full"},Dt=se("span",{class:"i-mdi:magnify text-18"},null,-1),Ft=se("a",{class:"text-blue",target:"_blank",href:"https://icones.js.org/collection/all"}," Icones ",-1),Tt={key:0,class:"h-150 w-300 overflow-y-scroll"},Pt=["onClick"],Ot={key:1},$t={__name:"IconPicker",props:{value:String},emits:["update:value"],setup(t,{emit:c}){const g=t,h=c,m=_(g.value),b=_(Ve.filter(y=>y.includes(m.value)));function I(){b.value=Ve.filter(y=>y.includes(m.value))}function F(y){m.value=y,h("update:value",m.value)}return lt(m,()=>{I(),h("update:value",m.value)},{debounce:500}),(y,T)=>(S(),j("div",Ut,[o(i(ut),{trigger:"click",placement:"bottom-start"},{trigger:s(()=>[o(i(D),{value:m.value,"onUpdate:value":[T[0]||(T[0]=v=>m.value=v),I],placeholder:"请输入图标名称"},{prefix:s(()=>[Dt]),suffix:s(()=>[o(J,{icon:m.value,size:18},null,8,["icon"])]),_:1},8,["value"])]),footer:s(()=>[K(" 更多图标去 "),Ft,K(" 查看 ")]),default:s(()=>[b.value.length?(S(),j("ul",Tt,[(S(!0),j(at,null,ot(b.value,(v,d)=>(S(),j("li",{key:d,class:"mx-5 inline-block cursor-pointer hover:text-cyan",onClick:A=>F(v)},[o(J,{icon:v,size:18},null,8,["icon"])],8,Pt))),128))])):(S(),j("div",Ot,[o(J,{icon:m.value,size:18},null,8,["icon"])]))]),_:1})]))}},At=se("span",{class:"i-material-symbols:add"},null,-1),ni=Object.assign({name:"菜单管理"},{__name:"index",setup(t){const c=_(null),g=_({keyword:""}),h={order_num:1,is_hidden:0},{modalVisible:m,modalTitle:b,modalLoading:I,handleAdd:F,handleDelete:y,handleEdit:T,handleSave:v,modalForm:d,modalFormRef:A}=gt({name:"菜单",initForm:h,doCreate:H.saveOrUpdateMenu,doDelete:H.deleteMenu,doUpdate:H.saveOrUpdateMenu,refresh:()=>{var l;return(l=c.value)==null?void 0:l.handleSearch()}});dt(()=>{var l;(l=c.value)==null||l.handleSearch()});const R=_(!1),Q=[{title:"菜单名称",key:"name",width:80,ellipsis:{tooltip:!0}},{title:"图标",key:"icon",width:30,render(l){return f(J,{icon:l.icon,size:20})}},{title:"排序",key:"order_num",width:30,ellipsis:{tooltip:!0}},{title:"访问路径",key:"path",width:60,ellipsis:{tooltip:!0}},{title:"跳转路径",key:"redirect",width:80,ellipsis:{tooltip:!0}},{title:"组件路径",key:"component",width:80,ellipsis:{tooltip:!0}},{title:"保活",key:"keep_alive",width:30,fixed:"left",render(l){return f("span",l.keep_alive===1)}},{title:"隐藏",key:"is_hidden",width:30,fixed:"left",render(l){return f(ue,{size:"small",rubberBand:!1,value:l.is_hidden,loading:!!l.publishing,checkedValue:1,uncheckedValue:0,onUpdateValue:()=>k(l)})}},{title:"创建日期",key:"created_at",width:70,render(l){return f("span",ct(l.created_at))}},{title:"操作",key:"actions",width:115,align:"center",fixed:"right",render(l){return[f(X,{size:"tiny",quaternary:!0,type:"primary",style:`display: ${l.children?"":"none"};`,onClick:()=>{h.is_catalogue=!1,h.component="",h.parent_id=l.id,R.value=!1,F()}},{default:()=>"新增",icon:()=>f("i",{class:"i-material-symbols:add"})}),f(X,{size:"tiny",quaternary:!0,type:"info",onClick:()=>{R.value=!1,T(l)}},{default:()=>"编辑",icon:()=>f("i",{class:"i-material-symbols:edit-outline"})}),f(xt,{onPositiveClick:()=>y(l.id,!1)},{trigger:()=>f(X,{size:"tiny",quaternary:!0,type:"error"},{default:()=>"删除",icon:()=>f("i",{class:"i-material-symbols:delete-outline"})}),default:()=>f("div",{},"确定删除该菜单吗?")})]}}];async function k(l){l.id&&(l.publishing=!0,l.is_hidden=l.is_hidden===0?1:0,await H.saveOrUpdateMenu(l),l.publishing=!1,$message==null||$message.success(l.is_hidden?"已隐藏":"已取消隐藏"))}function V(){R.value=!0,h.is_catalogue=!0,h.component="Layout",h.parent_id=0,F()}return(l,u)=>(S(),oe(mt,{title:"菜单管理"},{action:s(()=>[o(i(X),{type:"primary",onClick:V},{icon:s(()=>[At]),default:s(()=>[K(" 新建菜单 ")]),_:1})]),default:s(()=>[o(vt,{ref_key:"$table",ref:c,"query-items":g.value,"onUpdate:queryItems":u[2]||(u[2]=r=>g.value=r),"is-pagination":!1,columns:Q,"get-data":i(H).getMenus,"single-line":!0},{queryBar:s(()=>[o(ft,{label:"菜单名","label-width":50},{default:s(()=>[o(i(D),{value:g.value.keyword,"onUpdate:value":u[0]||(u[0]=r=>g.value.keyword=r),clearable:"",type:"text",placeholder:"请输入菜单名",onKeydown:u[1]||(u[1]=rt(r=>{var C;return(C=c.value)==null?void 0:C.handleSearch()},["enter"]))},null,8,["value"])]),_:1})]),_:1},8,["query-items","get-data"]),o(pt,{visible:i(m),"onUpdate:visible":u[12]||(u[12]=r=>st(m)?m.value=r:null),title:i(b),loading:i(I),onSave:i(v)},{default:s(()=>[o(i(kt),{ref_key:"modalFormRef",ref:A,"label-placement":"left","label-align":"left","label-width":80,model:i(d)},{default:s(()=>[R.value?(S(),oe(i(B),{key:0,label:"菜单类型",path:"type"},{default:s(()=>[o(i(yt),{value:i(d).is_catalogue,"onUpdate:value":u[3]||(u[3]=r=>i(d).is_catalogue=r),name:"radiogroup"},{default:s(()=>[o(i(wt),null,{default:s(()=>[o(i(we),{value:!0},{default:s(()=>[K(" 目录 ")]),_:1}),o(i(we),{value:!1},{default:s(()=>[K(" 一级菜单 ")]),_:1})]),_:1})]),_:1},8,["value"])]),_:1})):ye("",!0),o(i(B),{label:"菜单名称",path:"name"},{default:s(()=>[o(i(D),{value:i(d).name,"onUpdate:value":u[4]||(u[4]=r=>i(d).name=r),placeholder:"请输入菜单名称"},null,8,["value"])]),_:1}),o(i(B),{label:"菜单图标",path:"icon"},{default:s(()=>[o($t,{value:i(d).icon,"onUpdate:value":u[5]||(u[5]=r=>i(d).icon=r)},null,8,["value"])]),_:1}),i(d).is_catalogue?ye("",!0):(S(),oe(i(B),{key:1,label:"组件路径",path:"component"},{default:s(()=>[o(i(D),{value:i(d).component,"onUpdate:value":u[6]||(u[6]=r=>i(d).component=r),placeholder:"请输入组件路径"},null,8,["value"])]),_:1})),o(i(B),{label:"访问路径",path:"path"},{default:s(()=>[o(i(D),{value:i(d).path,"onUpdate:value":u[7]||(u[7]=r=>i(d).path=r),placeholder:"请输入访问路径"},null,8,["value"])]),_:1}),o(i(B),{label:"跳转路径",path:"redirect"},{default:s(()=>[o(i(D),{value:i(d).redirect,"onUpdate:value":u[8]||(u[8]=r=>i(d).redirect=r),disabled:i(d).parent_id!==0,placeholder:"只有一级菜单可以设置跳转路径"},null,8,["value","disabled"])]),_:1}),o(i(B),{label:"显示排序",path:"order_num"},{default:s(()=>[o(i(Ct),{value:i(d).order_num,"onUpdate:value":u[9]||(u[9]=r=>i(d).order_num=r)},null,8,["value"])]),_:1}),o(i(B),{label:"是否隐藏",path:"is_hidden"},{default:s(()=>[o(i(ue),{value:i(d).is_hidden,"onUpdate:value":u[10]||(u[10]=r=>i(d).is_hidden=r),"checked-value":1,"unchecked-value":0},null,8,["value"])]),_:1}),o(i(B),{label:"KeepAlive",path:"keep_alive"},{default:s(()=>[o(i(ue),{value:i(d).keep_alive,"onUpdate:value":u[11]||(u[11]=r=>i(d).keep_alive=r),"checked-value":1,"unchecked-value":0},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible","title","loading","onSave"])]),_:1}))}});export{ni as default};