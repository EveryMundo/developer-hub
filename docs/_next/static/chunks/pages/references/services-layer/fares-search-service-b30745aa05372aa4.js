(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38],{3190:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/references/services-layer/fares-search-service",function(){return n(289)}])},289:function(e,r,n){"use strict";n.r(r),n.d(r,{__toc:function(){return o}});var i=n(4246),t=n(9304),s=n(5133),d=n(1482);n(8233);var a=n(1441);let o=[{depth:2,value:"Pricing",id:"pricing"},{depth:2,value:"Search",id:"search"}];function _createMdxContent(e){let r=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",tablewrap:"tablewrap",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",definitions:"definitions",type:"type",propmeta:"propmeta",code:"code",em:"em",aside:"aside",pre:"pre",span:"span"},(0,a.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{children:"Fares Search Services"}),"\n",(0,i.jsx)(r.h2,{id:"pricing",children:"Pricing"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Price search by currency (USD) or currency with  format (USD 1,200)."}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"search",children:"Search"}),"\n",(0,i.jsxs)(r.tablewrap,{children:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Key"}),(0,i.jsx)(r.th,{children:"Value Type"}),(0,i.jsx)(r.th,{children:"Description"}),(0,i.jsx)(r.th,{children:"Example"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.definitions,{children:"originMarkets"})}),(0,i.jsx)(r.td,{children:(0,i.jsxs)(r.definitions,{children:[(0,i.jsx)(r.type,{children:"string[]"}),(0,i.jsx)(r.propmeta,{children:"optional"})]})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.definitions,{children:'Two letter country-market code, example "US". Filters based on the Country Market of the Origin Airport / Bus Code.'})}),(0,i.jsxs)(r.td,{children:[(0,i.jsxs)(r.definitions,{children:[(0,i.jsx)(r.code,{children:'{ "originMarkets": [ "US", "FR" ] }'}),(0,i.jsx)(r.type,{children:"JSON"})]})," ",(0,i.jsx)(r.em,{children:"No default"})]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.definitions,{children:"destinationMarkets"})}),(0,i.jsx)(r.td,{children:(0,i.jsxs)(r.definitions,{children:[(0,i.jsx)(r.type,{children:"string[]"}),(0,i.jsx)(r.propmeta,{children:"optional"})]})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.definitions,{children:'Two letter country-market code, example "US". Filters based on the Country Market of the Destination Airport / Bus Code.'})}),(0,i.jsxs)(r.td,{children:[(0,i.jsxs)(r.definitions,{children:[(0,i.jsx)(r.code,{children:'{ "destinationMarkets": [ "US", "FR" ] }'}),(0,i.jsx)(r.type,{children:"JSON"})]})," ",(0,i.jsx)(r.em,{children:"No default"})]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.definitions,{children:"origins"})}),(0,i.jsx)(r.td,{children:(0,i.jsxs)(r.definitions,{children:[(0,i.jsx)(r.type,{children:"string[]"}),(0,i.jsx)(r.propmeta,{children:"optional"})]})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.definitions,{children:'Airport / Bus Station Code, example "MIA". Filters based on the Origin Codes.'})}),(0,i.jsxs)(r.td,{children:[(0,i.jsxs)(r.definitions,{children:[(0,i.jsx)(r.code,{children:'{ "origins": [ "MIA", "NYC" ] }'}),(0,i.jsx)(r.type,{children:"JSON"})]})," ",(0,i.jsx)(r.em,{children:"No default"})]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.definitions,{children:"destinations"})}),(0,i.jsx)(r.td,{children:(0,i.jsxs)(r.definitions,{children:[(0,i.jsx)(r.type,{children:"string[]"}),(0,i.jsx)(r.propmeta,{children:"optional"})]})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.definitions,{children:'Airport / Bus Station Code, example "MIA". Filters based on the Destination Codes.'})}),(0,i.jsxs)(r.td,{children:[(0,i.jsxs)(r.definitions,{children:[(0,i.jsx)(r.code,{children:'{ "destinations": [ "ORD", "LAX" ] }'}),(0,i.jsx)(r.type,{children:"JSON"})]})," ",(0,i.jsx)(r.em,{children:"No default"})]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.definitions,{children:"currencies"})}),(0,i.jsx)(r.td,{children:(0,i.jsxs)(r.definitions,{children:[(0,i.jsx)(r.type,{children:"string[]"}),(0,i.jsx)(r.propmeta,{children:"optional"})]})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.definitions,{children:'Three letter currency code, example "USD". Filters based on the Currency Code(s) that are sent.'})}),(0,i.jsxs)(r.td,{children:[(0,i.jsxs)(r.definitions,{children:[(0,i.jsx)(r.code,{children:'{ "currencies": [ "USD" ] }'}),(0,i.jsx)(r.type,{children:"JSON"})]})," ",(0,i.jsx)(r.em,{children:"No default"})]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.definitions,{children:"siteEdition"})}),(0,i.jsx)(r.td,{children:(0,i.jsxs)(r.definitions,{children:[(0,i.jsx)(r.type,{children:"string"}),(0,i.jsx)(r.propmeta,{children:"optional"})]})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.definitions,{children:'Option to send full site edition code, or country-market code of the site edition, example "en-us" or "us". The site edition refers to the Site Edition that the Fare was collected from in the customer\'s IBE. Filters fares collected in the site edition, or site edition market, sent.'})}),(0,i.jsxs)(r.td,{children:[(0,i.jsxs)(r.definitions,{children:[(0,i.jsx)(r.code,{children:'{ "siteEdition": "US" }'}),(0,i.jsx)(r.type,{children:"JSON"})]})," ",(0,i.jsx)(r.em,{children:"No default"})]})]})]})]}),"\n"]}),"\n",(0,i.jsxs)(r.aside,{type:"note",header:"What makes a service smart ?",children:["\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"The smart feature is enabled when the payload contains the autoSettings object."}),"\n"]}),"\n",(0,i.jsx)(r.pre,{"data-language":"json","data-theme":"default",children:(0,i.jsxs)(r.code,{"data-language":"json","data-theme":"default",children:[(0,i.jsxs)(r.span,{className:"line",children:[(0,i.jsx)(r.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"autoSettings"'}),(0,i.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:": {"})]}),"\n",(0,i.jsxs)(r.span,{className:"line",children:[(0,i.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:'"language"'}),(0,i.jsx)(r.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(r.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"en"'}),(0,i.jsx)(r.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(r.span,{className:"line",children:[(0,i.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:'"market"'}),(0,i.jsx)(r.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(r.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"ES"'})]}),"\n",(0,i.jsx)(r.span,{className:"line",children:(0,i.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n"]})]})}let l={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,a.a)(),e.components);return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/references/services-layer/fares-search-service.md",route:"/references/services-layer/fares-search-service",frontMatter:{order:1},timestamp:1710992047e3,pageMap:[{kind:"Meta",data:{menu_docs:{title:"Docs",type:"page",href:"/"},index:{title:"Welcome",theme:{breadcrumb:!1}},"get-started":{title:"Get started",theme:{breadcrumb:!1}},learning:{title:"Learning",theme:{breadcrumb:!1}},references:"References",tutorial:{title:"Tutorial",type:"page",theme:{sidebar:!1,breadcrumb:!1,toc:!0}},examples:{title:"Examples",type:"page"},menu_tools:{title:"Tools",type:"menu",items:{playground:{title:"Playground",href:"https://everymundo.github.io/developer-hub/playground",newWindow:!0},editor:{title:"Editor",href:"https://everymundo.github.io/developer-hub/editor",newWindow:!0},eds:{title:"EDS Labs",href:"https://everymundo.github.io/registry/stuff/eds/",newWindow:!0},adnetify:{title:"Adnetify Simulator",href:"https://everymundo.github.io/developer-hub/adnetify",newWindow:!0}}}}},{kind:"Folder",name:"examples",route:"/examples",children:[{kind:"Meta",data:{"*":{theme:{sidebar:!0,breadcrumb:!1,toc:!0},display:"hidden"},index:{title:"Examples",display:"children",type:"hidden",theme:{layout:"full"}}}},{kind:"MdxPage",name:"index",route:"/examples"}]},{kind:"Folder",name:"get-started",route:"/get-started",children:[{kind:"Meta",data:{"*":{theme:{breadcrumb:!0}},overview:"Overview","create-a-module":"Create a module",faq:"FAQ"}},{kind:"MdxPage",name:"create-a-module",route:"/get-started/create-a-module"},{kind:"MdxPage",name:"faq",route:"/get-started/faq"},{kind:"MdxPage",name:"overview",route:"/get-started/overview"}]},{kind:"MdxPage",name:"get-started",route:"/get-started"},{kind:"MdxPage",name:"index",route:"/",frontMatter:{title:"Welcome to Developer Hub Documentation"}},{kind:"Folder",name:"learning",route:"/learning",children:[{kind:"Meta",data:{"*":{theme:{breadcrumb:!0}},architecture:"Architecture","setup-file":"Setup.json",editor:"Editor",playground:"Playground","registry-cli":"Registry CLI","registry-script":"Registry Script",workflow:"Workflow"}},{kind:"MdxPage",name:"architecture",route:"/learning/architecture"},{kind:"MdxPage",name:"editor",route:"/learning/editor"},{kind:"MdxPage",name:"playground",route:"/learning/playground"},{kind:"MdxPage",name:"registry-cli",route:"/learning/registry-cli"},{kind:"MdxPage",name:"registry-script",route:"/learning/registry-script"},{kind:"Folder",name:"setup-file",route:"/learning/setup-file",children:[{kind:"Meta",data:{settings:{title:"Settings",theme:{layout:"full",breadcrumb:!0,toc:!1}}}},{kind:"MdxPage",name:"settings",route:"/learning/setup-file/settings"}]},{kind:"MdxPage",name:"setup-file",route:"/learning/setup-file"},{kind:"MdxPage",name:"workflow",route:"/learning/workflow"}]},{kind:"MdxPage",name:"learning",route:"/learning",frontMatter:{order:2}},{kind:"Folder",name:"references",route:"/references",children:[{kind:"Meta",data:{"*":{theme:{breadcrumb:!0}},iframes:"Iframes","design-system":"Design System (EDS)","services-layer":"Service Layer"}},{kind:"Folder",name:"design-system",route:"/references/design-system",children:[{kind:"Folder",name:"formats",route:"/references/design-system/formats",children:[{kind:"MdxPage",name:"css-variables",route:"/references/design-system/formats/css-variables",frontMatter:{sidebar_position:1}},{kind:"MdxPage",name:"custom-json-format",route:"/references/design-system/formats/custom-json-format",frontMatter:{sidebar_position:3}},{kind:"MdxPage",name:"index",route:"/references/design-system/formats"},{kind:"MdxPage",name:"json",route:"/references/design-system/formats/json",frontMatter:{sidebar_position:2}},{kind:"Meta",data:{"css-variables":"CSS Variables","custom-json-format":"Custom Json Format",index:"Index",json:"Json"}}]},{kind:"MdxPage",name:"index",route:"/references/design-system"},{kind:"Meta",data:{index:"Index"}}]},{kind:"Folder",name:"iframes",route:"/references/iframes",children:[{kind:"MdxPage",name:"index",route:"/references/iframes",frontMatter:{order:0}},{kind:"Meta",data:{index:"Index"}}]},{kind:"Folder",name:"services-layer",route:"/references/services-layer",children:[{kind:"MdxPage",name:"deep-link-service",route:"/references/services-layer/deep-link-service",frontMatter:{order:2}},{kind:"MdxPage",name:"fares-search-service",route:"/references/services-layer/fares-search-service",frontMatter:{order:1}},{kind:"MdxPage",name:"hangar-service",route:"/references/services-layer/hangar-service",frontMatter:{order:3}},{kind:"MdxPage",name:"histogram-service",route:"/references/services-layer/histogram-service",frontMatter:{order:4}},{kind:"MdxPage",name:"index",route:"/references/services-layer",frontMatter:{order:1}},{kind:"Meta",data:{"deep-link-service":"Deep Link Service","fares-search-service":"Fares Search Service","hangar-service":"Hangar Service","histogram-service":"Histogram Service",index:"Index"}}]}]},{kind:"Folder",name:"tutorial",route:"/tutorial",children:[{kind:"Meta",data:{"*":{theme:{sidebar:!0,breadcrumb:!1,toc:!0,pagination:!1},display:"hidden"},index:{title:"Tutorial",display:"normal",type:"hidden"}}},{kind:"MdxPage",name:"index",route:"/tutorial"}]}],flexsearch:{codeblocks:!0},title:"Fares Search Services",headings:o},pageNextRoute:"/references/services-layer/fares-search-service",nextraLayout:s.ZP,themeConfig:d.Z};r.default=(0,t.j)(l)}},function(e){e.O(0,[428,168,774,888,179],function(){return e(e.s=3190)}),_N_E=e.O()}]);