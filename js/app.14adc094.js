(function(t){function e(e){for(var a,o,r=e[0],c=e[1],l=e[2],u=0,f=[];u<r.length;u++)o=r[u],n[o]&&f.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);v&&v(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,r=1;r<s.length;r++){var c=s[r];0!==n[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},n={app:0},i=[];function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var v=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"04af":function(t,e,s){"use strict";var a=s("4b11"),n=s.n(a);n.a},"04c7":function(t,e,s){},"0fd4":function(t,e,s){"use strict";var a=s("62d4"),n=s.n(a);n.a},"1cbe":function(t,e,s){},"22a2":function(t,e,s){"use strict";var a=s("ec33"),n=s.n(a);n.a},"268a":function(t,e,s){"use strict";var a=s("310b"),n=s.n(a);n.a},"310b":function(t,e,s){},"33d4":function(t,e,s){"use strict";var a=s("4c32"),n=s.n(a);n.a},"3ae4":function(t,e,s){"use strict";var a=s("6732"),n=s.n(a);n.a},"3c20":function(t,e,s){},"4b11":function(t,e,s){},"4c32":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d"),s("357d"),s("2aeb8"),s("7f10");var a=s("2b0e"),n=s("b25f"),i=s.n(n),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("AppHeader"),s("Intro"),s("About"),s("Schedule"),s("Speakers"),s("Sponsors"),s("Location"),s("Faq"),s("Quiz"),s("AppFooter")],1)},r=[],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Header",class:{"-open":t.isOpen,"-sticked":t.isSticked}},[s("div",{staticClass:"Container HeaderContainer"},[s("div",{staticClass:"LogoContainer"},[s("a",{attrs:{href:"#Intro"}},[s("Logo",{attrs:{variation:t.isSticked?"compact":t.isOpen?"open":"full"}})],1)]),s("a",{staticClass:"NavBtn",on:{click:t.toggle}},[s("i",{staticClass:"fa",class:{"fa-bars":!t.isOpen,"fa-times":t.isOpen},attrs:{"aria-hidden":"true"}})]),s("nav",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:t.navConfig,expression:"navConfig"}],staticClass:"Navigation"},[s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:t.navConfig,expression:"navConfig"}],staticClass:"Item",attrs:{href:"#About"},on:{click:t.close}},[t._v("About")]),s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:t.navConfig,expression:"navConfig"}],staticClass:"Item",attrs:{href:"#Schedule"},on:{click:t.close}},[t._v("Schedule")]),s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:t.navConfig,expression:"navConfig"}],staticClass:"Item",attrs:{href:"#Speakers"},on:{click:t.close}},[t._v("Speakers")]),s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:t.navConfig,expression:"navConfig"}],staticClass:"Item",attrs:{href:"#Sponsors"},on:{click:t.close}},[t._v("Sponsors")]),s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:t.navConfig,expression:"navConfig"}],staticClass:"Item",attrs:{href:"#Location"},on:{click:t.close}},[t._v("Location")]),s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:t.navConfig,expression:"navConfig"}],staticClass:"Item",attrs:{href:"#Faq"},on:{click:t.close}},[t._v("Faq")]),s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:t.navConfig,expression:"navConfig"}],staticClass:"Item",attrs:{href:"#Quiz"},on:{click:t.close}},[t._v("Quiz")]),s("a",{staticClass:"Item RequestInvite",attrs:{href:"http://bit.ly/joinJSConf2018",target:"_blank"}},[t._v("Request an Invite")])])])])},l=[],v=s("0f32"),u=s.n(v),f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Logo"},[s("div",{staticClass:"LogoImg",class:[{},t.variation],style:{width:t.size+"px"}})])},p=[],d=(s("c5f6"),{props:{size:{type:Number,default:100},variation:{type:String,default:"full"}}}),h=d,m=(s("d2e5"),s("2877")),_=Object(m["a"])(h,f,p,!1,null,"fa737a18",null);_.options.__file="Logo.vue";var C=_.exports,g={components:{Logo:C},data:function(){return{scrollPos:window.scrollY,isOpen:!1,navConfig:{duration:1e3,offset:-66}}},methods:{handleScroll:function(){this.scrollPos=window.scrollY},toggle:function(t){t.preventDefault(),this.isOpen=!this.isOpen},close:function(){this.isOpen=!1}},computed:{isSticked:function(){return this.scrollPos>23}},created:function(){window.addEventListener("scroll",u()(this.handleScroll,100))},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},b=g,w=(s("f7b5"),Object(m["a"])(b,c,l,!1,null,"410d05f8",null));w.options.__file="Header.vue";var S=w.exports,k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"Intro",attrs:{id:"Intro"}},[s("div",{staticClass:"Container"},[s("h1",{staticClass:"Title"},[t._v("JavaScript Conference "),s("br"),t._v(" Armenia")]),s("h3",{staticClass:"Subtitle"},[t._v("November 3, 2018")]),s("a",{staticClass:"Button -default",attrs:{href:"http://bit.ly/joinJSConf2018",target:"_blank"}},[t._v("\n      Request an Invite\n    ")])]),s("div",{staticClass:"IntroSponsor"},[s("div",[s("a",{attrs:{href:"https://www.simplytechnologies.net/",target:"_blank"}},[s("img",{attrs:{src:"/sponsors/simply.svg"}})])]),s("div",{staticClass:"Description"},[t._v("\n      Main sponsor\n    ")])]),s("div",{staticClass:"IntroBgMain"}),s("div",{staticClass:"IntroBgLeft"}),s("div",{staticClass:"IntroBgRight"})])}],I={},A=I,j=(s("b0ed"),Object(m["a"])(A,k,y,!1,null,"d03a68be",null));j.options.__file="Intro.vue";var E=j.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"About",attrs:{id:"About"}},[s("div",{staticClass:"Container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col col-md-3 offset-md-1"},[s("Ninja")],1),t._m(0)])])])},N=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col col-md-7 offset-md-1"},[s("h1",{staticClass:"Title"},[t._v("What Is")]),s("h3",{staticClass:"Subtitle"},[t._v("JavaScript Conference Armenia?")]),s("h4",{staticClass:"Answer"},[t._v("Where JavaScript Ninjas meet!")]),s("p",{staticClass:"Description"},[t._v("\n          JavaScript Conference provides a platform for developers to share their ideas,\n          experiences and knowledge. Come and learn about the modern\n          development ecosystem by attending talks and workshops.\n          Network with other developers who love what they do.\n        ")])])}],T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Ninja"},[s("div",{staticClass:"NinjaImage"}),s("div",{staticClass:"NinjaShadow"})])}],B={},J=B,L=(s("0fd4"),Object(m["a"])(J,T,O,!1,null,"91470d98",null));L.options.__file="Ninja.vue";var Q=L.exports,$={components:{Ninja:Q}},W=$,F=(s("3ae4"),Object(m["a"])(W,x,N,!1,null,"b388e79a",null));F.options.__file="About.vue";var V=F.exports,z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"Schedule",attrs:{id:"Schedule"}},[s("div",{staticClass:"Container"},[s("h2",{staticClass:"Title"},[t._v("Event Schedules")]),s("h3",{staticClass:"Subtitle"},[t._v("November 3, 2018")]),s("p",{staticClass:"Description"},[t._v("Coming soon...")])]),s("div",{staticClass:"ScheduleBgLeft"})])}],H={},P=H,D=(s("33d4"),Object(m["a"])(P,z,q,!1,null,"79471876",null));D.options.__file="Schedule.vue";var R=D.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"Speakers",attrs:{id:"Speakers"}},[s("div",{staticClass:"Container"},[t._m(0),s("div",{staticClass:"row no-gutters"},t._l(t.speakersList,function(e){return s("div",{key:e,staticClass:"col-md-4 SpeakerCol"},[s("div",{staticClass:"Speaker"},[s("div",{staticClass:"Img",style:{backgroundImage:"url("+t.speakers[e].img+")"}}),s("h3",{staticClass:"Name"},[t._v(t._s(t.speakers[e].name))]),s("h5",{staticClass:"Position"},[t._v(t._s(t.speakers[e].position))])])])})),t._m(1)]),s("div",{staticClass:"SpeakersBg"})])},Y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",{staticClass:"Title"},[t._v("Who are"),s("br"),s("span",{staticClass:"Accent"},[t._v("The Ninjas?")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"CallToActionContainer"},[s("a",{staticClass:"Button -call-to-action",attrs:{href:"http://bit.ly/speakJS",target:"_blank"}},[t._v("\n        Become a Ninja!\n      ")])])}],U={0:{img:"/speakers/illya.jpg",name:"Illya Klymov",position:"CEO at JavaScript.Ninja"},1:{img:"/speakers/juho.jpeg",name:"Juho Vepsäläinen",position:"Founder at SurviveJS"},2:{img:"/speakers/natalia.jpeg",name:"Natalia Tepluhina",position:"Founder at VueVixens"}},G={data:function(){return{speakers:U,speakersList:[0,2,1]}},methods:{getSpeaker:function(t){return this.speakers[t]}}},K=G,Z=(s("268a"),Object(m["a"])(K,M,Y,!1,null,"25490732",null));Z.options.__file="Speakers.vue";var X=Z.exports,tt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},et=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"Sponsors",attrs:{id:"Sponsors"}},[s("div",{staticClass:"Container"},[s("h3",{staticClass:"Subtitle"},[t._v("Sponsors")]),s("div",{staticClass:"row justify-content-center"},[s("div",[s("a",{staticClass:"Sponsor Sponsor-Simply -main",attrs:{href:"https://www.simplytechnologies.net/",target:"_blank"}},[s("div",{staticClass:"Image"})])])]),s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2"},[s("a",{staticClass:"Sponsor Sponsor-SFL -silver",attrs:{href:"https://sflpro.com/",target:"_blank"}},[s("div",{staticClass:"Image"})])]),s("div",{staticClass:"col-6 col-sm-8 col-md-3 col-lg-3 col-xl-2"},[s("a",{staticClass:"Sponsor Sponsor-Synergy -silver",attrs:{href:"https://www.synisys.com/",target:"_blank"}},[s("div",{staticClass:"Image"})])])]),s("h3",{staticClass:"Subtitle"},[t._v("Partners and friends")]),s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2"},[s("a",{staticClass:"Sponsor Sponsor-itjobs -silver",attrs:{href:"https://www.itjobs.am/",target:"_blank"}},[s("div",{staticClass:"Image"})])]),s("div",{staticClass:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2"},[s("a",{staticClass:"Sponsor Sponsor-aua -silver",attrs:{href:"https://www.aua.am/",target:"_blank"}},[s("div",{staticClass:"Image"})])])]),s("div",{staticClass:"CallToActionContainer"},[s("a",{staticClass:"Button -call-to-action -small",attrs:{href:"http://bit.ly/supportArmJS",target:"_blank"}},[t._v("\n        Become a sponsor!\n      ")])])]),s("div",{staticClass:"SponsorsBgTop"}),s("div",{staticClass:"SponsorsBgBottom"})])}],st={},at=st,nt=(s("8776"),Object(m["a"])(at,tt,et,!1,null,"3b197dd4",null));nt.options.__file="Sponsors.vue";var it=nt.exports,ot=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},rt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Location",attrs:{id:"Location"}},[s("div",{staticClass:"smart-object"}),s("iframe",{staticClass:"Map",staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6095.609643725426!2d44.505263706885366!3d40.191156865947136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd173fd4d621%3A0x213beef7d45c07c5!2z1YDVodW11aHVvdW_1aHVttWrINSx1bTVpdaA1avVr9W11aHVtiDVgNWh1bTVodWs1b3VodaA1aHVtg!5e0!3m2!1sen!2s!4v1508846018400",width:"800",height:"600",frameborder:"0",allowfullscreen:""}}),s("span",{staticClass:"text"},[t._v("HERE WE ARE!")])])}],ct={},lt=ct,vt=(s("22a2"),Object(m["a"])(lt,ot,rt,!1,null,"73add37b",null));vt.options.__file="Location.vue";var ut=vt.exports,ft=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},pt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Faq",attrs:{id:"Faq"}},[s("h2",{staticClass:"Title"},[t._v(" FREQUENTLY ASKED QUESTIONS")]),s("div",{staticClass:"row Answers"},[s("div",{staticClass:"col-md-6"},[s("h3",{staticClass:"Question"},[t._v("What is JavaScript Conference Armenia?")]),s("p",{staticClass:"Answer"},[t._v("\n        JS Conference is a big IT event that brings together a huge number of IT\n        professionals to attend talks, workshops, participate in\n        competitions, get informed about open positions at sponsor IT companies and more.\n      ")]),s("h3",{staticClass:"Question"},[t._v("Who are the speakers?")]),s("p",{staticClass:"Answer"},[t._v("\n        To learn more about our speakers, please,\n        "),s("a",{attrs:{href:"#Speakers"}},[t._v("click here")]),t._v(".\n      ")]),s("h3",{staticClass:"Question"},[t._v("What are the talk topics?")]),s("p",{staticClass:"Answer"},[t._v("\n        To see the talk sessions timetable and topics, please\n        "),s("a",{attrs:{href:"#Schedule"}},[t._v("click here")]),t._v(".\n      ")]),s("h3",{staticClass:"Question"},[t._v("What is the conference language?")]),s("p",{staticClass:"Answer"},[t._v("\n        The conference will be held mainly in Armenian but there are also\n        English talks included in the program.\n      ")]),s("h3",{staticClass:"Question"},[t._v("When is it going to take place?")]),s("p",{staticClass:"Answer"},[t._v("\n        The conference will take place from 10:00 to 18:00 on November 3, 2018.\n      ")]),s("h3",{staticClass:"Question"},[t._v("Where is it going to be held?")]),s("p",{staticClass:"Answer"},[t._v("\n        JavaScript Cօnference Yerevan will be held at the B Building of\n        "),s("a",{attrs:{href:"https://goo.gl/maps/HmDBXyu3G9z",target:"_blank"}},[t._v("American University of Armenia")]),t._v("\n        (40 Marshal Baghramyan Ave, Yerevan)․\n      ")]),s("h3",{staticClass:"Question"},[t._v("How to participate?")]),s("p",{staticClass:"Answer"},[t._v("\n        The entry of JS Conference Yerevan 2018 is invitation-only so\n        please make sure to request your invite\n        "),s("a",{attrs:{href:"http://bit.ly/joinJSConf2018",target:"_blank"}},[t._v("here")]),t._v(".\n      ")])]),s("div",{staticClass:"col-md-6"},[s("h3",{staticClass:"Question"},[t._v("How much is the entry-ticket?")]),s("p",{staticClass:"Answer"},[t._v("\n        The event entry is free of charge.\n      ")]),s("h3",{staticClass:"Question"},[t._v("When is the deadline for registration?")]),s("p",{staticClass:"Answer"},[t._v("\n        There is no deadline but the sooner you register the more\n        interesting it will be for you as a participant as you will\n        have the chance to take part in the preconference activities.\n      ")]),s("h3",{staticClass:"Question"},[t._v("Who are behind the JS Conference Armenia? ")]),s("p",{staticClass:"Answer"},[t._v("\n        To see the JS Conference Armenia team, please,\n        "),s("a",{attrs:{href:"#Team"}},[t._v("click here")]),t._v(".\n      ")]),s("h3",{staticClass:"Question"},[t._v("How can I help the team?")]),s("p",{staticClass:"Answer"},[t._v("\n        Oh, thank you for your kindness.\n        To help us make the JavaScript Conference Armenia happen please "),s("a",{attrs:{href:"http://bit.ly/kindninja",target:"_blank"}},[t._v("apply here")]),t._v("\n        to become a JS Conf ninja volunteer!\n      ")]),s("h3",{staticClass:"Question"},[t._v("Who supports JS Conference Armenia?")]),s("p",{staticClass:"Answer"},[t._v("\n        To learn about our sponsors and partners, please,\n        "),s("a",{attrs:{href:"#Sponsors"}},[t._v("click here")]),t._v(".\n      ")]),s("h3",{staticClass:"Question"},[t._v("Will I get a certificate of participation?")]),s("p",{staticClass:"Answer"},[t._v("\n        Your certificate of participation in JS Conference is going to be\n        your larger network in IT, updated knowledge,\n        nice little gifts and good memories. Do you still need that piece of paper?\n      ")])])])])}],dt={},ht=dt,mt=(s("fcec"),Object(m["a"])(ht,ft,pt,!1,null,"63a9c021",null));mt.options.__file="Faq.vue";var _t=mt.exports,Ct=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},gt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Quiz",attrs:{id:"Quiz"}},[s("div",{staticClass:"Context"},[s("div",{staticClass:"Title"},[t._v("\n      QUIZ\n    ")]),s("div",{staticClass:"Description"},[t._v("\n      PARTICIPATE IN QUIZZES, WIN BADGES, BECOME A TRUE JAVASCRIPT NI\n    ")]),s("div",{staticClass:"row justify-content-center Badges"},[s("div",{staticClass:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3"},[s("a",{staticClass:"Badge Badge-JavaScript",attrs:{href:"https://www.itjobs.am/quiz/5a1932d735619ae957438247",target:"_blank"}},[s("div",{staticClass:"Image"}),s("h3",{staticClass:"Name"},[t._v("JavaScript")])])]),s("div",{staticClass:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3"},[s("a",{staticClass:"Badge Badge-Node",attrs:{href:"https://www.itjobs.am/quiz/5a19626835619ae95743b13f",target:"_blank"}},[s("div",{staticClass:"Image"}),s("h3",{staticClass:"Name"},[t._v("Node.JS")])])]),s("div",{staticClass:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3"},[s("a",{staticClass:"Badge Badge-React",attrs:{href:"https://www.itjobs.am/quiz/5a19630b35619ae95743b1cd",target:"_blank"}},[s("div",{staticClass:"Image"}),s("h3",{staticClass:"Name"},[t._v("React")])])]),s("div",{staticClass:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3"},[s("a",{staticClass:"Badge Badge-Angular",attrs:{href:"https://www.itjobs.am/quiz/5a27a0bc35619ae95751dda3",target:"_blank"}},[s("div",{staticClass:"Image"}),s("h3",{staticClass:"Name"},[t._v("Angular")])])])])]),s("div",{staticClass:"VectorLeft"}),s("div",{staticClass:"VectorRight"})])}],bt={},wt=bt,St=(s("04af"),Object(m["a"])(wt,Ct,gt,!1,null,"204e9a82",null));St.options.__file="Quiz.vue";var kt=St.exports,yt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Footer"},[s("div",{staticClass:"LogoContainer"},[s("a",{attrs:{href:"#Intro"}},[s("Logo",{attrs:{size:150}})],1)]),t._m(0),t._m(1),s("div",{staticClass:"FooterBgLeft"})])},It=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"SocialLinks"},[s("a",{staticClass:"SocialIcon Icon-Github",attrs:{href:"https://github.com/JSConfArmenia/",target:"_blank"}}),s("a",{staticClass:"SocialIcon Icon-Facebook",attrs:{href:"https://www.facebook.com/jsconf.am/",target:"_blank"}}),s("a",{staticClass:"SocialIcon Icon-Twitter",attrs:{href:"https://twitter.com/jsconf_am/",target:"_blank"}}),s("a",{staticClass:"SocialIcon Icon-Instagram",attrs:{href:"https://www.instagram.com/jsconf.am/",target:"_blank"}}),s("a",{staticClass:"SocialIcon Icon-Youtube",attrs:{href:"https://www.youtube.com/channel/UCkzEOKU959F6_T0OaQBH4VQ/featured",target:"_blank"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"Credits"},[t._v("\n    Design and branding by\n    "),s("a",{attrs:{href:"http://digitalfactory.co/",target:"_blank"}},[t._v("Digital Factory")]),t._v(",\n    coded in Vue.js by "),s("a",{attrs:{href:"https://github.com/modularcoder",target:"_blank"}},[t._v("@modularcoder")]),t._v(",\n    "),s("a",{attrs:{href:"https://github.com/nairihar",target:"_blank"}},[t._v("@nairihar")]),t._v(" and\n    "),s("a",{attrs:{href:"https://github.com/JSConfArmenia/conf-18/graphs/contributors",target:"_blank"}},[t._v("others")]),t._v(".\n  ")])}],At={components:{Logo:C}},jt=At,Et=(s("7678"),Object(m["a"])(jt,yt,It,!1,null,"4094dd81",null));Et.options.__file="Footer.vue";var xt=Et.exports,Nt={name:"app",components:{AppHeader:S,Intro:E,About:V,Schedule:R,Speakers:X,Sponsors:it,Location:ut,Faq:_t,Quiz:kt,AppFooter:xt}},Tt=Nt,Ot=(s("5c0b"),Object(m["a"])(Tt,o,r,!1,null,null,null));Ot.options.__file="App.vue";var Bt=Ot.exports;a["a"].config.productionTip=!1,a["a"].use(i.a),new a["a"]({render:function(t){return t(Bt)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var a=s("5e27"),n=s.n(a);n.a},"5e27":function(t,e,s){},6169:function(t,e,s){},"62d4":function(t,e,s){},6732:function(t,e,s){},7678:function(t,e,s){"use strict";var a=s("beba"),n=s.n(a);n.a},8776:function(t,e,s){"use strict";var a=s("3c20"),n=s.n(a);n.a},b0ed:function(t,e,s){"use strict";var a=s("04c7"),n=s.n(a);n.a},b777:function(t,e,s){},beba:function(t,e,s){},d2e5:function(t,e,s){"use strict";var a=s("6169"),n=s.n(a);n.a},ec33:function(t,e,s){},f7b5:function(t,e,s){"use strict";var a=s("b777"),n=s.n(a);n.a},fcec:function(t,e,s){"use strict";var a=s("1cbe"),n=s.n(a);n.a}});
//# sourceMappingURL=app.14adc094.js.map