"use strict";(self.webpackChunkcode_it_fs_5th_til=self.webpackChunkcode_it_fs_5th_til||[]).push([[6257],{428:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"\ucd5c\uc740\ube44/25.03/React-Context","title":"React-Context","description":"- Props Drilling \uc5c6\uc774 \uc804\uc5ed \uc0c1\ud0dc\ub97c \uacf5\uc720\ud560 \uc218 \uc788\ub294 \ubc29\ubc95.","source":"@site/docs/\ucd5c\uc740\ube44/25.03/React-Context.md","sourceDirName":"\ucd5c\uc740\ube44/25.03","slug":"/\ucd5c\uc740\ube44/25.03/React-Context","permalink":"/TIL/docs/\ucd5c\uc740\ube44/25.03/React-Context","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\ucd5c\uc740\ube44/25.03/React-Context.md","tags":[],"version":"current","frontMatter":{},"sidebar":"TILSidebar","previous":{"title":"Optional-Chaining","permalink":"/TIL/docs/\ucd5c\uc740\ube44/25.03/Optional-Chaining"}}');var r=t(4848),o=t(8453);const l={},c=void 0,i={},d=[{value:"\uc0ac\uc6a9\ubc95",id:"\uc0ac\uc6a9\ubc95",level:2},{value:"\uc0ac\uc6a9 \uc608\uc2dc",id:"\uc0ac\uc6a9-\uc608\uc2dc",level:2},{value:"\uc5b8\uc81c \uc0ac\uc6a9\ud558\ub098?",id:"\uc5b8\uc81c-\uc0ac\uc6a9\ud558\ub098",level:3},{value:"\uc8fc\uc758\ud560 \uc810",id:"\uc8fc\uc758\ud560-\uc810",level:3}];function a(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Props Drilling \uc5c6\uc774 ",(0,r.jsx)(n.strong,{children:"\uc804\uc5ed \uc0c1\ud0dc"}),"\ub97c \uacf5\uc720\ud560 \uc218 \uc788\ub294 \ubc29\ubc95."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"createContext()"}),"\uc640 ",(0,r.jsx)(n.code,{children:"useContext()"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \uad6c\ud604."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\uc0ac\uc6a9\ubc95",children:"\uc0ac\uc6a9\ubc95"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Context \uc0dd\uc131"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"const MyContext = createContext(defaultValue);\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"createContext()"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec Context\ub97c \ub9cc\ub4e0\ub2e4."]}),"\n",(0,r.jsx)(n.li,{children:"\uae30\ubcf8\uac12\uc744 \uc124\uc815\ud560 \uc218 \uc788\ub2e4."}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Provider\ub85c \uac12 \uacf5\uae09"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"<MyContext.Provider value={sharedValue}>\n  {children}\n</MyContext.Provider>\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Provider"}),"\ub97c \ud1b5\ud574 \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uac12\uc744 \uc804\ub2ec\ud55c\ub2e4."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"useContext\ub85c \uac12 \uc0ac\uc6a9"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"const value = useContext(MyContext);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\uc0ac\uc6a9-\uc608\uc2dc",children:"\uc0ac\uc6a9 \uc608\uc2dc"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'const MyContext = createContext();\n\nconst MyProvider = ({ children }) => {\n  const [value, setValue] = useState("Hello");\n\n  return (\n    <MyContext.Provider value={{ value, setValue }}>\n      {children}\n    </MyContext.Provider>\n  );\n};\n\nconst MyComponent = () => {\n  const { value, setValue } = useContext(MyContext);\n\n  return (\n    <div>\n      <p>{value}</p>\n      <button onClick={() => setValue("Hi!")}>Change Value</button>\n    </div>\n  );\n};\n\n//MyProvider\uc5d0\uc11c \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud558\uace0, MyComponent\uc5d0\uc11c useContext\ub85c \uac12\uc744 \uac00\uc838\uc640 \uc0ac\uc6a9\ud55c\ub2e4.\n//\ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uba74 Context \uac12\uc744 \uc5c5\ub370\uc774\ud2b8\ud560 \uc218 \uc788\ub2e4.\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\uc5b8\uc81c-\uc0ac\uc6a9\ud558\ub098",children:"\uc5b8\uc81c \uc0ac\uc6a9\ud558\ub098?"}),"\n",(0,r.jsxs)(n.p,{children:["\u2705 ",(0,r.jsx)(n.strong,{children:"\uc804\uc5ed \uc0c1\ud0dc \uad00\ub9ac"})," \u2192 \ud14c\ub9c8, \uc0ac\uc6a9\uc790 \uc778\uc99d \uc0c1\ud0dc \ub4f1 \uc5ec\ub7ec \ucef4\ud3ec\ub10c\ud2b8\uac00 \uacf5\uc720\ud574\uc57c \ud560 \ub54c."]}),"\n",(0,r.jsxs)(n.p,{children:["\u2705 ",(0,r.jsx)(n.strong,{children:"\uae4a\uc740 \ud2b8\ub9ac\uc5d0\uc11c\uc758 \ub370\uc774\ud130 \uc804\ub2ec"})," \u2192 props\ub97c \uc5ec\ub7ec \ub2e8\uacc4 \uc804\ub2ec\ud558\ub294 \ub300\uc2e0 Context\ub85c \ud574\uacb0."]}),"\n",(0,r.jsx)(n.h3,{id:"\uc8fc\uc758\ud560-\uc810",children:"\uc8fc\uc758\ud560 \uc810"}),"\n",(0,r.jsxs)(n.p,{children:["\u26a0\ufe0f ",(0,r.jsx)(n.strong,{children:"\ubd88\ud544\uc694\ud55c \ub9ac\ub80c\ub354\ub9c1"})," \u2192 \ub108\ubb34 \ub9ce\uc740 \ub370\uc774\ud130\ub97c Context\uc5d0 \ub123\uc73c\uba74 \uc131\ub2a5 \uc800\ud558 \uac00\ub2a5."]}),"\n",(0,r.jsxs)(n.p,{children:["\u26a0\ufe0f ",(0,r.jsx)(n.strong,{children:"\uc0c1\ud0dc \uad00\ub9ac \ub77c\uc774\ube0c\ub7ec\ub9ac\uc640 \ube44\uad50"})," \u2192 Redux, Recoil, Zustand \ub4f1\uc774 \ub354 \uc801\ud569\ud55c \uacbd\uc6b0\ub3c4 \uc788\uc74c."]})]})}function x(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var s=t(6540);const r={},o=s.createContext(r);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);