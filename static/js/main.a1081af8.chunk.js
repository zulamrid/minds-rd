(this["webpackJsonpminds-rd"]=this["webpackJsonpminds-rd"]||[]).push([[0],{105:function(e,t,n){},106:function(e,t,n){},213:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(35),r=n.n(i),s=(n(99),n.p,n(63),n(8)),o=n(40),l=n(89),u=n(6),d=n(23),j=n(5),b={buttons:[],shapes:[],image:"",selected:"",image_shape:"",selected_shape:"",item:""},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_BUTTON":return Object(j.a)(Object(j.a)({},e),{},{buttons:[].concat(Object(d.a)(e.buttons),[t.payload])});case"UPDATE_BUTTON":return Object(j.a)(Object(j.a)({},e),{},{buttons:e.buttons.map((function(e,n){return e.id===t.payload.index.id?Object(j.a)(Object(j.a)({},e),t.payload.value):e}))});case"UPDATE_DETAIL":return Object(j.a)(Object(j.a)({},e),{},{buttons:e.buttons.map((function(e,n){return e.id===t.payload.id?Object(j.a)(Object(j.a)({},e),{},Object(u.a)({},t.payload.key,t.payload.value)):e}))});case"DELETE_BUTTON":return Object(j.a)(Object(j.a)({},e),{},{buttons:e.buttons.filter((function(e,n){return n!==t.payload})),selected:""});case"SET_IMAGE":return Object(j.a)(Object(j.a)({},e),{},{image:t.payload});case"SELECTED":return Object(j.a)(Object(j.a)({},e),{},{selected:t.payload,item:"button"});case"REMOVE_BUTTON":case"EDIT_BUTTON":return Object(j.a)({},e);case"ADD_SHAPE":return Object(j.a)(Object(j.a)({},e),{},{shapes:[].concat(Object(d.a)(e.shapes),[t.payload])});case"UPDATE_SHAPE":return Object(j.a)(Object(j.a)({},e),{},{shapes:e.shapes.map((function(e,n){return e.id===t.payload.index.id?Object(j.a)(Object(j.a)({},e),t.payload.value):e}))});case"UPDATE_DETAIL_SHAPE":return Object(j.a)(Object(j.a)({},e),{},{shapes:e.shapes.map((function(e,n){return e.id===t.payload.id?Object(j.a)(Object(j.a)({},e),{},Object(u.a)({},t.payload.key,t.payload.value)):e}))});case"DELETE_SHAPE":return Object(j.a)(Object(j.a)({},e),{},{shapes:e.shapes.filter((function(e,n){return n!==t.payload})),selected_shape:""});case"SELECTED_SHAPE":return Object(j.a)(Object(j.a)({},e),{},{selected_shape:t.payload,item:"shape"});default:return e}},O=Object(o.b)({Main:h}),f=Object(o.c)(O,{},Object(o.a)(l.a)),p=n(11),x=n(17),g=n(215),m=n(3),y=window.innerWidth/2,v=window.innerHeight/2,E=function(e){var t=e.shapeProps,n=e.isSelected,a=e.onSelect,i=e.onChange,r=c.a.useRef(),s=c.a.useRef();return c.a.useEffect((function(){n&&(s.current.nodes([r.current]),s.current.getLayer().batchDraw())}),[n]),Object(m.jsxs)(c.a.Fragment,{children:[Object(m.jsx)(x.b,Object(j.a)(Object(j.a)({onClick:a,onTap:a,ref:r},t),{},{radius:"10px",draggable:!0,onDragEnd:function(e){i(Object(j.a)(Object(j.a)({},t),{},{x:e.target.x(),y:e.target.y()}))},onTransformEnd:function(e){var n=r.current,a=n.scaleX(),c=n.scaleY();n.scaleX(1),n.scaleY(1),i(Object(j.a)(Object(j.a)({},t),{},{x:n.x(),y:n.y(),width:Math.max(5,n.width()*a),height:Math.max(n.height()*c)}))}})),n&&Object(m.jsx)(x.d,{ref:s,boundBoxFunc:function(e,t){return t.width<5||t.height<5?e:t}})]})},T=function(e){var t=e.shapeProps,n=e.isSelected,a=e.onSelect,i=e.onChange,r=c.a.useRef(),s=c.a.useRef();return c.a.useEffect((function(){n&&(s.current.nodes([r.current]),s.current.getLayer().batchDraw())}),[n]),Object(m.jsxs)(c.a.Fragment,{children:[Object(m.jsx)(x.b,Object(j.a)(Object(j.a)({onClick:a,onTap:a,ref:r},t),{},{draggable:!0,onDragEnd:function(e){i(Object(j.a)(Object(j.a)({},t),{},{x:e.target.x(),y:e.target.y()}))},onTransformEnd:function(e){var n=r.current,a=n.scaleX(),c=n.scaleY();n.scaleX(1),n.scaleY(1),i(Object(j.a)(Object(j.a)({},t),{},{x:n.x(),y:n.y(),width:Math.max(5,n.width()*a),height:Math.max(n.height()*c)}))}})),n&&Object(m.jsx)(x.d,{ref:s,boundBoxFunc:function(e,t){return t.width<5||t.height<5?e:t}})]})};function C(e){var t=Object(s.b)(),n=Object(s.c)((function(e){return e.Main.buttons})),a=Object(s.c)((function(e){return e.Main.shapes})),i=Object(s.c)((function(e){return e.Main.image}));c.a.useEffect((function(){}),[n,a]);var r=c.a.useState(n),o=Object(p.a)(r,2),l=(o[0],o[1],c.a.useState(null)),u=Object(p.a)(l,2),d=u[0],j=u[1],b=c.a.useState(null),h=Object(p.a)(b,2),O=h[0],f=h[1],g=function(e){e.target===e.target.getStage()&&(j(null),f(null),N())},C=function(){document.querySelector(".sidebar-right").style.right=0},N=function(){document.querySelector(".sidebar-right").style.right="-400px"};return Object(m.jsx)(x.c,{width:y,height:v,onMouseDown:g,onTouchStart:g,style:""!==i?{backgroundImage:"url(".concat(i,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"}:{backgroundColor:"white"},children:Object(m.jsxs)(x.a,{children:[n.map((function(e,a){return Object(m.jsx)(E,{shapeProps:e,onClick:function(){return alert(e.label)},isSelected:e.id===d,onSelect:function(){var n;j(e.id),f(null),console.log(a),t((n=a,function(e){e({type:"SELECTED",payload:n})})),C()},onChange:function(e){var c,i,r=n.slice();t((c=r[a],i=e,function(e){var t={index:c,value:i};console.log(t),e({type:"UPDATE_BUTTON",payload:t})}))}},a)})),a.map((function(e,n){return Object(m.jsx)(T,{shapeProps:e,isSelected:e.id===O,onSelect:function(){var a;f(e.id),j(null),t((a=n,function(e){e({type:"SELECTED_SHAPE",payload:a})})),C()},onChange:function(e){var c,i,r=a.slice();console.log(r),t((c=r[n],i=e,function(e){var t={index:c,value:i};console.log(t),e({type:"UPDATE_SHAPE",payload:t})}))}},n)}))]})})}n(105);function N(){var e=Object(s.c)((function(e){return e.Main.buttons})),t=(Object(s.c)((function(e){return e.Main.shapes})),Object(s.c)((function(e){return e.Main.image})));return Object(m.jsxs)("div",{className:"sidebar",children:[Object(m.jsxs)("pre",{style:{color:"#fff"},children:["image: ",t]}),Object(m.jsxs)("pre",{style:{color:"#fff"},children:["buttons: ",JSON.stringify(e,null,2)]})]})}n(106);var S=n(62);function w(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.Main.selected})),n=Object(s.c)((function(e){return e.Main.buttons})),a=c.a.useState(!1),i=Object(p.a)(a,2);i[0],i[1];c.a.useEffect((function(){console.log(t)}),[n]);var r=function(t,n,a,c){e(function(e){return function(t){console.log(e),t({type:"UPDATE_DETAIL",payload:e})}}({index:t,key:n,value:a,id:c}))};return Object(m.jsx)("div",{className:"sidebar-right",children:0!==n.length&&""!==t?Object(m.jsxs)("div",{className:"sidebar-right-container",children:[Object(m.jsxs)("div",{className:"position",children:[Object(m.jsx)("h5",{children:"Positions"}),Object(m.jsxs)("div",{className:"form-container",children:[Object(m.jsxs)("div",{className:"form",children:[Object(m.jsx)("label",{children:"x position"}),Object(m.jsx)("input",{type:"text",name:"x",value:n[t].x,onChange:function(e){return r(t,"x",parseInt(e.target.value),n[t].id)}})]}),Object(m.jsxs)("div",{className:"form",children:[Object(m.jsx)("label",{children:"y position"}),Object(m.jsx)("input",{type:"text",name:"y",value:n[t].y,onChange:function(e){return r(t,"y",parseInt(e.target.value),n[t].id)}})]})]}),Object(m.jsxs)("div",{className:"form-container",children:[Object(m.jsxs)("div",{className:"form",children:[Object(m.jsx)("label",{children:"Height"}),Object(m.jsx)("input",{type:"text",name:"height",value:n[t].height,onChange:function(e){return r(t,"height",parseInt(e.target.value),n[t].id)}})]}),Object(m.jsxs)("div",{className:"form",children:[Object(m.jsx)("label",{children:"Width"}),Object(m.jsx)("input",{type:"text",name:"width",value:n[t].width,onChange:function(e){return r(t,"width",parseInt(e.target.value),n[t].id)}})]})]})]}),Object(m.jsxs)("div",{className:"position",children:[Object(m.jsx)("h5",{children:"Fill & Opacity"}),Object(m.jsx)("input",{id:"1",type:"range",name:"transparant",min:1,max:10,onChange:function(e){return r(t,"opacity",parseFloat(e.target.value/10),n[t].id)},defaultValue:n[t].opacity,style:{width:"100%",marginBottom:20}}),Object(m.jsx)(S.a,{onChange:function(e,a){r(t,"fill",e.hex,n[t].id)},color:n[t].fill})]}),Object(m.jsxs)("div",{className:"position",children:[Object(m.jsx)("h5",{children:"Border"}),Object(m.jsxs)("div",{className:"form-container",children:[Object(m.jsxs)("div",{className:"form",children:[Object(m.jsx)("label",{children:"Top left"}),Object(m.jsx)("input",{type:"text",name:"x",value:n[t].cornerRadius[0],onChange:function(e){return r(t,"x",e.target.value,n[t].id)}})]}),Object(m.jsxs)("div",{className:"form",children:[Object(m.jsx)("label",{children:"Top Right"}),Object(m.jsx)("input",{type:"text",value:n[t].cornerRadius[1],onChange:function(e){return r(t,"y",e.target.value,n[t].id)}})]})]}),Object(m.jsxs)("div",{className:"form-container",children:[Object(m.jsxs)("div",{className:"form",children:[Object(m.jsx)("label",{children:"Bottom Right"}),Object(m.jsx)("input",{type:"text",name:"x",value:n[t].cornerRadius[2],onChange:function(e){return r(t,"x",e.target.value,n[t].id)}})]}),Object(m.jsxs)("div",{className:"form",children:[Object(m.jsx)("label",{children:"Bottom Left"}),Object(m.jsx)("input",{type:"text",value:n[t].cornerRadius[3],onChange:function(e){return r(t,"y",e.target.value,n[t].id)}})]})]}),Object(m.jsx)("input",{id:"1",type:"range",name:"transparant",step:1,min:0,max:20,onChange:function(e){return r(t,"strokeWidth",parseInt(e.target.value),n[t].id)},defaultValue:n[t].stokeWidth,style:{width:"100%",marginBottom:20,marginTop:20}}),Object(m.jsx)(S.a,{onChange:function(e,a){r(t,"stroke",e.hex,n[t].id)},color:n[t].stroke})]})]}):Object(m.jsx)(m.Fragment,{})})}var D=function(){var e=Object(s.b)(),t=c.a.useState(""),n=Object(p.a)(t,2),a=n[0],i=n[1],r=Object(s.c)((function(e){return e.Main.buttons})),o=Object(s.c)((function(e){return e.Main.selected})),l=Object(s.c)((function(e){return e.Main.selected_shape})),u=Object(s.c)((function(e){return e.Main.item}));c.a.useEffect((function(){console.log(l),console.log(o),console.log(u),console.log(r)}),[l,o,u,r]);var d=function(){var t;e((t=a,function(e){console.log(t),e({type:"SET_IMAGE",payload:t})})),i("")};return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("div",{className:"sidebar-container",children:Object(m.jsx)(N,{})}),Object(m.jsxs)("div",{className:"main",children:[Object(m.jsx)(C,{}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{style:{display:"flex",width:"100%",marginTop:20,justifyContent:"flex-end"},children:""===u?Object(m.jsx)(m.Fragment,{}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"button",style:{width:"15%",margin:3,backgroundColor:"#0984e3"},onClick:function(){},children:"Move Up"}),Object(m.jsx)("div",{className:"button",style:{width:"15%",margin:3,backgroundColor:"#0984e3"},onClick:function(){},children:"Move Down"}),Object(m.jsx)("div",{className:"button",style:{width:"15%",margin:3,backgroundColor:"#0984e3"},onClick:d,children:"Clone"}),Object(m.jsx)("div",{className:"button",style:{width:"15%",margin:3,backgroundColor:"#d63031"},onClick:function(){e(function(e){return function(t){console.log(e),"button"===e.item?t({type:"DELETE_BUTTON",payload:e.selectedButton}):t({type:"DELETE_SHAPE",payload:e.selectedShape})}}({item:u,selectedButton:o,selectedShape:l}))},children:"Delete"})]})}),Object(m.jsxs)("div",{style:{display:"flex",width:"100%",marginTop:20},children:[Object(m.jsx)("input",{style:{padding:5,width:"80%",borderRadius:5,borderWidth:0},placeholder:"Paste image link here",value:a,onChange:function(e){return i(e.target.value)}}),Object(m.jsx)("div",{className:"button",style:{width:"15%",margin:3},onClick:d,children:"Save"})]}),Object(m.jsx)("div",{className:"button",onClick:function(){e((function(e){e({type:"ADD_BUTTON",payload:{x:10,y:10,width:180,height:80,name:"label1",fill:"#0984e3",opacity:1,stroke:"black",strokeWidth:0,id:Object(g.a)(),cornerRadius:[10,10,10,10]}})}))},children:"Add button"}),Object(m.jsx)("div",{className:"button",children:"Add Text"}),Object(m.jsx)("div",{className:"button",children:"Add Image / Logo"})]})]}),Object(m.jsx)("div",{className:"sidebar-container",children:Object(m.jsx)(w,{})})]})};var k=function(){return Object(m.jsx)(s.a,{store:f,children:Object(m.jsx)(D,{})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,216)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root")),A()},63:function(e,t,n){},99:function(e,t,n){}},[[213,1,2]]]);
//# sourceMappingURL=main.a1081af8.chunk.js.map