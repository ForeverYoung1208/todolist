!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/packs/",n(n.s=14)}([function(e,t,n){"use strict";e.exports=n(21)},function(e,t,n){e.exports=n(22)()},function(e,t,n){"use strict";n.d(t,"j",function(){return c}),n.d(t,"f",function(){return i}),n.d(t,"d",function(){return u}),n.d(t,"g",function(){return s}),n.d(t,"h",function(){return l}),n.d(t,"i",function(){return f}),n.d(t,"k",function(){return d}),n.d(t,"b",function(){return y}),n.d(t,"a",function(){return m}),n.d(t,"c",function(){return b}),n.d(t,"e",function(){return v});n(10);var r,o=n(1),a=n.n(o);function c(e){document.body.style.paddingRight=e>0?e+"px":null}function i(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function u(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&c(n+e)}function s(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map(function(e){return t[e]||e}).join(" "):e}function l(e,t){var n={};return Object.keys(e).forEach(function(r){-1===t.indexOf(r)&&(n[r]=e[r])}),n}function f(e,t){for(var n,r=Array.isArray(t)?t:[t],o=r.length,a={};o>0;)a[n=r[o-=1]]=e[n];return a}var p={};function d(e){p[e]||("undefined"!==typeof console&&console.error(e),p[e]=!0)}a.a.oneOfType([a.a.string,a.a.func,function(e,t,n){if(!(e[t]instanceof Element))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},a.a.shape({current:a.a.any})]),a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func}),a.a.arrayOf(a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func})]))]);var y={Fade:150,Collapse:350,Modal:300,Carousel:600},m=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],b=!("undefined"===typeof window||!window.document||!window.document.createElement);var v=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",function(){return r})},function(e,t,n){var r;function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(){"use strict";var a={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=o(n);if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var i=c.apply(null,n);i&&e.push(i)}else if("object"===r)for(var u in n)a.call(n,u)&&n[u]&&e.push(u)}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):"object"===o(n(9))&&n(9)?void 0===(r=function(){return c}.apply(t,[]))||(e.exports=r):window.classNames=c}()},function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",function(){return r})},function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",function(){return r})},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(15),c=function(e){return fetch(e,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then(function(e){return e.json()})},i=function(e,t,n,r){var o=$('meta[name="csrf-token"]').attr("content");return fetch(e,{method:t,body:JSON.stringify(n),credentials:"same-origin",headers:{"Content-Type":"application/json",Accept:"application/json","X-Requested-With":"XMLHttpRequest","X-CSRF-Token":o}}).then(function(e){e.ok?e.json().then(function(e){return r(e)}):console.log("request error: "+e.status+"-"+e.statusText)}).catch(function(e){return console.log("error: "+e)})};function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"AppContext",function(){return y}),n.d(t,"default",function(){return m});var y=o.a.createContext(),m=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=f(this,p(t).call(this,e))).newId=function(){return{project:n.lastProjectId-=1,task:n.lastTaskId-=1}},n.deleteProject=function(e){i("/projects/".concat(e,".json"),"DELETE",null,function(e){n.setState({projects:e})})},n.addProjectClick=function(){i("/projects.json","POST",{name:"new project"},function(e){n.setState({projects:[].concat(l(n.state.projects),[e])})})},n.onProjectEditOk=function(e,t){var r=n.state.projects[e];r.name=t,i("/projects/".concat(r.id,".json"),"PUT",r,function(t){var r=n.state.projects;r[e]=t,n.setState({projects:r})})},n.addTask=function(e,t){i("/tasks.json","POST",{name:t,project_id:e},function(t){var r=n.state.projects.findIndex(function(t){return t.id==e}),o=n.state.projects;o[r].tasks.push(t),n.setState({projects:o})})},n.shiftTask=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1,o=n.state.projects[e],a=o.tasks.length-1;if(t+r>=0&&t+r<=a){var c={task1_id:o.tasks[t].id,task2_id:o.tasks[t+r].id};i("/projects/".concat(o.id,"/changeTaskPriorities"),"POST",c,function(e){n.setState({projects:n.state.projects.map(function(t){return t.id==e.id?e:t})})})}},n.onTaskEditOk=function(e,t,r,o){var a=n.state.projects[e].tasks[t];a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){s(e,t,n[t])})}return e}({},a,{name:r,deadline:o}),i("/tasks/".concat(a.id,".json"),"PUT",a,function(e){var t=n.state.projects.findIndex(function(t){return t.id==e.id}),r=n.state.projects;r[t]=e,n.setState({projects:r})})},n.deleteTask=function(e){i("/tasks/".concat(e,".json"),"DELETE",null,function(e){n.setState({projects:n.state.projects.map(function(t){return t.id==e.id?e:t})})})},n.toggleTaskStatus=function(e){i("/tasks/".concat(e,"/toggleStatus"),"POST",null,function(e){n.setState({projects:n.state.projects.map(function(t){return t.id==e.id?e:t})})})},n.componentDidMount=function(){Promise.all([c("/statuses.json"),c("/projects.json")]).then(function(e){var t=u(e,2),r=t[0],o=t[1];n.setState({projects:o,statuses:r})})},n.render=function(){var e=n.state.projects;return o.a.createElement(y.Provider,{value:n.state.fun},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row justify-content-md-center header"},o.a.createElement("div",{className:"col-md-8"},o.a.createElement("h4",null,"Simple todo lists"),o.a.createElement("span",null,"From ruby garage"))),e.map(function(e,t){return o.a.createElement(a.default,{key:e.id,project:e,projectIndex:t})}),o.a.createElement("div",{className:"row justify-content-md-center header"},o.a.createElement("button",{className:"btn btn-primary btn-add-project",onClick:n.addProjectClick},o.a.createElement("div",{className:"fa fa-2x fa-plus shadow-blue"})," ",o.a.createElement("div",null,"Add TODO List"))),o.a.createElement("footer",null," Test task for Ruby Garage by Ihor")))},n.lastProjectId=0,n.lastTaskId=0,n.state={projects:[],statuses:[],taskEdittingIds:[],fun:{deleteProject:n.deleteProject,deleteTask:n.deleteTask,addTask:n.addTask,toggleTaskStatus:n.toggleTaskStatus,shiftTask:n.shiftTask,onTaskEditOk:n.onTaskEditOk,onProjectEditOk:n.onProjectEditOk}},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,o.a.Component),t}()},function(e,t,n){"use strict";function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",function(){return r})},function(e,t){(function(t){e.exports=t}).call(this,{})},function(e,t,n){(function(t){function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r="[object AsyncFunction]",o="[object Function]",a="[object GeneratorFunction]",c="[object Null]",i="[object Proxy]",u="[object Undefined]",s="object"==("undefined"===typeof t?"undefined":n(t))&&t&&t.Object===Object&&t,l="object"==("undefined"===typeof self?"undefined":n(self))&&self&&self.Object===Object&&self,f=s||l||Function("return this")(),p=Object.prototype,d=p.hasOwnProperty,y=p.toString,m=f.Symbol,b=m?m.toStringTag:void 0;function v(e){return null==e?void 0===e?u:c:b&&b in Object(e)?function(e){var t=d.call(e,b),n=e[b];try{e[b]=void 0;var r=!0}catch(a){}var o=y.call(e);r&&(t?e[b]=n:delete e[b]);return o}(e):function(e){return y.call(e)}(e)}e.exports=function(e){if(!function(e){var t=n(e);return null!=e&&("object"==t||"function"==t)}(e))return!1;var t=v(e);return t==o||t==a||t==r||t==i}}).call(this,n(20))},,function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return p});var r=n(0),o=n.n(r),a=n(7),c=n(17),i=n(16),u=n(18);function s(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,l(t).call(this,e))).componentDidMount=function(){},n.startEditting=function(){n.setState(function(e){return{isEditting:!e.isEditting,val:n.props.task.name,deadline:n.props.task.deadline}})},n.render=function(){var e=n.props.task,t=e.id,r=e.name,s=(e.priority,e.deadline),l=e.status_id,f=n.props,p=f.projectIndex,d=f.taskIndex,y=n.state.isEditting,m=o.a.createElement(a.AppContext.Consumer,null,function(e){return o.a.createElement("div",{className:"task-controls"},o.a.createElement("div",{className:"arrows"},o.a.createElement("div",{className:"fa fa-caret-up hoverable",onClick:function(){return e.shiftTask(p,d,-1)}}),o.a.createElement("div",{className:"horizontal-line"}),o.a.createElement("div",{className:"fa fa-caret-down hoverable",onClick:function(){return e.shiftTask(p,d,1)}})),o.a.createElement("div",{className:"vertical-line m-2"}),o.a.createElement("div",{className:"fa fa-edit m-2 hoverable",onClick:n.startEditting}),o.a.createElement("div",{className:"vertical-line m-2"}),o.a.createElement("div",{className:"fa fa-trash m-2 hoverable",onClick:function(){return e.deleteTask(t)}}))}),b=o.a.createElement("div",{className:"no-task-controls"});return o.a.createElement(a.AppContext.Consumer,null,function(e){return o.a.createElement("tr",{onMouseEnter:function(e){return n.setState({hovered:!0})},onMouseLeave:function(e){return n.setState({hovered:!1})}},o.a.createElement("td",{className:"td-status"},o.a.createElement("input",{type:"checkbox",className:"checkbox-task",checked:4==l,onChange:function(){return e.toggleTaskStatus(t)}})),o.a.createElement("td",{className:"td-empty"}),o.a.createElement("td",null,y?o.a.createElement("div",null,o.a.createElement(c.a,null,o.a.createElement(i.a,{value:n.state.val,onChange:function(e){return n.setState({val:e.target.value})}}),o.a.createElement(u.a,{addonType:"prepend"},o.a.createElement(i.a,{type:"date",onChange:function(e){return n.setState({deadline:e.target.value})},value:n.state.deadline?n.state.deadline:""}),o.a.createElement("button",{className:"btn btn-add-task",type:"button",onClick:function(){n.setState({isEditting:!1}),e.onTaskEditOk(p,d,n.state.val,n.state.deadline)}},"Ok")))):o.a.createElement("div",null,r," ",s?"; deadline: ".concat(s):"")),o.a.createElement("td",{className:"td-task-controls"},n.state.hovered?m:b))})},n.state={hovered:!1,isEditting:!1,val:e.task.name,deadline:e.task.deadline},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o.a.Component),t}()},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return s});var r=n(0),o=n.n(r),a=n(7);function c(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=c(this,i(t).call(this,e))).render=function(){var e=n.props.project;return o.a.createElement(a.AppContext.Consumer,null,function(t){return o.a.createElement("div",null,o.a.createElement("div",{className:"input-group"},o.a.createElement("span",{className:"fa fa-2x fa-plus"}),o.a.createElement("input",{type:"text",className:"form-control input-new-task",placeholder:"Start typing here to create a task","aria-label":"task name",onChange:function(e){return n.setState({name:e.target.value})},value:n.state.name}),o.a.createElement("div",{className:"input-group-append"},o.a.createElement("button",{className:"btn btn-add-task",type:"button",onClick:function(){return t.addTask(e.id,n.state.name)}},"Add task"))))})},n.state={name:""},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,o.a.Component),t}()},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return f});var r=n(0),o=n.n(r),a=n(7),c=n(17),i=n(18);function u(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=u(this,s(t).call(this,e))).render=function(){var e=n.props,t=e.project,r=e.projectIndex,u=n.state,s=u.isEditting,l=u.val,f=o.a.createElement(a.AppContext.Consumer,null,function(e){return o.a.createElement("div",{className:"btns-edit-project ml-auto"},o.a.createElement("div",{className:"fa fa-edit p-2",onClick:function(){return n.setState(function(e){return{isEditting:!e.isEditting}})}}),"|",o.a.createElement("div",{className:"fa fa-trash p-2",onClick:function(){return e.deleteProject(t.id)}}))});return o.a.createElement(a.AppContext.Consumer,null,function(e){return o.a.createElement("div",{className:"project-head flex-row",onMouseEnter:function(e){return n.setState({hovered:!0})},onMouseLeave:function(e){return n.setState({hovered:!1})}},o.a.createElement("div",{className:"fa fa-calendar shadow-blue p-2"}),o.a.createElement("div",null,s?o.a.createElement(c.a,null,o.a.createElement("input",{type:"text",value:l,onChange:function(e){return n.setState({val:e.target.value})}}),o.a.createElement(i.a,{addonType:"prepend"},o.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(){n.setState({isEditting:!1}),e.onProjectEditOk(r,n.state.val)}},"Ok"))):"".concat(t.name)),n.state.hovered?f:"")})},n.state={hovered:!1,isEditting:!1,val:e.project.name},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,o.a.Component),t}()},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(3),c=n(5),i=n(4),u=n.n(i),s=n(2),l=function(e){var t=e.className,n=e.cssModule,r=e.size,i=e.bordered,l=e.borderless,f=e.striped,p=e.inverse,d=e.dark,y=e.hover,m=e.responsive,b=e.tag,v=e.responsiveTag,h=e.innerRef,j=Object(c.a)(e,["className","cssModule","size","bordered","borderless","striped","inverse","dark","hover","responsive","tag","responsiveTag","innerRef"]),g=Object(s.g)(u()(t,"table",!!r&&"table-"+r,!!i&&"table-bordered",!!l&&"table-borderless",!!f&&"table-striped",!(!d&&!p)&&"table-dark",!!y&&"table-hover"),n),E=o.a.createElement(b,Object(a.a)({},j,{ref:h,className:g}));if(m){var O=!0===m?"table-responsive":"table-responsive-"+m;return o.a.createElement(v,{className:O},E)}return E};l.defaultProps={tag:"table",responsiveTag:"div"};var f=l,p=n(12),d=n(13),y=n(14);function m(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return h});var h=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=m(this,b(t).call(this,e))).render=function(){var e=n.props,t=e.project,r=e.projectIndex;return o.a.createElement("div",{className:"row justify-content-md-center"},o.a.createElement("div",{className:"col-md-8"},o.a.createElement(f,{className:"table-project"},o.a.createElement("caption",{align:"top"}," ",o.a.createElement(y.default,{project:t,projectIndex:r})," "),o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{colSpan:"4"}," ",o.a.createElement(d.default,{project:t})))),o.a.createElement("tbody",null,t.tasks.map(function(e,t){return o.a.createElement(p.default,{key:e.id,task:e,taskIndex:t,projectIndex:r})})))))},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,o.a.Component),t}()},function(e,t,n){"use strict";var r=n(3),o=n(5),a=n(8),c=n(6),i=n(0),u=n.n(i),s=n(4),l=n.n(s),f=n(2),p=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(c.a)(Object(c.a)(n))),n.focus=n.focus.bind(Object(c.a)(Object(c.a)(n))),n}Object(a.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,a=e.type,c=e.bsSize,i=e.state,s=e.valid,p=e.invalid,d=e.tag,y=e.addon,m=e.static,b=e.plaintext,v=e.innerRef,h=Object(o.a)(e,["className","cssModule","type","bsSize","state","valid","invalid","tag","addon","static","plaintext","innerRef"]),j=["radio","checkbox"].indexOf(a)>-1,g=new RegExp("\\D","g"),E=d||("select"===a||"textarea"===a?a:"input"),O="form-control";b||m?(O+="-plaintext",E=d||"input"):"file"===a?O+="-file":j&&(O=y?null:"form-check-input"),i&&"undefined"===typeof s&&"undefined"===typeof p&&("danger"===i?p=!0:"success"===i&&(s=!0)),h.size&&g.test(h.size)&&(Object(f.k)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=h.size,delete h.size);var k=Object(f.g)(l()(t,p&&"is-invalid",s&&"is-valid",!!c&&"form-control-"+c,O),n);return("input"===E||d&&"function"===typeof d)&&(h.type=a),!h.children||b||m||"select"===a||"string"!==typeof E||"select"===E||(Object(f.k)('Input with a type of "'+a+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),u.a.createElement(E,Object(r.a)({},h,{ref:v,className:k}))},t}(u.a.Component);p.defaultProps={type:"text"},t.a=p},function(e,t,n){"use strict";var r=n(3),o=n(5),a=n(0),c=n.n(a),i=n(4),u=n.n(i),s=n(2),l=function(e){var t=e.className,n=e.cssModule,a=e.tag,i=e.size,l=Object(o.a)(e,["className","cssModule","tag","size"]),f=Object(s.g)(u()(t,"input-group",i?"input-group-"+i:null),n);return c.a.createElement(a,Object(r.a)({},l,{className:f}))};l.defaultProps={tag:"div"},t.a=l},function(e,t,n){"use strict";var r=n(3),o=n(5),a=n(0),c=n.n(a),i=n(4),u=n.n(i),s=n(2),l=function(e){var t=e.className,n=e.cssModule,a=e.tag,i=Object(o.a)(e,["className","cssModule","tag"]),l=Object(s.g)(u()(t,"input-group-text"),n);return c.a.createElement(a,Object(r.a)({},i,{className:l}))};l.defaultProps={tag:"span"};var f=l,p=function(e){var t=e.className,n=e.cssModule,a=e.tag,i=e.addonType,l=e.children,p=Object(o.a)(e,["className","cssModule","tag","addonType","children"]),d=Object(s.g)(u()(t,"input-group-"+i),n);return"string"===typeof l?c.a.createElement(a,Object(r.a)({},p,{className:d}),c.a.createElement(f,{children:l})):c.a.createElement(a,Object(r.a)({},p,{className:d,children:l}))};p.defaultProps={tag:"div"};t.a=p},function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,c,i=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var s in n=Object(arguments[u]))o.call(n,s)&&(i[s]=n[s]);if(r){c=r(n);for(var l=0;l<c.length;l++)a.call(n,c[l])&&(i[c[l]]=n[c[l]])}}return i}},function(e,t){function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(o){"object"===("undefined"===typeof window?"undefined":n(window))&&(r=window)}e.exports=r},function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=n(19),a="function"===typeof Symbol&&Symbol.for,c=a?Symbol.for("react.element"):60103,i=a?Symbol.for("react.portal"):60106,u=a?Symbol.for("react.fragment"):60107,s=a?Symbol.for("react.strict_mode"):60108,l=a?Symbol.for("react.profiler"):60114,f=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,d=a?Symbol.for("react.concurrent_mode"):60111,y=a?Symbol.for("react.forward_ref"):60112,m=a?Symbol.for("react.suspense"):60113,b=a?Symbol.for("react.memo"):60115,v=a?Symbol.for("react.lazy"):60116,h="function"===typeof Symbol&&Symbol.iterator;function j(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,o,a,c,i){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,a,c,i],s=0;(e=Error(t.replace(/%s/g,function(){return u[s++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};function O(e,t,n){this.props=e,this.context=t,this.refs=E,this.updater=n||g}function k(){}function S(e,t,n){this.props=e,this.context=t,this.refs=E,this.updater=n||g}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){"object"!==r(e)&&"function"!==typeof e&&null!=e&&j("85"),this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=O.prototype;var w=S.prototype=new k;w.constructor=S,o(w,O.prototype),w.isPureReactComponent=!0;var _={current:null},x={current:null},P=Object.prototype.hasOwnProperty,T={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var r=void 0,o={},a=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)P.call(t,r)&&!T.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var s=Array(u),l=0;l<u;l++)s[l]=arguments[l+2];o.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:c,type:e,key:a,ref:i,props:o,_owner:x.current}}function N(e){return"object"===r(e)&&null!==e&&e.$$typeof===c}var R=/\/+/g,I=[];function A(e,t,n,r){if(I.length){var o=I.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function M(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>I.length&&I.push(e)}function $(e,t,n){return null==e?0:function e(t,n,o,a){var u=r(t);"undefined"!==u&&"boolean"!==u||(t=null);var s=!1;if(null===t)s=!0;else switch(u){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case c:case i:s=!0}}if(s)return o(a,t,""===n?"."+z(t,0):n),1;if(s=0,n=""===n?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){var f=n+z(u=t[l],l);s+=e(u,f,o,a)}else if(f=null===t||"object"!==r(t)?null:"function"===typeof(f=h&&t[h]||t["@@iterator"])?f:null,"function"===typeof f)for(t=f.call(t),l=0;!(u=t.next()).done;)s+=e(u=u.value,f=n+z(u,l++),o,a);else"object"===u&&j("31","[object Object]"===(o=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":o,"");return s}(e,"",t,n)}function z(e,t){return"object"===r(e)&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function F(e,t){e.func.call(e.context,t,e.count++)}function D(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,r,n,function(e){return e}):null!=e&&(N(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+n)),r.push(e))}function L(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(R,"$&/")+"/"),$(e,D,t=A(t,a,r,o)),M(t)}function q(){var e=_.current;return null===e&&j("307"),e}var U={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return L(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;$(e,F,t=A(null,null,t,n)),M(t)},count:function(e){return $(e,function(){return null},null)},toArray:function(e){var t=[];return L(e,t,null,function(e){return e}),t},only:function(e){return N(e)||j("143"),e}},createRef:function(){return{current:null}},Component:O,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:y,render:e}},lazy:function(e){return{$$typeof:v,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return q().useCallback(e,t)},useContext:function(e,t){return q().useContext(e,t)},useEffect:function(e,t){return q().useEffect(e,t)},useImperativeHandle:function(e,t,n){return q().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return q().useLayoutEffect(e,t)},useMemo:function(e,t){return q().useMemo(e,t)},useReducer:function(e,t,n){return q().useReducer(e,t,n)},useRef:function(e){return q().useRef(e)},useState:function(e){return q().useState(e)},Fragment:u,StrictMode:s,Suspense:m,createElement:C,cloneElement:function(e,t,n){(null===e||void 0===e)&&j("267",e);var r=void 0,a=o({},e.props),i=e.key,u=e.ref,s=e._owner;if(null!=t){void 0!==t.ref&&(u=t.ref,s=x.current),void 0!==t.key&&(i=""+t.key);var l=void 0;for(r in e.type&&e.type.defaultProps&&(l=e.type.defaultProps),t)P.call(t,r)&&!T.hasOwnProperty(r)&&(a[r]=void 0===t[r]&&void 0!==l?l[r]:t[r])}if(1===(r=arguments.length-2))a.children=n;else if(1<r){l=Array(r);for(var f=0;f<r;f++)l[f]=arguments[f+2];a.children=l}return{$$typeof:c,type:e.type,key:i,ref:u,props:a,_owner:s}},createFactory:function(e){var t=C.bind(null,e);return t.type=e,t},isValidElement:N,version:"16.8.4",unstable_ConcurrentMode:d,unstable_Profiler:l,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:_,ReactCurrentOwner:x,assign:o}},V={default:U},W=V&&U||V;e.exports=W.default||W},function(e,t,n){"use strict";var r=n(23);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,c){if(c!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}]);
//# sourceMappingURL=projectForm-54066bcbec63c28a844b.js.map