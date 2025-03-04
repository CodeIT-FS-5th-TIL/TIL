"use strict";(self.webpackChunkcode_it_fs_5th_til=self.webpackChunkcode_it_fs_5th_til||[]).push([[2972],{4011:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"\ucd5c\uc740\ube44/25.02/250227","title":"250227","description":"\ub458 \ub2e4 \ud074\ub77c\uc774\uc5b8\ud2b8 \uce21\uc5d0\uc11c \ub370\uc774\ud130\ub97c \ud328\uce6d\ud558\uace0 \uce90\uc2f1\ud558\ub294 \ud6cc\ub96d\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac\uc9c0\ub9cc, \uc0ac\uc6a9 \ubaa9\uc801\uc5d0 \ub530\ub77c \uc120\ud0dd\uc774 \ub2ec\ub77c\uc9c8 \uc218 \uc788\uc74c.","source":"@site/docs/\ucd5c\uc740\ube44/25.02/250227.md","sourceDirName":"\ucd5c\uc740\ube44/25.02","slug":"/\ucd5c\uc740\ube44/25.02/250227","permalink":"/TIL/docs/\ucd5c\uc740\ube44/25.02/250227","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\ucd5c\uc740\ube44/25.02/250227.md","tags":[],"version":"current","frontMatter":{},"sidebar":"TILSidebar","previous":{"title":"250226","permalink":"/TIL/docs/\ucd5c\uc740\ube44/25.02/250226"},"next":{"title":"0304 DFS","permalink":"/TIL/docs/\ucd5c\uc740\ube44/25.03/0304 DFS"}}');var s=r(4848),i=r(8453);const l={},c=void 0,d={},o=[{value:"<strong>\u2705 \uc5b8\uc81c SWR\uc744 \uc120\ud0dd\ud574\uc57c \ud560\uae4c?</strong>",id:"-\uc5b8\uc81c-swr\uc744-\uc120\ud0dd\ud574\uc57c-\ud560\uae4c",level:2},{value:"<strong>\u2705 \uc5b8\uc81c React Query\ub97c \uc120\ud0dd\ud574\uc57c \ud560\uae4c?</strong>",id:"-\uc5b8\uc81c-react-query\ub97c-\uc120\ud0dd\ud574\uc57c-\ud560\uae4c",level:2},{value:"<strong>SWR \uc0ac\uc6a9\ubc95</strong>",id:"swr-\uc0ac\uc6a9\ubc95",level:2},{value:"<strong>1\ufe0f\u20e3 \uc124\uce58</strong>",id:"1\ufe0f\u20e3-\uc124\uce58",level:3},{value:"<strong>2\ufe0f\u20e3 \uae30\ubcf8 \uc0ac\uc6a9\ubc95</strong>",id:"2\ufe0f\u20e3-\uae30\ubcf8-\uc0ac\uc6a9\ubc95",level:3},{value:"<strong>3\ufe0f\u20e3 \uc0c1\uc138 \ud398\uc774\uc9c0\uc5d0\uc11c SWR\ub85c \ub370\uc774\ud130 \ud328\uce6d</strong>",id:"3\ufe0f\u20e3-\uc0c1\uc138-\ud398\uc774\uc9c0\uc5d0\uc11c-swr\ub85c-\ub370\uc774\ud130-\ud328\uce6d",level:3},{value:"<strong>4\ufe0f\u20e3 \ub370\uc774\ud130 \uac31\uc2e0 \ubc0f \uce90\uc2f1 \uc790\ub3d9\ud654</strong>",id:"4\ufe0f\u20e3-\ub370\uc774\ud130-\uac31\uc2e0-\ubc0f-\uce90\uc2f1-\uc790\ub3d9\ud654",level:3},{value:"<strong>&lt; React Query \uc0ac\uc6a9\ubc95&gt;</strong>",id:"-react-query-\uc0ac\uc6a9\ubc95",level:2},{value:"<strong>1\ufe0f\u20e3 \uc124\uce58</strong>",id:"1\ufe0f\u20e3-\uc124\uce58-1",level:3},{value:"<strong>2\ufe0f\u20e3 React Query Provider \ucd94\uac00 (****<code>_app.js</code></strong> <strong>\ub610\ub294</strong> <strong><code>layout.js</code>****)</strong>",id:"2\ufe0f\u20e3-react-query-provider-\ucd94\uac00-_appjs-\ub610\ub294-layoutjs",level:3},{value:"<strong>3\ufe0f\u20e3 \uae30\ubcf8 \uc0ac\uc6a9\ubc95</strong>",id:"3\ufe0f\u20e3-\uae30\ubcf8-\uc0ac\uc6a9\ubc95",level:3},{value:"<strong>4\ufe0f\u20e3 Mutation (\ub370\uc774\ud130 \uc218\uc815/\uc0ad\uc81c/\ucd94\uac00)</strong>",id:"4\ufe0f\u20e3-mutation-\ub370\uc774\ud130-\uc218\uc815\uc0ad\uc81c\ucd94\uac00",level:3}];function a(n){const e={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:["\ub458 \ub2e4 \ud074\ub77c\uc774\uc5b8\ud2b8 \uce21\uc5d0\uc11c \ub370\uc774\ud130\ub97c \ud328\uce6d\ud558\uace0 \uce90\uc2f1\ud558\ub294 \ud6cc\ub96d\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac\uc9c0\ub9cc, ",(0,s.jsx)(e.strong,{children:"\uc0ac\uc6a9 \ubaa9\uc801\uc5d0 \ub530\ub77c \uc120\ud0dd\uc774 \ub2ec\ub77c\uc9c8 \uc218 \uc788\uc74c"}),"."]}),"\n",(0,s.jsx)(e.p,{children:"\u2705 SWR vs React Query \ube44\uad50"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"SWR"})}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"React Query"})})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"\uac1c\ubc1c\uc0ac"})}),(0,s.jsx)(e.td,{children:"Vercel(Next.js \uac1c\ubc1c\uc0ac)"}),(0,s.jsx)(e.td,{children:"TanStack(\ub3c5\ub9bd\uc801 \uc624\ud508\uc18c\uc2a4)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"\ucd08\uae30 \ub85c\ub529 \uc18d\ub3c4"})}),(0,s.jsx)(e.td,{children:"\ube60\ub984"}),(0,s.jsx)(e.td,{children:"\ube60\ub984"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"\uc790\ub3d9 \ub370\uc774\ud130 \uac31\uc2e0"})}),(0,s.jsx)(e.td,{children:"O (\uc790\ub3d9\uc73c\ub85c \ucd5c\uc2e0 \ub370\uc774\ud130 \ud328\uce6d)"}),(0,s.jsx)(e.td,{children:"O (\uc790\ub3d9 \ub9ac\ud398\uce58 \uac00\ub2a5)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"\uce90\uc2f1 \ubc29\uc2dd"})}),(0,s.jsx)(e.td,{children:"\uc804\uc5ed\uc801\uc73c\ub85c \uacf5\uc720 (\uc804\uc5ed SWR \uce90\uc2dc)"}),(0,s.jsx)(e.td,{children:"\uac1c\ubcc4\uc801\uc73c\ub85c \uad00\ub9ac (React Query \uce90\uc2dc)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"SSR \uce5c\ud654\uc131"})}),(0,s.jsx)(e.td,{children:"O (Next.js\uc640 \uad81\ud569 \uc88b\uc74c)"}),(0,s.jsx)(e.td,{children:"O (\ud558\uc9c0\ub9cc SWR\ubcf4\ub2e4\ub294 \uc124\uc815\uc774 \ud544\uc694\ud568)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"\ubcf5\uc7a1\ud55c \uc0c1\ud0dc \uad00\ub9ac"})}),(0,s.jsx)(e.td,{children:"X (\ub2e8\uc21c\ud55c \ub370\uc774\ud130 \ud328\uce6d\uc5d0 \uac15\uc810)"}),(0,s.jsx)(e.td,{children:"O (pagination, infinite scroll \ub4f1 \uc0c1\ud0dc \uad00\ub9ac \uae30\ub2a5 \ud3ec\ud568)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"Mutation(\ub370\uc774\ud130 \uc218\uc815/\uc0ad\uc81c)"})}),(0,s.jsx)(e.td,{children:"\uc81c\ud55c\uc801 (useSWRMutation \ud544\uc694)"}),(0,s.jsx)(e.td,{children:"\uac15\ub825\ud55c \uc9c0\uc6d0 (useMutation \uc81c\uacf5)"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"-\uc5b8\uc81c-swr\uc744-\uc120\ud0dd\ud574\uc57c-\ud560\uae4c",children:(0,s.jsx)(e.strong,{children:"\u2705 \uc5b8\uc81c SWR\uc744 \uc120\ud0dd\ud574\uc57c \ud560\uae4c?"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Next.js \ud504\ub85c\uc81d\ud2b8"}),"\uc5d0\uc11c ",(0,s.jsx)(e.strong,{children:"\uac04\ub2e8\ud55c \ub370\uc774\ud130 \ud328\uce6d, \uc790\ub3d9 \uac31\uc2e0, \uce90\uc2f1"}),"\uc774 \ud544\uc694\ud55c \uacbd\uc6b0"]}),"\n",(0,s.jsxs)(e.li,{children:["\ud398\uc774\uc9c0 \uac04 ",(0,s.jsx)(e.strong,{children:"\uc804\uc5ed\uc801\uc778 \uce90\uc2dc \uacf5\uc720\uac00 \ud544\uc694\ud55c \uacbd\uc6b0"})]}),"\n",(0,s.jsxs)(e.li,{children:["\ucf54\ub4dc\uac00 ",(0,s.jsx)(e.strong,{children:"\uac00\ubccd\uace0 \uac04\uacb0\ud55c \uac8c \uc911\uc694\ud55c \uacbd\uc6b0"})]}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.strong,{children:"GraphQL, REST API \ub4f1 \uac04\ub2e8\ud55c \uc694\uccad\uc744 \ube60\ub974\uac8c \uce90\uc2f1\ud558\uace0 \uc2f6\uc744 \ub54c"})}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\ud83d\udd39 ",(0,s.jsx)(e.strong,{children:"SWR\uc740 Next.js\uc5d0\uc11c \uae30\ubcf8\uc801\uc73c\ub85c \ucd94\ucc9c\ud558\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub77c\uc11c Next.js \ud504\ub85c\uc81d\ud2b8\ub77c\uba74 SWR\uc774 \ub354 \uc790\uc5f0\uc2a4\ub7ec\uc6b8 \uc218\ub3c4 \uc788\uc74c!"})]}),"\n",(0,s.jsx)(e.h2,{id:"-\uc5b8\uc81c-react-query\ub97c-\uc120\ud0dd\ud574\uc57c-\ud560\uae4c",children:(0,s.jsx)(e.strong,{children:"\u2705 \uc5b8\uc81c React Query\ub97c \uc120\ud0dd\ud574\uc57c \ud560\uae4c?"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.strong,{children:"\uc0c1\ud0dc \uad00\ub9ac + \ub370\uc774\ud130 \ud328\uce6d\uc744 \ub3d9\uc2dc\uc5d0 \ud574\uc57c \ud558\ub294 \uacbd\uc6b0"})}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Infinite Scroll, Pagination, Mutations (\ub370\uc774\ud130 \ucd94\uac00/\uc218\uc815/\uc0ad\uc81c) \ub4f1 \ubcf5\uc7a1\ud55c \ub370\uc774\ud130 \ub85c\uc9c1"}),"\uc774 \ud544\uc694\ud55c \uacbd\uc6b0"]}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.strong,{children:"SWR\ubcf4\ub2e4 \ub354 \uac15\ub825\ud55c \uce90\uc2dc \uc815\ucc45\uacfc \ube44\ub3d9\uae30 \uc0c1\ud0dc \uad00\ub9ac\ub97c \uc6d0\ud560 \ub54c"})}),"\n",(0,s.jsxs)(e.li,{children:["\uc5ec\ub7ec API \uc694\uccad\uc744 \uc870\ud569\ud574\uc11c ",(0,s.jsx)(e.strong,{children:"\ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1\uc744 \uad00\ub9ac\ud574\uc57c \ud560 \ub54c"})]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"swr-\uc0ac\uc6a9\ubc95",children:(0,s.jsx)(e.strong,{children:"SWR \uc0ac\uc6a9\ubc95"})}),"\n",(0,s.jsx)(e.h3,{id:"1\ufe0f\u20e3-\uc124\uce58",children:(0,s.jsx)(e.strong,{children:"1\ufe0f\u20e3 \uc124\uce58"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"bash\n\ubcf5\uc0ac\ud3b8\uc9d1\nnpm install swr\n# \ub610\ub294\nyarn add swr\n"})}),"\n",(0,s.jsx)(e.h3,{id:"2\ufe0f\u20e3-\uae30\ubcf8-\uc0ac\uc6a9\ubc95",children:(0,s.jsx)(e.strong,{children:"2\ufe0f\u20e3 \uae30\ubcf8 \uc0ac\uc6a9\ubc95"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'jsx\n\ubcf5\uc0ac\ud3b8\uc9d1\nimport useSWR from "swr";\n\nconst fetcher = (url) => fetch(url).then((res) => res.json());\n\nexport default function Community() {\n  const { data, error } = useSWR("https://sprint-mission08-be.onrender.com/articles", fetcher);\n\n  if (error) return <div>\u274c \ub370\uc774\ud130\ub97c \ubd88\ub7ec\uc624\ub294 \uc911 \uc624\ub958 \ubc1c\uc0dd</div>;\n  if (!data) return <div>\u23f3 \ub85c\ub529 \uc911...</div>;\n\n  return (\n    <div>\n      {data.list.map((article) => (\n        <div key={article.id}>{article.title}</div>\n      ))}\n    </div>\n  );\n}\n'})}),"\n",(0,s.jsx)(e.h3,{id:"3\ufe0f\u20e3-\uc0c1\uc138-\ud398\uc774\uc9c0\uc5d0\uc11c-swr\ub85c-\ub370\uc774\ud130-\ud328\uce6d",children:(0,s.jsx)(e.strong,{children:"3\ufe0f\u20e3 \uc0c1\uc138 \ud398\uc774\uc9c0\uc5d0\uc11c SWR\ub85c \ub370\uc774\ud130 \ud328\uce6d"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'jsx\n\ubcf5\uc0ac\ud3b8\uc9d1\nimport useSWR from "swr";\nimport { useRouter } from "next/router";\n\nconst fetcher = (url) => fetch(url).then((res) => res.json());\n\nexport default function ArticleDetail() {\n  const router = useRouter();\n  const { id } = router.query;\n  const { data: article, error } = useSWR(id ? `/api/articles/${id}` : null, fetcher);\n\n  if (error) return <div>\u274c \uc624\ub958 \ubc1c\uc0dd</div>;\n  if (!article) return <div>\u23f3 \ub85c\ub529 \uc911...</div>;\n\n  return <div>{article.title}</div>;\n}\n'})}),"\n",(0,s.jsx)(e.h3,{id:"4\ufe0f\u20e3-\ub370\uc774\ud130-\uac31\uc2e0-\ubc0f-\uce90\uc2f1-\uc790\ub3d9\ud654",children:(0,s.jsx)(e.strong,{children:"4\ufe0f\u20e3 \ub370\uc774\ud130 \uac31\uc2e0 \ubc0f \uce90\uc2f1 \uc790\ub3d9\ud654"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["SWR\uc740 \uae30\ubcf8\uc801\uc73c\ub85c ",(0,s.jsx)(e.strong,{children:"\uc790\ub3d9 \ub9ac\ud398\uce58(\uc0c8\ub85c\uace0\uce68 \uc5c6\uc774 \ucd5c\uc2e0 \ub370\uc774\ud130 \uc720\uc9c0)"})," \uae30\ub2a5\uc774 \uc788\uc74c."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"refreshInterval"}),"\uc744 \ucd94\uac00\ud558\uba74 \uc77c\uc815 \uc2dc\uac04\ub9c8\ub2e4 \uc790\ub3d9 \uac31\uc2e0 \uac00\ub2a5:"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'jsx\n\ubcf5\uc0ac\ud3b8\uc9d1\nconst { data, mutate } = useSWR("/api/articles", fetcher, {\n  refreshInterval: 5000, // 5\ucd08\ub9c8\ub2e4 \ub370\uc774\ud130 \uac31\uc2e0\n});\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"mutate()"}),"\ub97c \ud638\ucd9c\ud558\uba74 ",(0,s.jsx)(e.strong,{children:"\uac15\uc81c\ub85c \ucd5c\uc2e0 \ub370\uc774\ud130\ub97c \uac00\uc838\uc634"})," (ex: \ubc84\ud2bc \ud074\ub9ad \uc2dc \uac31\uc2e0)"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"jsx\n\ubcf5\uc0ac\ud3b8\uc9d1\n<button onClick={() => mutate()}>\ud83d\udd04 \uc0c8\ub85c\uace0\uce68</button>\n"})}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"-react-query-\uc0ac\uc6a9\ubc95",children:(0,s.jsx)(e.strong,{children:"< React Query \uc0ac\uc6a9\ubc95>"})}),"\n",(0,s.jsx)(e.h3,{id:"1\ufe0f\u20e3-\uc124\uce58-1",children:(0,s.jsx)(e.strong,{children:"1\ufe0f\u20e3 \uc124\uce58"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"bash\n\ubcf5\uc0ac\ud3b8\uc9d1\nnpm install @tanstack/react-query\n# \ub610\ub294\nyarn add @tanstack/react-query\n"})}),"\n",(0,s.jsxs)(e.h3,{id:"2\ufe0f\u20e3-react-query-provider-\ucd94\uac00-_appjs-\ub610\ub294-layoutjs",children:[(0,s.jsxs)(e.strong,{children:["2\ufe0f\u20e3 React Query Provider \ucd94\uac00 (****",(0,s.jsx)(e.code,{children:"_app.js"})]})," ",(0,s.jsx)(e.strong,{children:"\ub610\ub294"})," ",(0,s.jsxs)(e.strong,{children:[(0,s.jsx)(e.code,{children:"layout.js"}),"****)"]})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'jsx\n\ubcf5\uc0ac\ud3b8\uc9d1\nimport { QueryClient, QueryClientProvider } from "@tanstack/react-query";\n\nconst queryClient = new QueryClient();\n\nexport default function MyApp({ Component, pageProps }) {\n  return (\n    <QueryClientProvider client={queryClient}>\n      <Component {...pageProps} />\n    </QueryClientProvider>\n  );\n}\n'})}),"\n",(0,s.jsx)(e.h3,{id:"3\ufe0f\u20e3-\uae30\ubcf8-\uc0ac\uc6a9\ubc95",children:(0,s.jsx)(e.strong,{children:"3\ufe0f\u20e3 \uae30\ubcf8 \uc0ac\uc6a9\ubc95"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'jsx\n\ubcf5\uc0ac\ud3b8\uc9d1\nimport { useQuery } from "@tanstack/react-query";\n\nconst fetchArticles = async () => {\n  const res = await fetch("https://sprint-mission08-be.onrender.com/articles");\n  return res.json();\n};\n\nexport default function Community() {\n  const { data, isLoading, error } = useQuery({\n    queryKey: ["articles"],\n    queryFn: fetchArticles,\n  });\n\n  if (isLoading) return <div>\u23f3 \ub85c\ub529 \uc911...</div>;\n  if (error) return <div>\u274c \ub370\uc774\ud130 \uac00\uc838\uc624\uae30 \uc2e4\ud328</div>;\n\n  return (\n    <div>\n      {data.list.map((article) => (\n        <div key={article.id}>{article.title}</div>\n      ))}\n    </div>\n  );\n}\n'})}),"\n",(0,s.jsx)(e.h3,{id:"4\ufe0f\u20e3-mutation-\ub370\uc774\ud130-\uc218\uc815\uc0ad\uc81c\ucd94\uac00",children:(0,s.jsx)(e.strong,{children:"4\ufe0f\u20e3 Mutation (\ub370\uc774\ud130 \uc218\uc815/\uc0ad\uc81c/\ucd94\uac00)"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'jsx\n\ubcf5\uc0ac\ud3b8\uc9d1\nimport { useMutation, useQueryClient } from "@tanstack/react-query";\n\nconst postArticle = async (newArticle) => {\n  const res = await fetch("/api/articles", {\n    method: "POST",\n    body: JSON.stringify(newArticle),\n  });\n  return res.json();\n};\n\nexport default function CreateArticle() {\n  const queryClient = useQueryClient();\n  const mutation = useMutation({\n    mutationFn: postArticle,\n    onSuccess: () => {\n      queryClient.invalidateQueries(["articles"]); // \uce90\uc2dc\ub41c \ub370\uc774\ud130\ub97c \ubb34\ud6a8\ud654\ud558\uc5ec \ucd5c\uc2e0 \ub370\uc774\ud130 \uac00\uc838\uc634\n    },\n  });\n\n  return (\n    <button onClick={() => mutation.mutate({ title: "\uc0c8 \uae00" })}>\n      \u270d\ufe0f \uae00 \uc791\uc131\n    </button>\n  );\n}\n'})})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>l,x:()=>c});var t=r(6540);const s={},i=t.createContext(s);function l(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);