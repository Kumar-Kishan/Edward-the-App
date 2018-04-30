(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{WAPb:function(t,e,n){"use strict";n.r(e);var o=n("z4+M"),s=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);var r=n("acAw"),a=n("JFUb");var c=function(t){n("WNMm")},u=Object(a.a)(s.a,r.a,r.b,!1,c,"data-v-28413b43",null);e.default=u.exports},WNMm:function(t,e){},acAw:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"workshops-wrap"},[n("div",{staticClass:"write"},[n("div",{staticClass:"intro"},[n("h1",[t._v("Novel Quickstart")]),t._v(" "),t.finished?t._e():n("p",[n("strong",[t._v("Answer the following prompts.")]),t._v(" You'll start simple and add more details as you go along.\n        By the end, you'll be ready to start plotting and outlining your novel.\n      ")])]),t._v(" "),n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.finished?n("div",{key:"finished",staticClass:"finished"},[this.fullText.trim()?n("div",[n("p",[t._v("\n            Saved! You can view what you've written in the Workshops column of the Write page.\n          ")]),t._v(" "),n("p",[t._v("\n            If you're ready to start writing, you can visit the "),n("router-link",{attrs:{to:"/write"}},[t._v("Write")]),t._v(" page.\n            You can also visit the "),n("router-link",{attrs:{to:"/plan"}},[t._v("Plan")]),t._v(" page to do more plotting and development,\n            or the "),n("router-link",{attrs:{to:"/outline"}},[t._v("Outline")]),t._v(" page to start outlining individual chapters.\n          ")],1)]):n("div",[n("p",[t._v("\n            Deleted! This workshop was empty.\n          ")])]),t._v(" "),n("button",{staticClass:"button-green",on:{click:function(e){t.reset()}}},[t._v("Start over")])]):n("div",{key:"content",staticClass:"content"},[n("p",{staticClass:"description"},[t._v("Write the title of your novel:")]),t._v(" "),n("div",{staticClass:"editor short title"},[n("quill-editor",{attrs:{content:t.content.title},on:{"update:content":function(e){t.updateContent(0,e)}}})],1),t._v(" "),n("p",{staticClass:"description"},[t._v("Write a tagline: a short, catchy slogan that draws potential readers in.")]),t._v(" "),n("p",{staticClass:"example"},[t._v('e.g. "Can the best thing happen at the worst time?"')]),t._v(" "),n("div",{staticClass:"editor short tagline"},[n("quill-editor",{attrs:{content:t.content.tagline},on:{"update:content":function(e){t.updateContent(1,e)}}})],1),t._v(" "),n("p",{staticClass:"description"},[t._v("\n          Summarize your novel in one or two sentences, like the descriptions in the New York Times bestseller list.\n        ")]),t._v(" "),n("p",{staticClass:"example"},[t._v('\n          e.g. "In the year 2149, a young family struggles to survive in an irradiated countryside."\n        ')]),t._v(" "),n("div",{staticClass:"editor short summary"},[n("quill-editor",{attrs:{content:t.content.summary},on:{"update:content":function(e){t.updateContent(2,e)}}})],1),t._v(" "),n("p",{staticClass:"description"},[t._v("In a sentence or two, explain the theme of the novel and why it's important to you.")]),t._v(" "),n("p",{staticClass:"example"},[t._v("\n          e.g. \"This novel is about learning to trust the people who are always there for you.\n          I want the reader to know that it's okay to believe in others, even if they've been hurt before.\"\n        ")]),t._v(" "),n("div",{staticClass:"editor short theme"},[n("quill-editor",{attrs:{content:t.content.theme},on:{"update:content":function(e){t.updateContent(3,e)}}})],1),t._v(" "),n("p",{staticClass:"description"},[t._v('\n          Write the "back jacket" of the novel: a few paragraphs that introduce the plot and characters.\n        ')]),t._v(" "),n("div",{staticClass:"editor medium jacket"},[n("quill-editor",{attrs:{content:t.content.jacket},on:{"update:content":function(e){t.updateContent(4,e)}}})],1),t._v(" "),n("p",{staticClass:"description"},[t._v("\n          Write a book report about your novel: several paragraphs that describe the most important parts.\n        ")]),t._v(" "),n("div",{staticClass:"editor long report"},[n("quill-editor",{attrs:{content:t.content.report},on:{"update:content":function(e){t.updateContent(5,e)}}})],1),t._v(" "),n("button",{staticClass:"button-green done",on:{click:function(e){t.finish()}}},[t._v("Finish")])])])],1)])},s=[]},"z4+M":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("6TUa"),s=l(n("fyQS")),i=n("fU7r"),r=l(n("vsPS")),a=l(n("HANv")),c=l(n("ZBUZ")),u=l(n("bFnm"));function l(t){return t&&t.__esModule?t:{default:t}}var h=new s.default("NOVEL_QUICKSTART_CURRENT_EXERCISE");e.default={components:{QuillEditor:a.default,Timer:c.default},computed:{allWorkshops:function(){return this.$store.state.workshop.workshops},content:function(){return this.workshops?{title:this.workshops[0].content,tagline:this.workshops[1].content,summary:this.workshops[2].content,theme:this.workshops[3].content,jacket:this.workshops[4].content,report:this.workshops[5].content}:{}},fullText:function(){return this.workshops&&this.workshops.length?this.workshops.reduce(function(t,e){return t+(0,i.GetContentString)(e.content)},""):""}},data:function(){return{finished:!1,workshops:null}},methods:{begin:function(t){t?this.workshops=t:this.newWorkshop()},finish:function(){h.cacheDelete(),this.finished=!0},getCurrentWorkshop:function(){var t=h.cacheGet();if(!t)return null;var e=this.allWorkshops.filter(function(e){return e.guid===t});return e&&e.length?e:null},newWorkshop:function(){var t=this;h.cacheDelete();var e=(0,r.default)(),n="Novel Quickstart "+(new Date).toLocaleDateString();this.workshops=[0,1,2,3,4,5].map(function(t){return{archived:!1,guid:e,title:n,order:t,workshopName:u.default.NOVEL_QUICKSTART.name,content:null,date:(new Date).toLocaleDateString("en-US")}}),this.workshops.forEach(function(e){return t.$store.commit(o.ADD_WORKSHOP,{workshop:e})}),h.cacheSet(e)},reset:function(){this.finished=!1,this.workshops=null,this.begin()},updateContent:function(t,e){this.$store.commit(o.UPDATE_WORKSHOPS_CONTENT,{workshopUpdates:[{workshop:this.workshops[t],newContent:e}]})}},created:function(){var t=this.getCurrentWorkshop();this.begin(t||null)},beforeDestroy:function(){var t=this;this.fullText.trim()||(h.cacheDelete(),this.workshops&&this.workshops.forEach(function(e){return t.$store.commit(o.DELETE_WORKSHOP,{workshop:e})}))}}}}]);
//# sourceMappingURL=3.6f27eb1225487697b952.js.map