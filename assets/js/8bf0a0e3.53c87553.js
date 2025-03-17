"use strict";(self.webpackChunkcode_it_fs_5th_til=self.webpackChunkcode_it_fs_5th_til||[]).push([[7036],{582:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>x,frontMatter:()=>r,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"\ubc15\uc138\uc815/25.03/250317","title":"\ud83d\udcda \uc8fc\uc81c: Auth\ub780 \ubb34\uc5c7\uc778\uac00, \uadf8\ub9ac\uace0 \uc720\uc800 \uae30\ub2a5 \uad6c\ud604","description":"\ub0a0\uc9dc: 2025-03-17","source":"@site/docs/\ubc15\uc138\uc815/25.03/250317.md","sourceDirName":"\ubc15\uc138\uc815/25.03","slug":"/\ubc15\uc138\uc815/25.03/250317","permalink":"/TIL/docs/\ubc15\uc138\uc815/25.03/250317","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\ubc15\uc138\uc815/25.03/250317.md","tags":[],"version":"current","frontMatter":{},"sidebar":"TILSidebar","previous":{"title":"\ud83d\udcda \uc8fc\uc81c: CORS\ub780 \ubb34\uc5c7\uc778\uac00","permalink":"/TIL/docs/\ubc15\uc138\uc815/25.03/250311"},"next":{"title":"\ucd5c\uc740\ube44","permalink":"/TIL/docs/\ucd5c\uc740\ube44/"}}');var l=i(4848),c=i(8453);const r={},d="\ud83d\udcda \uc8fc\uc81c: Auth\ub780 \ubb34\uc5c7\uc778\uac00, \uadf8\ub9ac\uace0 \uc720\uc800 \uae30\ub2a5 \uad6c\ud604",t={},h=[{value:"\uc778\uc99d(Authentication, AuthN)",id:"\uc778\uc99dauthentication-authn",level:2},{value:"\uc77c\ubc18\uc801\uc778 \uc778\uc99d \uc720\ud615",id:"\uc77c\ubc18\uc801\uc778-\uc778\uc99d-\uc720\ud615",level:3},{value:"\uad8c\ud55c \ubd80\uc5ec (Authorization, AuthZ)",id:"\uad8c\ud55c-\ubd80\uc5ec-authorization-authz",level:2},{value:"\uc791\ub3d9\ubc29\uc2dd",id:"\uc791\ub3d9\ubc29\uc2dd",level:3},{value:"\ud504\ub808\uc784\uc6cc\ud06c OAuth",id:"\ud504\ub808\uc784\uc6cc\ud06c-oauth",level:3},{value:"\ud83d\udca1\uc720\uc800 \uae30\ub2a5 \uad6c\ud604",id:"\uc720\uc800-\uae30\ub2a5-\uad6c\ud604",level:2},{value:"\ud83d\udca1JWT (JSON Web Token)",id:"jwt-json-web-token",level:2},{value:"\ud5e4\ub354(Header)",id:"\ud5e4\ub354header",level:3},{value:"\ud398\uc774\ub85c\ub4dc (Payload)",id:"\ud398\uc774\ub85c\ub4dc-payload",level:3},{value:"\uc11c\uba85 (Signature)",id:"\uc11c\uba85-signature",level:3},{value:"\uad6c\uc870",id:"\uad6c\uc870",level:3},{value:"\uc0ac\uc6a9 \ud750\ub984",id:"\uc0ac\uc6a9-\ud750\ub984",level:3}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"-\uc8fc\uc81c-auth\ub780-\ubb34\uc5c7\uc778\uac00-\uadf8\ub9ac\uace0-\uc720\uc800-\uae30\ub2a5-\uad6c\ud604",children:"\ud83d\udcda \uc8fc\uc81c: Auth\ub780 \ubb34\uc5c7\uc778\uac00, \uadf8\ub9ac\uace0 \uc720\uc800 \uae30\ub2a5 \uad6c\ud604"})}),"\n",(0,l.jsx)(n.p,{children:"\ub0a0\uc9dc: 2025-03-17"}),"\n",(0,l.jsx)(n.p,{children:"\uc694\uc998 \uc774\ub860\uc218\uc5c5\uc744 \uc798 \ub530\ub77c\uac00\uc9c0 \ubabb\ud558\uace0 \uc788\ub294\ub370, \uc624\ub298\uc740 \uc9c0\ub09c \uc218\uc5c5\uc5d0\uc11c \uc774\ud574\uac00 \uac00\uc9c0 \uc54a\uc544 \uc774\ubc88 \ubbf8\uc158\uc5d0\uc11c \ub098\ub97c \ud798\ub4e4\uac8c \ub9cc\ub4e4\uc5c8\ub358 Auth\ub77c\ub294 \uac1c\ub150\uacfc \uc774\ub97c \ud1b5\ud55c \uc720\uc800 \uae30\ub2a5 \uad6c\ud604\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uace0\uc790 \ud569\ub2c8\ub2e4. \ub2e4\uc74c \ubbf8\uc158\uacfc \ud504\ub85c\uc81d\ud2b8\uc5d0\ub3c4 \uc720\uc800 \uae30\ub2a5\uc774 \uc788\uace0, \uc55e\uc73c\ub85c\ub3c4 \uc720\uc800 \uae30\ub2a5\uc740 \uacc4\uc18d\ud574\uc11c \ub4f1\uc7a5\ud560 \uac83\uc774\uae30\uc5d0 \ud55c \ubc88 \ud655\uc2e4\ud788 \uc54c\uc544\ub450\uba74 \uc88b\uc744 \uac83 \uac19\uc544 \uc8fc\uc81c\ub85c \uc815\ud558\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\uc801\uc5b4\uc57c\ud560 \uac1c\ub150\uc774 \ub108\ubb34 \ub9ce\uc544\uc9c8 \uac83 \uac19\uc544 \uc624\ub298\uc740 ",(0,l.jsx)(n.strong,{children:"\uc720\uc800 \uae30\ub2a5 \uad6c\ud604"}),"\uc5d0 \ub300\ud574\uc11c\ub294 \uac04\ub2e8\ud558\uac8c \uc801\uc5b4\ub450\uace0, \ub2e4\uc74c TIL\uae00\uc5d0\uc11c \ub354 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"auth\uc778\uc99d",children:"\ud83d\udca1Auth(\uc778\uc99d)"}),"\n",(0,l.jsx)(n.p,{children:"Auth(\uc778\uc99d)\ub780 \uc0ac\uc6a9\uc790\uac00 \uc2dc\uc2a4\ud15c\uc5d0 \uc811\uadfc\ud560 \ub54c, \uc0ac\uc6a9\uc790\uac00 \ub204\uad6c\uc778\uc9c0\ub97c \ud655\uc778\ud558\uace0 \uadf8\uc5d0 \ub300\ud55c \uad8c\ud55c\uc744 \ubd80\uc5ec\ud558\ub294 \uacfc\uc815\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \uc774 \uacfc\uc815\uc740 \ubcf4\ud1b5 \ub85c\uadf8\uc778\uacfc \uad00\ub828\uc774 \uc788\uc73c\uba70, \uc0ac\uc6a9\uc790\uac00 \uc81c\uacf5\ud55c \uc815\ubcf4(\uc8fc\ub85c \uc0ac\uc6a9\uc790 \uc774\ub984\uacfc \ube44\ubc00\ubc88\ud638)\uac00 \uc2dc\uc2a4\ud15c\uc5d0 \ub4f1\ub85d\ub41c \uc815\ubcf4\uc640 \uc77c\uce58\ud558\ub294\uc9c0 \ud655\uc778\ud558\ub294 \uc808\ucc28\uc785\ub2c8\ub2e4. Auth\ub77c\ub294 \uc6a9\uc5b4\ub294 \ub2e4\uc74c\uc758 \uc57d\uc5b4, \uadf8\ub9ac\uace0 \uae30\ub2a5\uc73c\ub85c \uc8fc\uc694 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\uc778\uc99d(Authentication): \uc2e0\uc6d0 \uc18c\uc720\uad8c(\uc608: \uc0ac\uc6a9\uc790 \ub610\ub294 \uc11c\ube44\uc2a4)\uc744 \ud655\uc778\ud558\ub294 \uacfc\uc815\uc785\ub2c8\ub2e4. \u201c\uc5b4\ub5a4 \uc2e0\uc6d0\uc744 \uc18c\uc720\ud558\uace0 \uc788\uc2b5\ub2c8\uae4c?\u201d\ub77c\ub294 \uc9c8\ubb38\uc5d0 \ub2f5\ud569\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.li,{children:"\uad8c\ud55c \ubd80\uc5ec(Authorization): \uc2e0\uc6d0\uc774 \uc790\uc6d0\uc5d0 \ub300\ud574 \uc218\ud589\ud560 \uc218 \uc788\ub294 \uc791\uc5c5\uc744 \uacb0\uc815\ud558\ub294 \uacfc\uc815\uc785\ub2c8\ub2e4. \u201c\ubb34\uc5c7\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\uae4c?\u201d\ub77c\ub294 \uc9c8\ubb38\uc5d0 \ub2f5\ud569\ub2c8\ub2e4."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\uc778\uc99dauthentication-authn",children:"\uc778\uc99d(Authentication, AuthN)"}),"\n",(0,l.jsx)(n.p,{children:"\uc0ac\uc6a9\uc790\uac00 \uc790\uaca9 \uc99d\uba85\uc744 \uae30\ubc18\uc73c\ub85c \ub9ac\uc18c\uc2a4\uc5d0 \uc811\uadfc\ud558\uae30 \uc804\uc5d0 \uc0ac\uc6a9\uc790\ub97c \uc2dd\ubcc4\ud558\ub294 \uac83. \uc989, \uc0ac\uc6a9\uc790\uac00 \ub204\uad6c\uc778\uc9c0\ub97c \ud655\uc778\ud558\ub294 \uacfc\uc815\uc73c\ub85c \uc544\ub798\uc640 \uac19\uc740 \ub85c\uadf8\uc778 \ubc29\ubc95\uc744 \uc0ac\uc6a9 \ud558\ub294 \uac83\uc774 \uc608\uc2dc\uc785\ub2c8\ub2e4. \uc2dc\uc2a4\ud15c\uc740 \uc774\ub7ec\ud55c \uc608\uc2dc\uc640 \uac19\uc740 \uc790\uaca9 \uc99d\uba85\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc0ac\uc6a9\uc790\uac00 \uc62c\ubc14\ub978 \uc2e0\uc6d0\uc744 \uac00\uc9c0\uace0 \uc788\ub294\uc9c0\ub97c \ud655\uc778\ud569\ub2c8\ub2e4."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\uc544\uc774\ub514\uc640 \ube44\ubc00\ubc88\ud638"}),"\n",(0,l.jsx)(n.li,{children:"\uc18c\uc15c \ub85c\uadf8\uc778(Google, Facebook \ub4f1)"}),"\n",(0,l.jsx)(n.li,{children:"\uc774\uba54\uc77c \uc778\uc99d"}),"\n",(0,l.jsx)(n.li,{children:"2\ub2e8\uacc4 \uc778\uc99d"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\uc778\uc99d\uc694\uc18c\ub294 \uc778\uc99d \uacfc\uc815\uc5d0\uc11c \uc0ac\uc6a9\uc790\uc758 \uc2e0\uc6d0\uc744 \ud655\uc778\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \uc99d\uac70\uc758 \ubc94\uc8fc\uc785\ub2c8\ub2e4. \uc774 \uc694\uc18c\ub4e4\uc740 \uc2dc\uc2a4\ud15c\uc774\ub098 \ub9ac\uc18c\uc2a4\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub294 \uad8c\ud55c\uc774 \uc788\ub294 \uc0ac\uc6a9\uc790\ub9cc\uc774 \uc811\uadfc\ud560 \uc218 \uc788\ub3c4\ub85d \ubcf4\uc7a5\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc694\uc18c\ub4e4\uc740 \uc77c\ubc18\uc801\uc73c\ub85c \u201c\uc778\uc99d\uc758 \uc138 \uac00\uc9c0 \uc694\uc18c\u201d\ub77c\uace0 \ubd88\ub9ac\ub294 \uc544\ub798\uc640 \uac19\uc740 \uc138 \uac00\uc9c0 \uc8fc\uc694 \uc720\ud615\uc73c\ub85c \ub098\ub269\ub2c8\ub2e4."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\uc9c0\uc2dd \uc694\uc18c: \ub2f9\uc2e0\uc774 \uc54c\uace0 \uc788\ub294 \uac83 (\uc608: \ube44\ubc00\ubc88\ud638, PIN)"}),"\n",(0,l.jsx)(n.li,{children:"\uc18c\uc9c0 \uc694\uc18c: \ub2f9\uc2e0\uc774 \uac00\uc9c0\uace0 \uc788\ub294 \uac83 (\uc608: \uc2a4\ub9c8\ud2b8\ud3f0, \ubcf4\uc548 \ud1a0\ud070)"}),"\n",(0,l.jsx)(n.li,{children:"\uace0\uc720 \uc694\uc18c: \ub2f9\uc2e0 \uc790\uc2e0\uc778 \uac83 (\uc608: \uc9c0\ubb38, \uc5bc\uad74 \uc778\uc2dd)"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://prod-files-secure.s3.us-west-2.amazonaws.com/90d003c9-e662-4a16-a8f7-9994bc2e54d8/0f47ce29-6f37-4501-bd16-de61e46ec037/%EC%9D%B8%EC%A6%9D%EC%9D%98_%EC%84%B8%EA%B0%80%EC%A7%80_%EC%9A%94%EC%86%8C.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUUEL57X%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T174205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbyA7iULQHMlaVaXuZFA1aIlm7xnGpzca5yADlgWEjPAiEA2mnQGRnra5qPCiI7qZ%2Bv7TSRSXG2i9kC78iyCw0KzXYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOvHGLsscR%2FI5OaaISrcAw7UaY7Vl0e4vB9pwLLTM4EmAoamZXuGjue5qMa6fMJOP%2F9%2BhhyoCo2PJyilLJqg%2BV2hz4Whm7AmPTKZc8xHogUQmFVGCj8b4XMyz4YcHYJZiJEkyuNgvNzI9NWyVvHTecnw%2FCsduUlnnQCn9LsIgX0QaKGt1%2Be1lajxbmNaymEFoG1jTHW26x3DRCmoFah0q9n1OEaPQ0ggFeOE1nu8aoEYKcUJQOZfrkS%2BP4AnkJYIbk1IgnkqpMkU05FvJGAw8XjtwxbfSCWd1SjLkKxPq%2FrHfdxWSlP7UNMnUvOXC9n4gizt5cVeaI7vocNdSbcPB%2F%2Fuz9FTXJW7GR8VoVgF%2BWa4oLrXPGaJcUBYUatCqdzGzcJQxm1BtEci11xwNScv9r19u9uYi%2BxNZ6808d5G6XNBOW2WvyJAgPglVGn1MQ7KXEFNJT2C5DxKdn1ohHEK%2F2JCwA4L31KllkjRJbHcegcnj6LwLoREomb6XS3UsAgzyb6duPyP6u7wV4mIZUenqqQmkrxDV08%2BH7jzk%2B%2BvmgJR1xvtv3hNuNwcUFd44YyibWi%2B6lqIWp9F0jHM4idIzxl5Vq7VomU7H8cdtKKRNbr7RPBi92ensxQzHh6JATKsj8crSjOtfqCyPTweMKmn4b4GOqUBA0moaesjj1dHQ7P3NNdi8ppkUklOTpfe%2BmDyZXqGet3NMwKZ5YvwK2Txnbk%2B1S%2F9BHk7Jqv0oq2wX%2FSa6siMLcF4COX35VxB%2FigUB%2FkH9eZrtRGcesyrjW2gelAg%2BzC9EcBLivBGlH60EqC3BHsqeR%2B9QkLGr2rXZDHe5aYevMK5NSUBBvpz5Qbo%2Bgcke1KHxYgKBTvHqRtV2TalD65QFsIOwaVs&X-Amz-Signature=752a29889bca7a066ebc3ed8e70f947753a9471fdea30ded9227a0a803239af8&X-Amz-SignedHeaders=host&x-id=GetObject",alt:"%EC%9D%B8%EC%A6%9D%EC%9D%98_%EC%84%B8%EA%B0%80%EC%A7%80_%EC%9A%94%EC%86%8C.jpg"})}),"\n",(0,l.jsx)(n.h3,{id:"\uc77c\ubc18\uc801\uc778-\uc778\uc99d-\uc720\ud615",children:"\uc77c\ubc18\uc801\uc778 \uc778\uc99d \uc720\ud615"}),"\n",(0,l.jsxs)(i,{children:[(0,l.jsx)("summary",{children:"\ube44\ubc00\ubc88\ud638 \uc778\uc99d"}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\uc0ac\uc6a9\uc790\ub294 \uba3c\uc800 \uc774\uba54\uc77c \uc8fc\uc18c \ubc0f \ube44\ubc00\ubc88\ud638\uc640 \uac19\uc740 \ud544\uc694\ud55c \uc138\ubd80 \uc0ac\ud56d\uc744 \uc81c\uacf5\ud558\uc5ec \uacc4\uc815\uc744 \uc791\uc131\ud55c \ub4a4 \uc561\uc138\uc2a4"}),"\n",(0,l.jsx)(n.li,{children:"\ud53c\uc2f1, \ubb34\ucc28\ubcc4 \ub300\uc785 \uacf5\uaca9, \ub370\uc774\ud130 \uc720\ucd9c\uc744 \ud1b5\ud574 \ube44\ubc00\ubc88\ud638\uac00 \uc190\uc0c1\ub420 \uc218 \uc788\ub294 \ubb38\uc81c\ub3c4 \uc788\uc9c0\ub9cc, \uc774\uba54\uc77c \ubc0f \ube44\ubc00\ubc88\ud638 \uc778\uc99d\uc740 \uc5ec\uc804\ud788 \uc2e0\uc6d0 \ud655\uc778\uc744 \uc704\ud55c \uae30\ucd08\uc801\uc778 \ubc29\ubc95\uc73c\ub85c, \ubcf4\uc548\uc744 \uac15\ud654\ud558\uae30 \uc704\ud574 \ucd94\uac00\uc801\uc778 \uc870\uce58\uc640 \uacb0\ud569\ub418\uc5b4 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."}),"\n"]})]}),"\n",(0,l.jsxs)(i,{children:[(0,l.jsx)("summary",{children:"\ube44\ubc00\ubc88\ud638 \uc5c6\ub294 \uc778\uc99d"}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\uc0ac\uc6a9\uc790\ub294 \ub9e4\uc9c1 \ub9c1\ud06c \ub610\ub294 \uc774\uba54\uc77c \ub610\ub294 \ubb38\uc790 \uba54\uc2dc\uc9c0\ub97c \ud1b5\ud574 \uc804\ub2ec \ub41c OTP\ub97c \ud1b5\ud574 \ub85c\uadf8\uc778"}),"\n",(0,l.jsx)(n.li,{children:"\uc774 \uc811\uadfc \ubc29\uc2dd\uc740 \ud53c\uc2f1, \ubb34\ucc28\ubcc4 \ub300\uc785 \uacf5\uaca9, \uc720\ucd9c\uacfc \uac19\uc740 \ube44\ubc00\ubc88\ud638\uc640 \uad00\ub828\ub41c \uc704\ud5d8\uc744 \uc904\uc784\uc73c\ub85c\uc368 \ubcf4\uc548\uc744 \ud5a5\uc0c1\uc2dc\ud0b5\ub2c8\ub2e4. \ub610\ud55c \ube44\ubc00\ubc88\ud638\ub97c \uae30\uc5b5\ud558\uace0 \uad00\ub9ac\ud560 \ud544\uc694\uc131\uc744 \uc5c6\uc560 \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \uac1c\uc120\ud558\uace0, \ube44\ubc00\ubc88\ud638 \uc7ac\uc124\uc815 \uc694\uccad\uc744 \uc904\uc5ec \uc720\uc9c0\ubcf4\uc218 \ube44\uc6a9\uc744 \ub0ae\ucda5\ub2c8\ub2e4."}),"\n"]})]}),"\n",(0,l.jsxs)(i,{children:[(0,l.jsx)("summary",{children:"\uc18c\uc15c \uc778\uc99d"}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\uc18c\uc15c \ub124\ud2b8\uc6cc\ud0b9 \ud50c\ub7ab\ud3fc\uc758 \uae30\uc874 \uc790\uaca9 \uc99d\uba85\uc73c\ub85c\xa0\uc5d0\ud50c\ub9ac\ucf00\uc774\uc158\uc774\ub098 \uc6f9\uc0ac\uc774\ud2b8\uc5d0 \ub85c\uadf8\uc778\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\ub294 \ubc29\ubc95"}),"\n",(0,l.jsx)(n.li,{children:"\uc18c\uc15c \uc778\uc99d\uc740 \uc0ac\uc6a9\uc790\uc5d0\uac8c \ub9c8\ucc30\uc744 \uc904\uc774\uace0,\xa0\xa0\uc2e0\uc6d0 \uc81c\uacf5\uc790 (Identity provider, IdP)\uc758 \uc778\ud504\ub77c\ub97c \ud65c\uc6a9\ud558\uc5ec \ubcf4\uc548\uc744 \uac1c\uc120\ud558\uba70, \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uac80\uc99d\ub41c \uc0ac\uc6a9\uc790 \ub370\uc774\ud130\ub97c \ube60\ub974\uac8c \uc218\uc9d1\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4."}),"\n"]})]}),"\n",(0,l.jsxs)(i,{children:[(0,l.jsx)("summary",{children:"\ub2e4\uc911 \uc694\uc18c \uc778\uc99d(Multi-factor authentication, MFA)"}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\uc0ac\uc6a9\uc790\uac00 \ub450 \uac1c \uc774\uc0c1\uc758 \uc11c\ub85c \ub2e4\ub978 \uc778\uc99d \uc694\uc18c\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc2e0\uc6d0\uc744 \ud655\uc778\ud574\uc57c \ud558\ub294 \ubcf4\uc548 \ud504\ub85c\uc138\uc2a4"}),"\n"]})]}),"\n",(0,l.jsxs)(i,{children:[(0,l.jsx)("summary",{children:"\uc0dd\uccb4 \uc778\uc99d"}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\uace0\uc720\ud55c \uc2e0\uccb4\uc801 \ub610\ub294 \ud589\ub3d9\uc801 \ud2b9\uc131\uc744 \uae30\ubc18\uc73c\ub85c \uc0ac\uc6a9\uc790\uc758 \uc2e0\uc6d0\uc744 \ud655\uc778\ud558\ub294 \ubcf4\uc548 \ud504\ub85c\uc138\uc2a4"}),"\n"]})]}),"\n",(0,l.jsxs)(i,{children:[(0,l.jsx)("summary",{children:"\uc2e0\uc6d0 \uc81c\uacf5\uc790 (IdP)\ub97c \ud1b5\ud55c \uc5d4\ud130\ud504\ub77c\uc774\uc988 \uc2f1\uae00 \uc0ac\uc778\uc628 (SSO)"}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"SSO\ub97c \ud1b5\ud574 \uc0ac\uc6a9\uc790\ub294 \ub2e8\uc77c \uc790\uaca9 \uc99d\uba85 \uc138\ud2b8\ub85c \uc5ec\ub7ec \uc751\uc6a9 \ud504\ub85c\uadf8\ub7a8\uc5d0 \uc561\uc138\uc2a4 \ud560 \uc218 \uc788\uc74c"}),"\n",(0,l.jsx)(n.li,{children:"\ud55c \ubc88\uc758 \uc2dc\uc2a4\ud15c \uc778\uc99d\uc744 \ud1b5\ud574 \ub2e4\uc591\ud55c \uc815\ubcf4\uc2dc\uc2a4\ud15c\uc5d0 \uc7ac\uc778\uc99d\uc5c6\uc774 \uc811\uadfc\ud560 \uc218 \uc788\ub3c4\ub85d \uac1c\ubc1c\ub41c \ubc29\uc2dd"}),"\n"]})]}),"\n",(0,l.jsxs)(i,{children:[(0,l.jsx)("summary",{children:"\uae30\uacc4 \uac04 \uc778\uc99d(Machine-to-machine)"}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\uc804\ud1b5\uc801\uc778 \uc0ac\uc6a9\uc790 \uc778\uc99d\uacfc \uac19\uc740 \uc0ac\uc6a9\uc790 \uc774\ub984\uacfc \ube44\ubc00\ubc88\ud638 \ub300\uc2e0, \uae30\uacc4\ub294\xa0\xa0",(0,l.jsx)(n.a,{href:"https://auth-wiki.logto.io/ko/oauth-2.0",children:"OAuth 2.0"}),"\xa0\uc640 \uac19\uc740 API \ud0a4, \uc778\uc99d\uc11c \ub610\ub294 \ud1a0\ud070\uacfc \uac19\uc740 \uc548\uc804\ud55c \uc790\uaca9 \uc99d\uba85\uc5d0 \uc758\uc874"]}),"\n"]})]}),"\n",(0,l.jsx)(n.h2,{id:"\uad8c\ud55c-\ubd80\uc5ec-authorization-authz",children:"\uad8c\ud55c \ubd80\uc5ec (Authorization, AuthZ)"}),"\n",(0,l.jsx)(n.p,{children:"\uc815\uccb4\uc131(\uc0ac\uc6a9\uc790, \uc11c\ube44\uc2a4 \ub610\ub294 \ub514\ubc14\uc774\uc2a4)\uc774 \ub9ac\uc18c\uc2a4\uc5d0\uc11c \ud2b9\uc815 \uc791\uc5c5\uc744 \uc218\ud589\ud560 \uc218 \uc788\ub294 \uad8c\ud55c\uc744 \uac00\uc9c0\uace0 \uc788\ub294\uc9c0\ub97c \uacb0\uc815\ud558\ub294 \uc758\uc0ac \uacb0\uc815 \uacfc\uc815. \uc989, \uc778\uc99d\uc744 \ub9c8\uce5c \uc0ac\uc6a9\uc790\uac00 \ud560 \uc218 \uc788\ub294 \uc791\uc5c5\uc744 \uacb0\uc815\ud558\ub294 \uacfc\uc815\uc73c\ub85c \uc8fc\uc694 \ubc29\ubc95\uc5d0\ub294 \uc544\ub798\uc640 \uac19\uc740 \uc608\uc2dc\uac00 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\uc5ed\ud560 \uae30\ubc18 \uc811\uadfc \uc81c\uc5b4 (RBAC): \uad00\ub9ac\uc790\ub294 \ud2b9\uc815 \uc0ac\uc6a9\uc790\uac00 \ud560 \uc218 \uc788\ub294 \uc791\uc5c5\uc744 \uc9c0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \uad00\ub9ac\uc790\ub294 \ubaa8\ub4e0 \ub370\uc774\ud130\ub97c \ubcf4\uace0 \uc218\uc815\ud560 \uc218 \uc788\uc9c0\ub9cc, \uc77c\ubc18 \uc0ac\uc6a9\uc790\ub294 \ub370\uc774\ud130\ub9cc \ubcfc \uc218 \uc788\ub294 \uad8c\ud55c\uc744 \uac00\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.li,{children:"\ub9ac\uc18c\uc2a4 \uc811\uadfc \uc81c\uc5b4: \uc0ac\uc6a9\uc790\uac00 \ud2b9\uc815 \ud398\uc774\uc9c0\ub098 \uae30\ub2a5\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ud558\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \uad00\ub9ac\uc790 \ud398\uc774\uc9c0\ub098 \ube44\uacf5\uac1c \ub370\uc774\ud130\ub97c \ubcf4\uc5ec\uc904 \ub54c, \uc778\uc99d\ub41c \uc0ac\uc6a9\uc790\ub9cc \uc811\uadfc\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\uc791\ub3d9\ubc29\uc2dd",children:"\uc791\ub3d9\ubc29\uc2dd"}),"\n",(0,l.jsx)(n.p,{children:"\ubcf4\ud1b5 \uc561\uc138\uc2a4 \uc81c\uc5b4 \ubaa8\ub378\uc744 \uc0ac\uc6a9\ud558\uc5ec \uad6c\ud604\ub429\ub2c8\ub2e4."}),"\n",(0,l.jsxs)(n.p,{children:["*",(0,l.jsx)(n.strong,{children:"\uc561\uc138\uc2a4 \uc81c\uc5b4\ub294 \uc8fc\ub85c 3\uac00\uc9c0 \uad6c\uc131 \uc694\uc18c\ub85c \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4."})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\uc8fc\uccb4 (Subject): \uc790\uc6d0\uc5d0 \ub300\ud574 \uc791\uc5c5\uc744 \uc218\ud589\ud558\ub294 \uac1d\uccb4\uc785\ub2c8\ub2e4. \uc8fc\uccb4\ub294 \uc0ac\uc6a9\uc790, \uc11c\ube44\uc2a4 \ub610\ub294 \uc7a5\uce58\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.li,{children:"\uc790\uc6d0 (Resource): \uc561\uc138\uc2a4 \uc81c\uc5b4\ub85c \ubcf4\ud638\ub418\ub294 \uc5d4\ud130\ud2f0\uc785\ub2c8\ub2e4. \uc790\uc6d0\uc740 \ud30c\uc77c, \ub370\uc774\ud130\ubca0\uc774\uc2a4, API \ub610\ub294 \uae30\ud0c0 \ub514\uc9c0\ud138 \uc790\uc0b0\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.li,{children:"\uc791\uc5c5 (Action): \uc8fc\uccb4\uac00 \uc790\uc6d0\uc5d0 \ub300\ud574 \uc218\ud589\ud560 \uc218 \uc788\ub294 \uc791\uc5c5\uc785\ub2c8\ub2e4. \uc791\uc5c5\uc740 \uc77d\uae30, \uc4f0\uae30, \uc2e4\ud589 \ub610\ub294 \uae30\ud0c0 \uc791\uc5c5\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://prod-files-secure.s3.us-west-2.amazonaws.com/90d003c9-e662-4a16-a8f7-9994bc2e54d8/e4f12f3e-3e8c-4cf0-9f8c-bd999e00dce5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUUEL57X%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T174205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbyA7iULQHMlaVaXuZFA1aIlm7xnGpzca5yADlgWEjPAiEA2mnQGRnra5qPCiI7qZ%2Bv7TSRSXG2i9kC78iyCw0KzXYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOvHGLsscR%2FI5OaaISrcAw7UaY7Vl0e4vB9pwLLTM4EmAoamZXuGjue5qMa6fMJOP%2F9%2BhhyoCo2PJyilLJqg%2BV2hz4Whm7AmPTKZc8xHogUQmFVGCj8b4XMyz4YcHYJZiJEkyuNgvNzI9NWyVvHTecnw%2FCsduUlnnQCn9LsIgX0QaKGt1%2Be1lajxbmNaymEFoG1jTHW26x3DRCmoFah0q9n1OEaPQ0ggFeOE1nu8aoEYKcUJQOZfrkS%2BP4AnkJYIbk1IgnkqpMkU05FvJGAw8XjtwxbfSCWd1SjLkKxPq%2FrHfdxWSlP7UNMnUvOXC9n4gizt5cVeaI7vocNdSbcPB%2F%2Fuz9FTXJW7GR8VoVgF%2BWa4oLrXPGaJcUBYUatCqdzGzcJQxm1BtEci11xwNScv9r19u9uYi%2BxNZ6808d5G6XNBOW2WvyJAgPglVGn1MQ7KXEFNJT2C5DxKdn1ohHEK%2F2JCwA4L31KllkjRJbHcegcnj6LwLoREomb6XS3UsAgzyb6duPyP6u7wV4mIZUenqqQmkrxDV08%2BH7jzk%2B%2BvmgJR1xvtv3hNuNwcUFd44YyibWi%2B6lqIWp9F0jHM4idIzxl5Vq7VomU7H8cdtKKRNbr7RPBi92ensxQzHh6JATKsj8crSjOtfqCyPTweMKmn4b4GOqUBA0moaesjj1dHQ7P3NNdi8ppkUklOTpfe%2BmDyZXqGet3NMwKZ5YvwK2Txnbk%2B1S%2F9BHk7Jqv0oq2wX%2FSa6siMLcF4COX35VxB%2FigUB%2FkH9eZrtRGcesyrjW2gelAg%2BzC9EcBLivBGlH60EqC3BHsqeR%2B9QkLGr2rXZDHe5aYevMK5NSUBBvpz5Qbo%2Bgcke1KHxYgKBTvHqRtV2TalD65QFsIOwaVs&X-Amz-Signature=6ebdcb813b5956e1fbe977e73891d1668f404c8c15486a1961963c06e4c8f97b&X-Amz-SignedHeaders=host&x-id=GetObject",alt:"image.png"})}),"\n",(0,l.jsx)(n.h3,{id:"\ud504\ub808\uc784\uc6cc\ud06c-oauth",children:"\ud504\ub808\uc784\uc6cc\ud06c OAuth"}),"\n",(0,l.jsx)(n.p,{children:"OAuth 2.0\uc740 \ub110\ub9ac \uc0ac\uc6a9\ub418\ub294 Authorization \ud504\ub808\uc784\uc6cc\ud06c\ub85c, \uc560\ud50c\ub9ac\ucf00\uc774\uc158(\ud074\ub77c\uc774\uc5b8\ud2b8)\uc774 \uc0ac\uc6a9\uc790\ub97c \ub300\uc2e0\ud558\uc5ec, \ub610\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc790\uccb4\uac00 \uc81c\ud55c\ub41c \uc811\uadfc \uad8c\ud55c\uc744 \uc5bb\uc744 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.p,{children:"\uc778\ud130\ub137 \uc0ac\uc6a9\uc790\ub4e4\uc774 \ube44\ubc00\ubc88\ud638\ub97c \uc81c\uacf5\ud558\uc9c0 \uc54a\uace0 \ub2e4\ub978 \uc6f9\uc0ac\uc774\ud2b8 \uc0c1\uc758 \uc790\uc2e0\ub4e4\uc758 \uc815\ubcf4\uc5d0 \ub300\ud574 \uc6f9\uc0ac\uc774\ud2b8\ub098 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc811\uadfc \uad8c\ud55c\uc744 \ubd80\uc5ec\ud560 \uc218 \uc788\ub294 \uacf5\ud1b5\uc801\uc778 \uc218\ub2e8\uc73c\ub85c\uc11c \uc0ac\uc6a9 \uc811\uadfc \uc704\uc784\uc744 \uc704\ud55c \uac1c\ubc29\ud615 \ud45c\uc900\uc785\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.p,{children:"\uc544\ub798 \uc774\ubbf8\uc9c0\uc5d0\uc11c MyApp\uc740 \uc0ac\uc6a9\uc790\uc758 Google Drive \uc790\uaca9 \uc99d\uba85\uc744 \uc804\ud600 \ubcf4\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub300\uc2e0, Google\ub85c\ubd80\ud130 \uc0ac\uc6a9\uc790\ub97c \ub300\uc2e0\ud558\uc5ec Google Drive\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub294\xa0\xa0\uc561\uc138\uc2a4 \ud1a0\ud070\uc744 \ubc1b\uc2b5\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://prod-files-secure.s3.us-west-2.amazonaws.com/90d003c9-e662-4a16-a8f7-9994bc2e54d8/56c54947-81ee-4291-89f5-5356718683b4/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUUEL57X%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T174205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbyA7iULQHMlaVaXuZFA1aIlm7xnGpzca5yADlgWEjPAiEA2mnQGRnra5qPCiI7qZ%2Bv7TSRSXG2i9kC78iyCw0KzXYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOvHGLsscR%2FI5OaaISrcAw7UaY7Vl0e4vB9pwLLTM4EmAoamZXuGjue5qMa6fMJOP%2F9%2BhhyoCo2PJyilLJqg%2BV2hz4Whm7AmPTKZc8xHogUQmFVGCj8b4XMyz4YcHYJZiJEkyuNgvNzI9NWyVvHTecnw%2FCsduUlnnQCn9LsIgX0QaKGt1%2Be1lajxbmNaymEFoG1jTHW26x3DRCmoFah0q9n1OEaPQ0ggFeOE1nu8aoEYKcUJQOZfrkS%2BP4AnkJYIbk1IgnkqpMkU05FvJGAw8XjtwxbfSCWd1SjLkKxPq%2FrHfdxWSlP7UNMnUvOXC9n4gizt5cVeaI7vocNdSbcPB%2F%2Fuz9FTXJW7GR8VoVgF%2BWa4oLrXPGaJcUBYUatCqdzGzcJQxm1BtEci11xwNScv9r19u9uYi%2BxNZ6808d5G6XNBOW2WvyJAgPglVGn1MQ7KXEFNJT2C5DxKdn1ohHEK%2F2JCwA4L31KllkjRJbHcegcnj6LwLoREomb6XS3UsAgzyb6duPyP6u7wV4mIZUenqqQmkrxDV08%2BH7jzk%2B%2BvmgJR1xvtv3hNuNwcUFd44YyibWi%2B6lqIWp9F0jHM4idIzxl5Vq7VomU7H8cdtKKRNbr7RPBi92ensxQzHh6JATKsj8crSjOtfqCyPTweMKmn4b4GOqUBA0moaesjj1dHQ7P3NNdi8ppkUklOTpfe%2BmDyZXqGet3NMwKZ5YvwK2Txnbk%2B1S%2F9BHk7Jqv0oq2wX%2FSa6siMLcF4COX35VxB%2FigUB%2FkH9eZrtRGcesyrjW2gelAg%2BzC9EcBLivBGlH60EqC3BHsqeR%2B9QkLGr2rXZDHe5aYevMK5NSUBBvpz5Qbo%2Bgcke1KHxYgKBTvHqRtV2TalD65QFsIOwaVs&X-Amz-Signature=226107aa7ad8a8c8c28e9ff3a5554fddbb517c5a8afd4af1eb658c200881dd35&X-Amz-SignedHeaders=host&x-id=GetObject",alt:"%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C.svg"})}),"\n",(0,l.jsx)(n.p,{children:"\ub4f1\uc7a5 \ubc30\uacbd"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\uc5ec\ub7ec \uc11c\ube44\uc2a4\uc5d0 \ub85c\uadf8\uc778 \ud544\uc694\uc131 \uc99d\ub300"}),"\n",(0,l.jsx)(n.li,{children:"\ub9e4\ubc88 \uc544\uc774\ub514 \ube44\ubc00\ubc88\ud638 \uc785\ub825 \ubd88\ud3b8"}),"\n",(0,l.jsx)(n.li,{children:"\ub2e4\ub978 \uc11c\ube44\uc2a4 \uc778\uc99d \uc774\uc6a9 \ubc0f \uc815\ubcf4 \uc5f0\ub3d9 \uc11c\ube44\uc2a4 \ud544\uc694"}),"\n",(0,l.jsx)(n.li,{children:"\uc544\uc774\ub514 \ube44\ubc00\ubc88\ud638 \uacf5\uc720\ub294 \ubcf4\uc548\uc0c1 \uc704\ud5d8"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\uad6c\uc131 \uc694\uc18c"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"OAuth \uc81c\uacf5\uc790: \ud074\ub77c\uc774\uc5b8\ud2b8 \ub4f1\ub85d \ud6c4 \uc815\ubcf4 \uc81c\uacf5"}),"\n",(0,l.jsx)(n.p,{children:"\u2022 Client ID, Client Secret: \ud074\ub77c\uc774\uc5b8\ud2b8 \uc2dd\ubcc4\n\u2022 Scope: \ud074\ub77c\uc774\uc5b8\ud2b8 \uc811\uadfc \ub9ac\uc18c\uc2a4 \ubc94\uc704"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Authorization Server: \uc778\uc99d\uc11c \ubc1c\uae09 \ubc0f \uc778\uc99d \ud655\uc778"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Resource Server: \ub9ac\uc18c\uc2a4 \uc81c\uacf5 \uc11c\ubc84"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"OAuth 2.0\uc5d0 \uad00\ud55c \ucd94\uac00 \uc815\ubcf4"})," ",(0,l.jsx)(n.a,{href:"https://oauth.net/2/",children:(0,l.jsx)(n.em,{children:"\u2460OAuth \uacf5\uc2dd \uc0ac\uc774\ud2b8"})}),(0,l.jsx)(n.em,{children:","})," ",(0,l.jsxs)(n.a,{href:"https://auth-wiki.logto.io/ko/oauth-2.0",children:[(0,l.jsx)(n.em,{children:"\u2461Auth Wiki"})," "]})]}),"\n",(0,l.jsx)(n.p,{children:"\u27a1 \u201cAuth\u201d\ub77c\ub294 \uc6a9\uc5b4\ub97c \ubcfc \ub54c, \uadf8\uac83\uc774 \uc778\uc99d (authentication)\uc744 \uc758\ubbf8\ud558\ub294\uc9c0 \uad8c\ud55c \ubd80\uc5ec(authorization)\ub97c \uc758\ubbf8\ud558\ub294\uc9c0 \uba85\ud655\ud788 \ud558\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4. \uadf8\ub807\uc9c0 \uc54a\uc73c\uba74 \ub450 \ud504\ub85c\uc138\uc2a4 \ubaa8\ub450\ub97c \ud3ec\ud568\ud55c\ub2e4\uace0 \uc608\uc0c1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.h2,{id:"\uc720\uc800-\uae30\ub2a5-\uad6c\ud604",children:"\ud83d\udca1\uc720\uc800 \uae30\ub2a5 \uad6c\ud604"}),"\n",(0,l.jsx)(n.p,{children:"\uc720\uc800 \uae30\ub2a5\uc740 \ubcf4\ud1b5 \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc544\ub798\uc640 \uac19\uc740 \uc791\uc5c5\ub4e4\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4. JWT\ub97c \ud1b5\ud574 \uc138\uc158\uc744 \uc720\uc9c0\ud569\ub2c8\ub2e4."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\ud68c\uc6d0\uac00\uc785(Registration): \uc0ac\uc6a9\uc790\uac00 \uc2dc\uc2a4\ud15c\uc5d0 \ucc98\uc74c \uac00\uc785\ud558\ub294 \uae30\ub2a5\uc785\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c \uc544\uc774\ub514, \uc774\uba54\uc77c, \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ubc1b\uace0, \uc774 \uc815\ubcf4\ub97c DB\uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.li,{children:"\ub85c\uadf8\uc778(Login): \uc774\ubbf8 \uac00\uc785\ub41c \uc0ac\uc6a9\uc790\uac00 \uc778\uc99d\uc744 \ud1b5\ud574 \uc2dc\uc2a4\ud15c\uc5d0 \uc811\uc18d\ud558\ub294 \uae30\ub2a5\uc785\ub2c8\ub2e4. \ubcf4\ud1b5 \uc544\uc774\ub514\uc640 \ube44\ubc00\ubc88\ud638\ub85c \uc778\uc99d\ud558\uace0, \uc778\uc99d\uc774 \uc644\ub8cc\ub418\uba74 \uc138\uc158 \ub610\ub294 JWT(JSON Web Token)\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc0ac\uc6a9\uc790\uc758 \uc0c1\ud0dc\ub97c \uc720\uc9c0\ud569\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.li,{children:"\ub85c\uadf8\uc544\uc6c3(Logout): \uc0ac\uc6a9\uc790\uac00 \uc2dc\uc2a4\ud15c\uc5d0\uc11c \ub85c\uadf8\uc544\uc6c3\ud560 \ub54c, \uc778\uc99d \uc815\ubcf4\ub97c \uc0ad\uc81c\ud558\uace0 \uc138\uc158\uc744 \uc885\ub8cc\ud558\ub294 \uae30\ub2a5\uc785\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.li,{children:"\ube44\ubc00\ubc88\ud638 \ubcc0\uacbd: \uc0ac\uc6a9\uc790\uac00 \uc790\uc2e0\uc758 \ube44\ubc00\ubc88\ud638\ub97c \ubcc0\uacbd\ud560 \uc218 \uc788\ub294 \uae30\ub2a5\uc785\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.li,{children:"\uc774\uba54\uc77c \uc778\uc99d: \uc0ac\uc6a9\uc790\uac00 \uc785\ub825\ud55c \uc774\uba54\uc77c\uc744 \ud1b5\ud574 \uc778\uc99d \ub9c1\ud06c\ub97c \ubc1c\uc1a1\ud558\uace0, \ub9c1\ud06c\ub97c \ud074\ub9ad\ud558\uba74 \uc774\uba54\uc77c \uc778\uc99d\uc774 \uc644\ub8cc\ub429\ub2c8\ub2e4."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"jwt-json-web-token",children:"\ud83d\udca1JWT (JSON Web Token)"}),"\n",(0,l.jsx)(n.p,{children:"JWT\ub294 \uc120\ud0dd\uc801 \uc11c\uba85 \ubc0f \uc120\ud0dd\uc801 \uc554\ud638\ud654\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub370\uc774\ud130\ub97c \ub9cc\ub4e4\uae30 \uc704\ud55c \uc778\ud130\ub137 \ud45c\uc900 \ubc29\uc2dd\uc758 \ud1a0\ud070\uc785\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c \uc0ac\uc6a9\uc790\uac00 \uc2dc\uc2a4\ud15c\uc5d0 \uc778\uc99d\ub41c \ud6c4 \uc9c0\uc18d\uc801\uc778 \uc138\uc158 \uc720\uc9c0 \ubc0f \uc11c\ubc84 \ub9ac\uc18c\uc2a4\ub97c \uc808\uc57d\ud558\ub294 \ub370 \uc720\uc6a9\ud569\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\uac00 \ub85c\uadf8\uc778\ud558\uba74 \uc11c\ubc84\ub294 JWT \ud1a0\ud070\uc744 \ubc1c\uae09\ud558\uace0, \uc774 \ud1a0\ud070\uc744 \ud074\ub77c\uc774\uc5b8\ud2b8(\ube0c\ub77c\uc6b0\uc800)\uc5d0\uc11c \uc800\uc7a5\ud55c \ub4a4 \uc774\ud6c4 \uc694\uccad \uc2dc \uc774 \ud1a0\ud070\uc744 \ud568\uaed8 \ubcf4\ub0b4\uc5b4 \uc778\uc99d\uc744 \ucc98\ub9ac\ud569\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.p,{children:"JWT\ub294 \ud5e4\ub354, \ud398\uc774\ub85c\ub4dc, \uc11c\uba85 \uc138 \ubd80\ubd84\uc73c\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.h3,{id:"\ud5e4\ub354header",children:"\ud5e4\ub354(Header)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"JWT\uc758 \uc720\ud615\uacfc \uc0ac\uc6a9\ub41c \uc11c\uba85 \uc54c\uace0\ub9ac\uc998\uc744 \uc815\uc758"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'{\n"alg": "HS256",  // \uc54c\uace0\ub9ac\uc998\n"typ": "JWT"     // \ud1a0\ud070 \uc720\ud615\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\ud398\uc774\ub85c\ub4dc-payload",children:"\ud398\uc774\ub85c\ub4dc (Payload)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\ud398\uc774\ub85c\ub4dc\ub294 \uc0ac\uc6a9\uc790\uc5d0 \uad00\ud55c \uc815\ubcf4(\ud074\ub808\uc784)\ub97c \ud3ec\ud568"}),"\n",(0,l.jsx)(n.li,{children:"\ud074\ub808\uc784\uc740 JWT\uac00 \uc804\ub2ec\ud558\ub294 \ub370\uc774\ud130\ub85c, \ub4f1\ub85d\ub41c \ud074\ub808\uc784, \uacf5\uac1c \ud074\ub808\uc784, \ube44\uacf5\uac1c \ud074\ub808\uc784\uc73c\ub85c \uad6c\ubd84\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,l.jsxs)(n.li,{children:["\ub4f1\ub85d\ub41c \ud074\ub808\uc784: ",(0,l.jsx)(n.code,{children:"iss"}),": \ubc1c\uae09\uc790(issuer) / ",(0,l.jsx)(n.code,{children:"sub"}),": \uc0ac\uc6a9\uc790(subject) / ",(0,l.jsx)(n.code,{children:"iat"}),": \ubc1c\uae09 \uc2dc\uac04(issued at) / ",(0,l.jsx)(n.code,{children:"exp"}),": \ub9cc\ub8cc \uc2dc\uac04(expiration) / ",(0,l.jsx)(n.code,{children:"roles"}),": \uad8c\ud55c"]}),"\n",(0,l.jsx)(n.li,{children:"\uacf5\uac1c \ud074\ub808\uc784(Public Claims): \uc0ac\uc6a9\uc790\uac00 \uc815\uc758\ud55c \ud074\ub808\uc784\uc73c\ub85c, \uc8fc\ub85c \ud2b9\uc815 \uc2dc\uc2a4\ud15c\uc774\ub098 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc815\ubcf4"}),"\n",(0,l.jsx)(n.li,{children:"\ube44\uacf5\uac1c \ud074\ub808\uc784(Private Claims): \uc0ac\uc6a9\uc790 \uac04\uc5d0 \uacf5\uc720\ud558\ub294 \ube44\uacf5\uac1c \ub370\uc774\ud130\uc785\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \uc0ac\uc6a9\uc790 \uc5ed\ud560(role)\uc774\ub098 \uc811\uadfc \uad8c\ud55c \ub4f1\uc744 \ud3ec\ud568\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'{\n  "sub": "1234567890",\n  "name": "John Doe",\n  "iat": 1516239022\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\uc11c\uba85-signature",children:"\uc11c\uba85 (Signature)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"JWT\uac00 \ubcc0\uc870\ub418\uc9c0 \uc54a\uc558\uc74c\uc744 \ud655\uc778\ud558\ub294 \ub370 \uc0ac\uc6a9\ub428"}),"\n",(0,l.jsx)(n.li,{children:"\ud5e4\ub354\uc640 \ud398\uc774\ub85c\ub4dc\ub97c \ubc14\ud0d5\uc73c\ub85c \ud2b9\uc815 \ube44\ubc00 \ud0a4\ub97c \uc0ac\uc6a9\ud574 \uc0dd\uc131"}),"\n",(0,l.jsx)(n.li,{children:"\uc11c\uba85\uc774 \ud3ec\ud568\ub418\uba74, \ud1a0\ud070\uc758 \ubb34\uacb0\uc131 \ubcf4\uc7a5"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'HMACSHA256(\n  base64UrlEncode(header) + "." + base64UrlEncode(payload),\n  secret)\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\uad6c\uc870",children:"\uad6c\uc870"}),"\n",(0,l.jsx)(n.p,{children:"WT\ub294 \uc138 \ubd80\ubd84\uc73c\ub85c \ub098\ub204\uc5b4\uc9d1\ub2c8\ub2e4. \uac01 \ubd80\ubd84\uc740 .(\uc810)\uc73c\ub85c \uad6c\ubd84\ub429\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\n"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\ud5e4\ub354"})," \ubd80\ubd84\uc740 ",(0,l.jsx)(n.code,{children:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"}),"\uc785\ub2c8\ub2e4."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\ud398\uc774\ub85c\ub4dc"})," \ubd80\ubd84\uc740 ",(0,l.jsx)(n.code,{children:"eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ"}),"\uc785\ub2c8\ub2e4."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\uc11c\uba85"})," \ubd80\ubd84\uc740 ",(0,l.jsx)(n.code,{children:"SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"}),"\uc785\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\uc0ac\uc6a9-\ud750\ub984",children:"\uc0ac\uc6a9 \ud750\ub984"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\uc0ac\uc6a9\uc790 \ub85c\uadf8\uc778:"})," \uc0ac\uc6a9\uc790\uac00 \uc544\uc774\ub514\uc640 \ube44\ubc00\ubc88\ud638\ub85c \ub85c\uadf8\uc778\ud569\ub2c8\ub2e4."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\uc11c\ubc84\uc5d0\uc11c JWT \ubc1c\uae09:"})," \ub85c\uadf8\uc778 \uc815\ubcf4\uac00 \ub9de\uc73c\uba74, \uc11c\ubc84\ub294 JWT\ub97c \uc0dd\uc131\ud558\uc5ec \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uac8c \uc804\ub2ec\ud569\ub2c8\ub2e4."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c JWT \uc800\uc7a5:"})," \ud074\ub77c\uc774\uc5b8\ud2b8\ub294 JWT\ub97c \ub85c\uceec \uc2a4\ud1a0\ub9ac\uc9c0, \uc138\uc158 \uc2a4\ud1a0\ub9ac\uc9c0 \ub610\ub294 \ucfe0\ud0a4\uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\uc694\uccad \uc2dc JWT \uc804\uc1a1:"})," \ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \uc11c\ubc84\uc5d0 \uc694\uccad\ud560 \ub54c JWT\ub97c \ud568\uaed8 \ubcf4\ub0c5\ub2c8\ub2e4. \uc8fc\ub85c HTTP \uc694\uccad \ud5e4\ub354\uc758 ",(0,l.jsx)(n.code,{children:"Authorization"})," \ud544\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubcf4\ub0b4\uba70, \uac12\uc740 ",(0,l.jsx)(n.code,{children:"Bearer <\ud1a0\ud070>"})," \ud615\uc2dd\uc785\ub2c8\ub2e4."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\uc11c\ubc84\uc5d0\uc11c JWT \uac80\uc99d:"})," \uc11c\ubc84\ub294 \uc694\uccad\uc5d0 \ud3ec\ud568\ub41c JWT\ub97c \uac80\uc99d\ud558\uc5ec \uc0ac\uc6a9\uc790\uac00 \uc778\uc99d\ub41c \uc0ac\uc6a9\uc790\uc778\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"-\ub2e4\uc74c-\ud559\uc2b5-\uacc4\ud68dtil-\uc8fc\uc81c",children:"\ud83d\udcc8 \ub2e4\uc74c \ud559\uc2b5 \uacc4\ud68d(TIL \uc8fc\uc81c)"}),"\n",(0,l.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,l.jsxs)(n.li,{className:"task-list-item",children:[(0,l.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","Auth \uac1c\ub150\uacfc \uc0ac\uc6a9\ubc95"]}),"\n",(0,l.jsxs)(n.li,{className:"task-list-item",children:[(0,l.jsx)(n.input,{type:"checkbox",disabled:!0})," ","\uc720\uc800 \uae30\ub2a5 \uad6c\ud604 \ubc29\ubc95"]}),"\n",(0,l.jsxs)(n.li,{className:"task-list-item",children:[(0,l.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Zustand \uc0ac\uc6a9\ubc95"]}),"\n",(0,l.jsxs)(n.li,{className:"task-list-item",children:[(0,l.jsx)(n.input,{type:"checkbox",disabled:!0})," ","OAuth \uc0ac\uc6a9\ubc95"]}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"-\ucc38\uace0-\uc790\ub8cc",children:"\ud83d\udd17 \ucc38\uace0 \uc790\ub8cc"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\ucf54\ub4dc\uc787 \uac15\uc758\uc790\ub8cc"}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://auth-wiki.logto.io/ko/auth",children:"Auth Wiki - \uc778\uc99d (Auth, disambiguation)\uc740(\ub294) \ubb34\uc5c7\uc778\uac00\uc694?"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://baek.dev/post/24/",children:"\ube14\ub85c\uadf8 - \ube44\uc2b7\ud574\ubcf4\uc774\uc9c0\ub9cc \ub2e4\ub978 \ub450 \uce5c\uad6c\ub97c \uc18c\uac1c\ud569\ub2c8\ub2e4. Authentication vs Authorization"})}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>d});var s=i(6540);const l={},c=s.createContext(l);function r(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);