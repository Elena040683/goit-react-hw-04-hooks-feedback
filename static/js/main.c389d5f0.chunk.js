(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={list:"Statistics_list__3k-4S",item:"Statistics_item__3X9aV"}},function(e,t,n){e.exports={btn:"FeedbackOptions_btn__PieYH"}},,,,function(e,t,n){e.exports={container:"App_container__2UJEH"}},function(e,t,n){e.exports={section:"Section_section__3JslA",title:"Section_title__28_KF"}},function(e,t,n){e.exports={message:"NotificationMessage_message__3CJYl"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(6),i=n.n(s),r=(n(14),n(4)),o=n(7),l=n.n(o),u=n(3),b=n.n(u),j=n(0),d=function(e){var t=e.options;return Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:b.a.btn,name:"good",type:"button",onClick:t,children:"Good"}),Object(j.jsx)("button",{className:b.a.btn,name:"neutral",type:"button",onClick:t,children:"Neutral"}),Object(j.jsx)("button",{className:b.a.btn,name:"bad",type:"button",onClick:t,children:"Bad"})]})},m=n(2),O=n.n(m);var h=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,s=e.positivePercentage;return Object(j.jsxs)("ul",{className:O.a.list,children:[Object(j.jsxs)("li",{className:O.a.item,children:["Good: ",t]}),Object(j.jsxs)("li",{className:O.a.item,children:["Neutral: ",n]}),Object(j.jsxs)("li",{className:O.a.item,children:["Bad: ",c]}),Object(j.jsxs)("li",{className:O.a.item,children:["Total: ",a]}),Object(j.jsxs)("li",{className:O.a.item,children:["Positive feedback: ",s,"%"]})]})},x=n(8),f=n.n(x);var _=function(e){var t=e.title,n=e.children;return Object(j.jsxs)("section",{className:f.a.section,children:[Object(j.jsx)("h2",{children:t}),n]})},p=n(9),g=n.n(p);var v=function(e){var t=e.message;return Object(j.jsx)("p",{className:g.a.message,children:t})};function N(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(0),i=Object(r.a)(s,2),o=i[0],u=i[1],b=Object(c.useState)(0),m=Object(r.a)(b,2),O=m[0],x=m[1],f={good:n,neutral:o,bad:O};function p(){return Object.values(f).reduce((function(e,t){return e+t}),0)}return Object(j.jsxs)("div",{className:l.a.container,children:[Object(j.jsx)(_,{title:"Please leave feedback",children:Object(j.jsx)(d,{options:function(e){switch(e.target.name){case"good":return a((function(e){return e+1}));case"neutral":return u((function(e){return e+1}));case"bad":return x((function(e){return e+1}));default:return}}})}),Object(j.jsx)(_,{title:"Statistics",children:p()?Object(j.jsx)(h,{good:n,neutral:o,bad:O,total:p(),positivePercentage:Math.round(n/p()*100)||0}):Object(j.jsx)(v,{message:"No feedback given"})})]})}i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.c389d5f0.chunk.js.map