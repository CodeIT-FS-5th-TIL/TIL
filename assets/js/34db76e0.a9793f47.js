"use strict";(self.webpackChunkcode_it_fs_5th_til=self.webpackChunkcode_it_fs_5th_til||[]).push([[1364],{932:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>h,contentTitle:()=>d,default:()=>j,frontMatter:()=>c,metadata:()=>i,toc:()=>t});const i=JSON.parse('{"id":"\uae40\ubbfc\ud76c/25.02/250227","title":"250227","description":"\uc774 \ub0a0 \uc5b4\uc9c0\ub7fc\uc99d\uc774 \uc9c0\uc18d\ub3fc\uc11c \uc2a4\ud504\ub9b0\ud2b8\ub97c \uacb0\uc11d\ud588\ub2e4. \ubab8\uc774 \uc880 \uad1c\ucc2e\uc544\uc9c0\uace0 \ub098\uc11c AI\ub791 \uac19\uc774 React Query\ub97c \uacf5\ubd80\ud588\ub2e4.","source":"@site/docs/\uae40\ubbfc\ud76c/25.02/250227.md","sourceDirName":"\uae40\ubbfc\ud76c/25.02","slug":"/\uae40\ubbfc\ud76c/25.02/250227","permalink":"/TIL/docs/\uae40\ubbfc\ud76c/25.02/250227","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\uae40\ubbfc\ud76c/25.02/250227.md","tags":[],"version":"current","frontMatter":{},"sidebar":"TILSidebar","previous":{"title":"router.push\uc758 options \u2014 shallow: true","permalink":"/TIL/docs/\uae40\ubbfc\ud76c/25.02/250226"},"next":{"title":"\uae40\uc2b9\uc6b0","permalink":"/TIL/docs/\uae40\uc2b9\uc6b0/"}}');var s=l(4848),r=l(8453);const c={},d="React Query \ud575\uc2ec \uac1c\ub150",h={},t=[{value:"1. queryKey - \ub370\uc774\ud130 \uc2dd\ubcc4\uc790",id:"1-querykey---\ub370\uc774\ud130-\uc2dd\ubcc4\uc790",level:2},{value:"2. \ub370\uc774\ud130 \uc2e0\uc120\ub3c4 \uad00\ub9ac",id:"2-\ub370\uc774\ud130-\uc2e0\uc120\ub3c4-\uad00\ub9ac",level:2},{value:"staleTime(\uc2e0\uc120\ub3c4 \uc2dc\uac04)",id:"staletime\uc2e0\uc120\ub3c4-\uc2dc\uac04",level:3},{value:"cacheTime(\uce90\uc2dc \uc720\uc9c0 \uae30\uac04)",id:"cachetime\uce90\uc2dc-\uc720\uc9c0-\uae30\uac04",level:3},{value:"3. \ub370\uc774\ud130 \uc0c1\ud0dc",id:"3-\ub370\uc774\ud130-\uc0c1\ud0dc",level:2},{value:"4. \uce90\uc2dc \ub3d9\uc791 \ubc29\uc2dd",id:"4-\uce90\uc2dc-\ub3d9\uc791-\ubc29\uc2dd",level:2},{value:"\uce90\uc2dc \uc788\ub294 \uacbd\uc6b0(cacheTime \uc774\ub0b4)",id:"\uce90\uc2dc-\uc788\ub294-\uacbd\uc6b0cachetime-\uc774\ub0b4",level:3},{value:"\uce90\uc2dc \uc5c6\ub294 \uacbd\uc6b0",id:"\uce90\uc2dc-\uc5c6\ub294-\uacbd\uc6b0",level:3},{value:"5. \uc131\ub2a5 \ucd5c\uc801\ud654 \uc804\ub7b5",id:"5-\uc131\ub2a5-\ucd5c\uc801\ud654-\uc804\ub7b5",level:2}];function x(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"\uc774 \ub0a0 \uc5b4\uc9c0\ub7fc\uc99d\uc774 \uc9c0\uc18d\ub3fc\uc11c \uc2a4\ud504\ub9b0\ud2b8\ub97c \uacb0\uc11d\ud588\ub2e4. \ubab8\uc774 \uc880 \uad1c\ucc2e\uc544\uc9c0\uace0 \ub098\uc11c AI\ub791 \uac19\uc774 React Query\ub97c \uacf5\ubd80\ud588\ub2e4."}),"\n",(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"react-query-\ud575\uc2ec-\uac1c\ub150",children:"React Query \ud575\uc2ec \uac1c\ub150"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"ReactQuery\ub294 React \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc11c\ubc84 \uc0c1\ud0dc \uad00\ub9ac\ub97c \uc704\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac\uc774\ub2e4."}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"[\ucc38\uace0] \uc11c\ubc84 \uc0c1\ud0dc vs \ud074\ub77c\uc774\uc5b8\ud2b8 \uc0c1\ud0dc"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\uc11c\ubc84 \uc0c1\ud0dc","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\uc11c\ubc84\uc5d0 \uc788\ub294 \ub370\uc774\ud130 (\uac8c\uc2dc\uae00, \uc720\uc800 \uc815\ubcf4 \ub4f1)"}),"\n",(0,s.jsx)(e.li,{children:"\uc5ec\ub7ec \uc0ac\uc6a9\uc790\uac00 \uacf5\uc720"}),"\n",(0,s.jsx)(e.li,{children:"\ube44\ub3d9\uae30\ub85c \uac00\uc838\uc640\uc57c \ud568"}),"\n",(0,s.jsx)(e.li,{children:"\uc2dc\uac04\uc774 \uc9c0\ub098\uba74 outdated \ub420 \uc218 \uc788\uc74c"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\ud074\ub77c\uc774\uc5b8\ud2b8 \uc0c1\ud0dc","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\ube0c\ub77c\uc6b0\uc800\uc5d0\ub9cc \uc788\ub294 \ub370\uc774\ud130 (\ubaa8\ub2ec \uc5f4\ub9bc/\ub2eb\ud798, \uc785\ub825 \uac12 \ub4f1)"}),"\n",(0,s.jsx)(e.li,{children:"\ud574\ub2f9 \uc0ac\uc6a9\uc790\ub9cc \uc0ac\uc6a9"}),"\n",(0,s.jsx)(e.li,{children:"\ub3d9\uae30\uc801\uc73c\ub85c \ubc14\ub85c \uc811\uadfc \uac00\ub2a5"}),"\n",(0,s.jsx)(e.li,{children:"UI \uc0c1\ud0dc \uad00\ub9ac"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"React Query\ub294 \uc11c\ubc84 \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud558\uba74\uc11c \uc544\ub798\uc758 \uc77c\ub4e4\uc744 \uc790\ub3d9\uc73c\ub85c \ud574\uc900\ub2e4."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\uce90\uc2f1"}),"\n",(0,s.jsx)(e.li,{children:"\ub370\uc774\ud130 \ub3d9\uae30\ud654"}),"\n",(0,s.jsx)(e.li,{children:"\uc5d0\ub7ec \ud578\ub4e4\ub9c1"}),"\n",(0,s.jsx)(e.li,{children:"\ub85c\ub529 \uc0c1\ud0dc \uad00\ub9ac"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"1-querykey---\ub370\uc774\ud130-\uc2dd\ubcc4\uc790",children:"1. queryKey - \ub370\uc774\ud130 \uc2dd\ubcc4\uc790"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"React Query\uac00 \ub370\uc774\ud130\ub97c \uad6c\ubd84\ud558\ub294 \uace0\uc720\ud55c \ud0a4"}),"\n",(0,s.jsx)(e.li,{children:"\ub2e4\ub978 queryKey \u21d2 \ub2e4\ub978 \ub370\uc774\ud130\ub85c \ucde8\uae09"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"// \uac01\uac01 \ub2e4\ub978 \ub370\uc774\ud130\ub85c \ucde8\uae09\n['posts']                              // \uc804\uccb4 \uac8c\uc2dc\uae00\n['posts', { sort: 'recent' }]          // \ucd5c\uc2e0\uc21c \uac8c\uc2dc\uae00\n['posts', { sort: 'likes' }]           // \uc778\uae30\uc21c \uac8c\uc2dc\uae00\n['posts', { keyword: 'react' }]        // \uac80\uc0c9\ub41c \uac8c\uc2dc\uae00\n"})}),"\n",(0,s.jsx)(e.h2,{id:"2-\ub370\uc774\ud130-\uc2e0\uc120\ub3c4-\uad00\ub9ac",children:"2. \ub370\uc774\ud130 \uc2e0\uc120\ub3c4 \uad00\ub9ac"}),"\n",(0,s.jsx)(e.p,{children:"queryKey\ubcc4\ub85c \uc2e0\uc120\ub3c4\ub97c \uad00\ub9ac\ud55c\ub2e4."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\ub2e4\ub978 queryKey\uc77c \uacbd\uc6b0 \ubb34\uc870\uac74 \uc0c8\ub85c\uc6b4 \ub370\uc774\ud130\ub97c \uc694\uccad\ud558\uace0, \uac01\uac01 \ubcc4\ub3c4\uc758 \uce90\uc2dc\ub85c \uad00\ub9ac"}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"staletime\uc2e0\uc120\ub3c4-\uc2dc\uac04",children:"staleTime(\uc2e0\uc120\ub3c4 \uc2dc\uac04)"}),"\n",(0,s.jsx)(e.p,{children:"\ub370\uc774\ud130\uac00 \u201c\uc2e0\uc120(fresh)\u201d\ud558\ub2e4\uace0 \uac04\uc8fc\ub418\ub294 \uc2dc\uac04. \uc774 \uc2dc\uac04 \ub3d9\uc548\uc740 \ub370\uc774\ud130 \uc7ac\uc694\uccad\uc744 \ud558\uc9c0 \uc54a\ub294\ub2e4."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"{\n  staleTime: 1000 * 60, // 1\ubd84\uac04 \uc2e0\uc120\ud55c \uc0c1\ud0dc \uc720\uc9c0\n}\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\ub3d9\uc791 \uc608\uc2dc"}),"(staleTime: 1\ubd84\uc73c\ub85c \uc124\uc815)","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\ucd5c\ucd08 \ub370\uc774\ud130 \uc694\uccad \u2192 \ub370\uc774\ud130 \ubc1b\uc74c \u2192","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:'0~1\ubd84: "\uc2e0\uc120\ud55c \uc0c1\ud0dc" \u21d2 \uc7ac\uc694\uccad \uc5c6\uc74c'}),"\n",(0,s.jsx)(e.li,{children:'1\ubd84 \uc774\ud6c4: "\uc2e0\uc120\ud558\uc9c0 \uc54a\uc740 \uc0c1\ud0dc" \u21d2 \uc870\uac74 \ub9cc\uc871 \uc2dc \uc7ac\uc694\uccad'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u201c\uc870\uac74 \ub9cc\uc871\u201d\uc774\ub780 \ub2e4\uc74c \uc911 \ud558\ub098\uc758 \uc0c1\ud669\uc77c \ub54c\ub97c \ub9d0\ud55c\ub2e4.","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\ucef4\ud3ec\ub10c\ud2b8 \uc7ac\ub9c8\uc6b4\ud2b8"}),"\n",(0,s.jsx)(e.li,{children:"\uc708\ub3c4\uc6b0 \ud3ec\ucee4\uc2a4"}),"\n",(0,s.jsx)(e.li,{children:"\ub124\ud2b8\uc6cc\ud06c \uc7ac\uc5f0\uacb0"}),"\n",(0,s.jsx)(e.li,{children:"\uc218\ub3d9 \ub9ac\ud328\uce58"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"cachetime\uce90\uc2dc-\uc720\uc9c0-\uae30\uac04",children:"cacheTime(\uce90\uc2dc \uc720\uc9c0 \uae30\uac04)"}),"\n",(0,s.jsx)(e.p,{children:"\ub370\uc774\ud130\uac00 \uce90\uc2dc\uc5d0 \ub0a8\uc544\uc788\ub294 \uc2dc\uac04. \uc774 \uc2dc\uac04 \ub3d9\uc548 \ub370\uc774\ud130\ub97c \uba54\ubaa8\ub9ac\uc5d0 \ubcf4\uad00\ud558\uc5ec \uc7ac\uc0ac\uc6a9\uc774 \uac00\ub2a5\ud558\ub2e4."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"staleTime \u2264 cacheTime\xa0\uc774\uc5b4\uc57c \ud568"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"{\n  cacheTime: 1000 * 60 * 5, // 5\ubd84\uac04 \uce90\uc2dc \uc720\uc9c0\n}\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\ub3d9\uc791 \uc608\uc2dc"}),"(cacheTime: 5\ubd84\uc73c\ub85c \uc124\uc815)","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\ucd5c\ucd08 \ub370\uc774\ud130 \uc694\uccad \u2192 \ub370\uc774\ud130 \ubc1b\uc74c \u2192","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"0~5\ubd84: \uce90\uc2dc \uc720\uc9c0 \u21d2 \uc7ac\uc0ac\uc6a9 \uac00\ub2a5"}),"\n",(0,s.jsx)(e.li,{children:"5\ubd84 \uc774\ud6c4: \uce90\uc2dc \uc0ad\uc81c \u21d2 \uc0c8\ub85c \uc694\uccad \ud544\uc694"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"3-\ub370\uc774\ud130-\uc0c1\ud0dc",children:"3. \ub370\uc774\ud130 \uc0c1\ud0dc"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"const { \n  data,       // \uc2e4\uc81c \ub370\uc774\ud130\n  isLoading,  // \uccab \ub85c\ub529 \uc5ec\ubd80(\uce90\uc2dc\uac00 \uc5c6\ub294 \ub370\uc774\ud130\uc5d0\uc11c\uc758 \uccab \ub370\uc774\ud130 \uc694\uccad)\n  isFetching, // \ub370\uc774\ud130 \uc694\uccad \uc911 \uc5ec\ubd80(\uce90\uc2dc \uc720\ubb34\uc640 \uad00\uacc4 \uc5c6\uc774 \ubaa8\ub4e0 \ub370\uc774\ud130 \uc694\uccad \uc911 \uc0c1\ud0dc. \uc989, \ubc31\uadf8\ub77c\uc6b4\ub4dc \uc5c5\ub370\uc774\ud2b8 \ud3ec\ud568)\n  isStale,    // \uc2e0\uc120\ud558\uc9c0 \uc54a\uc740 \uc0c1\ud0dc \uc5ec\ubd80\n  error       // \uc5d0\ub7ec \uc815\ubcf4\n} = useQuery(...)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"4-\uce90\uc2dc-\ub3d9\uc791-\ubc29\uc2dd",children:"4. \uce90\uc2dc \ub3d9\uc791 \ubc29\uc2dd"}),"\n",(0,s.jsx)(e.h3,{id:"\uce90\uc2dc-\uc788\ub294-\uacbd\uc6b0cachetime-\uc774\ub0b4",children:"\uce90\uc2dc \uc788\ub294 \uacbd\uc6b0(cacheTime \uc774\ub0b4)"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\uce90\uc2dc \ub370\uc774\ud130 \uc989\uc2dc \ud45c\uc2dc"}),"\n",(0,s.jsx)(e.li,{children:"\ud544\uc694\uc2dc \ubc31\uadf8\ub77c\uc6b4\ub4dc\uc5d0\uc11c \uc0c8\ub85c\uc6b4 \ub370\uc774\ud130 \uc694\uccad(staleTime \uc9c0\ub0a8 + \uc7ac\uc694\uccad \uc870\uac74 \ub9cc\uc871)"}),"\n",(0,s.jsx)(e.li,{children:"\uc0c8 \ub370\uc774\ud130\ub85c \uc790\ub3d9 \uc5c5\ub370\uc774\ud2b8"}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\ub9cc\uc57d \uc2e0\uc120\ud558\uc9c0 \uc54a\uc740\ub370(staleTime \ucd08\uacfc) \uce90\uc2dc\uac00 \ub0a8\uc544\uc788\ub294 \uacbd\uc6b0"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["staleTime: 1\ubd84 / cacheTime: 5\ubd84","\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\ucd5c\ucd08 \ub370\uc774\ud130 \uc694\uccad (00:00): \ub370\uc774\ud130 \uc218\uc2e0"}),"\n",(0,s.jsxs)(e.li,{children:["1\ubd84 \ud6c4 \uc7ac\ubc29\ubb38 (00:01)","\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\uce90\uc2dc\ub370\uc774\ud130 \uc989\uc2dc \ud45c\uc2dc"}),"\n",(0,s.jsx)(e.li,{children:"\ubc31\uadf8\ub77c\uc6b4\ub4dc \ub370\uc774\ud130 \uc694\uccad(\uc0c8\ub85c\uc6b4 \ub370\uc774\ud130 \uc694\uccad)"}),"\n",(0,s.jsx)(e.li,{children:"UI \uc790\ub3d9 \uc5c5\ub370\uc774\ud2b8(\uc0c8 \ub370\uc774\ud130\ub85c \uc5c5\ub370\uc774\ud2b8)"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\uc774\ub7f0 \ubc29\uc2dd\uc73c\ub85c \uc544\ub798\uc758 \uc774\uc810\uc744 \ub2ec\uc131\ud560 \uc218 \uc788\ub2e4.","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\ube60\ub978 \ud654\uba74 \ud45c\uc2dc (\uce90\uc2dc)"}),"\n",(0,s.jsx)(e.li,{children:"\ucd5c\uc2e0 \ub370\uc774\ud130 \uc720\uc9c0 (\ubc31\uadf8\ub77c\uc6b4\ub4dc\xa0\uac31\uc2e0)"}),"\n",(0,s.jsx)(e.li,{children:"\ubd80\ub4dc\ub7ec\uc6b4 UX (\uc790\uc5f0\uc2a4\ub7ec\uc6b4 \uc5c5\ub370\uc774\ud2b8)"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\uce90\uc2dc-\uc5c6\ub294-\uacbd\uc6b0",children:"\uce90\uc2dc \uc5c6\ub294 \uacbd\uc6b0"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\ub85c\ub529 \uc0c1\ud0dc \ud45c\uc2dc"}),"\n",(0,s.jsx)(e.li,{children:"\uc0c8\ub85c\uc6b4 \ub370\uc774\ud130 \uc694\uccad"}),"\n",(0,s.jsx)(e.li,{children:"\ub370\uc774\ud130 \ud45c\uc2dc"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"5-\uc131\ub2a5-\ucd5c\uc801\ud654-\uc804\ub7b5",children:"5. \uc131\ub2a5 \ucd5c\uc801\ud654 \uc804\ub7b5"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\uc801\uc808\ud55c staleTime \uc124\uc815"}),"\n",(0,s.jsx)(e.p,{children:"staleTime\uc774 \ub108\ubb34 \uae38\uba74 \ub370\uc774\ud130\uac00 \uc624\ub798\ub428, cacheTime\uc774 \ub108\ubb34 \uae38\uba74 \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9 \uc99d\uac00"}),"\n",(0,s.jsx)(e.p,{children:"\u21d2 \ub370\uc774\ud130 \uc131\uaca9\uc5d0\xa0\ub9de\uac8c \uc801\uc808\ud788 \uc124\uc815 \ud544\uc694"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\uc790\uc8fc \ubcc0\uacbd\ub418\ub294 \ub370\uc774\ud130: \uc9e7\uc740 staleTime"}),"\n",(0,s.jsx)(e.li,{children:"\uc815\uc801\uc778 \ub370\uc774\ud130: \uae34 staleTime"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\uce90\uc2dc \ud65c\uc6a9"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"prefetchQuery\ub85c \ubbf8\ub9ac \ub370\uc774\ud130 \uc900\ube44"}),"\n",(0,s.jsx)(e.li,{children:"keepPreviousDate\ub85c \ubd80\ub4dc\ub7ec\uc6b4 \uc804\ud658"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\ub85c\ub529 UX \uac1c\uc120"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\uc2a4\ucf08\ub808\ud1a4 UI \uc0ac\uc6a9"}),"\n",(0,s.jsx)(e.li,{children:"\uc810\uc9c4\uc801 \ub85c\ub529 \uad6c\ud604"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"[\ucc38\uace0] \ub370\uc774\ud130 \uc2e0\uc120\ub3c4 \uad00\ub9ac\uc640 \uce90\uc2dc \ub3d9\uc791 \ubc29\uc2dd\uc740 \ub80c\ub354\ub9c1 \ubc29\uc2dd\uacfc \ubcc4\uac1c\ub85c \ub3c5\ub9bd\uc801\uc73c\ub85c \ub3d9\uc791\ud55c\ub2e4. \uc2e0\uc120\ub3c4\uc640 \uce90\uc2dc \uc0c1\ud0dc\uc5d0 \ub530\ub77c \ub370\uc774\ud130 \uc5c5\ub370\uc774\ud2b8 \ud544\uc694\ud560 \ub54c, \uadf8 \ub54c \ub80c\ub354\ub9c1 \ubc29\uc2dd\uc5d0 \ub530\ub77c \ub2e4\ub978 \ubc29\uc2dd\uc73c\ub85c \ub80c\ub354\ub9c1\uc774 \ub41c\ub2e4."})]})}function j(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(x,{...n})}):x(n)}},8453:(n,e,l)=>{l.d(e,{R:()=>c,x:()=>d});var i=l(6540);const s={},r=i.createContext(s);function c(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);