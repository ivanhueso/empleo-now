(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{142:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(51),l=a.n(i),o=a(0),c=a.n(o),s=a(149),u=a(4),d=a.n(u),A=a(145),m=a(151),p=(a(152),function(e){var t=e.children;return c.a.createElement(A.StaticQuery,{query:"3892401927",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"content-page"},t),c.a.createElement(m.a,null))},data:s})});p.propTypes={children:d.a.node.isRequired};var g=p,E=a(147),h=a(170),f=a(155),U=a.n(f),v=function(){return c.a.createElement(A.StaticQuery,{query:"1239148280",render:function(e){return c.a.createElement(U.a,{fluid:e.default.childImageSharp.fluid})},data:h})},b=a(171),y=a.n(b);a.d(t,"default",function(){return B});var B=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={fname:"",phone:"",email:"",errors:{msg:"puto"},isSubmitted:!1},t.changeEmail=function(e){t.setState({email:e.target.value})},t.changeName=function(e){t.setState({fname:e.target.value})},t.changePhone=function(e){t.setState({phone:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.setState({isSubmitted:!0});l()(l()(t));y()(t.state.email,t.state).then(function(e){t.setState({errors:e})})},t}return r()(t,e),t.prototype.render=function(){var e=this;return c.a.createElement(g,null,c.a.createElement(E.a,{title:"Oportunidad Laboral"}),c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"box"},c.a.createElement("h1",null,"Excelente ",c.a.createElement("strong",null,"OPORTUNIDAD")," Laboral en la Florida"),c.a.createElement("div",{className:"divider"},c.a.createElement("div",{className:"inner"})),c.a.createElement("div",{className:"rows"},c.a.createElement("div",{className:"leftcol"},c.a.createElement("div",{className:"highlight"},c.a.createElement("p",null," ","Compañía internacional líder en seguros busca profesionales con experiencia en ventas."," "),c.a.createElement("p",null," ","Contratación inmediata, excelente ambiente laboral, entrenamiento, varias posiciones disponibles, salarios, bonos y posibilidad de ascenso")),c.a.createElement("h3",null,"Requerimos:"),c.a.createElement("ul",null,c.a.createElement("li",null,"Hablar perfectamente Español "),c.a.createElement("li",null,"Disponibilidad de tiempo y ganas de trabajar"),c.a.createElement("li",null,"Interés en crecimiento profesional"))),c.a.createElement("div",{className:"rightcol testimonial"},c.a.createElement("div",{className:"image"},c.a.createElement(v,null)),c.a.createElement("p",null,c.a.createElement("strong",null,"Maria Velazquez "),"- “En esta compañía estamos en proceso de crecimiento esto implica para mi un ambiente de trabajo estimulante, dinámico, con mucha energía y lleno de oportunidades”"))),c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("input",{type:"text",placeholder:"Full Name",value:this.state.fname,onChange:function(t){return e.changeName(t)}}),c.a.createElement("input",{type:"text",placeholder:"Email Address",value:this.state.email,onChange:function(t){return e.changeEmail(t)}}),c.a.createElement("input",{type:"text",placeholder:"Phone Number",value:this.state.phone,onChange:function(t){return e.changePhone(t)}}),this.state.errors.msg,c.a.createElement("button",{type:"submit",className:"btn-blue"},"INSCRIBIRME"))))))},t}(c.a.Component)},145:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return A}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(144),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var s=a(146),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var A=r.a.createContext({}),m=function(e){return r.a.createElement(A.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},146:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},147:function(e,t,a){"use strict";var n=a(153),r=a(0),i=a.n(r),l=a(4),o=a.n(l),c=a(158),s=a.n(c),u=a(145),d=a(154),A=a.n(d);function m(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,o=e.title;return i.a.createElement(u.StaticQuery,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r),link:[{rel:"shortcut icon",type:"image/png",href:""+A.a}]})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=m;var p="1025518380"},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Empleo Now"}}}}},150:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(52),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},151:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(145);t.a=function(e){e.siteTitle;return r.a.createElement("footer",null,r.a.createElement("div",{className:"content"},r.a.createElement("p",null,"© ",(new Date).getFullYear(),", Todos los Derechos Reservados. Empleonow.com"," "),r.a.createElement("ul",{className:"nav"},r.a.createElement("li",null,r.a.createElement(i.Link,{to:"/privacy-policy"},"Política de privacidad")),r.a.createElement("li",null,r.a.createElement("span",null,"|")),r.a.createElement("li",null,r.a.createElement(i.Link,{to:"/terms-of-service"},"Condiciones del servicio")))))}},152:function(e,t,a){},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Empleo Now",description:"Compañía Internacional Líder en Seguros abriendo mercado latino en la Florida busca profesionales con experiencia en ventas, con licencia 215 o 240. Si todavía no tienes alguna de estas licencias te ayudamos a sacarla en 2 semanas",author:"@empleonow"}}}}},154:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAACUCAYAAACa/mvqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAG0ElEQVR42u3dP28cRRjH8Z8NVagOzomCkAIVCIQESCAQcSIhQO7AXShoUoFTAE1KCl4BTSApcIogUYYoogkRwpyDkIhAFECJJSrnTuYNgI7CfuI93+7e7O7MzvPvW7qIn5n56DY63+0CXlA//vn3NPcMUlra29t7IPcQ3Pvg6p1/7/62g0sfreG5U488mHseT3gXNre3ls9dmS6fuzJ9bOPL6a87kxdzz8S9pdwDcO7C5vbW57d+P1P82aMPP4SbF9deev7x4c+55+Oao6qoDBTlsOpzVCXVgaIcVnWO6kghoCiHVZ6jKtQEFOWw5nNUB7UBRTms2RwVuoGiHNZh5lHFAEU5rP1Mo4oJinJYhlGlAEVZh2USVUpQlGVY5lD1AYqyCssUqj5BURZhmUGVAxRlDZYJVDlBUZZgqUfFARRlBZZqVJxAURZgqUXFERSlHZZKVJxBUZphqUMlARSlFZYqVJJAURphqUElERSlDZYKVJJBUZpgiUelARSlBZZoVJpAURpgiUWlERQlHZZIVJpBUZJhiUNlARQlFZYoVJZAURJhiUFlERQlDZYIVJZBUZJgsUfloA6TAos1Kgc1nwRYbFE5qOq4w2KJykEtjjMsdqgcVHhcYbFC5aCaxxEWG1QOqn3cYLFA5aC6xwlWdlQOKl5cYGVF5aDixwFWNlQOKl25YWVB5aDSlxPWcu7Fe2n6bzrFdDrN8jArv/wp7MTgGL65uPbKC0+s/JTj9/t/1JWVGxTgbymoigMogAEqwGHFiAsogAkqwGF1iRMogBEqwGG1iRsogBkqwGE1iSMogCEqwGGFxBUUEPHNz/F4dzDavr0e49+6dP702ffffOaHfNvCu5igYp4bFQXVeLw7uPH1Vx/fGX33rsNKW2xQsc8NiHD5o8Emk3sfHvzo+qurr11bPf369RgD+qXwsBSgUpxbJ1Qlg1EOK3KJQVFRzq315a9mMABY90thvE72AwqIdG6tXqkWDFbMX7E6dnJwDDf7AVWs07k1RtVgsCgDHs0SrEygqNbn1ghVi8E6D1iWBViZQVGtzi0YVYfBOg1YlWZYTEBRjc8tCFWEwVoPWJdGWMxAUY3ObSGqiIO1GnBRmmAxBUUFn1stqgSDNR4wJA2wmIOigs6tElXCwRoNGJpkWEJAUQvPrRRVD4MFD9gkibCEgaJqz20OVY+DBQ3YNEmwhIKiKs9tBlWGwRYO2CYJsISDokrP7T6qjIPVDtg2zrCUgKLmzm2JyWCVA3aJIyxloKiZc1tiNFjpgF3jBEspKOr+uXG8l4LKj80oBzUTt8tfMTWvWAZAzV7+JA3btRywrIEC+Lyl0GjoLvUJyyIogMebn62Hb1sfsKyCAvL/mSbKItq0sTnaunzrjySwLIMC8v5BOfpimpYClnVQQL6PviRdVJNiwnJQ++X4kF5viwstBiwHdVjfHyfOssiQusByULP1+cWH7ItdVBtYDmq+vr6ixWrRdTWB5aDK6+PLpGwXX1UILAdVXeqvvYvYhLLqYDmo+lp9SmFl5cQ/b739zifD4fFPc6++UNRPN3x2fvXse288PffpBge1uFS3EhK9KcU2vhhtXf52/xXLQYWV4qZnHIoO68bdnTMOKqwoN5LVvkkA8Mtf45cdVFjR7k5sYbO6ZmWPot7y2sqmtcnS3kS/j7qlzfM9KS/JzfmtbaLvxWzJnvhgcTN9D/ZL+hgRq5tqfe3Jn01jcXMtrrlYLw88srTJltZaVW9P0bKw2RbWGFKvj2bTvOma19a03p/3p3HzNa6pS1keIqnpEDStJVbZnkyq4TA0rCFFWR93K/lQJM+euuzPUJZ4OBJn7rPsqABZhyRp1lyxQAXIOCwJM3KIDSqA96E99eSz33OdjRMogBkqgC0sDIfHMZncyz1GMZagAIaoAL6wGMUWFMAUFeCwamINCmCMCnBYJbEHBTBHBTisQiJAAQJQAQ4LgkABQlABpmGJAgUIQgWYhCUOFCAMFWAKlkhQgEBUgAlYYkEBQlEBqmGJBgUIRgWohCUeFCAcFaAKlgpQgAJUgApYakABSlABomGpAgUoQgWIhKUOFKAMFSAKlkpQgEJUgAhYakEBSlEBrGGpBgUoRgWwhKUeFKAcFcAKlglQgAFUAAtYZkABRlABWWGZAgUYQgVkgWUOFGAMFdArLJOgAIOogF5gmQUFGEUFJIVlGhRgGBWQBJZ5UIBxVEBUWA7qIPOogCiwHFQhR3VQB1gO6kiOqlALWA6qJEd1pAawHFRFjqqkAFgOqiZHVVENLAe1IEdVUwksBxWQo1pQAdYpB+VFazzeHYy2b6/nnkNK/wMDF6HURZElRAAAAABJRU5ErkJggg=="},170:function(e){e.exports={data:{default:{childImageSharp:{fluid:{base64:"data:image/png;base64,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",aspectRatio:1,src:"/static/018aadf09aec3dbb44440a3e2695300d/390dc/testimonial.png",srcSet:"/static/018aadf09aec3dbb44440a3e2695300d/1e751/testimonial.png 15w,\n/static/018aadf09aec3dbb44440a3e2695300d/f3ec0/testimonial.png 30w,\n/static/018aadf09aec3dbb44440a3e2695300d/390dc/testimonial.png 60w",sizes:"(max-width: 60px) 100vw, 60px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-oferta-laboral-js-9dc6260e9e893b77eade.js.map