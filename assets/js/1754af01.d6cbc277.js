"use strict";(self.webpackChunkcode_it_fs_5th_til=self.webpackChunkcode_it_fs_5th_til||[]).push([[980],{3837:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>a,frontMatter:()=>i,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"\ubc15\uc138\uc815/25.03/250306","title":"\ud83d\udcda \uc8fc\uc81c: useQuery\ub780 \ubb34\uc5c7\uc778\uac00","description":"\ub0a0\uc9dc: 2025-03-06","source":"@site/docs/\ubc15\uc138\uc815/25.03/250306.md","sourceDirName":"\ubc15\uc138\uc815/25.03","slug":"/\ubc15\uc138\uc815/25.03/250306","permalink":"/TIL/docs/\ubc15\uc138\uc815/25.03/250306","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\ubc15\uc138\uc815/25.03/250306.md","tags":[],"version":"current","frontMatter":{},"sidebar":"TILSidebar","previous":{"title":"Tailwind \uc124\uc815 \ud2b8\ub7ec\ube14\uc288\ud305","permalink":"/TIL/docs/\ubc15\uc138\uc815/25.03/250305"},"next":{"title":"\ud83d\udcda \uc8fc\uc81c: CORS\ub780 \ubb34\uc5c7\uc778\uac00","permalink":"/TIL/docs/\ubc15\uc138\uc815/25.03/250311"}}');var d=n(4848),c=n(8453);const i={},t="\ud83d\udcda \uc8fc\uc81c: useQuery\ub780 \ubb34\uc5c7\uc778\uac00",l={},h=[{value:"\uc8fc\uc694 \uac1c\ub150",id:"\uc8fc\uc694-\uac1c\ub150",level:2},{value:"queryKey(\ucffc\ub9ac \ud0a4)",id:"querykey\ucffc\ub9ac-\ud0a4",level:3},{value:"queryFn(\ucffc\ub9ac \ud568\uc218)",id:"queryfn\ucffc\ub9ac-\ud568\uc218",level:3},{value:"\uc0c1\ud0dc \uac12",id:"\uc0c1\ud0dc-\uac12",level:3},{value:"\uc8fc\uc694 \uc635\uc158",id:"\uc8fc\uc694-\uc635\uc158",level:3},{value:"useQuery\uc640 useMutation\uc758 \ucc28\uc774",id:"usequery\uc640-usemutation\uc758-\ucc28\uc774",level:2}];function u(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",input:"input",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.header,{children:(0,d.jsx)(s.h1,{id:"-\uc8fc\uc81c-usequery\ub780-\ubb34\uc5c7\uc778\uac00",children:"\ud83d\udcda \uc8fc\uc81c: useQuery\ub780 \ubb34\uc5c7\uc778\uac00"})}),"\n",(0,d.jsx)(s.p,{children:"\ub0a0\uc9dc: 2025-03-06"}),"\n",(0,d.jsx)(s.p,{children:"\uc5ca\uadf8\uc81c React Query\uc758 \uac1c\ub150\uc744 \uc815\ub9ac\ud558\uba70, useQuery\uc5d0 \ub300\ud574 \ub354 \uae4a\uc774 \uc774\ud574\ud560 \ud544\uc694\uc131\uc744 \ub290\uaf08\uc2b5\ub2c8\ub2e4. \ub610\ud55c, useQuery \uc0ac\uc6a9\ubc95\uc5d0 \ub300\ud574 \uc544\uc9c1 \uac10\uc744 \uc7a1\uc9c0 \ubabb\ud574\uc11c \uc55e\uc73c\ub85c\uc758 \uac1c\ubc1c\uc5d0\uc11c \ud6a8\uc728\uc801\uc73c\ub85c \ud65c\uc6a9\ud558\uae30 \uc704\ud574 useQuery\ub97c \uc9d1\uc911\uc801\uc73c\ub85c \uacf5\ubd80\ud574\ubcf4\ub824\uace0 \ud569\ub2c8\ub2e4. \uc624\ub298\uc740 useQuery\uc758 \uae30\ubcf8 \uc0ac\uc6a9\ubc95\uacfc \uc8fc\uc694 \uac1c\ub150\uc744 \uc815\ub9ac\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,d.jsx)(s.h1,{id:"usequery",children:"\ud83d\udca1useQuery"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"useQuery"}),"\ub294 ",(0,d.jsx)(s.code,{children:"React Query"})," \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ud6c5\uc73c\ub85c, \ube44\ub3d9\uae30 \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uace0(GET) \uce90\uc2f1\ud558\uba70, \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud558\ub294 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. (\ub370\uc774\ud130 \uc870\ud68c\uac00 \uc544\ub2cc \ubcc0\uacbd\uc791\uc5c5\ud560 \ub54c\ub294 useMutation \uc0ac\uc6a9)"]}),"\n",(0,d.jsx)(s.h2,{id:"\uc8fc\uc694-\uac1c\ub150",children:"\uc8fc\uc694 \uac1c\ub150"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"useQuery"}),"\ub97c \ucf54\ub4dc\ub85c \uc791\uc131\ud558\uc5ec \uad6c\ud604\ud558\uae30 \uc704\ud574\uc11c\ub294 ",(0,d.jsx)(s.code,{children:"queryKey"}),", ",(0,d.jsx)(s.code,{children:"queryFn"})," 2\uac00\uc9c0 \uac1c\ub150\uc744 \ud544\uc218\ub85c \uc54c\uace0 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,d.jsx)(s.h3,{id:"querykey\ucffc\ub9ac-\ud0a4",children:"queryKey(\ucffc\ub9ac \ud0a4)"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:"\ubc30\uc5f4 \ud615\ud0dc\ub85c \uc9c0\uc815\ud558\uba70, \ucffc\ub9ac\ub97c \uc2dd\ubcc4\ud558\ub294 \uace0\uc720\ud55c \ud0a4"}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsxs)(s.p,{children:["\ub3d9\uc77c\ud55c ",(0,d.jsx)(s.code,{children:"queryKey"}),"\ub97c \uac00\uc9c0\ub294 \ub2e4\ub978 ",(0,d.jsx)(s.code,{children:"useQuery"}),"\uac00 \uc788\uc744 \uacbd\uc6b0, \uce90\uc2f1\ub41c \ub370\uc774\ud130\ub97c \uc7ac\uc0ac\uc6a9"]}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:"queryKey\ub294 \ubc30\uc5f4\uc774\ubbc0\ub85c \uc5ec\ub7ec \uac1c\uc758 \ud0a4\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc74c. \uc774\ub97c \uc774\uc6a9\ud574 \ube14\ub85c\uadf8 \ud3ec\uc2a4\ud2b8\ub9c8\ub2e4 \ud639\uc740 \uac80\uc0c9 \uacb0\uacfc\ub9c8\ub2e4 \ub2e4\ub978 \uce90\uc2dc\ub97c \uc0ac\uc6a9 \uac00\ub2a5"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-javascript",children:"// \ub2e8\uc21c\ud55c queryKey \uc0ac\uc6a9 (\ubc30\uc5f4 \ud615\ud0dc)\nconst { data } = useQuery({\n  queryKey: ['users'],  // 'users' \ub370\uc774\ud130\uc640 \uad00\ub828\ub41c \uc694\uccad\n  queryFn: fetchUsers,\n});\n// => queryKey\ub294 ['users']\ub85c \uc124\uc815\ub418\uc5b4 \uc788\uc73c\ubbc0\ub85c, React Query\ub294 'users' \ub370\uc774\ud130\uac00 \uc774\ubbf8 \uce90\uc2f1\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778 \ud6c4, \uc788\ub2e4\uba74 \uce90\uc2dc\ub41c \ub370\uc774\ud130\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.\n\n// queryKey\uc5d0 \uc5ec\ub7ec \uac1c\uc758 \ud0a4 \uc0ac\uc6a9 (\ub3d9\uc801 \ub370\uc774\ud130)\nconst { data } = useQuery({\n  queryKey: ['user', userId],  // userId\uc5d0 \ub530\ub77c \ub2e4\ub978 \ub370\uc774\ud130\ub97c \uc694\uccad\n  queryFn: () => fetchUser(userId),\n});\n// => queryKey\ub294 ['user', userId]\uc785\ub2c8\ub2e4. userId \uac12\uc774 \ubc14\ub00c\uba74 React Query\ub294 \uc0c8\ub85c\uc6b4 \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub3c4\ub85d \uc790\ub3d9\uc73c\ub85c \uad00\ub9ac\ud569\ub2c8\ub2e4.\n"})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(s.h3,{id:"queryfn\ucffc\ub9ac-\ud568\uc218",children:"queryFn(\ucffc\ub9ac \ud568\uc218)"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"\ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294 \ube44\ub3d9\uae30 \ud568\uc218"}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"Promise"}),"\ub97c \ubc18\ud658\ud574\uc57c \ud558\uba70, ",(0,d.jsx)(s.code,{children:"async"})," \ud568\uc218\ub85c \uc791\uc131\ud560 \uc218 \uc788\uc74c"]}),"\n"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-javascript",children:"// queryFn \uc0ac\uc6a9 \uc608\uc2dc\nconst fetchUsers = async () => {\n  const response = await axios.get('/api/users');\n  return response.data;\n};\n\nconst { data } = useQuery({\n  queryKey: ['users'],\n  queryFn: fetchUsers,\n});\n"})}),"\n",(0,d.jsx)(s.h3,{id:"\uc0c1\ud0dc-\uac12",children:"\uc0c1\ud0dc \uac12"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"useQuery"}),"\uac00 \ubc18\ud658\ud558\ub294 \uac1d\uccb4\uc5d0\ub294 \ub2e4\uc591\ud55c \uc0c1\ud0dc \uac12\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc74c"]}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:(0,d.jsx)(s.strong,{children:"\uc0c1\ud0dc\uac12"})}),(0,d.jsx)(s.th,{children:(0,d.jsx)(s.strong,{children:"\uc124\uba85"})})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"isLoading"})}),(0,d.jsx)(s.td,{children:"\ub370\uc774\ud130\ub97c \ubd88\ub7ec\uc624\ub294 \uc911\uc774\uba74 true"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"isFetching"})}),(0,d.jsx)(s.td,{children:"\ubc31\uadf8\ub77c\uc6b4\ub4dc\uc5d0\uc11c \ub2e4\uc2dc \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294 \uc911\uc778\uc9c0 \uc5ec\ubd80"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"isError"})}),(0,d.jsx)(s.td,{children:"\uc5d0\ub7ec \ubc1c\uc0dd \uc5ec\ubd80(true/false)"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"isSuccess"})}),(0,d.jsx)(s.td,{children:"\ub370\uc774\ud130 \uac00\uc838\uc624\uae30 \uc131\uacf5 \uc0c1\ud0dc"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"error"})}),(0,d.jsx)(s.td,{children:"\uc5d0\ub7ec \ubc1c\uc0dd \uc2dc \uc5d0\ub7ec \uac1d\uccb4"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"data"})}),(0,d.jsx)(s.td,{children:"\uc131\uacf5\uc801\uc73c\ub85c \uac00\uc838\uc628 \ub370\uc774\ud130"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"status"})}),(0,d.jsx)(s.td,{children:"\ud604\uc7ac \ucffc\ub9ac \uc0c1\ud0dc ('loading', 'error', 'success')"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-javascript",children:"// \uc8fc\uc694 \uac1c\ub150 \uc0ac\uc6a9 \uc608\uc2dc\nimport { useQuery } from '@tanstack/react-query'\n\n function News() {\n const { data, isPending, isError } = useQuery(queryKey: ['news'], queryFn: fetchNews)\n if (isPending) return <div>Loading...</div>\n if (isError) return <div>Error...</div>\n return (\n <div>\n      {data.map((news) => (\n <div key={news.id}>{news.title}</div>\n      ))}\n </div>\n  )\n }\n"})}),"\n",(0,d.jsx)(s.h3,{id:"\uc8fc\uc694-\uc635\uc158",children:"\uc8fc\uc694 \uc635\uc158"}),"\n",(0,d.jsxs)(s.p,{children:["\uc544\ub798\uc5d0 \uc801\ud78c \uac83 \uc678\uc5d0\ub3c4 \ub354 \ub9ce\uc740 \uc635\uc158\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4. ",(0,d.jsx)(s.a,{href:"https://tanstack.com/query/latest/docs/framework/react/reference/useQuery",children:"(Tanstack Query \uacf5\uc2dd \uc0ac\uc774\ud2b8 \ucc38\uace0)"})]}),"\n",(0,d.jsxs)(n,{children:[(0,d.jsxs)("summary",{children:[(0,d.jsx)(s.code,{children:"staleTime"})," (\ube44\ud65c\uc131\ud654\ub41c \ub370\uc774\ud130 \uc720\uc9c0 \uc2dc\uac04)"]}),(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"\ub370\uc774\ud130\ub97c \uc2e0\uc120\ud55c \uc0c1\ud0dc\ub85c \uc720\uc9c0\ud560 \uc2dc\uac04(ms) \uc9c0\uc815"}),"\n",(0,d.jsx)(s.li,{children:"\uae30\ubcf8\uac12\uc740 0\uc774\uba70, 0\uc77c \ub54c\ub294 \uc989\uc2dc \uc0c8\ub85c\uc6b4 \uc694\uccad\uc744 \ubcf4\ub0c4"}),"\n"]}),(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-javascript",children:"// staleTime \uc0ac\uc6a9 \uc608\uc2dc\nuseQuery({\n  queryKey: ['posts'],\n  queryFn: fetchPosts,\n  staleTime: 1000 * 60 * 5, // 5\ubd84 \ub3d9\uc548 \ub370\uc774\ud130\ub97c \uc2e0\uc120\ud558\uac8c \uc720\uc9c0\n});\n"})})]}),"\n",(0,d.jsxs)(n,{children:[(0,d.jsxs)("summary",{children:[(0,d.jsx)(s.code,{children:"cacheTime"})," (\uce90\uc2dc \uc720\uc9c0 \uc2dc\uac04)"]}),(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"\ub370\uc774\ud130\ub97c \uc2e0\uc120\ud55c \uc0c1\ud0dc\ub85c \uc720\uc9c0\ud560 \uc2dc\uac04(ms) \uc9c0\uc815"}),"\n",(0,d.jsx)(s.li,{children:"\uae30\ubcf8\uac12\uc740 0\uc774\uba70, 0\uc77c \ub54c\ub294 \uc989\uc2dc \uc0c8\ub85c\uc6b4 \uc694\uccad\uc744 \ubcf4\ub0c4"}),"\n"]}),(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-javascript",children:"// cacheTime \uc0ac\uc6a9 \uc608\uc2dc\nuseQuery({\n  queryKey: ['posts'],\n  queryFn: fetchPosts,\n  cacheTime: 1000 * 60 * 10, // 10\ubd84 \ub3d9\uc548 \uce90\uc2dc \uc720\uc9c0\n});\n"})})]}),"\n",(0,d.jsxs)(n,{children:[(0,d.jsx)("summary",{children:(0,d.jsx)(s.code,{children:"refetchOnMount"})}),(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"\ucef4\ud3ec\ub10c\ud2b8\uac00 \ub9c8\uc6b4\ud2b8\ub420 \ub54c \ub2e4\uc2dc \ub370\uc774\ud130\ub97c \ubd88\ub7ec\uc62c\uc9c0 \uc5ec\ubd80\ub97c \uacb0\uc815(\uae30\ubcf8\uac12 true)"}),"\n"]}),(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-javascript",children:"// refetchOnMount \uc0ac\uc6a9 \uc608\uc2dc\nuseQuery({\n  queryKey: ['posts'],\n  queryFn: fetchPosts,\n  refetchOnMount: false, // \uce90\uc2dc\ub41c \ub370\uc774\ud130\uac00 \uc788\uc73c\uba74 \uc0c8 \uc694\uccad X\n});\n"})})]}),"\n",(0,d.jsxs)(n,{children:[(0,d.jsx)("summary",{children:(0,d.jsx)(s.code,{children:"refetchOnWindowFocus"})}),(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"\uc0ac\uc6a9\uc790\uac00 \ube0c\ub77c\uc6b0\uc800 \ud0ed\uc744 \ub2e4\uc2dc \ud65c\uc131\ud654\ud560 \ub54c \ub370\uc774\ud130\ub97c \ub2e4\uc2dc \ubd88\ub7ec\uc62c\uc9c0 \uc5ec\ubd80\ub97c \uacb0\uc815(\uae30\ubcf8\uac12 true)"}),"\n"]}),(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-javascript",children:"// refetchOnWindowFocus \uc0ac\uc6a9 \uc608\uc2dc\nuseQuery({\n  queryKey: ['posts'],\n  queryFn: fetchPosts,\n  refetchOnWindowFocus: false, // \ud0ed\uc744 \uc774\ub3d9\ud574\ub3c4 \ub2e4\uc2dc \ubd88\ub7ec\uc624\uc9c0 \uc54a\uc74c\n});\n"})})]}),"\n",(0,d.jsxs)(n,{children:[(0,d.jsx)("summary",{children:(0,d.jsx)(s.code,{children:"enabled"})}),(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"\ud2b9\uc815 \uc870\uac74\uc774 \ucda9\uc871\ub420 \ub54c\ub9cc \ucffc\ub9ac\ub97c \uc2e4\ud589\ud558\ub3c4\ub85d \uc124\uc815"}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"false"}),"\ub85c \uc124\uc815\ud558\uba74 \uc790\ub3d9 \uc2e4\ud589\uc744 \ub9c9\uace0, \uc774\ud6c4 ",(0,d.jsx)(s.code,{children:"refetch"}),"\ub97c \uc0ac\uc6a9\ud574 \ub370\uc774\ud130\ub97c \uac00\uc838\uc62c \uc218 \uc788\uc74c"]}),"\n"]}),(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-javascript",children:"// enabled \uc0ac\uc6a9 \uc608\uc2dc\nconst { data, refetch } = useQuery({\n  queryKey: ['user', userId],\n  queryFn: fetchUser,\n  enabled: !!userId, // userId\uac00 \uc788\uc744 \ub54c\ub9cc \uc2e4\ud589\n});\n"})})]}),"\n",(0,d.jsx)(s.h2,{id:"usequery\uc640-usemutation\uc758-\ucc28\uc774",children:"useQuery\uc640 useMutation\uc758 \ucc28\uc774"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:(0,d.jsx)(s.strong,{children:"\uad6c\ubd84"})}),(0,d.jsx)(s.th,{children:(0,d.jsx)(s.strong,{children:"useQuery"})}),(0,d.jsx)(s.th,{children:(0,d.jsx)(s.strong,{children:"useMutation"})})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"\uc5ed\ud560"}),(0,d.jsx)(s.td,{children:"\ub370\uc774\ud130 \uc870\ud68c (GET)"}),(0,d.jsx)(s.td,{children:"\ub370\uc774\ud130 \ucd94\uac00. \uc218\uc815, \uc0ad\uc81c"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"(POST, PUT, DELETE \ub4f1)"}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"\uc2e4\ud589 \uc2dc\uc810"}),(0,d.jsx)(s.td,{children:"\ucef4\ud3ec\ub10c\ud2b8 \ub9c8\uc6b4\ud2b8 \uc2dc \uc790\ub3d9 \uc2e4\ud589"}),(0,d.jsx)(s.td,{children:"mutate \ud568\uc218 \ud638\ucd9c \uc2dc\uc5d0\ub9cc \uc2e4\ud589,"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"\uc218\ub3d9 \uc2e4\ud589 (\ubc84\ud2bc \ud074\ub9ad \ub4f1)"}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"\uce90\uc2f1"}),(0,d.jsx)(s.td,{children:"\uc790\ub3d9 \uce90\uc2f1 \uc9c0\uc6d0"}),(0,d.jsx)(s.td,{children:"\uce90\uc2f1\ud558\uc9c0 \uc54a\uc74c (\ubcf4\ud1b5 \uc218\ub3d9\uc73c\ub85c invailidateQueries \uc0ac\uc6a9)"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"\uc8fc\uc694 \uc608\uc2dc"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"GET /posts"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"POST /posts"}),", ",(0,d.jsx)(s.code,{children:"PUT /posts/:id"})]})]})]})]}),"\n",(0,d.jsx)(s.h1,{id:"-\ub2e4\uc74c-\ud559\uc2b5-\uacc4\ud68dtil-\uc8fc\uc81c",children:"\ud83d\udcc8 \ub2e4\uc74c \ud559\uc2b5 \uacc4\ud68d(TIL \uc8fc\uc81c)"}),"\n",(0,d.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,d.jsxs)(s.li,{className:"task-list-item",children:[(0,d.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","useQuery \uc0ac\uc6a9\ubc95 \uc790\uc138\ud558\uac8c!"]}),"\n",(0,d.jsxs)(s.li,{className:"task-list-item",children:[(0,d.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Auth \uac1c\ub150\uacfc \uc0ac\uc6a9\ubc95"]}),"\n",(0,d.jsxs)(s.li,{className:"task-list-item",children:[(0,d.jsx)(s.input,{type:"checkbox",disabled:!0})," ","cors \uc815\ucc45"]}),"\n"]}),"\n",(0,d.jsx)(s.h1,{id:"-\ucc38\uace0-\uc790\ub8cc",children:"\ud83d\udd17 \ucc38\uace0 \uc790\ub8cc"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"https://tanstack.com/query/latest/docs/framework/react/reference/useQuery",children:"useQurey \uacf5\uc2dd\ubb38\uc11c"})}),"\n"]})]})}function a(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(u,{...e})}):u(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>t});var r=n(6540);const d={},c=r.createContext(d);function i(e){const s=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(c.Provider,{value:s},e.children)}}}]);