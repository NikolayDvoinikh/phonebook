"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[116],{116:function(e,n,t){t.r(n),t.d(n,{default:function(){return $}});var a=t(4942),r=t(1413),i=t(9439),o=t(9434),s=t(2086),c=function(e){return e.contacts.contacts},d=function(e){var n=e.contacts,t=e.filter;return n.contacts.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},u=function(e){return e.contacts.isLoading},l=function(e){return e.contacts.error},m=t(2791),x={name:"",number:""},h="ContactForm_btnSubmit__ViR7y",f="ContactForm_loadBtn__acNQ2",p="ContactForm_loading__p9nXE",b=t(8870),v=t(6203),Z=t(184),g=function(){var e=(0,m.useState)((0,r.Z)({},x)),n=(0,i.Z)(e,2),t=n[0],d=n[1],g=t.name,j=t.number,C=(0,o.v9)(c),y=(0,o.v9)(u),_=(0,o.v9)(l),w=(0,o.I0)(),k=function(e){var n=e.target,t=n.name,i=n.value;d((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,a.Z)({},t,i))}))};(0,m.useEffect)((function(){!y&&!_&&d((0,r.Z)({},x))}),[y,_]);var L=!g||!j||y;return(0,Z.jsxs)(b.Z,{ml:"auto",mr:"auto",sx:{maxWidth:"300px",border:"2px solid",padding:"40px"},component:"form",onSubmit:function(e){return e.preventDefault(),C.filter((function(e){return e.name.toLowerCase()===g.toLowerCase()})).length?alert("".concat(g," is already in contacts")):C.filter((function(e){return e.number===j})).length?alert("".concat(j," is already in contacts")):void w((0,s.v6)((0,r.Z)({},t)))},children:[(0,Z.jsx)(v.Z,{sx:{width:"100%",padding:"10px 0"},id:"standard-required",label:"Name",variant:"standard",onChange:k,value:g,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,Z.jsx)(v.Z,{sx:{width:"100%",padding:"10px 0"},id:"standard-required",label:"Number",variant:"standard",onChange:k,value:j,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,Z.jsx)("button",{className:h,type:"submit",disabled:L,children:y?(0,Z.jsxs)("div",{className:f,children:[(0,Z.jsx)("div",{className:p}),"Loading..."]}):"Add contact "})]})},j="modal_modal_backdrop__e5IYj",C="modal_modal_body__Rj2G2",y=t(4164),_=t(6739),w=document.querySelector("#modal-root"),k=function(e){var n=e.close,t=e.children,a=(0,m.useCallback)((function(e){var t=e.target,a=e.currentTarget,r=e.code;t!==a&&"Escape"!==r||n()}),[n]);return(0,m.useEffect)((function(){return document.addEventListener("keydown",a),function(){document.removeEventListener("keydown",a)}}),[a]),(0,y.createPortal)((0,Z.jsx)(b.Z,{className:j,onClick:a,children:(0,Z.jsxs)("div",{className:C,children:[(0,Z.jsx)(_.Z,{onClick:a,color:"secondary",sx:{cursor:"pointer",padding:"10px"}}),t]})}),w)},L={name:{name:"name",type:"text",required:!0,label:"Contact name",placeholder:"Contact name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"},number:{name:"number",type:"tel",required:!0,label:"Contact number",placeholder:"Contact number",pattern:"+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}},A=t(1424),N=t(5021),E=t(6278),F=t(6259),S=t(3400),z=t(6151),q=t(493),P=t(890),W=t(7483),B=t(9276),D=function(){var e=(0,m.useState)(!1),n=(0,i.Z)(e,2),t=n[0],l=n[1],x=(0,m.useState)(!1),h=(0,i.Z)(x,2),f=h[0],p=h[1],b=(0,m.useState)(""),v=(0,i.Z)(b,2),g=v[0],j=v[1],C=(0,o.I0)(),y=(0,o.v9)(u);(0,m.useEffect)((function(){C((0,s.CL)())}),[C]);var _=(0,o.v9)(d),w=(0,o.v9)(c),D=(0,m.useState)({name:"",number:""}),I=(0,i.Z)(D,2),J=I[0],M=I[1],R=function(){l((function(e){return!e}))},T=(0,m.useCallback)((function(e){var n=e.target,t=n.name,i=n.value;M((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,a.Z)({},t,i))}))}),[M]),$=function(){return p((function(e){return!e}))},G=_.map((function(e){var n,t,a=e.id,r=e.name,i=e.number;return(0,Z.jsx)(N.ZP,{disablePadding:!0,sx:{margin:"0",borderBottom:"1px solid"},children:(0,Z.jsxs)(E.Z,{sx:{margin:"0",cursor:"default"},children:[(0,Z.jsx)(F.Z,{primary:"".concat(r,": ").concat(i)}),(0,Z.jsxs)(B.Z,{children:[(0,Z.jsx)(S.Z,{sx:{marginRight:"5px"},id:a,disabled:y,type:"button",onClick:function(){return function(e){j(e),$()}(a)},children:(0,Z.jsx)(W.Z,{color:(n="inherit",t="secondary",y?n:t)})}),(0,Z.jsx)(z.Z,{variant:"outlined",id:a,disabled:y,type:"button",onClick:function(){return function(e,n,t){j(e),M({name:n,number:t}),R()}(a,r,i)},children:"Edit"})]})]})},a)}));return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(q.Z,{sx:{width:"100%",maxWidth:360,margin:"0 auto",maxHeight:"200px",overflow:"auto"},children:[G,f&&(0,Z.jsx)(k,{close:$,children:(0,Z.jsxs)(B.Z,{display:"flex",flexDirection:"column",justifyContent:"space-around",children:[(0,Z.jsx)(P.Z,{color:"primary",children:"Are you shure?"}),(0,Z.jsx)(z.Z,{type:"button",onClick:function(){C((0,s.in)(g)),$(),j("")},sx:{color:"red"},children:"DELETE"})]})}),t&&(0,Z.jsx)(k,{close:R,children:(0,Z.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=w.every((function(e){var n=e.name,t=e.id;return J.name.toLowerCase()!==n.toLowerCase()||g===t})),t=w.every((function(e){var n=e.number,t=e.id;return n!==J.number||t===g}));if(!n)return alert("Name is already exist!!!");if(!t)return alert("Number is already exist!!!");var a={name:J.name,number:J.number};C((0,s.KJ)({id:g,data:a})),R(),j("")},children:[(0,Z.jsx)(A.Z,(0,r.Z)((0,r.Z)({},L.name),{},{onChange:T,value:J.name})),(0,Z.jsx)(A.Z,(0,r.Z)((0,r.Z)({},L.number),{},{onChange:T,value:J.number})),(0,Z.jsx)(z.Z,{variant:"outlined",type:"submit",sx:{margin:"10px auto",display:"flex"},children:"Update"})]})})]})})},I=D;D.defaultProps={filteredList:[]};var J=t(5653),M=function(e){return e.filter},R=function(){var e=(0,o.I0)(),n=(0,o.v9)(M);return(0,Z.jsx)(B.Z,{sx:{maxWidth:"320px",width:"100%",margin:"0 auto"},children:(0,Z.jsx)("label",{htmlFor:"filter",children:(0,Z.jsx)(A.Z,{placeholder:"Find contacts by name",label:"Find contacts by name",value:n,type:"text",name:"filter",onChange:function(n){var t=n.target;return e((0,J.T)(t.value))}})})})},T=t(1614),$=function(){return(0,Z.jsxs)(T.Z,{children:[(0,Z.jsx)(P.Z,{variant:"h1",align:"center",sx:{fontWeight:700,padding:3,fontSize:"32px"},children:"Phonebook"}),(0,Z.jsx)(g,{}),(0,Z.jsx)(P.Z,{variant:"h2",align:"center",sx:{fontWeight:500,padding:2,fontSize:"28px"},children:"Contacts"}),(0,Z.jsx)(R,{}),(0,Z.jsx)(I,{})]})}},1424:function(e,n,t){var a=t(1413),r=t(5987),i=t(5984),o=t(2791),s=t(6203),c=t(184),d=["label","handleChange"];n.Z=function(e){var n=e.label,t=e.handleChange,u=(0,r.Z)(e,d),l=(0,o.useMemo)((function(){return(0,i.x0)()}),[]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("label",{htmlFor:l,children:(0,c.jsx)(s.Z,(0,a.Z)({sx:{width:"100%",padding:"10px 0"},label:n,variant:"standard",id:l,onChange:t},u))})})}}}]);
//# sourceMappingURL=116.bd110469.chunk.js.map