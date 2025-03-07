"use strict";(self.webpackChunkcode_it_fs_5th_til=self.webpackChunkcode_it_fs_5th_til||[]).push([[4274],{6078:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>a,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"\uae40\uc2b9\uc6b0/25.03/250307","title":"250307","description":"\ubc30\uc6b4 \ub0b4\uc6a9","source":"@site/docs/\uae40\uc2b9\uc6b0/25.03/250307.md","sourceDirName":"\uae40\uc2b9\uc6b0/25.03","slug":"/\uae40\uc2b9\uc6b0/25.03/250307","permalink":"/TIL/docs/\uae40\uc2b9\uc6b0/25.03/250307","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\uae40\uc2b9\uc6b0/25.03/250307.md","tags":[],"version":"current","frontMatter":{},"sidebar":"TILSidebar","previous":{"title":"250306","permalink":"/TIL/docs/\uae40\uc2b9\uc6b0/25.03/250306"},"next":{"title":"\ubbfc\uc9c0\uc601","permalink":"/TIL/docs/\ubbfc\uc9c0\uc601/"}}');var c=t(4848),r=t(8453);const o={},i=void 0,d={},l=[{value:"\ubc30\uc6b4 \ub0b4\uc6a9",id:"\ubc30\uc6b4-\ub0b4\uc6a9",level:2},{value:"Zustand",id:"zustand",level:3},{value:"\ucc38\uc870 \uc790\ub8cc",id:"\ucc38\uc870-\uc790\ub8cc",level:2},{value:"\uc624\ub298 \ubcf8 \uc778\uc0ac\uc774\ud2b8",id:"\uc624\ub298-\ubcf8-\uc778\uc0ac\uc774\ud2b8",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"\ubc30\uc6b4-\ub0b4\uc6a9",children:"\ubc30\uc6b4 \ub0b4\uc6a9"}),"\n",(0,c.jsx)(n.h3,{id:"zustand",children:"Zustand"}),"\n",(0,c.jsx)(n.p,{children:"\uae30\ubcf8 \uc0ac\uc6a9\ubc95"}),"\n",(0,c.jsx)(n.p,{children:"store \uc0dd\uc131"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-typescript",children:"interface CounterState {\n  count: number;\n  increment: () => void;\n  decrement: () => void;\n}\n\nconst useCounterStore = create<CounterState>((set) => ({\n  count: 0,\n  increment: () => set({ count: 1 }),\n  decrement: () => set({ count: -1 }),\n}));\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"use\uc774\ub984Store"})," \ub77c\uace0 \uc774\ub984\uc744 \uc9c0\uc5b4 \uc8fc\uc5b4\uc57c \ud568."]}),"\n",(0,c.jsxs)(n.li,{children:["count \ub294 ",(0,c.jsx)(n.code,{children:"\uc0c1\ud0dc"}),", \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud558\ub294 \ud568\uc218\ub4e4\uc740 ",(0,c.jsx)(n.code,{children:"\uc561\uc158"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc0ac\uc6a9"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-typescript",children:"function component() {\n//   const { count, increment, decrement } = useCounterStore();\n  const count = useCounterStore((state) => state.count);\n  const increment = useCounterStore((state) => state.increment);\n  const decrement = useCounterStore((state) => state.decrement);\n\n  return (\n    <div>\n      <p>{count}</p>\n      <button onClick={increment}>Increment</button>\n      <button onClick={decrement}>Decrement</button>\n    </div>\n  );\n}\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["store\uc758 \uc0c1\ud0dc(",(0,c.jsx)(n.code,{children:"count"}),")\uc744 \uc0ac\uc6a9\ud558\ub294 \uacf3\uc774\uba74 \uc0c1\ud0dc\uac00 \ubc14\ub00c\ub294 \uac83\uc774 \uac10\uc9c0 \ub418\uc5b4 \ubaa8\ub4e0 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub2e4\uc2dc \uadf8\ub824\uc9d0."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"useCounterStore()"})," \uc744 \ud1b5\uc9f8\ub85c \uc0ac\uc6a9\ud558\ub294 \uac83 \ubcf4\ub2e4 \uc0ac\uc6a9\ud560 \uc0c1\ud0dc\uac00 \uc561\uc158\ub9cc \ubd84\ub9ac\ud574\uc11c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc74c.","\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\ud1b5\uc9f8\ub85c \uc0ac\uc6a9\ub418\uba74 \ub2e4\ub978 \uc0c1\ud0dc\ub4e4\uc744 \uc0ac\uc6a9\ud558\ub294 \uacf3\uc5d0\uc11c\ub3c4 \ub2e4\uc2dc \uadf8\ub824\uc9d0 \u2192 \ub9ac\uc18c\uc2a4\uac00 \ub0ad\ube44\ub428."}),"\n",(0,c.jsx)(n.li,{}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\ucc38\uc870-\uc790\ub8cc",children:"\ucc38\uc870 \uc790\ub8cc"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://www.heropy.dev/p/n74Tgc",children:"Zustand \ud55c\uae00\ub85c \uc815\ub9ac"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://www.youtube.com/watch?v=_ngCLZ5Iz-0",children:"\ud574\uc678 \uc720\ud29c\ubc84 \uc601\uc0c1"})}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\uc624\ub298-\ubcf8-\uc778\uc0ac\uc774\ud2b8",children:"\uc624\ub298 \ubcf8 \uc778\uc0ac\uc774\ud2b8"}),"\n",(0,c.jsx)(n.p,{children:"\ub290\ub08c\uc788\ub294 \ud504\ub85c\ud544 \ub9cc\ub4e4\uc5b4 \uc8fc\ub294 \uc0ac\uc774\ud2b8 - 23\ub144 5\uc6d4 \ub9c1\ud06c\ud2b8\ub9ac\uc5d0 \uc778\uc218"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://bento.me/home",children:"https://bento.me/home"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(6540);const c={},r=s.createContext(c);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);