(this["webpackJsonptodos-list"]=this["webpackJsonptodos-list"]||[]).push([[0],{19:function(e,t,s){},20:function(e,t,s){},30:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),l=s(13),n=s.n(l),o=(s(19),s(20),s(8)),r=s(0);function i(e){return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)(o.b,{className:"navbar-brand",to:"/",children:e.title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.b,{className:"nav-link",to:"/about",children:"About"})})]}),e.searchBar?Object(r.jsxs)("form",{className:"d-flex",children:[Object(r.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(r.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}):""]})]})})}i.defaultProps={title:"Your Title Here",searchBar:!0};const d=e=>{let{todo:t,onDelete:s}=e;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:t.title}),Object(r.jsx)("p",{children:t.desc}),Object(r.jsx)("button",{className:"btn btn-sm btn-danger",onClick:()=>{s(t)},children:"Delete"})]}),Object(r.jsx)("hr",{})]})},b=e=>Object(r.jsxs)("div",{className:"container",style:{minHeight:"70vh",margin:"40px auto"},children:[Object(r.jsx)("h3",{className:"my-3",children:"Todos List"}),0===e.todos.length?"No Todos to display":e.todos.map((t=>(console.log(t.sno),Object(r.jsx)(d,{todo:t,onDelete:e.onDelete},t.sno))))]}),j=()=>Object(r.jsx)("footer",{className:"bg-dark text-light py-3",children:Object(r.jsx)("p",{className:"text-center",children:"Copyright \xa9 MyTodosList.com"})}),h=e=>{let{addTodo:t}=e;const[s,c]=Object(a.useState)(""),[l,n]=Object(a.useState)("");return Object(r.jsxs)("div",{className:"container my-3",children:[Object(r.jsx)("h3",{children:"Add a Todo"}),Object(r.jsxs)("form",{onSubmit:e=>{e.preventDefault(),s&&l?(t(s,l),c(""),n("")):alert("Title or Description cannot be blank")},children:[Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{htmlFor:"title",className:"form-label",children:"Todo Title"}),Object(r.jsx)("input",{type:"text",value:s,onChange:e=>c(e.target.value),className:"form-control",id:"title","aria-describedby":"emailHelp"})]}),Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{htmlFor:"desc",className:"form-label",children:"Todo Description"}),Object(r.jsx)("input",{type:"text",value:l,onChange:e=>n(e.target.value),className:"form-control",id:"desc"})]}),Object(r.jsx)("button",{type:"submit",className:"btn btn-sm btn-success",children:"Add Todo"})]})]})},m=()=>Object(r.jsxs)("div",{children:["This is an about component",Object(r.jsx)("p",{children:"this project is a todo list application built with React.js. It allows users to add, delete, and update tasks, and it saves these tasks to the browser's local storage. The application is styled using HTML and CSS and javascript?"})]});var x=s(2);var O=function(){let e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));const t=e=>{console.log("I am ondelete of todo",e),l(c.filter((t=>t!==e))),console.log("deleted",c),localStorage.setItem("todos",JSON.stringify(c))},s=(e,t)=>{let s;console.log("I am adding this todo",e,t),s=0===c.length?0:c[c.length-1].sno+1;const a={sno:s,title:e,desc:t};l([...c,a]),console.log(a)},[c,l]=Object(a.useState)(e);return Object(a.useEffect)((()=>{localStorage.setItem("todos",JSON.stringify(c))}),[c]),Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(o.a,{children:[Object(r.jsx)(i,{title:"My Todos List",searchBar:!1}),Object(r.jsxs)(x.c,{children:[Object(r.jsx)(x.a,{exact:!0,path:"/",render:()=>Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(h,{addTodo:s}),Object(r.jsx)(b,{todos:c,onDelete:t})]})}),Object(r.jsx)(x.a,{exact:!0,path:"/about",children:Object(r.jsx)(m,{})})]}),Object(r.jsx)(j,{})]})})};var u=e=>{e&&e instanceof Function&&s.e(3).then(s.bind(null,31)).then((t=>{let{getCLS:s,getFID:a,getFCP:c,getLCP:l,getTTFB:n}=t;s(e),a(e),c(e),l(e),n(e)}))};n.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root")),u()}},[[30,1,2]]]);
//# sourceMappingURL=main.bda83d50.chunk.js.map