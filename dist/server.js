!function(t){var e={};function i(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=4)}([function(t,e){t.exports=require("express-msteams-host")},function(t,e){t.exports=require("botbuilder")},function(t,e){t.exports=require("debug")},function(t,e,i){"use strict";var o=this&&this.__decorate||function(t,e,i,o){var n,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(a<3?n(r):a>3?n(e,i,r):n(e,i))||r);return a>3&&r&&Object.defineProperty(e,i,r),r},n=this&&this.__awaiter||function(t,e,i,o){return new(i||(i=Promise))((function(n,a){function r(t){try{c(o.next(t))}catch(t){a(t)}}function s(t){try{c(o.throw(t))}catch(t){a(t)}}function c(t){t.done?n(t.value):new i((function(e){e(t.value)})).then(r,s)}c((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const a=i(0),r=i(2),s=i(1),c=i(11),p=i(12),u=i(14),l=i(16),d=i(17),m=i(19),y=i(21),h=i(22),g=i(24),f=r("msteams");let w=class{constructor(t,e){this.activityProc=new l.TeamsActivityProcessor,this.loggedInMemberOIDs=new Map,this.conversationState=e,this.activityProc.invokeActivityHandler={onInvoke:e=>n(this,void 0,void 0,(function*(){const i=e;if(null!=i.activity.value.state){const e=yield t.read([i.activity.value.state]);this.loggedInMemberOIDs.set(i.activity.from.aadObjectId,e[i.activity.value.state])}const o=yield this.getUserProfile(i.activity.from.aadObjectId);if("workday"===i.activity.value.tabContext.tabEntityId&&!o)return{status:200,body:{tab:{type:"auth",suggestedActions:{actions:[{type:"openUrl",value:"https://acprototype.azurewebsites.net/acPrototypeTab/login.html",title:"Sign in to this app!"}]}}}};const n=s.CardFactory.adaptiveCard(p.default),a=s.CardFactory.adaptiveCard(d.default),r=s.CardFactory.adaptiveCard(m.default),c=s.CardFactory.adaptiveCard(y.default(o)),l=s.CardFactory.adaptiveCard(u.default),f=s.CardFactory.adaptiveCard(h.default),w=s.CardFactory.adaptiveCard(g.default);let b;const v={tab:{type:"continue",value:{cards:[{card:r.content},{card:c.content},{card:a.content}]}}},x={tab:{type:"continue",value:{cards:[{card:n.content},{card:f.content},{card:l.content}]}}},S={tab:{type:"continue",value:{cards:[{card:w.content},{card:r.content},{card:c.content},{card:a.content}]}}},T={tab:{type:"continue",value:{cards:[{card:w.content},{card:n.content},{card:f.content},{card:l.content}]}}};switch(i.activity.name){case"task/fetch":b={task:{type:"continue",value:{height:"medium",width:"medium",title:"task",card:l}}};break;case"task/submit":b="workday"===i.activity.value.tabContext.tabEntityId?{task:{type:"continue",value:S}}:{task:{type:"continue",value:T}};break;case"tab/submit":b=S;break;case"tab/fetch":default:b="workday"===i.activity.value.tabContext.tabEntityId?v:x}return{status:200,body:b}}))}}onTurn(t){return n(this,void 0,void 0,(function*(){yield this.activityProc.processIncomingActivity(t)}))}getUserProfile(t){return n(this,void 0,void 0,(function*(){const e=this.loggedInMemberOIDs.get(t);if(!e)return!1;try{const t=yield c.default("https://graph.microsoft.com/v1.0/me/",{headers:{Authorization:"Bearer "+e.accessToken}}),i=yield t.json();return null==i.error?i:void 0}catch(t){f("Error fetching user profile from graph: ",t)}}))}};w=o([a.PreventIframe("/acPrototypeBot/acProtoBotTab.html")],w),e.AcPrototypeBot=w},function(t,e,i){t.exports=i(5)},function(t,e,i){"use strict";var o=this&&this.__awaiter||function(t,e,i,o){return new(i||(i=Promise))((function(n,a){function r(t){try{c(o.next(t))}catch(t){a(t)}}function s(t){try{c(o.throw(t))}catch(t){a(t)}}function c(t){t.done?n(t.value):new i((function(e){e(t.value)})).then(r,s)}c((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const n=i(6),a=i(7),r=i(8),s=i(9),c=i(0),p=i(1),u=i(2),l=i(10),d=i(3),m=u("msteams");m("Initializing Microsoft Teams Express hosted App..."),i(26).config();const y=i(27),h=n(),g=process.env.port||process.env.PORT||3007,f=new p.BotFrameworkAdapter({appId:process.env.MICROSOFT_APP_ID,appPassword:process.env.MICROSOFT_APP_PASSWORD});f.onTurnError=(t,e)=>o(this,void 0,void 0,(function*(){console.error("\n [onTurnError] unhandled error: "+e),yield t.sendTraceActivity("OnTurnError Trace",""+e,"https://www.botframework.com/schemas/error","TurnError"),yield t.sendActivity("The bot encountered an error or bug."),yield t.sendActivity("To continue to run this bot, please fix the bot source code."),yield b.delete(t)}));const w=new p.MemoryStorage,b=new p.ConversationState(w),v=new d.AcPrototypeBot(w,b);h.use(n.json({verify:(t,e,i,o)=>{t.rawBody=i.toString()}})),h.use(n.urlencoded({extended:!0})),h.engine("html",l.renderFile),h.set("view engine","ejs"),h.set("views",r.join(__dirname,"/")),h.use(s("tiny")),h.post("/api/messages",(t,e)=>{f.processActivity(t,e,t=>o(this,void 0,void 0,(function*(){yield v.onTurn(t)})))}),h.use("/scripts",n.static(r.join(__dirname,"web/scripts"))),h.use("/assets",n.static(r.join(__dirname,"web/assets"))),h.post("/acPrototypeTab/redirect.html",(t,e)=>{const i=t.body,o=Math.random().toString();console.dir(i),w.write({[o]:{idToken:i.id_token,accessToken:i.access_token,tokenType:i.token_type,expiresIn:i.expires_in,scope:i.scope}}),e.render(r.join(__dirname,"web/acPrototypeTab/redirect.ejs"),{state:o,error:i.error})}),h.use(c.MsTeamsApiRouter(y)),h.use(c.MsTeamsPageRouter({root:r.join(__dirname,"web/"),components:y})),h.use("/",n.static(r.join(__dirname,"web/"),{index:"index.html"})),h.set("port",g),a.createServer(h).listen(g,()=>{m("Server running on "+g)})},function(t,e){t.exports=require("express")},function(t,e){t.exports=require("http")},function(t,e){t.exports=require("path")},function(t,e){t.exports=require("morgan")},function(t,e){t.exports=require("ejs")},function(t,e){t.exports=require("node-fetch")},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const o=i(13);e.default=o},function(t){t.exports={$schema:"http://adaptivecards.io/schemas/adaptive-card.json",type:"AdaptiveCard",version:"1.0",body:[{type:"TextBlock",spacing:"medium",size:"default",weight:"bolder",text:"More actions ✨",wrap:!0,maxLines:0},{type:"TextBlock",size:"default",isSubtle:!0,text:"Hello, nice to meet you!",wrap:!0,maxLines:0,id:"textToToggle",isVisible:!1},{type:"ColumnSet",isVisible:!1,id:"imagesToToggle",columns:[{type:"Column",items:[{style:"person",type:"Image",url:"https://picsum.photos/300?image=1025",isVisible:!1,id:"imageToToggle",altText:"sample image 1",size:"medium"}]},{type:"Column",items:[{type:"Image",url:"https://picsum.photos/300?image=433",isVisible:!1,id:"imageToToggle2",altText:"sample image 2",size:"medium"}]}]}],actions:[{type:"Action.ToggleVisibility",title:"Get started",targetElements:["textToToggle","imagesToToggle","imageToToggle2"]},{type:"Action.ShowCard",title:"Learn more",card:{type:"AdaptiveCard",body:[{type:"TextBlock",text:"Adaptive Card Tabs Spec"}],actions:[{type:"Action.OpenUrl",title:"Open in browser",url:"https://microsoft.sharepoint.com/:p:/t/ExtensibilityandFundamentals/EWCKez9sB3NEta260kfdMnkBFUu16Z9rnN-gugIqh8D5QQ?e=tBMY9U"}]}},{type:"Action.OpenUrl",title:"acPrototype",url:"https://acprototype.azurewebsites.net"},{type:"Action.Submit",title:"Advanced",data:{msteams:{type:"task/fetch"}}}]}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const o=i(15);e.default=o},function(t){t.exports={$schema:"http://adaptivecards.io/schemas/adaptive-card.json",type:"AdaptiveCard",version:"1.0",body:[{type:"Container",items:[{type:"TextBlock",text:"Video Player",weight:"Bolder",size:"Medium"}]},{type:"Container",items:[{type:"TextBlock",text:"Enter the ID of a YouTube video to play in a dialog",wrap:!0},{type:"Input.Text",id:"youTubeVideoId",value:""}]}],actions:[{type:"Action.Submit",title:"Update"}]}},function(t,e){t.exports=require("botbuilder-teams")},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const o=i(18);e.default=o},function(t){t.exports={type:"AdaptiveCard",body:[{type:"Container",bleed:!0,style:"emphasis",items:[{type:"TextBlock",text:"Admin Dashboard",color:"Dark",fontType:"Default",size:"Medium",weight:"Bolder"}],spacing:"None"},{type:"ColumnSet",columns:[{type:"Column",items:[{type:"TextBlock",weight:"Bolder",text:"Configure the Workday App",wrap:!0},{type:"TextBlock",spacing:"None",text:"Decide what features you want enabled/disabled",isSubtle:!0,wrap:!0,fontType:"Default",weight:"Lighter"}],width:"stretch"},{type:"Column",width:"150px",items:[{type:"ActionSet",actions:[{type:"Action.Submit",title:"Configure"}]}]}]},{type:"ColumnSet",columns:[{type:"Column",items:[{type:"TextBlock",weight:"Bolder",wrap:!0,text:"View Diagnostics"},{type:"TextBlock",spacing:"None",text:"Troubleshooting a problem or needing to log out",isSubtle:!0,weight:"Lighter",fontType:"Default",wrap:!0}],width:"stretch"},{type:"Column",width:"150px",items:[{type:"ActionSet",actions:[{type:"Action.Submit",title:"View diagnostics"}]}]}],separator:!0,spacing:"Medium"},{type:"ColumnSet",columns:[{type:"Column",items:[{type:"TextBlock",weight:"Bolder",text:"Disconnect from Workday",wrap:!0},{type:"TextBlock",spacing:"None",text:"⚠️ Taking this action will sever all connections between Workday and Microsoft Teams for all of your users.",isSubtle:!0,wrap:!0,weight:"Lighter"}],width:"stretch"},{type:"Column",width:"150px",items:[{type:"ActionSet",actions:[{type:"Action.Submit",title:"Disconnect"}]}]}],separator:!0,spacing:"Medium"},{type:"ColumnSet",columns:[{type:"Column",items:[{type:"TextBlock",weight:"Bolder",text:"Innovation Services Agreement",wrap:!0},{type:"TextBlock",spacing:"None",text:"Status: ENABLED\nCredentials: Logan McNeil (CHRO, HRExe, Mgr 4000, MatMgr, ProMgr,TalMgr,VPRept)",isSubtle:!0,wrap:!0,weight:"Lighter"}],width:"stretch"},{type:"Column",width:"150px",items:[{type:"ActionSet",actions:[{type:"Action.Submit",title:"Use my credentials"}]}]}],separator:!0,spacing:"Medium"}],$schema:"http://adaptivecards.io/schemas/adaptive-card.json",version:"1.2"}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const o=i(20);e.default=o},function(t){t.exports={type:"AdaptiveCard",body:[{type:"TextBlock",size:"Medium",weight:"Bolder",text:"Quick actions ✨"},{type:"ActionSet",actions:[{type:"Action.Submit",title:"Take time off"},{type:"Action.Submit",title:"Look up a coworker",data:{msteams:{type:"tab/submit"}}},{type:"Action.Submit",title:"Give feedback",data:{msteams:{type:"tab/submit"}}},{type:"Action.Submit",title:"Ask Workday",data:{msteams:{type:"tab/submit"}}}],separator:!0}],$schema:"http://adaptivecards.io/schemas/adaptive-card.json",version:"1.2"}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=t=>({type:"AdaptiveCard",body:[{type:"Container",bleed:!0,style:"emphasis",items:[{type:"TextBlock",text:"Manager Dashboard | 3 employees",weight:"Bolder",size:"Medium"}]},{type:"ColumnSet",columns:[{type:"Column",items:[{type:"Image",style:"Person",url:"https://randomuser.me/api/portraits/women/32.jpg",size:"Small"}],width:"auto"},{type:"Column",items:[{type:"TextBlock",weight:"Bolder",text:t.displayName,wrap:!0},{type:"TextBlock",spacing:"None",text:"🎉   5 year anniversary this week",isSubtle:!0,wrap:!0,fontType:"Default",weight:"Lighter"}],width:"stretch"},{type:"Column",width:"50px",items:[{type:"ActionSet",actions:[{type:"Action.Submit",title:"..."}]}]}],separator:!0,spacing:"Small"},{type:"ColumnSet",columns:[{type:"Column",items:[{type:"Image",style:"Person",url:"https://randomuser.me/api/portraits/women/36.jpg",size:"Small"}],width:"auto"},{type:"Column",items:[{type:"TextBlock",weight:"Bolder",wrap:!0,text:"Alexa Edwards"},{type:"TextBlock",spacing:"None",text:"📅  Upcoming time off: Mar 20-25, Apr 1",isSubtle:!0,weight:"Lighter",fontType:"Default"}],width:"stretch"},{type:"Column",width:"50px",items:[{type:"ActionSet",actions:[{type:"Action.Submit",title:"..."}]}]}],separator:!0,spacing:"Medium"},{type:"ColumnSet",columns:[{type:"Column",items:[{type:"Image",style:"Person",url:"https://randomuser.me/api/portraits/women/40.jpg",size:"Small"}],width:"auto"},{type:"Column",items:[{type:"TextBlock",weight:"Bolder",text:"Yingdan Huang",wrap:!0},{type:"TextBlock",spacing:"None",text:"🎂  Birthday this week",isSubtle:!0,wrap:!0,weight:"Lighter"}],width:"stretch"},{type:"Column",width:"50px",items:[{type:"ActionSet",actions:[{type:"Action.Submit",title:"..."}]}]}],separator:!0,spacing:"Medium"}],$schema:"http://adaptivecards.io/schemas/adaptive-card.json",version:"1.2"})},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const o=i(23);e.default=o},function(t){t.exports={type:"AdaptiveCard",body:[{type:"Container",bleed:!0,style:"emphasis",items:[{type:"TextBlock",text:"Interview Candidates | 5 candidates",weight:"Bolder",size:"Medium"}]},{type:"ColumnSet",columns:[{type:"Column",items:[{type:"Image",style:"Person",url:"https://randomuser.me/api/portraits/men/21.jpg",size:"Small"}],width:"auto"},{type:"Column",items:[{type:"TextBlock",weight:"Bolder",text:"Peter Smith",wrap:!0},{type:"TextBlock",spacing:"None",text:"Software Engineer 2 | Bend, Oregon",isSubtle:!0,wrap:!0,fontType:"Default",weight:"Lighter"}],width:"stretch"},{type:"Column",width:"50px",items:[{type:"ActionSet",actions:[{type:"Action.Submit",title:"..."}]}]}],separator:!0,spacing:"Small"},{type:"ColumnSet",columns:[{type:"Column",items:[{type:"Image",style:"Person",url:"https://randomuser.me/api/portraits/women/31.jpg",size:"Small"}],width:"auto"},{type:"Column",items:[{type:"TextBlock",weight:"Bolder",wrap:!0,text:"Marie Beaudoin"},{type:"TextBlock",spacing:"None",text:"Senior Product Manager | Boulder, Colorado",isSubtle:!0,weight:"Lighter",fontType:"Default"}],width:"stretch"},{type:"Column",width:"50px",items:[{type:"ActionSet",actions:[{type:"Action.Submit",title:"..."}]}]}],separator:!0,spacing:"Medium"},{type:"ColumnSet",columns:[{type:"Column",items:[{type:"Image",style:"Person",url:"https://randomuser.me/api/portraits/women/40.jpg",size:"Small"}],width:"auto"},{type:"Column",items:[{type:"TextBlock",weight:"Bolder",text:"Susan Shammas",wrap:!0},{type:"TextBlock",spacing:"None",text:"Design Manager | Vancouver, British Columbia",isSubtle:!0,wrap:!0,weight:"Lighter"}],width:"stretch"},{type:"Column",width:"50px",items:[{type:"ActionSet",actions:[{type:"Action.Submit",title:"..."}]}]}],separator:!0,spacing:"Medium"},{type:"ColumnSet",columns:[{type:"Column",items:[{type:"Image",style:"Person",url:"https://randomuser.me/api/portraits/men/40.jpg",size:"Small"}],width:"auto"},{type:"Column",items:[{type:"TextBlock",weight:"Bolder",text:"Aaron Buxton",wrap:!0},{type:"TextBlock",spacing:"None",text:"Senior Software Engineer | Bend, Oregon",isSubtle:!0,wrap:!0,weight:"Lighter"}],width:"stretch"},{type:"Column",width:"50px",items:[{type:"ActionSet",actions:[{type:"Action.Submit",title:"..."}]}]}],separator:!0,spacing:"Medium"},{type:"ColumnSet",columns:[{type:"Column",items:[{type:"Image",style:"Person",url:"https://randomuser.me/api/portraits/men/3.jpg",size:"Small"}],width:"auto"},{type:"Column",items:[{type:"TextBlock",weight:"Bolder",text:"John Barry",wrap:!0},{type:"TextBlock",spacing:"None",text:"Design Manager | Seattle, Washington",isSubtle:!0,wrap:!0,weight:"Lighter"}],width:"stretch"},{type:"Column",width:"50px",items:[{type:"ActionSet",actions:[{type:"Action.Submit",title:"..."}]}]}],separator:!0,spacing:"Medium"}],$schema:"http://adaptivecards.io/schemas/adaptive-card.json",version:"1.2"}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const o=i(25);e.default=o},function(t){t.exports={type:"AdaptiveCard",$schema:"http://adaptivecards.io/schemas/adaptive-card.json",version:"1.2",body:[{type:"Container",items:[{type:"RichTextBlock",inlines:[{type:"TextRun",text:"✅ Success!"}]}],style:"good"}]}},function(t,e){t.exports=require("dotenv")},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.nonce={},function(t){for(var i in t)e.hasOwnProperty(i)||(e[i]=t[i])}(i(3))}]);
//# sourceMappingURL=server.js.map