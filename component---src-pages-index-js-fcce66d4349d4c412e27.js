(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"0mN4":function(e,t,r){"use strict";r("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"8+s/":function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}r("V+eJ"),r("bWfx"),r("f3/d"),r("hHhE"),r("HAE/");var a=r("q1tI"),i=n(a),o=n(r("Gytx"));function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function d(){c=e(l.map((function(e){return e.props}))),f.canUseDOM?t(c):r&&(c=r(c))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var s=a.prototype;return s.shouldComponentUpdate=function(e){return!o(e,this.props)},s.componentWillMount=function(){l.push(this),d()},s.componentDidUpdate=function(){d()},s.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),d()},s.render=function(){return i.createElement(n,this.props)},a}(a.Component);return s(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),s(f,"canUseDOM",u),f}}},"9eSz":function(e,t,r){"use strict";r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("EK0E"),r("INYr"),r("0mN4");var n=r("TqRt");t.__esModule=!0,t.default=void 0;var a,i=n(r("PJYZ")),o=n(r("VbXa")),s=n(r("8OQS")),u=n(r("pVnL")),c=n(r("q1tI")),l=n(r("17x9")),d=function(e){var t=(0,u.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=b([].concat(t.fluid))),t.fixed&&(t.fixed=b([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(g&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed;return T(t||r).src},T=function(e){if(g&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},E=Object.create({}),m=function(e){var t=d(e),r=p(t);return E[r]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,g="undefined"!=typeof window,A=g&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:i}),c.default.createElement("source",{media:a,srcSet:r,sizes:i}))}))}function b(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function v(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function R(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function O(e,t){var r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var P=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),y.set(e,t)),function(){r.unobserve(e),y.delete(e)}},w=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",u=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",l=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+c+o+s+r+n+t+i+a+u+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},M=function(e){var t=e.src,r=e.imageVariants,n=e.generateSources,a=e.spreadProps,i=e.ariaHidden,o=c.default.createElement(_,(0,u.default)({src:t},a,{ariaHidden:i}));return r.length>1?c.default.createElement("picture",null,n(r),o):o},_=c.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,i=e.style,o=e.onLoad,l=e.onError,d=e.loading,f=e.draggable,p=e.ariaHidden,T=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,u.default)({"aria-hidden":p,sizes:r,srcSet:n,src:a},T,{onLoad:o,onError:l,ref:t,loading:d,draggable:f,style:(0,u.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));_.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var I=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=g&&m(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!h&&A&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||g&&(h||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=P(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),r=p(t),E[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,s=void 0===o?{}:o,l=e.placeholderStyle,f=void 0===l?{}:l,p=e.placeholderClassName,E=e.fluid,m=e.fixed,h=e.backgroundColor,g=e.durationFadeIn,A=e.Tag,y=e.itemProp,b=e.loading,O=e.draggable,P=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,u.default)({opacity:P?1:0,transition:I?"opacity "+g+"ms":"none"},s),C="boolean"==typeof h?"lightgray":h,N={transitionDelay:g+"ms"},G=(0,u.default)({opacity:this.state.imgLoaded?0:1},I&&N,{},s,{},f),H={title:t,alt:this.state.isVisible?"":r,style:G,className:p,itemProp:y};if(E){var x=E,k=T(E);return c.default.createElement(A,{className:(n||"")+" gatsby-image-wrapper",style:(0,u.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},c.default.createElement(A,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),C&&c.default.createElement(A,{"aria-hidden":!0,title:t,style:(0,u.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&N)}),k.base64&&c.default.createElement(M,{ariaHidden:!0,src:k.base64,spreadProps:H,imageVariants:x,generateSources:R}),k.tracedSVG&&c.default.createElement(M,{ariaHidden:!0,src:k.tracedSVG,spreadProps:H,imageVariants:x,generateSources:v}),this.state.isVisible&&c.default.createElement("picture",null,S(x),c.default.createElement(_,{alt:r,title:t,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:b,draggable:O})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:w((0,u.default)({alt:r,title:t,loading:b},k,{imageVariants:x}))}}))}if(m){var j=m,U=T(m),B=(0,u.default)({position:"relative",overflow:"hidden",display:"inline-block",width:U.width,height:U.height},i);return"inherit"===i.display&&delete B.display,c.default.createElement(A,{className:(n||"")+" gatsby-image-wrapper",style:B,ref:this.handleRef,key:"fixed-"+JSON.stringify(U.srcSet)},C&&c.default.createElement(A,{"aria-hidden":!0,title:t,style:(0,u.default)({backgroundColor:C,width:U.width,opacity:this.state.imgLoaded?0:1,height:U.height},I&&N)}),U.base64&&c.default.createElement(M,{ariaHidden:!0,src:U.base64,spreadProps:H,imageVariants:j,generateSources:R}),U.tracedSVG&&c.default.createElement(M,{ariaHidden:!0,src:U.tracedSVG,spreadProps:H,imageVariants:j,generateSources:v}),this.state.isVisible&&c.default.createElement("picture",null,S(j),c.default.createElement(_,{alt:r,title:t,width:U.width,height:U.height,sizes:U.sizes,src:U.src,crossOrigin:this.props.crossOrigin,srcSet:U.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:b,draggable:O})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:w((0,u.default)({alt:r,title:t,loading:b},U,{imageVariants:j}))}}))}return null},t}(c.default.Component);I.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var L=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),C=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string});I.propTypes={resolutions:L,sizes:C,fixed:l.default.oneOfType([L,l.default.arrayOf(L)]),fluid:l.default.oneOfType([C,l.default.arrayOf(C)]),fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"]),draggable:l.default.bool};var N=I;t.default=N},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Malcolm Kapuza","description":"Malcolm Kapuza is Portfolio Manager at Lindy Digital","author":"@malcolmkapuza"}}}}')},Ftix:function(e){e.exports=JSON.parse('{"data":{"malcolmKapuza":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAC90lEQVQoz1WSe0iVZxzHHy/nnPecOpfp8dzLy/E9vpYeL2mxCu1KUFmNSCu1o6xl1gqtkxFBuLKLY+RCs41VJJUtjFBSGdEGBRvBGEVhN/xjm80cLLpoLrP69J53fwwf+PCDB37f5/v8vj9xtb+f1aFKPt21m7qmr2loa6Opu4u2X29y4e5tvu+7Q8fDPnoHB2ju7WFaTg5TkpNxuNwYdSZ0Qj8B0dLViRBiAjajFSUjSEKci/RgLrMXL6G4egvV9fV4UxKZqqRq6GMkYoVuAmJvSzMmEY3XlkB8XDw2sxWHJZ5Ev0yUpMc4N017RIoyUry5CqfXgztxilq96KMNmkikRtzpoyXExt11GAwSH/k82KxxmI1mXE4fSXkZWNLUxk9yMbkkgnl5FFdtwe50k6QENKe6KL0mJumMGGJVVMeivGY7NreTgGsqs9x+XNYEUtLTcTg9JMspLPtsAaUH5hP6ahmr6haQXyKTNC0Vh9enCUWIOJP0pv++XF6zjViHFa/RxiVvIZ87pmOpKMBis+Mw6ikryeHY+X00HA2zdP1Mth4voLBS0ZojDqNFDDEiFkl1GAlJVIZrsdntiMkmTrk+psM/H8P+pcgZmczOCtJYbubIRjMNITsHyzx8UZvM2pZschdlEW9x4fP41PCc/4daUr0Jnc6AmKQO3anw3eJ17Py2kb77D7h37z7tP5zg2MUwe06UUNO0kurDa9jbvIm1m+tYuGgNpWXrqN0Z5tCRRnaEdyF+un6D1tZvaD/XzqXOTq798jPPnjxleOQ5Z86f5GzHabZ/GWLO3AIyg9lkZeaSPT1IIGM1v90a4J+hIa5d/ZH+R/28fwvi9egYQ+rly+cvGR0Z5V+V8TfvePVqhO7eK1zuuUhR6UJ8agiBQABZTsUvp+FVKjjeepaB3/9gfOwdkTM+9hYx/GKEwb+e8PjPx6roMEODf9NzpYeKDSHmFRZStHwFM3LyNTFFUVRkZCUfj1KlbUJawM/KohXU76unu6ubD/JCro0/0FB6AAAAAElFTkSuQmCC","aspectRatio":1.779322328410078,"src":"/static/c6677192fa005cba594a15b9d970d296/630fb/malcolm-kapuza.png","srcSet":"/static/c6677192fa005cba594a15b9d970d296/5db04/malcolm-kapuza.png 75w,\\n/static/c6677192fa005cba594a15b9d970d296/6d161/malcolm-kapuza.png 150w,\\n/static/c6677192fa005cba594a15b9d970d296/630fb/malcolm-kapuza.png 300w,\\n/static/c6677192fa005cba594a15b9d970d296/62b1f/malcolm-kapuza.png 450w,\\n/static/c6677192fa005cba594a15b9d970d296/2a4de/malcolm-kapuza.png 600w,\\n/static/c6677192fa005cba594a15b9d970d296/22f13/malcolm-kapuza.png 2048w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},Gytx:function(e,t,r){r("2Spj"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),e.exports=function(e,t,r,n){var a=r?r.call(n,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),u=0;u<i.length;u++){var c=i[u];if(!s(c))return!1;var l=e[c],d=t[c];if(!1===(a=r?r.call(n,l,d,c):void 0)||void 0===a&&l!==d)return!1}return!0}},INYr:function(e,t,r){"use strict";var n=r("XKFU"),a=r("CkkT")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),n(n.P+n.F*o,"Array",{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),r("nGyu")(i)},OGtf:function(e,t,r){var n=r("XKFU"),a=r("eeVq"),i=r("vhPU"),o=/"/g,s=function(e,t,r,n){var a=String(i(e)),s="<"+t;return""!==r&&(s+=" "+r+'="'+String(n).replace(o,"&quot;")+'"'),s+">"+a+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(s),n(n.P+n.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},Oyvg:function(e,t,r){var n=r("dyZX"),a=r("Xbzi"),i=r("hswa").f,o=r("kJMx").f,s=r("quPj"),u=r("C/va"),c=n.RegExp,l=c,d=c.prototype,f=/a/g,p=/a/g,T=new c(f)!==f;if(r("nh4g")&&(!T||r("eeVq")((function(){return p[r("K0xU")("match")]=!1,c(f)!=f||c(p)==p||"/a/i"!=c(f,"i")})))){c=function(e,t){var r=this instanceof c,n=s(e),i=void 0===t;return!r&&n&&e.constructor===c&&i?e:a(T?new l(n&&!i?e.source:e,t):l((n=e instanceof c)?e.source:e,n&&i?u.call(e):t),r?this:d,c)};for(var E=function(e){e in c||i(c,e,{configurable:!0,get:function(){return l[e]},set:function(t){l[e]=t}})},m=o(l),h=0;m.length>h;)E(m[h++]);d.constructor=c,c.prototype=d,r("KroJ")(n,"RegExp",c)}r("elZq")("RegExp")},RXBc:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),i=(r("8ypT"),function(e){var t=e.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{margin:"auto",textAlign:"center",marginTop:"15%"}},a.a.createElement("main",null,t)))}),o=r("Ftix"),s=r("9eSz"),u=r.n(s),c=function(){var e=o.data;return a.a.createElement(u.a,{fluid:e.malcolmKapuza.childImageSharp.fluid,imgStyle:{borderRadius:"50%",height:"200px",width:"200px"}})},l=r("EH9Q"),d=r("TJpk"),f=r.n(d);function p(e){var t=e.description,r=e.lang,n=e.meta,i=e.title,o=l.data.site,s=t||o.siteMetadata.description;return a.a.createElement(f.a,{htmlAttributes:{lang:r},title:i,titleTemplate:"%s",meta:[{name:"description",content:s},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:s}].concat(n)})}p.defaultProps={lang:"en",meta:[],description:""};var T=p;t.default=function(){return a.a.createElement(i,null,a.a.createElement(T,{title:"Malcolm Kapuza"}),a.a.createElement("div",null,a.a.createElement(c,null)),a.a.createElement("p",{style:{fontSize:"30px",fontWeight:"bold",marginBottom:"14px"}},"Malcolm Kapuza"),a.a.createElement("p",{style:{fontSize:"20px"}},"Portfolio Manager at"," ",a.a.createElement("a",{href:"https://lindy.digital",target:"_blank",rel:"noopener noreferrer",style:{color:"#5C45C4"}},"Lindy Digital")))}},TJpk:function(e,t,r){r("LK8F"),r("dZ+Y"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("8+KV"),r("/SS/"),r("hHhE"),r("V+eJ"),r("HAE/"),r("91GP"),t.__esModule=!0,t.Helmet=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=d(r("q1tI")),o=d(r("17x9")),s=d(r("8+s/")),u=d(r("bmMU")),c=r("v1p5"),l=r("hFT/");function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var E,m,h,g=(0,s.default)(c.reducePropsToState,c.handleClientStateChange,c.mapStateOnServer)((function(){return null})),A=(E=g,h=m=function(e){function t(){return p(this,t),T(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,u.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case l.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,a=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return n({},a,((t={})[r.type]=[].concat(a[r.type]||[],[n({},i,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,a=e.child,i=e.newProps,o=e.newChildProps,s=e.nestedChildren;switch(a.type){case l.TAG_NAMES.TITLE:return n({},i,((t={})[a.type]=s,t.titleAttributes=n({},o),t));case l.TAG_NAMES.BODY:return n({},i,{bodyAttributes:n({},o)});case l.TAG_NAMES.HTML:return n({},i,{htmlAttributes:n({},o)})}return n({},i,((r={})[a.type]=n({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=n({},t);return Object.keys(e).forEach((function(t){var a;r=n({},r,((a={})[t]=e[t],a))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=f(a,["children"]),s=(0,c.convertReactPropstoHtmlAttributes)(o);switch(r.warnOnInvalidChildren(e,i),e.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:s,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:s,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=f(e,["children"]),a=n({},r);return t&&(a=this.mapChildrenToProps(t,a)),i.default.createElement(E,a)},a(t,null,[{key:"canUseDOM",set:function(e){E.canUseDOM=e}}]),t}(i.default.Component),m.propTypes={base:o.default.object,bodyAttributes:o.default.object,children:o.default.oneOfType([o.default.arrayOf(o.default.node),o.default.node]),defaultTitle:o.default.string,defer:o.default.bool,encodeSpecialCharacters:o.default.bool,htmlAttributes:o.default.object,link:o.default.arrayOf(o.default.object),meta:o.default.arrayOf(o.default.object),noscript:o.default.arrayOf(o.default.object),onChangeClientState:o.default.func,script:o.default.arrayOf(o.default.object),style:o.default.arrayOf(o.default.object),title:o.default.string,titleAttributes:o.default.object,titleTemplate:o.default.string},m.defaultProps={defer:!0,encodeSpecialCharacters:!0},m.peek=E.peek,m.rewind=function(){var e=E.rewind();return e||(e=(0,c.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},h);A.renderStatic=A.rewind,t.Helmet=A,t.default=A},bmMU:function(e,t,r){"use strict";r("f3/d"),r("SRfc"),r("a1Th"),r("h7Nl"),r("Oyvg"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("LK8F");var n=Array.isArray,a=Object.keys,i=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var s,u,c,l=n(t),d=n(r);if(l&&d){if((u=t.length)!=r.length)return!1;for(s=u;0!=s--;)if(!e(t[s],r[s]))return!1;return!0}if(l!=d)return!1;var f=t instanceof Date,p=r instanceof Date;if(f!=p)return!1;if(f&&p)return t.getTime()==r.getTime();var T=t instanceof RegExp,E=r instanceof RegExp;if(T!=E)return!1;if(T&&E)return t.toString()==r.toString();var m=a(t);if((u=m.length)!==a(r).length)return!1;for(s=u;0!=s--;)if(!i.call(r,m[s]))return!1;if(o&&t instanceof Element&&r instanceof Element)return t===r;for(s=u;0!=s--;)if(!("_owner"===(c=m[s])&&t.$$typeof||e(t[c],r[c])))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},"hFT/":function(e,t,r){r("DNiP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},v1p5:function(e,t,r){(function(e){r("dZ+Y"),r("KKXr"),r("eM6i"),r("8+KV"),r("LK8F"),r("V+eJ"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("0l/t"),r("bWfx"),r("DNiP"),r("pIFo"),r("91GP"),r("rE2o"),r("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=u(r("q1tI")),o=u(r("MgzW")),s=r("hFT/");function u(e){return e&&e.__esModule?e:{default:e}}var c,l=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=m(e,s.TAG_NAMES.TITLE),r=m(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,(function(){return t}));var n=m(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0},f=function(e){return m(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},T=function(e,t){return t.filter((function(e){return void 0!==e[s.TAG_NAMES.BASE]})).map((function(e){return e[s.TAG_NAMES.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},E=function(e,t,r){var a={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&S("Helmet: "+e+' should be of type "Array". Instead found type "'+n(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var n={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var u=i[o],c=u.toLowerCase();-1===t.indexOf(c)||r===s.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||c===s.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(u)||u!==s.TAG_PROPERTIES.INNER_HTML&&u!==s.TAG_PROPERTIES.CSS_TEXT&&u!==s.TAG_PROPERTIES.ITEM_PROP||(r=u)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return a[r]||(a[r]={}),n[r]||(n[r]={}),!a[r][l]&&(n[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(n),u=0;u<i.length;u++){var c=i[u],l=(0,o.default)({},a[c],n[c]);a[c]=l}return e}),[]).reverse()},m=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},h=(c=Date.now(),function(e){var t=Date.now();t-c>16?(c=t,e(t)):setTimeout((function(){h(e)}),0)}),g=function(e){return clearTimeout(e)},A="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:e.requestAnimationFrame||h,y="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||g:e.cancelAnimationFrame||g,S=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},b=null,v=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,d=e.styleTags,f=e.title,p=e.titleAttributes;P(s.TAG_NAMES.BODY,n),P(s.TAG_NAMES.HTML,a),O(f,p);var T={baseTag:w(s.TAG_NAMES.BASE,r),linkTags:w(s.TAG_NAMES.LINK,i),metaTags:w(s.TAG_NAMES.META,o),noscriptTags:w(s.TAG_NAMES.NOSCRIPT,u),scriptTags:w(s.TAG_NAMES.SCRIPT,l),styleTags:w(s.TAG_NAMES.STYLE,d)},E={},m={};Object.keys(T).forEach((function(e){var t=T[e],r=t.newTags,n=t.oldTags;r.length&&(E[e]=r),n.length&&(m[e]=T[e].oldTags)})),t&&t(),c(e,E,m)},R=function(e){return Array.isArray(e)?e.join(""):e},O=function(e,t){void 0!==e&&document.title!==e&&(document.title=R(e)),P(s.TAG_NAMES.TITLE,t)},P=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(s.HELMET_ATTRIBUTE),a=n?n.split(","):[],i=[].concat(a),o=Object.keys(t),u=0;u<o.length;u++){var c=o[u],l=t[c]||"";r.getAttribute(c)!==l&&r.setAttribute(c,l),-1===a.indexOf(c)&&a.push(c);var d=i.indexOf(c);-1!==d&&i.splice(d,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);a.length===i.length?r.removeAttribute(s.HELMET_ATTRIBUTE):r.getAttribute(s.HELMET_ATTRIBUTE)!==o.join(",")&&r.setAttribute(s.HELMET_ATTRIBUTE,o.join(","))}},w=function(e,t){var r=document.head||document.querySelector(s.TAG_NAMES.HEAD),n=r.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===s.TAG_PROPERTIES.INNER_HTML)r.innerHTML=t.innerHTML;else if(n===s.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[n]?"":t[n];r.setAttribute(n,u)}r.setAttribute(s.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return o=t,r.isEqualNode(e)}))?a.splice(o,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},M=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[s.REACT_TAG_MAP[r]||r]=e[r],t}),t)},I=function(e,t,r){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[s.HELMET_ATTRIBUTE]=!0,a=_(r,n),[i.default.createElement(s.TAG_NAMES.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=M(r),i=R(t);return a?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+a+">"+l(i,n)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+l(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return _(t)},toString:function(){return M(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[s.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach((function(e){var r=s.REACT_TAG_MAP[e]||e;if(r===s.TAG_PROPERTIES.INNER_HTML||r===s.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),i.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+l(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",o=-1===s.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[s.HTML_TAG_MAP[r]||r]=e[r],t}),t)},t.handleClientStateChange=function(e){b&&y(b),e.defer?b=A((function(){v(e,(function(){b=null}))})):(v(e),b=null)},t.mapStateOnServer=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,u=e.noscriptTags,c=e.scriptTags,l=e.styleTags,d=e.title,f=void 0===d?"":d,p=e.titleAttributes;return{base:I(s.TAG_NAMES.BASE,t,n),bodyAttributes:I(s.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:I(s.ATTRIBUTE_NAMES.HTML,a,n),link:I(s.TAG_NAMES.LINK,i,n),meta:I(s.TAG_NAMES.META,o,n),noscript:I(s.TAG_NAMES.NOSCRIPT,u,n),script:I(s.TAG_NAMES.SCRIPT,c,n),style:I(s.TAG_NAMES.STYLE,l,n),title:I(s.TAG_NAMES.TITLE,{title:f,titleAttributes:p},n)}},t.reducePropsToState=function(e){return{baseTag:T([s.TAG_PROPERTIES.HREF],e),bodyAttributes:p(s.ATTRIBUTE_NAMES.BODY,e),defer:m(e,s.HELMET_PROPS.DEFER),encode:m(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(s.ATTRIBUTE_NAMES.HTML,e),linkTags:E(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:E(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:E(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:p(s.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=A,t.warn=S}).call(this,r("yLpj"))},yLpj:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}e.exports=r}}]);
//# sourceMappingURL=component---src-pages-index-js-fcce66d4349d4c412e27.js.map