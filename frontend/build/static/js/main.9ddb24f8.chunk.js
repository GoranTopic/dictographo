(this.webpackJsonpdictographo=this.webpackJsonpdictographo||[]).push([[0],{100:function(e,t,n){e.exports=n(126)},105:function(e,t,n){},113:function(e,t,n){},123:function(e,t,n){},126:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(28),c=n.n(o),l=(n(105),n(48)),i=n(7),u=n(5),s="http://128.199.9.124:8080/api/";var d=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}(),h=d.width,m=d.height,p="#1d1d1d",E={default:"#3D3C3A",done:"#B6B6B4",stroke:"#8bb5bc",highlight:"#E41B17",highlightStroke:"#27332F",selected:"#800517",onPath:"#990012"},f={default:"rgba(23,162,184,50%)",gray:"#D1D0CE",onPath:"#990012",highlight:"#E41B17",antonim:""},g={default:"black"},b={automaticRearrangeAfterDropNode:!1,collapsible:!1,directed:!1,focusAnimationDuration:.75,backgroundColor:"black",focusZoom:1,height:m-87,width:h-15,highlightDegree:100,highlightOpacity:.5,linkHighlightBehavior:!0,maxZoom:10,minZoom:.1,nodeHighlightBehavior:!0,panAndZoom:!1,staticGraph:!1,staticGraphWithDragAndDrop:!1,d3:{alphaTarget:.3,gravity:-140,linkLength:3,linkStrength:2,disableLinkForce:!1},node:{color:E.default,fontColor:g.default,fontSize:8,fontWeight:"bold",highlightColor:E.highlight,highlightFontSize:14,highlightFontWeight:"bold",highlightStrokeColor:E.highlightStroke,highlightStrokeWidth:2,labelProperty:"id",mouseCursor:"pointer",opacity:1,renderLabel:!0,size:210,strokeColor:E.stroke,strokeWidth:"1.6",svg:"",symbolType:"circle"},link:{color:f.default,fontColor:"black",fontSize:8,fontWeight:"normal",highlightColor:f.highlight,highlightFontSize:8,highlightFontWeight:"normal",labelProperty:"label",mouseCursor:"pointer",opacity:.7,renderLabel:!0,semanticStrokeWidth:!1,strokeWidth:1.5,markerHeight:6,markerWidth:6}},y={nodes:[],links:[],selected:{},definedNode:{},isError:!1,errorMsg:"",isFetchFailed:!1,isWordNotFound:!1,wordsNotFound:[],isPathNotFound:!1,pathsNotFound:[],isEmpty:!0,isLoading:!0,searchTerm:"",DestinationTerm:"",isDeepLinks:!1,showModal:!1,isSideBar:!0},O=function(e,t){var n;switch(t.type){case"SET_NEW_NODES":return Object(u.a)(Object(u.a)({},e),{},{nodes:[].concat(Object(i.a)(e.nodes),Object(i.a)(t.payload))});case"SET_NEW_LINKS":return Object(u.a)(Object(u.a)({},e),{},{links:[].concat(Object(i.a)(e.links),Object(i.a)(t.payload))});case"SET_NODE_LINK":return Object(u.a)(Object(u.a)({},e),{},{nodes:[].concat(Object(i.a)(e.nodes),[t.payload.node]),links:[].concat(Object(i.a)(e.links),[t.payload.link])});case"SET_STATE":return Object(u.a)(Object(u.a)({},e),{},{nodes:[].concat(Object(i.a)(e.nodes),Object(i.a)(t.payload.nodes)),links:[].concat(Object(i.a)(e.links),Object(i.a)(t.payload.links))});case"SET_NEW_NODE":return Object(u.a)(Object(u.a)({},e),{},{nodes:[Object(u.a)(Object(u.a)({},t.payload),{},{selected:!0,color:E.selected})],links:[],selected:t.payload,definedNode:t.payload,isEmpty:!1});case"SET_PATH_NODE":return Object(u.a)(Object(u.a)({},e),{},{nodes:[].concat(Object(i.a)(e.nodes),[Object(u.a)(Object(u.a)({},t.payload.node),{},{selected:!0,color:E.selected})]),links:[].concat(Object(i.a)(e.links),[Object(u.a)(Object(u.a)({},t.payload.link),{},{color:E.selected})]),selected:t.payload.node,definedNode:t.payload.node,isEmpty:!1});case"SET_NODE_DONE":return n=e.nodes.filter((function(e){return e.id===t.payload}))[0],Object(u.a)(Object(u.a)({},e),{},{nodes:[].concat(Object(i.a)(e.nodes),[Object(u.a)(Object(u.a)({},n),{},{color:E.done})]),isEmpty:!1});case"SET_DEFINED_NODE":return n=e.nodes.filter((function(e){return e.id===t.payload}))[0],Object(u.a)(Object(u.a)({},e),{},{definedNode:n});case"ERASE_NODES":return Object(u.a)(Object(u.a)({},e),{},{nodes:[],links:[]});case"SET_SEARCH_TERM":return Object(u.a)(Object(u.a)({},e),{},{searchTerm:t.payload});case"SET_DEST_TERM":return Object(u.a)(Object(u.a)({},e),{},{destinationTerm:t.payload});case"SET_NODE_SELECTED":return Object(u.a)(Object(u.a)({},e),{},{nodes:[].concat(Object(i.a)(e.nodes),[Object(u.a)(Object(u.a)({},t.payload),{},{color:E.selected})]),selected:t.payload});case"SWITCH_SELECTED_NODE":return n=e.nodes.filter((function(e){return e.id===t.payload}))[0],Object(u.a)(Object(u.a)({},e),{},{nodes:[].concat(Object(i.a)(e.nodes),[Object(u.a)(Object(u.a)({},e.selected),{},{color:E.done}),Object(u.a)(Object(u.a)({},n),{},{color:E.selected})]),selected:n,definedNode:n});case"TOGGEL_MODAL":return Object(u.a)(Object(u.a)({},e),{},{showModal:!e.showModal});case"SET_SHOW_MODAL":return Object(u.a)(Object(u.a)({},e),{},{showModal:t.payload});case"SET_WORD_NOT_FOUND":return Object(u.a)(Object(u.a)({},e),{},{isError:!0,isWordNotFound:!0,wordsNotFound:new Set([].concat(Object(i.a)(e.wordsNotFound),[t.payload]))});case"SET_PATH_NOT_FOUND":return Object(u.a)(Object(u.a)({},e),{},{isError:!0,isPathNotFound:!0,pathsNotFound:new Set([].concat(Object(i.a)(e.pathsNotFound),[Object(u.a)({},t.payload)]))});case"DISSMISS_ERROR":return Object(u.a)(Object(u.a)({},e),{},{isError:!1,errorMsg:"",isWordNotFound:!1,wordsNotFound:[],isPathNotFound:!1,pathsNotFound:[]});case"TOGGLE_DEEP_LINKS":return Object(u.a)(Object(u.a)({},e),{},{isDeepLinks:!e.isDeepLinks});case"TOGGLE_SIDE_BAR":return Object(u.a)(Object(u.a)({},e),{},{isSideBar:!e.isSideBar});case"SET_FETCH_FAILED":return Object(u.a)(Object(u.a)({},e),{},{isError:!0,isFetchFailed:!0});case"SET_ERROR":return Object(u.a)(Object(u.a)({},e),{},{isError:!0,errorMsg:t.payload});default:throw new Error}},j=n(136);var S=function(){return r.a.createElement(j.a,null,r.a.createElement(j.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"graph_scaled_down.jpg",alt:"First slide"}),r.a.createElement(j.a.Caption,null,r.a.createElement("h3",null,"First slide label"),r.a.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum."))),r.a.createElement(j.a.Item,null,r.a.createElement("img",{className:"d-block h-100 w-100",src:"graph1.jpg",alt:"Third slide"}),r.a.createElement(j.a.Caption,null,r.a.createElement("h3",null,"Second slide label"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),r.a.createElement(j.a.Item,null,r.a.createElement("img",{className:"d-block h-100 w-100",src:"graph2.jpg",alt:"Third slide"}),r.a.createElement(j.a.Caption,null,r.a.createElement("h3",null,"Third slide label"),r.a.createElement("p",null,"Praesent commodo cursus magna, vel scelerisque nisl consectetur."))),r.a.createElement(j.a.Item,null,r.a.createElement("img",{className:"d-block h-100 w-100",src:"graph3.jpg",alt:"Third slide"}),r.a.createElement(j.a.Caption,null,r.a.createElement("h3",null,"Third slide label"),r.a.createElement("p",null,"Praesent commodo cursus magna, vel scelerisque nisl consectetur."))))},k=n(8),v=(n(108),n(14)),N=n.n(v),T=n(41),_=function(e){return Math.floor(Math.random()*Math.floor(e))+1},w=function(e){return e.id=e.w_id,e.key=e.w_id,e.isSelected=!1,e.color=E.default,e},D=function(e,t,n){C(function(e,t){return t.nodes.filter((function(t){return t.id===e}))[0]}(e,t),t,n),n({type:"SWITCH_SELECTED_NODE",payload:e})},F=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return setTimeout(e,t+_(n))},x=function(e,t,n){fetch(s+e).then((function(e){return e.json()})).then((function(e){return M(e,t,n)})).then((function(e){return w(e)})).then((function(e){return n({type:"SET_NEW_NODE",payload:e}),e})).then((function(e){return C(e,t,n)})).catch((function(){return n({type:"SET_FETCH_FAILED"})}))},C=function(e,t,n){var a=t.isDeepLinks;fetch(s+"synonyms/"+e.id).then((function(e){return e.json()})).then((function(e){return M(e,t,n)})).then((function(r){return r.forEach((function(r){return F((function(){r=w(r),(a||function(e,t){return t.nodes.every((function(t){return t.id!==e}))}(r.id,t))&&n({type:"SET_NODE_LINK",payload:{node:r,link:{source:e.id,target:r.id}}})}))}))})).catch((function(){return n({type:"SET_FETCH_FAILED"})}))},L=function(e){for(var t=[],n=0;n+1<=e.length-1;n++)t.push({first:e[n],last:e[n+1]});return t},R=function(){var e=Object(T.a)(N.a.mark((function e(t,n){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new Array(t.lenght),e.next=3,Promise.all(t.map((function(e,t){return fetch(s+"check/"+e+"/").then((function(e){return e.json()})).then((function(r){"Found."===r.detail?a[t]=e:n({type:"SET_WORD_NOT_FOUND",payload:e})})).catch((function(e){return console.log(e)}))})));case 3:return e.abrupt("return",a.filter(Boolean));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),A=function(e){var t=null;return e instanceof Array&&e.forEach((function(e){(e=w(e)).prevNode=t||e.id,t=e.id})),e},W=function(){var e=Object(T.a)(N.a.mark((function e(t,n){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new Array(t.length),e.next=3,Promise.all(t.map((function(e,t){return fetch(s+"path/"+e.first+"/"+e.last).then((function(e){return e.json()})).then((function(e){return A(e)})).then((function(r){"Path not found."===r.detail?(n({type:"SET_PATH_NOT_FOUND",payload:e}),a[t]=null):a[t]=r})).catch((function(e){return console.log(e)}))})));case 3:return e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),I=function(){var e=Object(T.a)(N.a.mark((function e(t){var n,a,r,o,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=function(e,t,a){var r,o,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t;case 1:if(!(r<a.length)){e.next=17;break}if(o=a[r],null===a[r]){e.next=14;break}c=0;case 5:if(!(c<o.length)){e.next=14;break}return e.next=8,o[c];case 8:if(!0!==e.sent){e.next=11;break}return e.abrupt("return",null);case 11:c++,e.next=5;break;case 14:r++,e.next=1;break;case 17:return e.abrupt("return",null);case 18:case"end":return e.stop()}}),n)},n=N.a.mark(r),a=function(e){var t=[],n={start:null,end:null},a=!1,r=!1;return e.forEach((function(e,o){null===e?(a&&(n.start=o),r=!0,a=!1):(r&&(n.end=o,t.push(Object(u.a)({},n))),a=!0,r=!1)})),t},o=function(){var e=Object(T.a)(N.a.mark((function e(t,n,a){var o,c,l,i,u;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),console.log(n),console.log(a),o=a[t-1],c=o[o.length-1].word,l=r(0,n,a),i=l.next(),u=function(e){"Path not found."===e.detail?i=l.next():(a[t]=e,i=l.next(!0))};case 8:if(i.done){e.next=14;break}return console.log(i.value.word),e.next=12,fetch(s+"path/"+c+"/"+i.value.word).then((function(e){return e.json()})).then((function(e){return A(e)})).then(u).catch((function(e){return console.log(e)}));case 12:e.next=8;break;case 14:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),c=a(t),e.next=7,Promise.all(c.map((function(e){return o(e.start,e.end,t)})));case 7:return e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(e,t,n){console.log(e);var a=[];(e=e.filter(Boolean)).forEach((function(e){return a.push.apply(a,Object(i.a)(e))})),a.forEach((function(e,t){return F((function(){n(0===t?{type:"SET_NEW_NODE",payload:e}:{type:"SET_PATH_NODE",payload:{node:e,link:{target:e.id,source:e.prevNode}}})}))}))},B=function(){var e=Object(T.a)(N.a.mark((function e(t,n,a){var r,o,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(t,a).catch((function(e){return a({type:"SET_ERROR",payload:"Could not get words"})}));case 2:return t=e.sent,r=L(t),e.next=6,W(r,a).catch((function(e){return a({type:"SET_ERROR",payload:"could not get paths"})}));case 6:return o=e.sent,e.next=9,I(o).catch((function(e){return a({type:"SET_ERROR",payload:"Could not amend path"})}));case 9:c=e.sent,P(c,0,a);case 11:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),M=function(e,t,n){if(e instanceof Array){var a=[];return e.forEach((function(e,t,r){"Not Found."===e.detail?n({type:"SET_WORD_NOT_FOUND",payload:e.w_id}):a.push(e)})),a}if("Not found."===e.detail)throw n({type:"SET_WORD_NOT_FOUND",payload:t.searchTerm}),new Error("word not found");if("Path not found."===e.detail)throw n({type:"SET_PATH_NOT_FOUND",payload:{first:e.first,last:e.last}}),new Error("path not found");return e},H=n(17),z=n(18);var G=function(e){var t,n=e.state,a=e.dispatchState,o=function(){return a({type:"TOGGLE_SIDE_BAR"})};return r.a.createElement("div",{style:{float:"left",position:"absolute",height:"91%"}},r.a.createElement(k.c,{collapsed:n.isSideBar},n.isSideBar?r.a.createElement(k.b,{onClick:o,icon:r.a.createElement(H.a,{style:{marginLeft:"1.7rem",marginTop:"1rem",height:"25px",width:"25px"},icon:z.b})}):r.a.createElement(k.b,{onClick:o,icon:r.a.createElement(H.a,{style:{marginLeft:"6.5rem",marginTop:"1rem",height:"55px",width:"55px"},icon:z.c})}),r.a.createElement(k.a,{iconShape:"square"},n.isSideBar?r.a.createElement(k.f,{icon:r.a.createElement(H.a,{icon:z.g})},r.a.createElement(k.b,{active:!0},r.a.createElement("h1",null,n.definedNode.word),r.a.createElement("i",null,n.definedNode.definitions[0]?n.definedNode.definitions[0].syntax:null))):r.a.createElement(k.e,{style:{textAlign:"center"}},r.a.createElement("h1",null,n.definedNode.word),r.a.createElement("i",null,n.definedNode.definitions[0]?n.definedNode.definitions[0].syntax:null)),function(e){var t=new Set;return e.definitions.forEach((function(e){return t.add(e.syntax)})),r.a.createElement(k.a,null,n.isSideBar?r.a.createElement(r.a.Fragment,null):r.a.createElement("h1",null,"Definitions:"),Object(i.a)(t).map((function(t,n){return 0===n?r.a.createElement(k.f,{key:n,title:t,open:!0,icon:r.a.createElement(H.a,{icon:z.d})},e.definitions.map((function(e,n){return t===e.syntax?r.a.createElement("div",{key:n},r.a.createElement(k.d,null,r.a.createElement("br",null),r.a.createElement("span",{style:{paddingRight:2}},e.definition))):null}))):r.a.createElement(k.f,{key:n,title:t,icon:r.a.createElement(H.a,{icon:z.d})},e.definitions.map((function(e,n){return t===e.syntax?r.a.createElement("div",{key:n},r.a.createElement(k.d,null,r.a.createElement("br",null),r.a.createElement("span",{style:{paddingRight:2}},e.definition))):null})))})))}(n.definedNode),(t=n.definedNode,r.a.createElement(r.a.Fragment,null,0!==t.examples.length?r.a.createElement(k.a,{popperArrow:!0},r.a.createElement(k.f,{title:"Examples:",icon:r.a.createElement(H.a,{icon:z.a}),style:{fontSize:"20px"}},t.examples.map((function(e,t){return r.a.createElement(k.d,{key:t},r.a.createElement("p",null,e.example))})))):null)),function(e){return r.a.createElement(r.a.Fragment,null,""!==e.etymology?r.a.createElement(k.a,{popperArrow:!0},r.a.createElement(k.f,{title:"Etymology:",icon:r.a.createElement(H.a,{icon:z.e}),style:{fontSize:"20px"}},r.a.createElement(k.d,null,r.a.createElement("p",null,e.etymology)))):null)}(n.definedNode),function(e){return r.a.createElement(r.a.Fragment,null,0!==e.synonyms.length?r.a.createElement(k.a,{popperArrow:!0},r.a.createElement(k.f,{title:"Synonyms:",icon:r.a.createElement(H.a,{icon:z.f}),style:{fontSize:"20px"}},e.synonyms.map((function(e,t){return r.a.createElement(k.b,{key:t,active:!0,onClick:function(){return D(e.synonym,n,a)}},e.synonym)})))):null)}(n.definedNode),function(e){return r.a.createElement(r.a.Fragment,null,""!==e.notes?r.a.createElement(k.a,{popperArrow:!0},r.a.createElement(k.f,{title:"Anotations:",icon:r.a.createElement(H.a,{icon:z.i}),style:{fontSize:"20px"}},r.a.createElement(k.d,null,r.a.createElement("p",null,e.Notes)))):null)}(n.definedNode))))};function U(e,t){Object(a.useEffect)((function(){function n(n){n.key===e&&t()}return window.addEventListener("keyup",n),function(){return window.removeEventListener("keyup",n)}}),[t,e])}n(113);var K=function(e){var t=e.state,n=e.dispatchState,o=Object(a.useState)([]),c=Object(l.a)(o,2),i=c[0],u=c[1],d=Object(a.useState)(0),h=Object(l.a)(d,2),m=h[0],p=h[1];U("ArrowDown",(function(){return p(m<0?i.length-1:m+1)})),U("ArrowUp",(function(){return m>i.length-1?p(0):p(m-1)})),U("Enter",(function(){if(E())i.length>0&&f(i[m].word);else{var e=t.searchTerm.toLowerCase().replace(/  +/g," ").trim().split(" ");e.length>1?B(e,t,n):x(e[0],t,n)}}));var E=function(){var e=t.searchTerm.length,n=t.searchTerm[t.searchTerm.length-1];return 0!==e&&" "!==n},f=function(e){var a=t.searchTerm.split(" ");a[a.length-1]=e,n({type:"SET_SEARCH_TERM",payload:a.join(" ")+" "}),u([]),p(0)};Object(a.useEffect)((function(){var e=t.searchTerm.split(" "),n=e[e.length-1];fetch(s+"querysearch/"+n).then((function(e){return e.json()})).then((function(e){return console.log(e),e})).then((function(e){return function(e){return e.filter((function(e){return/\s/.test(e)}))}(e)})).then((function(e){return u(e)})).catch((function(e){return console.log(e)}))}),[t.searchTerm,n]);var g=function(){return r.a.createElement("ul",{class:"suggestions"},i.map((function(e,t){return r.a.createElement("li",{key:t,className:t===m?"selected":null,onClick:function(){return t=e.word,f(t);var t}},e.word)})))};return r.a.createElement("div",{className:"input"},e.children,E()?r.a.createElement(g,null):r.a.createElement(r.a.Fragment,null))},q=n(137),Z=n(132),J=n(87),$=n(88),Q=n(138),V=n(134),X=n(135);n(74);var Y=function(e){var t=e.state,n=e.dispatchState,a=function(e){return e.replace(/  +/g," ").trim().split(" ")};return r.a.createElement(q.a,{expand:"lg",className:"justify-content-center",variant:"dark",style:{backgroundColor:p}},r.a.createElement("a",{href:"index.html"},r.a.createElement("img",{src:"/logo.png",width:"150",height:"70",alt:"React Bootstrap logo"})),r.a.createElement(q.a.Brand,{href:"index.html",className:"row"},r.a.createElement("h1",null,"Dictographo")),r.a.createElement(K,{state:t,dispatchState:n},r.a.createElement(Z.a,{size:"lg",md:"auto",className:"mx-3",style:{maxWidth:"600px"}},r.a.createElement(J.a,{size:"lg",as:"input",type:"text",placeholder:"Write some words here...",value:t.searchTerm,onChange:function(e){return n({type:"SET_SEARCH_TERM",payload:e.target.value})}}),r.a.createElement(Z.a.Append,null,r.a.createElement($.a,{size:"lg",variant:"outline-info",onClick:function(){var e=a(t.searchTerm.toLowerCase());e.length>1?B(e,t,n):x(e[0],t,n)}},"Search")))),r.a.createElement(q.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(Q.a,{className:"ml-auto mx-4"},r.a.createElement(V.a,{variant:"dark",size:"lg",title:"Options",icon:r.a.createElement(H.a,{icon:z.h}),id:"basic-nav-dropdown"},r.a.createElement(V.a.Divider,null),r.a.createElement(X.a.Check,{type:"switch",id:"custom-switch",label:"Deep Links",value:t.isDeepLinks,onChange:function(){var e=t.selected;t.isEmpty||x(e.id,t,n),n({type:"TOGGLE_DEEP_LINKS"})}})))))},ee=n(92);var te=function(e){var t=e.state,n=e.dispatchState;return r.a.createElement("div",{style:{backgroundImage:"url(./grid.png)"}},r.a.createElement(ee.Graph,{id:"graph-id",data:t,config:b,onClickNode:function(e){return D(e,t,n)},backgroundColor:"black"}))},ne=n(139);var ae=function(e){var t=e.state,n=e.dispatchState;return t.isError?r.a.createElement(ne.a,{variant:"danger",dismissible:!0,onClose:function(){return n({type:"DISSMISS_ERROR"})}},r.a.createElement(ne.a.Heading,null,"Oh Snap!"),t.isWordNotFound?r.a.createElement("p",null,"Looks like ",r.a.createElement("b",null,Object(i.a)(t.wordsNotFound).map((function(e){return r.a.createElement("i",null,e,", ")}))),"in no our dictionary yet."):r.a.createElement(r.a.Fragment,null),t.isPathNotFound?r.a.createElement("p",null,"looks like there is no path between:",Object(i.a)(t.pathsNotFound).map((function(e){return r.a.createElement("i",null,r.a.createElement("b",null," ",e.first)," and ",r.a.createElement("b",null,e.last,","))}))):r.a.createElement(r.a.Fragment,null),t.isFetchFailed?r.a.createElement("p",null,"Could not connect to server."):r.a.createElement(r.a.Fragment,null),r.a.createElement("p",null,t.errorMsg)):r.a.createElement(r.a.Fragment,null)};n(123);var re=function(){var e=r.a.useReducer(O,y),t=Object(l.a)(e,2),n=t[0],a=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(Y,{state:n,dispatchState:a}),r.a.createElement(ae,{state:n,dispatchState:a}),n.isEmpty?r.a.createElement(S,null):r.a.createElement("div",{style:{display:"inline"}},r.a.createElement(G,{state:n,dispatchState:a}),r.a.createElement(te,{state:n,dispatchState:a})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[100,1,2]]]);
//# sourceMappingURL=main.9ddb24f8.chunk.js.map