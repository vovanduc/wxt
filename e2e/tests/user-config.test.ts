import { describe, it, expect } from 'vitest';
import { TestProject } from '../utils';

describe('User Config', () => {
  // Root directory is tested with all tests.

  it("should respect the 'src' directory", async () => {
    const project = new TestProject();
    project.setConfigFileConfig({
      srcDir: 'src',
    });
    project.addFile(
      'src/entrypoints/background.ts',
      `export default defineBackgroundScript(
        () => console.log('Hello background'),
      );`,
    );

    await project.build();

    const output = await project.serializeOutput();
    expect(output).toMatchInlineSnapshot(`
      ".output/chrome-mv3/background.js
      ----------------------------------------
      (function(){\\"use strict\\";function $(t){return typeof t==\\"function\\"?{main:t}:t}const F=$(()=>console.log(\\"Hello background\\"));var j=typeof globalThis<\\"u\\"?globalThis:typeof window<\\"u\\"?window:typeof global<\\"u\\"?global:typeof self<\\"u\\"?self:{},L={exports:{}};(function(t,u){(function(f,h){h(t)})(typeof globalThis<\\"u\\"?globalThis:typeof self<\\"u\\"?self:j,function(f){var h,E;if(!((E=(h=globalThis.chrome)==null?void 0:h.runtime)!=null&&E.id))throw new Error(\\"This script should only be loaded in a browser extension.\\");if(typeof globalThis.browser>\\"u\\"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){const B=\\"The message port closed before a response was received.\\",_=c=>{const y={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(y).length===0)throw new Error(\\"api-metadata.json has not been included in browser-polyfill\\");class P extends WeakMap{constructor(r,n=void 0){super(n),this.createItem=r}get(r){return this.has(r)||this.set(r,this.createItem(r)),super.get(r)}}const W=e=>e&&typeof e==\\"object\\"&&typeof e.then==\\"function\\",S=(e,r)=>(...n)=>{c.runtime.lastError?e.reject(new Error(c.runtime.lastError.message)):r.singleCallbackArg||n.length<=1&&r.singleCallbackArg!==!1?e.resolve(n[0]):e.resolve(n)},w=e=>e==1?\\"argument\\":\\"arguments\\",q=(e,r)=>function(g,...i){if(i.length<r.minArgs)throw new Error(\`Expected at least \${r.minArgs} \${w(r.minArgs)} for \${e}(), got \${i.length}\`);if(i.length>r.maxArgs)throw new Error(\`Expected at most \${r.maxArgs} \${w(r.maxArgs)} for \${e}(), got \${i.length}\`);return new Promise((a,A)=>{if(r.fallbackToNoCallback)try{g[e](...i,S({resolve:a,reject:A},r))}catch(s){console.warn(\`\${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: \`,s),g[e](...i),r.fallbackToNoCallback=!1,r.noCallback=!0,a()}else r.noCallback?(g[e](...i),a()):g[e](...i,S({resolve:a,reject:A},r))})},M=(e,r,n)=>new Proxy(r,{apply(g,i,a){return n.call(i,e,...a)}});let p=Function.call.bind(Object.prototype.hasOwnProperty);const k=(e,r={},n={})=>{let g=Object.create(null),i={has(A,s){return s in e||s in g},get(A,s,o){if(s in g)return g[s];if(!(s in e))return;let m=e[s];if(typeof m==\\"function\\")if(typeof r[s]==\\"function\\")m=M(e,e[s],r[s]);else if(p(n,s)){let x=q(s,n[s]);m=M(e,e[s],x)}else m=m.bind(e);else if(typeof m==\\"object\\"&&m!==null&&(p(r,s)||p(n,s)))m=k(m,r[s],n[s]);else if(p(n,\\"*\\"))m=k(m,r[s],n[\\"*\\"]);else return Object.defineProperty(g,s,{configurable:!0,enumerable:!0,get(){return e[s]},set(x){e[s]=x}}),m;return g[s]=m,m},set(A,s,o,m){return s in g?g[s]=o:e[s]=o,!0},defineProperty(A,s,o){return Reflect.defineProperty(g,s,o)},deleteProperty(A,s){return Reflect.deleteProperty(g,s)}},a=Object.create(e);return new Proxy(a,i)},T=e=>({addListener(r,n,...g){r.addListener(e.get(n),...g)},hasListener(r,n){return r.hasListener(e.get(n))},removeListener(r,n){r.removeListener(e.get(n))}}),U=new P(e=>typeof e!=\\"function\\"?e:function(n){const g=k(n,{},{getContent:{minArgs:0,maxArgs:0}});e(g)}),N=new P(e=>typeof e!=\\"function\\"?e:function(n,g,i){let a=!1,A,s=new Promise(d=>{A=function(l){a=!0,d(l)}}),o;try{o=e(n,g,A)}catch(d){o=Promise.reject(d)}const m=o!==!0&&W(o);if(o!==!0&&!m&&!a)return!1;const x=d=>{d.then(l=>{i(l)},l=>{let v;l&&(l instanceof Error||typeof l.message==\\"string\\")?v=l.message:v=\\"An unexpected error occurred\\",i({__mozWebExtensionPolyfillReject__:!0,message:v})}).catch(l=>{console.error(\\"Failed to send onMessage rejected reply\\",l)})};return x(m?o:s),!0}),D=({reject:e,resolve:r},n)=>{c.runtime.lastError?c.runtime.lastError.message===B?r():e(new Error(c.runtime.lastError.message)):n&&n.__mozWebExtensionPolyfillReject__?e(new Error(n.message)):r(n)},R=(e,r,n,...g)=>{if(g.length<r.minArgs)throw new Error(\`Expected at least \${r.minArgs} \${w(r.minArgs)} for \${e}(), got \${g.length}\`);if(g.length>r.maxArgs)throw new Error(\`Expected at most \${r.maxArgs} \${w(r.maxArgs)} for \${e}(), got \${g.length}\`);return new Promise((i,a)=>{const A=D.bind(null,{resolve:i,reject:a});g.push(A),n.sendMessage(...g)})},I={devtools:{network:{onRequestFinished:T(U)}},runtime:{onMessage:T(N),onMessageExternal:T(N),sendMessage:R.bind(null,\\"sendMessage\\",{minArgs:1,maxArgs:3})},tabs:{sendMessage:R.bind(null,\\"sendMessage\\",{minArgs:2,maxArgs:3})}},C={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return y.privacy={network:{\\"*\\":C},services:{\\"*\\":C},websites:{\\"*\\":C}},k(c,I,y)};f.exports=_(chrome)}else f.exports=globalThis.browser})})(L);function b(t,...u){if(typeof u[0]==\\"string\\"){const f=u.shift();t(\`[wxt] \${f}\`,...u)}else t(\\"[wxt]\\",...u)}var O={debug:(...t)=>b(console.debug,...t),log:(...t)=>b(console.log,...t),warn:(...t)=>b(console.warn,...t),error:(...t)=>b(console.error,...t)};try{F.main()instanceof Promise&&console.warn(\\"The background's main() function return a promise, but it must be synchonous\\")}catch(t){throw O.error(\\"The background script crashed on startup!\\"),t}})();

      ================================================================================
      .output/chrome-mv3/manifest.json
      ----------------------------------------
      {\\"manifest_version\\":3,\\"name\\":\\"E2E Extension\\",\\"version\\":\\"0.0.0\\",\\"version_name\\":\\"0.0.0-test\\",\\"background\\":{\\"service_worker\\":\\"background.js\\"}}"
    `);
  });

  it("should respect the 'entrypoints' directory", async () => {
    const project = new TestProject();
    project.setConfigFileConfig({
      entrypointsDir: 'entries',
    });
    project.addFile(
      'entries/background.ts',
      `export default defineBackgroundScript(() => console.log('Hello background'));`,
    );

    await project.build();

    const output = await project.serializeOutput();
    expect(output).toMatchInlineSnapshot(`
      ".output/chrome-mv3/background.js
      ----------------------------------------
      (function(){\\"use strict\\";function $(t){return typeof t==\\"function\\"?{main:t}:t}const F=$(()=>console.log(\\"Hello background\\"));var j=typeof globalThis<\\"u\\"?globalThis:typeof window<\\"u\\"?window:typeof global<\\"u\\"?global:typeof self<\\"u\\"?self:{},L={exports:{}};(function(t,u){(function(f,h){h(t)})(typeof globalThis<\\"u\\"?globalThis:typeof self<\\"u\\"?self:j,function(f){var h,E;if(!((E=(h=globalThis.chrome)==null?void 0:h.runtime)!=null&&E.id))throw new Error(\\"This script should only be loaded in a browser extension.\\");if(typeof globalThis.browser>\\"u\\"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){const B=\\"The message port closed before a response was received.\\",_=c=>{const y={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(y).length===0)throw new Error(\\"api-metadata.json has not been included in browser-polyfill\\");class P extends WeakMap{constructor(r,n=void 0){super(n),this.createItem=r}get(r){return this.has(r)||this.set(r,this.createItem(r)),super.get(r)}}const W=e=>e&&typeof e==\\"object\\"&&typeof e.then==\\"function\\",S=(e,r)=>(...n)=>{c.runtime.lastError?e.reject(new Error(c.runtime.lastError.message)):r.singleCallbackArg||n.length<=1&&r.singleCallbackArg!==!1?e.resolve(n[0]):e.resolve(n)},w=e=>e==1?\\"argument\\":\\"arguments\\",q=(e,r)=>function(g,...i){if(i.length<r.minArgs)throw new Error(\`Expected at least \${r.minArgs} \${w(r.minArgs)} for \${e}(), got \${i.length}\`);if(i.length>r.maxArgs)throw new Error(\`Expected at most \${r.maxArgs} \${w(r.maxArgs)} for \${e}(), got \${i.length}\`);return new Promise((a,A)=>{if(r.fallbackToNoCallback)try{g[e](...i,S({resolve:a,reject:A},r))}catch(s){console.warn(\`\${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: \`,s),g[e](...i),r.fallbackToNoCallback=!1,r.noCallback=!0,a()}else r.noCallback?(g[e](...i),a()):g[e](...i,S({resolve:a,reject:A},r))})},M=(e,r,n)=>new Proxy(r,{apply(g,i,a){return n.call(i,e,...a)}});let p=Function.call.bind(Object.prototype.hasOwnProperty);const k=(e,r={},n={})=>{let g=Object.create(null),i={has(A,s){return s in e||s in g},get(A,s,o){if(s in g)return g[s];if(!(s in e))return;let m=e[s];if(typeof m==\\"function\\")if(typeof r[s]==\\"function\\")m=M(e,e[s],r[s]);else if(p(n,s)){let x=q(s,n[s]);m=M(e,e[s],x)}else m=m.bind(e);else if(typeof m==\\"object\\"&&m!==null&&(p(r,s)||p(n,s)))m=k(m,r[s],n[s]);else if(p(n,\\"*\\"))m=k(m,r[s],n[\\"*\\"]);else return Object.defineProperty(g,s,{configurable:!0,enumerable:!0,get(){return e[s]},set(x){e[s]=x}}),m;return g[s]=m,m},set(A,s,o,m){return s in g?g[s]=o:e[s]=o,!0},defineProperty(A,s,o){return Reflect.defineProperty(g,s,o)},deleteProperty(A,s){return Reflect.deleteProperty(g,s)}},a=Object.create(e);return new Proxy(a,i)},T=e=>({addListener(r,n,...g){r.addListener(e.get(n),...g)},hasListener(r,n){return r.hasListener(e.get(n))},removeListener(r,n){r.removeListener(e.get(n))}}),U=new P(e=>typeof e!=\\"function\\"?e:function(n){const g=k(n,{},{getContent:{minArgs:0,maxArgs:0}});e(g)}),N=new P(e=>typeof e!=\\"function\\"?e:function(n,g,i){let a=!1,A,s=new Promise(d=>{A=function(l){a=!0,d(l)}}),o;try{o=e(n,g,A)}catch(d){o=Promise.reject(d)}const m=o!==!0&&W(o);if(o!==!0&&!m&&!a)return!1;const x=d=>{d.then(l=>{i(l)},l=>{let v;l&&(l instanceof Error||typeof l.message==\\"string\\")?v=l.message:v=\\"An unexpected error occurred\\",i({__mozWebExtensionPolyfillReject__:!0,message:v})}).catch(l=>{console.error(\\"Failed to send onMessage rejected reply\\",l)})};return x(m?o:s),!0}),D=({reject:e,resolve:r},n)=>{c.runtime.lastError?c.runtime.lastError.message===B?r():e(new Error(c.runtime.lastError.message)):n&&n.__mozWebExtensionPolyfillReject__?e(new Error(n.message)):r(n)},R=(e,r,n,...g)=>{if(g.length<r.minArgs)throw new Error(\`Expected at least \${r.minArgs} \${w(r.minArgs)} for \${e}(), got \${g.length}\`);if(g.length>r.maxArgs)throw new Error(\`Expected at most \${r.maxArgs} \${w(r.maxArgs)} for \${e}(), got \${g.length}\`);return new Promise((i,a)=>{const A=D.bind(null,{resolve:i,reject:a});g.push(A),n.sendMessage(...g)})},I={devtools:{network:{onRequestFinished:T(U)}},runtime:{onMessage:T(N),onMessageExternal:T(N),sendMessage:R.bind(null,\\"sendMessage\\",{minArgs:1,maxArgs:3})},tabs:{sendMessage:R.bind(null,\\"sendMessage\\",{minArgs:2,maxArgs:3})}},C={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return y.privacy={network:{\\"*\\":C},services:{\\"*\\":C},websites:{\\"*\\":C}},k(c,I,y)};f.exports=_(chrome)}else f.exports=globalThis.browser})})(L);function b(t,...u){if(typeof u[0]==\\"string\\"){const f=u.shift();t(\`[wxt] \${f}\`,...u)}else t(\\"[wxt]\\",...u)}var O={debug:(...t)=>b(console.debug,...t),log:(...t)=>b(console.log,...t),warn:(...t)=>b(console.warn,...t),error:(...t)=>b(console.error,...t)};try{F.main()instanceof Promise&&console.warn(\\"The background's main() function return a promise, but it must be synchonous\\")}catch(t){throw O.error(\\"The background script crashed on startup!\\"),t}})();

      ================================================================================
      .output/chrome-mv3/manifest.json
      ----------------------------------------
      {\\"manifest_version\\":3,\\"name\\":\\"E2E Extension\\",\\"version\\":\\"0.0.0\\",\\"version_name\\":\\"0.0.0-test\\",\\"background\\":{\\"service_worker\\":\\"background.js\\"}}"
    `);
  });
});
