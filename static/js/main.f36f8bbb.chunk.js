(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={wrapperCommon:"Statistics_wrapperCommon__3-RSz",wrapperLeft:"Statistics_wrapperLeft__3MnIu",posFeedback:"Statistics_posFeedback__3FCmM"}},,,function(e,t,n){e.exports={button:"ButtonListItem_button__1xb62"}},function(e,t,n){e.exports={section:"Section_section__2_e8N",title:"Section_title__2bqoq"}},,function(e,t,n){e.exports={list:"FeedbackOptions_list__2N9wS"}},function(e,t,n){e.exports={message:"Notification_message__1OiPI"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(7),r=n.n(s),o=(n(14),n(3)),i=n(2),b=n.n(i),l=n(0),u=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,s=e.percentage;return 0!==a&&Object(l.jsxs)("div",{className:b.a.wrapperCommon,children:[Object(l.jsxs)("div",{className:b.a.wrapperRigth,children:[Object(l.jsxs)("p",{children:["Good: ",t]}),Object(l.jsxs)("p",{children:["Neutral: ",n]}),Object(l.jsxs)("p",{children:["Bad: ",c]}),Object(l.jsxs)("p",{children:["Total: ",a]})]}),Object(l.jsx)("div",{className:b.a.wrapperLeft,children:Object(l.jsxs)("p",{className:b.a.posFeedback,children:["Positive feedback: ",s||0,"%"]})})]})},j=n(8),d=n.n(j),p=n(5),m=n.n(p),O=function(e){var t=e.name,n=e.onLeaveFeedback;return Object(l.jsx)("li",{className:m.a.listItem,children:Object(l.jsx)("button",{className:m.a.button,type:"button",name:t,onClick:function(){return n(t)},children:t})})},h=function(e){var t=e.nameButtons,n=e.onLeaveFeedback;return Object(l.jsx)("ul",{className:d.a.list,children:t.map((function(e){return Object(l.jsx)(O,{name:e,onLeaveFeedback:n},e)}))})},f=n(6),x=n.n(f),_=function(e){var t=e.title,n=e.children;return Object(l.jsxs)("section",{className:x.a.section,children:[Object(l.jsx)("h1",{className:x.a.title,children:t}),n]})},k=n(9),g=n.n(k),v=function(e){var t=e.message,n=e.total;return Object(l.jsx)(l.Fragment,{children:0===n&&Object(l.jsx)("h2",{className:g.a.message,children:t})})};function N(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(0),r=Object(o.a)(s,2),i=r[0],b=r[1],j=Object(c.useState)(0),d=Object(o.a)(j,2),p=d[0],m=d[1],O={good:n,neutral:i,bad:p},f=function(){return Object.values(O).reduce((function(e,t){return e+t}))},x=Object.keys(O);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(_,{title:"Please leave feedback",children:Object(l.jsx)(h,{nameButtons:x,onLeaveFeedback:function(e){switch(e){case"good":a((function(e){return e+1}));break;case"neutral":b((function(e){return e+1}));break;case"bad":m((function(e){return e+1}));break;default:alert("\u043d\u0435\u0442 \u0442\u0430\u043a\u043e\u0439 \u043a\u043d\u043e\u043f\u043a\u0438")}}})}),Object(l.jsxs)(_,{title:"Statistics",children:[Object(l.jsx)(u,{good:n,neutral:i,bad:p,total:f(),percentage:Math.round(n/f()*100)}),Object(l.jsx)(v,{message:"No feedback given",total:f()})]})]})}r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.f36f8bbb.chunk.js.map