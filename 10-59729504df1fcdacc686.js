(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{186:function(e,t,s){"use strict";var a=s(8);t.__esModule=!0,t.default=void 0;var i,r=a(s(7)),n=a(s(56)),o=a(s(192)),d=a(s(193)),l=a(s(0)),c=a(s(4)),u=function(e){var t=(0,d.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),s=t.fluid?t.fluid.src:t.fixed.src;return f[s]||!1},h=[];var g=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),h.push([e,t])},b=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',s=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+s+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+s+"/>":"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",l=e.opacity?e.opacity:"1";return"<picture>"+a+i+"<img "+o+d+t+n+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+l+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=l.default.forwardRef(function(e,t){var s=e.style,a=e.onLoad,i=e.onError,r=(0,o.default)(e,["style","onLoad","onError"]);return l.default.createElement("img",(0,d.default)({},r,{onLoad:a,onError:i,ref:t,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var m=function(e){function t(t){var s;s=e.call(this,t)||this;var a=!0,i=!1,r=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,i=!0),"undefined"==typeof window&&(a=!1),t.critical&&(a=!0,i=!1);var d=!(s.props.critical&&!s.props.fadeIn);return s.state={isVisible:a,imgLoaded:!1,IOSupported:i,fadeIn:r,hasNoScript:d,seenBefore:o},s.imageRef=l.default.createRef(),s.handleImageLoaded=s.handleImageLoaded.bind((0,n.default)((0,n.default)(s))),s.handleRef=s.handleRef.bind((0,n.default)((0,n.default)(s))),s}(0,r.default)(t,e);var s=t.prototype;return s.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},s.handleRef=function(e){var t=this;this.state.IOSupported&&e&&g(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:p(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},s.handleImageLoaded=function(){var e,t,s;e=this.props,t=u(e),s=t.fluid?t.fluid.src:t.fixed.src,f[s]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},s.render=function(){var e=u(this.props),t=e.title,s=e.alt,a=e.className,i=e.style,r=void 0===i?{}:i,n=e.imgStyle,o=void 0===n?{}:n,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,g=e.fixed,m=e.backgroundColor,S=e.Tag,w="boolean"==typeof m?"lightgray":m,v=(0,d.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),I=(0,d.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),L={title:t,alt:this.state.isVisible?"":s,style:v,className:p};if(h){var k=h;return l.default.createElement(S,{className:(a||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},l.default.createElement(S,{style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),k.base64&&l.default.createElement(y,(0,d.default)({src:k.base64},L)),k.tracedSVG&&l.default.createElement(y,(0,d.default)({src:k.tracedSVG},L)),w&&l.default.createElement(S,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&l.default.createElement("picture",null,k.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),l.default.createElement("source",{srcSet:k.srcSet,sizes:k.sizes}),l.default.createElement(y,{alt:s,title:t,src:k.src,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,d.default)({alt:s,title:t},k))}}))}if(g){var $=g,E=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:$.width,height:$.height},r);return"inherit"===r.display&&delete E.display,l.default.createElement(S,{className:(a||"")+" gatsby-image-wrapper",style:E,ref:this.handleRef,key:"fixed-"+JSON.stringify($.srcSet)},$.base64&&l.default.createElement(y,(0,d.default)({src:$.base64},L)),$.tracedSVG&&l.default.createElement(y,(0,d.default)({src:$.tracedSVG},L)),w&&l.default.createElement(S,{title:t,style:{backgroundColor:w,width:$.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:$.height}}),this.state.isVisible&&l.default.createElement("picture",null,$.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:$.srcSetWebp,sizes:$.sizes}),l.default.createElement("source",{srcSet:$.srcSet,sizes:$.sizes}),l.default.createElement(y,{alt:s,title:t,width:$.width,height:$.height,src:$.src,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,d.default)({alt:s,title:t,width:$.width,height:$.height},$))}}))}return null},t}(l.default.Component);m.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var S=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),w=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});m.propTypes={resolutions:S,sizes:w,fixed:S,fluid:w,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string};var v=m;t.default=v},211:function(e,t,s){"use strict";var a=s(8);t.__esModule=!0,t.default=t.createImageToLoad=void 0;var i=a(s(0)),r=a(s(4)),n=a(s(212));const o=e=>{let t=Object.assign({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},d=e=>{if("undefined"!=typeof window){const t=o(e),s=new Image;return s.complete||"function"!=typeof t.onLoad||s.addEventListener("load",t.onLoad),"function"==typeof t.onError&&s.addEventListener("error",t.onError),s.src=t.fluid?t.fluid.src:t.fixed.src,s}return null};t.createImageToLoad=d;const l={},c=e=>{const t=o(e),s=t.fluid?t.fluid.src:t.fixed.src;return l[s]||!1},u=e=>{const t=o(e),s=t.fluid?t.fluid.src:t.fixed.src;l[s]=!0};let f;const p=[];const h=(e,t)=>{(void 0===f&&"undefined"!=typeof window&&window.IntersectionObserver&&(f=new window.IntersectionObserver(e=>{e.forEach(e=>{p.forEach(t=>{t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),f).observe(e),p.push([e,t])},g=e=>{const t=e.src?`src="${e.src}" `:'src="" ',s=e.sizes?`sizes="${e.sizes}" `:"",a=e.srcSetWebp?`<source type='image/webp' srcSet="${e.srcSetWebp}" ${s}/>`:"",i=e.srcSet?`<source srcSet="${e.srcSet}" ${s}/>`:"",r=e.title?`title="${e.title}" `:"",n=e.alt?`alt="${e.alt}" `:'alt="" ',o=e.width?`width="${e.width}" `:"",d=e.height?`height="${e.height}" `:"",l=e.opacity?e.opacity:"1";return`<picture>${a}${i}<img ${o}${d}${t}${n}${r}style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:${e.transitionDelay?e.transitionDelay:"0.5s"};opacity:${l};width:100%;height:100%;object-fit:cover;object-position:center"/></picture>`},b=({classId:e,backgroundSize:t,backgroundRepeat:s,transitionDelay:a,bgImage:i,nextImage:r,afterOpacity:n,bgColor:o})=>`\n          .gatsby-background-image-${e}:before,\n          .gatsby-background-image-${e}:after {\n            content: '';\n            display: block;\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            top: 0;\n            left: 0;\n            -webkit-background-size: ${t};\n            -moz-background-size: ${t};\n            -o-background-size: ${t};\n            background-size: ${t};\n            transition: opacity ${a} ease-in-out;\n            -webkit-transition: opacity ${a} ease-in-out;\n            -moz-transition: opacity ${a} ease-in-out;\n            -o-transition: opacity ${a} ease-in-out;\n          }\n          .gatsby-background-image-${e}:before {\n            z-index: -101;\n            background-color: ${o};\n            background-image: url(${i});\n            ${s}\n          }\n          .gatsby-background-image-${e}:after {\n            z-index: -100;\n            background-image: url(${r});\n            ${s}\n            opacity: ${n};\n          }\n        `;class y extends i.default.Component{constructor(e){super(e);let t=!0,s=!1,a=e.fadeIn;const i=c(e);!i&&"undefined"!=typeof window&&window.IntersectionObserver&&(t=!1,s=!0),"undefined"==typeof window&&(t=!1),e.critical&&(t=!0,s=!1);const r=!(this.props.critical&&!this.props.fadeIn);this.state={isVisible:t,imgLoaded:!1,IOSupported:s,fadeIn:a,hasNoScript:r,seenBefore:i},this.bgImage="",this.backgroundStyles=(0,n.default)(this.props.className),this.imageRef=d(this.props),this.handleImageLoaded=this.handleImageLoaded.bind(this),this.handleRef=this.handleRef.bind(this)}componentDidMount(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:c(this.props)}),this.props.critical){const e=this.imageRef;e&&e.complete&&this.handleImageLoaded()}}handleRef(e){this.state.IOSupported&&e&&h(e,()=>{this.state.isVisible||"function"!=typeof this.props.onStartLoad||this.props.onStartLoad({wasCached:c(this.props)}),this.setState({isVisible:!0,imgLoaded:!1})})}handleImageLoaded(){u(this.props),this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()}render(){const e=o(this.props),t=e.title,s=e.alt,a=e.className,r=e.style,n=void 0===r?{}:r,d=e.fluid,l=e.fixed,c=e.backgroundColor,u=e.Tag,f=e.classId,p=void 0===f?Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,7):f,h=e.children,y="boolean"==typeof c?"lightgray":c,m=this.backgroundStyles.hasOwnProperty("backgroundSize")?this.backgroundStyles.backgroundSize:"cover",S=`background-repeat: ${this.backgroundStyles.hasOwnProperty("backgroundRepeat")?this.backgroundStyles.backgroundRepeat:"no-repeat"};`,w=this.state.imgLoaded?"0.5s":"0.25s";if(d){const e=d;let r=this.bgImage,o=null;e.tracedSVG&&(o=`"${e.tracedSVG}"`),e.base64&&!e.tracedSVG&&(o=e.base64),this.state.isVisible&&(o=e.src);const l=o!==(r=""===r?o:this.bgImage)||!1===this.state.fadeIn?1:0;this.bgImage=r;const c={classId:p,backgroundSize:m,backgroundRepeat:S,transitionDelay:w,bgImage:r,nextImage:o,afterOpacity:l,bgColor:y};return i.default.createElement(u,{className:`${a||""} gatsby-background-image-${p} gatsby-image-wrapper`,style:Object.assign({position:"relative",overflow:"hidden"},n,this.backgroundStyles),ref:this.handleRef,key:`fluid-${JSON.stringify(e.srcSet)}`},i.default.createElement("style",{dangerouslySetInnerHTML:{__html:b(c)}}),this.state.hasNoScript&&i.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g(Object.assign({alt:s,title:t},e))}}),h)}if(l){const e=l,r=Object.assign({position:"relative",overflow:"hidden",display:"inline-block",width:e.width,height:e.height},n);"inherit"===n.display&&delete r.display;let o=this.bgImage,d="";e.tracedSVG&&(d=`'${e.tracedSVG}'`),e.base64&&!e.tracedSVG&&(d=e.base64),this.state.isVisible&&(d=e.src);const c=d!==(o=""===o?d:"")?1:0;this.bgImage=o;const f={classId:p,backgroundSize:m,backgroundRepeat:S,transitionDelay:w,bgImage:o,nextImage:d,afterOpacity:c};return i.default.createElement(u,{className:`${a||""} gatsby-background-image-${p} gatsby-image-wrapper`,style:Object.assign({},r,this.backgroundStyles),ref:this.handleRef,key:`fixed-${JSON.stringify(e.srcSet)}`},i.default.createElement("style",{dangerouslySetInnerHTML:{__html:b(f)}}),this.state.hasNoScript&&i.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g(Object.assign({alt:s,title:t,width:e.width,height:e.height},e))}}),h)}return null}}y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};const m=r.default.shape({width:r.default.number.isRequired,height:r.default.number.isRequired,src:r.default.string.isRequired,srcSet:r.default.string.isRequired,base64:r.default.string,tracedSVG:r.default.string,srcWebp:r.default.string,srcSetWebp:r.default.string}),S=r.default.shape({aspectRatio:r.default.number.isRequired,src:r.default.string.isRequired,srcSet:r.default.string.isRequired,sizes:r.default.string.isRequired,base64:r.default.string,tracedSVG:r.default.string,srcWebp:r.default.string,srcSetWebp:r.default.string});y.propTypes={resolutions:m,sizes:S,fixed:m,fluid:S,fadeIn:r.default.bool,title:r.default.string,alt:r.default.string,className:r.default.oneOfType([r.default.string,r.default.object]),critical:r.default.bool,style:r.default.object,imgStyle:r.default.object,placeholderStyle:r.default.object,placeholderClassName:r.default.string,backgroundColor:r.default.oneOfType([r.default.string,r.default.bool]),onLoad:r.default.func,onError:r.default.func,onStartLoad:r.default.func,Tag:r.default.string,classId:r.default.string};var w=y;t.default=w},212:function(e,t,s){"use strict";t.__esModule=!0,t.default=void 0;const a=e=>{const t=function(e){if("undefined"!=typeof document){const t=document.implementation.createHTMLDocument(""),s=document.createElement("style");return s.textContent=e,t.body.appendChild(s),s.sheet.cssRules}return{}}((e=>{const t="undefined"!=typeof window?window.document.styleSheets:[];for(let a=0;a<t.length;a++){let i;try{i=void 0!==t[a].rules?t[a].rules:void 0!==t[a].cssRules?t[a].cssRules:""}catch(s){console.debug(`Unable to read stylesheet rules for ${t[a].href}`,s)}if(i)for(let t=0;t<i.length;t++)if(i[t].selectorText===e){const e=i[t].cssText?i[t].cssText:i[t].style.cssText;return-1===e.indexOf(i[t].selectorText)?`${i[t].selectorText}{${e}}`:e}}})(`.${e}`));return t.length>0&&void 0!==t[0].style?Object.keys((e=>{let t={};if(e.length>0&&void 0!==e[0].style)switch(e[0].style.constructor.name){case"CSS2Properties":Object.values(e[0].style).forEach(s=>{t[(e=>e.toLowerCase().replace(/(?:^\w|-|[A-Z]|\b\w)/g,(e,t)=>0===t?e.toLowerCase():e.toUpperCase()).replace(/\s|\W+/g,""))(s)]=e[0].style[s]});break;case"CSSStyleDeclaration":t=e[0].style;break;default:console.error("Unknown style object prototype")}return t})(t)).filter(e=>0===e.indexOf("background")&&""!==t[0].style[e]).reduce((e,s)=>(e[s]=t[0].style[s],e),{}):{}};var i=e=>{if("undefined"!=typeof window&&null!==e&&(e instanceof Object||e instanceof String||"string"==typeof e)&&!(e instanceof Array)){if(e.includes(" ")){const t=e.split(" ");let s=[];return t.forEach(e=>s.push(a(e))),Object.assign(...s)}return a(e)}return{}};t.default=i}}]);
//# sourceMappingURL=10-59729504df1fcdacc686.js.map