(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4697e636"],{"8db2":function(t,e){t.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},primaryKey:{type:[Number,String],default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null},width:{type:String,default:null,validator(t){return["half","half-left","half-right","full","fill"].includes(t)}}}}},"91e0":function(t,e,l){"use strict";l.r(e);var n=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"buttons no-wrap"},t._l(t.displayValue,(function(e){return l("v-tag",{key:e},[t._v(" "+t._s(e)+" ")])})),1)},u=[],a=(l("d81d"),l("ac1f"),l("1276"),l("8db2")),i=l.n(a),r={mixins:[i.a],computed:{displayValue:function(){var t=this;if(!this.value)return"";var e="array"===this.type?this.value:this.value.split(",");return this.options.wrap&&(e.pop(),e.shift()),this.options.format&&(e=e.map((function(e){return t.$helpers.formatTitle(e)}))),e}}},p=r,o=(l("c6ac"),l("2877")),f=Object(o["a"])(p,n,u,!1,null,"d8f95400",null);e["default"]=f.exports},c6ac:function(t,e,l){"use strict";var n=l("f683"),u=l.n(n);u.a},f683:function(t,e,l){}}]);
//# sourceMappingURL=chunk-4697e636.bc7c4bea.js.map