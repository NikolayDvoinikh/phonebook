"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[651],{1651:function(e,a,n){n.r(a),n.d(a,{default:function(){return c}});var t=n(1413),r=n(158),l={name:"",email:"",password:""},i={name:{name:"name",type:"text",required:!0,label:"User name",placeholder:"User name"},email:{name:"email",type:"email",required:!0,label:"User email",placeholder:"User email"},password:{name:"password",type:"password",required:!0,label:"User password",placeholder:"User password"}},s=n(1424),u={},o=n(3329),m=function(e){var a=e.onSubmit,n=(0,r.Z)({initialState:l,onSubmit:a}),m=n.state,d=n.handleChange,h=n.handleSubmit,c=m.name,p=m.email,Z=m.password;return(0,o.jsxs)("form",{onSubmit:h,className:u.auth_form,children:[(0,o.jsx)(s.Z,(0,t.Z)((0,t.Z)({},i.name),{},{onChange:d,value:c})),(0,o.jsx)(s.Z,(0,t.Z)((0,t.Z)({},i.email),{},{onChange:d,value:p})),(0,o.jsx)(s.Z,(0,t.Z)((0,t.Z)({},i.password),{},{onChange:d,value:Z})),(0,o.jsx)("button",{type:"submit",children:"Register"})]})},d=n(8724),h=n(9434),c=function(){var e=(0,h.I0)();return(0,o.jsx)("div",{children:(0,o.jsx)(m,{onSubmit:function(a){e((0,d.IU)(a))}})})}},1424:function(e,a,n){var t=n(1413),r=n(5987),l=n(5984),i=n(2791),s=n(4760),u=n(3329),o=["label","handleChange"];a.Z=function(e){var a=e.label,n=e.handleChange,m=(0,r.Z)(e,o),d=(0,i.useMemo)((function(){return(0,l.x0)()}),[]);return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("label",{htmlFor:d,children:(0,u.jsx)(s.Z,(0,t.Z)({sx:{width:"100%",padding:"10px 0"},label:a,variant:"standard",id:d,onChange:n},m))})})}},158:function(e,a,n){var t=n(4942),r=n(1413),l=n(9439),i=n(2791);a.Z=function(e){var a=e.onSubmit,n=e.initialState,s=(0,i.useState)((0,r.Z)({},n)),u=(0,l.Z)(s,2),o=u[0],m=u[1],d=(0,i.useCallback)((function(e){var a=e.target,n=a.name,l=a.value;m((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,t.Z)({},n,l))}))}),[m]);return{state:o,setState:m,handleChange:d,handleSubmit:function(e){e.preventDefault(),a((0,r.Z)({},o)),m((0,r.Z)({},n))}}}}}]);
//# sourceMappingURL=651.bb835d79.chunk.js.map