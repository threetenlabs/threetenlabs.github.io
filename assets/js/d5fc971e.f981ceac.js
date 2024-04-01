"use strict";(self.webpackChunkthreeten_labs_site=self.webpackChunkthreeten_labs_site||[]).push([[187],{2713:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var s=i(5893),t=i(1151);const l={id:"score",title:"Scoring",sidebar_label:"Scoring",slug:"/games/yass/score"},r=void 0,c={id:"games/yass/score",title:"Scoring",description:"Basic Scoring:",source:"@site/docs/games/yass/score.mdx",sourceDirName:"games/yass",slug:"/games/yass/score",permalink:"/games/yass/score",draft:!1,unlisted:!1,editUrl:"https://github.com/threetenlabs/threetenlabs/edit/master/docs/games/yass/score.mdx",tags:[],version:"current",lastUpdatedAt:1712006613,formattedLastUpdatedAt:"Apr 1, 2024",frontMatter:{id:"score",title:"Scoring",sidebar_label:"Scoring",slug:"/games/yass/score"},sidebar:"docs",previous:{title:"Game Play",permalink:"/games/yass/play"},next:{title:"FAQs",permalink:"/games/yass/faq"}},a={},o=[{value:"Basic Scoring:",id:"basic-scoring",level:3},{value:"Time Bonuses:",id:"time-bonuses",level:3},{value:"Hint Penalties:",id:"hint-penalties",level:3},{value:"Total Score Calculation:",id:"total-score-calculation",level:3},{value:"Variations:",id:"variations",level:3}];function d(n){const e={code:"code",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h3,{id:"basic-scoring",children:"Basic Scoring:"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Card Placement:"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"For each card placed in a foundation pile: +10 points."}),"\n",(0,s.jsx)(e.li,{children:"For each card placed in a tableau pile: +1 point."}),"\n",(0,s.jsx)(e.li,{children:"For each hint used: -2 points."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Suit Multiplier:"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"One Suit: x1 multiplier"}),"\n",(0,s.jsx)(e.li,{children:"Two Suit: x2 multiplier"}),"\n",(0,s.jsx)(e.li,{children:"Four Suit: x4 multiplier"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Completing a Suit:"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"One Suit: +100 points"}),"\n",(0,s.jsx)(e.li,{children:"Two Suit: +200 points"}),"\n",(0,s.jsx)(e.li,{children:"Four Suit: +400 points"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"time-bonuses",children:"Time Bonuses:"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Time Remaining:"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Calculate the time remaining after completing the game."}),"\n",(0,s.jsx)(e.li,{children:"Bonus points awarded based on time remaining."}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Example Bonus Points:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"0-5 minutes: +500 points"}),"\n",(0,s.jsx)(e.li,{children:"5-10 minutes: +400 points"}),"\n",(0,s.jsx)(e.li,{children:"10-15 minutes: +300 points"}),"\n",(0,s.jsx)(e.li,{children:"15-20 minutes: +200 points"}),"\n",(0,s.jsx)(e.li,{children:"20+ minutes: +100 points"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"hint-penalties",children:"Hint Penalties:"}),"\n",(0,s.jsx)(e.p,{children:"If hints are used during the game, apply a penalty to the final score. Each hint could subtract a certain number of points (e.g., -50 points per hint)."}),"\n",(0,s.jsx)(e.h3,{id:"total-score-calculation",children:"Total Score Calculation:"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"Total Score"})," = Card Placement Score + Completing a Suit Score + Time Bonus - Hint Penalties"]}),"\n",(0,s.jsx)(e.h3,{id:"variations",children:"Variations:"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Without Hints:"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Only the basic scoring and time bonuses apply."}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"With Hints:"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Introduce the hint penalty system as described above."}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},1151:(n,e,i)=>{i.d(e,{Z:()=>c,a:()=>r});var s=i(7294);const t={},l=s.createContext(t);function r(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);