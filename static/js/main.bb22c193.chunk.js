(this["webpackJsonpwhat-up-china"]=this["webpackJsonpwhat-up-china"]||[]).push([[0],{106:function(e,t){},327:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(5),i=n.n(a),c=n(84),s=n.n(c),u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,328)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))},o=(n(93),n(39),n(6)),l=n(7),p=n(10),h=n(9),j=n(4),d=n.n(j),b=n(11),v=n(33),O=n.n(v),f=n(34),m=n.n(f),x=n(85),g=n.n(x),w=n(86),k=n.n(w),y=n(87),B=n.n(y),N=new(0,m.a.WordTokenizer),S=(new k.a,function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,[{key:"getTopNews",value:function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://what-up-china-server.herokuapp.com/top-news/",e.next=4,O.a.get("https://what-up-china-server.herokuapp.com/top-news/");case 4:return t=e.sent,e.abrupt("return",JSON.parse(t.text));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"getTrendingOnBilibili",value:function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://what-up-china-server.herokuapp.com/bilibili/trending/",e.next=4,O.a.get("https://what-up-china-server.herokuapp.com/bilibili/trending/");case 4:return t=e.sent,e.abrupt("return",JSON.parse(t.text));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"getBaiduHotNews",value:function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://what-up-china-server.herokuapp.com/baidu/hot-news/",e.next=4,O.a.get("https://what-up-china-server.herokuapp.com/baidu/hot-news/");case 4:return t=e.sent,e.abrupt("return",JSON.parse(t.text));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"getTextSentiment",value:function(e,t){var n=g()(e).toLowerCase().replace(/[^a-zA-Z\s]+/g,""),r=N.tokenize(n),a=B.a.removeStopwords(r);return new(0,m.a.SentimentAnalyzer)(t||"English",m.a.PorterStemmer,"afinn").getSentiment(a)}}]),e}()),T=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={articles:[]},r.props=e,r.api=new S,r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.api.getTopNews();case 3:t=e.sent,this.setState({articles:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"makeArticleDiv",value:function(e){var t="";return null!=e.urlToImage&&(t=Object(r.jsx)("img",{src:"https://".concat(e.urlToImage.replace("http://","").replace("https://",""))})),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:Object(r.jsx)("a",{href:e.url,children:e.title})}),Object(r.jsx)("p",{children:e.description}),t,Object(r.jsx)("p",{children:new Date(e.publishedAt).toDateString()})]})}},{key:"render",value:function(){var e=this;return Object(r.jsx)("div",{children:this.state.articles.map((function(t){return e.makeArticleDiv(t)}))})}}]),n}(a.Component),D=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={trends:[]},r.props=e,r.api=new S,r}return Object(l.a)(n,[{key:"makeTrendDiv",value:function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("h2",{children:Object(r.jsx)("a",{href:e.short_link,children:e.title})})})}},{key:"componentDidMount",value:function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.api.getTrendingOnBilibili();case 3:t=e.sent,this.setState({trends:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(r.jsx)("div",{children:this.state.trends.map((function(t){return e.makeTrendDiv(t)}))})}}]),n}(a.Component),C=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={hotNews:[]},r.props=e,r.api=new S,r}return Object(l.a)(n,[{key:"makeNewsDiv",value:function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("h2",{children:Object(r.jsx)("a",{href:e.link,children:e.title})})})}},{key:"componentDidMount",value:function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.api.getBaiduHotNews();case 3:t=e.sent,this.setState({hotNews:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:this.state.sentiment}),this.state.hotNews.map((function(t){return e.makeNewsDiv(t)}))]})}}]),n}(a.Component),I=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={sentiment:""},r.props=e,r.api=new S,r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=function(){var t=document.getElementById("results").innerText.replace(/[^a-z\d\s]+/gi,"").replace("Hot News Baidu","").replace("Trending News","").replace("Trending on Bilibili",""),n=e.api.getTextSentiment(t,"English");isNaN(n)||e.setState({sentiment:n})};document.getElementById("baiduNewsButton").addEventListener("click",t,!1),document.getElementById("trendingNewsButton").addEventListener("click",t,!1),document.getElementById("trendingBilibiliButton").addEventListener("click",t,!1)}},{key:"handle",value:function(){return""!==this.state.sentiment?Object(r.jsxs)("div",{id:"sentiment",children:[Object(r.jsx)("h3",{children:"Sentiment (Beta)"}),this.getSentimentGraphic(),Object(r.jsx)("h3",{children:Object(r.jsxs)("i",{children:["Score: ",this.state.sentiment.toFixed(3)]})})]}):Object(r.jsx)("div",{})}},{key:"getSentimentGraphic",value:function(){var e=parseFloat(this.state.sentiment);return 0===e?Object(r.jsx)("img",{className:"faces",src:"https://creazilla-store.fra1.digitaloceanspaces.com/emojis/55321/neutral-face-emoji-clipart-md.png",alt:"neutral"}):e>0?Object(r.jsx)("img",{className:"faces",src:"https://www.kindpng.com/picc/m/40-408571_original-smiley-face-png-images-clipart-roblox-smile.png",alt:"happy"}):Object(r.jsx)("img",{className:"faces",src:"https://lh3.googleusercontent.com/proxy/Rn2lCovR-IpwLM-0LkXrnUDVBngwHzdfWZ5Un1_o1aiCvuB3fjvlIm4AWaaKMg_BuClvOPXZvUjzjOodqIlsRA8Vx_UXsxc",alt:"sad"})}},{key:"render",value:function(){return Object(r.jsx)("div",{children:this.handle()})}}]),n}(a.Component),E=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{id:"results",children:[Object(r.jsx)(I,{}),Object(r.jsxs)("h2",{children:[Object(r.jsx)("a",{id:"trendingBaidu"}),"Hot News Baidu"]}),Object(r.jsx)(C,{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)("h2",{children:[Object(r.jsx)("a",{id:"trendingNews"}),"Trending News"]}),Object(r.jsx)(T,{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)("h2",{children:[Object(r.jsx)("a",{id:"trendingBilibili"}),"Trending on Bilibili"]}),Object(r.jsx)(D,{})]})}}]),n}(a.Component);var z=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(E,{})})};s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(z,{})}),document.getElementById("root")),u()},39:function(e,t,n){}},[[327,1,2]]]);
//# sourceMappingURL=main.bb22c193.chunk.js.map