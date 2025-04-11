import{j as S,r as Be}from"./index-CKGAhEiA.js";import{g as Ae,S as xe}from"./ScrollTrigger-DTqkFlXW.js";/*!
 * SplitText 3.12.7
 * https://gsap.com
 * 
 * @license Copyright 2025, GreenSock. All rights reserved.
 * *** DO NOT DEPLOY THIS FILE ***
 * This is a trial version that only works locally and on domains like codepen.io and codesandbox.io.
 * Loading it on an unauthorized domain violates the license and will cause a redirect.
 * Get the unrestricted file by joining Club GSAP at https://gsap.com/pricing
 * @author: Jack Doyle, jack@greensock.com
 */const we=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;let v1,z1,de,E1,Fe,L1,be=/(?:\r|\n|\t\t)/g,Se=/(?:\s\s+)/g,Te=" ",Ce=D=>{v1=document,z1=window,E1=E1||D||z1.gsap||console.warn("Please gsap.registerPlugin(SplitText)"),E1&&(L1=E1.utils.toArray,Fe=E1.core.context||function(){},de=1)},C=function(){return String.fromCharCode.apply(null,arguments)},ue=C(103,114,101,101,110,115,111,99,107,46,99,111,109),_e=C(103,115,97,112,46,99,111,109),Ne=/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/,Re=function(D){var u=typeof window<"u",s=(u?window.location.href:"").indexOf(C(102,105,108,101,58,47,47))===0||D.indexOf(C(108,111,99,97,108,104,111,115,116))!==-1||Ne.test(D)||(u?window.location.hostname:"").split(".").pop()===C(108,111,99,97,108),i=[ue,_e,C(99,111,100,101,112,101,110,46,105,111),C(99,111,100,101,112,101,110,46,112,108,117,109,98,105,110,103),C(99,111,100,101,112,101,110,46,100,101,118),C(99,111,100,101,112,101,110,46,97,112,112),C(99,111,100,101,112,101,110,46,119,101,98,115,105,116,101),C(112,101,110,115,46,99,108,111,117,100),C(99,115,115,45,116,114,105,99,107,115,46,99,111,109),C(99,100,112,110,46,105,111),C(112,101,110,115,46,105,111),C(103,97,110,110,111,110,46,116,118),C(99,111,100,101,99,97,110,121,111,110,46,110,101,116),C(116,104,101,109,101,102,111,114,101,115,116,46,110,101,116),C(99,101,114,101,98,114,97,120,46,99,111,46,117,107),C(116,121,109,112,97,110,117,115,46,110,101,116),C(116,119,101,101,110,109,97,120,46,99,111,109),C(112,108,110,107,114,46,99,111),C(104,111,116,106,97,114,46,99,111,109),C(119,101,98,112,97,99,107,98,105,110,46,99,111,109),C(97,114,99,104,105,118,101,46,111,114,103),C(99,111,100,101,115,97,110,100,98,111,120,46,105,111),C(99,115,98,46,97,112,112),C(115,116,97,99,107,98,108,105,116,122,46,99,111,109),C(115,116,97,99,107,98,108,105,116,122,46,105,111),C(99,111,100,105,101,114,46,105,111),C(109,111,116,105,111,110,116,114,105,99,107,115,46,99,111,109),C(115,116,97,99,107,111,118,101,114,102,108,111,119,46,99,111,109),C(115,116,97,99,107,101,120,99,104,97,110,103,101,46,99,111,109),C(115,116,117,100,105,111,102,114,101,105,103,104,116,46,99,111,109),C(119,101,98,99,111,110,116,97,105,110,101,114,46,105,111),C(106,115,102,105,100,100,108,101,46,110,101,116)],l=function(){if(u)if(document.readyState==="loading"||document.readyState==="interactive")document.addEventListener("readystatechange",l);else{document.removeEventListener("readystatechange",l);var o=typeof E1=="object"?E1:u&&window.gsap;u&&window.console&&!window._gsapWarned&&typeof o=="object"&&o.config().trialWarn!==!1&&(console.log(C(37,99,87,97,114,110,105,110,103),C(102,111,110,116,45,115,105,122,101,58,51,48,112,120,59,99,111,108,111,114,58,114,101,100,59)),console.log(C(65,32,116,114,105,97,108,32,118,101,114,115,105,111,110,32,111,102,32)+"SplitText"+C(32,105,115,32,108,111,97,100,101,100,32,116,104,97,116,32,111,110,108,121,32,119,111,114,107,115,32,108,111,99,97,108,108,121,32,97,110,100,32,111,110,32,100,111,109,97,105,110,115,32,108,105,107,101,32,99,111,100,101,112,101,110,46,105,111,32,97,110,100,32,99,111,100,101,115,97,110,100,98,111,120,46,105,111,46,32,42,42,42,32,68,79,32,78,79,84,32,68,69,80,76,79,89,32,84,72,73,83,32,70,73,76,69,32,42,42,42,32,76,111,97,100,105,110,103,32,105,116,32,111,110,32,97,110,32,117,110,97,117,116,104,111,114,105,122,101,100,32,115,105,116,101,32,118,105,111,108,97,116,101,115,32,116,104,101,32,108,105,99,101,110,115,101,32,97,110,100,32,119,105,108,108,32,99,97,117,115,101,32,97,32,114,101,100,105,114,101,99,116,46,32,80,108,101,97,115,101,32,106,111,105,110,32,67,108,117,98,32,71,114,101,101,110,83,111,99,107,32,116,111,32,103,101,116,32,102,117,108,108,32,97,99,99,101,115,115,32,116,111,32,116,104,101,32,98,111,110,117,115,32,112,108,117,103,105,110,115,32,116,104,97,116,32,98,111,111,115,116,32,121,111,117,114,32,97,110,105,109,97,116,105,111,110,32,115,117,112,101,114,112,111,119,101,114,115,46,32,68,105,115,97,98,108,101,32,116,104,105,115,32,119,97,114,110,105,110,103,32,119,105,116,104,32,103,115,97,112,46,99,111,110,102,105,103,40,123,116,114,105,97,108,87,97,114,110,58,32,102,97,108,115,101,125,41,59)),console.log(C(37,99,71,101,116,32,117,110,114,101,115,116,114,105,99,116,101,100,32,102,105,108,101,115,32,97,116,32,104,116,116,112,115,58,47,47,103,114,101,101,110,115,111,99,107,46,99,111,109,47,99,108,117,98),C(102,111,110,116,45,115,105,122,101,58,49,54,112,120,59,99,111,108,111,114,58,35,52,101,57,56,49,53)),window._gsapWarned=1)}},n=i.length;for(setTimeout(l,50);--n>-1;)if(D.indexOf(i[n])!==-1)return!0;return s||!setTimeout(function(){u&&(window.location.href=C(104,116,116,112,115,58,47,47)+ue+C(47,114,101,113,117,105,114,101,115,45,109,101,109,98,101,114,115,104,105,112,47)+"?plugin=SplitText&source=trial")},4e3)}(typeof window<"u"?window.location.host:""),he=D=>z1.getComputedStyle(D),V1=D=>D.position==="absolute"||D.absolute===!0,ke=(D,u)=>{let s,i=u.length;for(;--i>-1;)if(s=u[i],D.substr(0,s.length)===s)return s.length},De=(D="",u)=>{let s=~D.indexOf("++"),i=1;return s&&(D=D.split("++").join("")),()=>"<"+u+" style='position:relative;display:inline-block;'"+(D?" class='"+D+(s?i++:"")+"'>":">")},I1=(D,u,s)=>{let i=D.nodeType;if(i===1||i===9||i===11)for(D=D.firstChild;D;D=D.nextSibling)I1(D,u,s);else i!==3&&i!==4||(D.nodeValue=D.nodeValue.split(u).join(s))},W1=(D,u)=>{let s=u.length;for(;--s>-1;)D.push(u[s])},te=(D,u,s)=>{let i;for(;D&&D!==u;){if(i=D._next||D.nextSibling,i)return i.textContent.charAt(0)===s;D=D.parentNode||D._parent}},pe=D=>{let u,s,i=L1(D.childNodes),l=i.length;for(u=0;u<l;u++)s=i[u],s._isSplit?pe(s):u&&s.previousSibling&&s.previousSibling.nodeType===3?(s.previousSibling.nodeValue+=s.nodeType===3?s.nodeValue:s.firstChild.nodeValue,D.removeChild(s)):s.nodeType!==3&&(D.insertBefore(s.firstChild,s),D.removeChild(s))},Q=(D,u)=>parseFloat(u[D])||0,je=(D,u,s,i,l,n,o)=>{let F,g,y,t,A,x,H,Z,k,m,q,L,T=he(D),n1=Q("paddingLeft",T),K=-999,o1=Q("borderBottomWidth",T)+Q("borderTopWidth",T),Y=Q("borderLeftWidth",T)+Q("borderRightWidth",T),z=Q("paddingTop",T)+Q("paddingBottom",T),e1=Q("paddingLeft",T)+Q("paddingRight",T),u1=Q("fontSize",T)*(u.lineThreshold||.2),f1=T.textAlign,W=[],V=[],_=[],p1=u.wordDelimiter||" ",G=u.tag?u.tag:u.span?"span":"div",D1=u.type||u.split||"chars,words,lines",I=l&&~D1.indexOf("lines")?[]:null,j=~D1.indexOf("words"),t1=~D1.indexOf("chars"),P=V1(u),J=u.linesClass,l1=~(J||"").indexOf("++"),r1=[],B1=T.display==="flex",A1=D.style.display;for(l1&&(J=J.split("++").join("")),B1&&(D.style.display="block"),g=D.getElementsByTagName("*"),y=g.length,A=[],F=0;F<y;F++)A[F]=g[F];if(I||P)for(F=0;F<y;F++)t=A[F],x=t.parentNode===D,(x||P||t1&&!j)&&(L=t.offsetTop,I&&x&&Math.abs(L-K)>u1&&(t.nodeName!=="BR"||F===0)&&(H=[],I.push(H),K=L),P&&(t._x=t.offsetLeft,t._y=L,t._w=t.offsetWidth,t._h=t.offsetHeight),I&&((t._isSplit&&x||!t1&&x||j&&x||!j&&t.parentNode.parentNode===D&&!t.parentNode._isSplit)&&(H.push(t),t._x-=n1,te(t,D,p1)&&(t._wordEnd=!0)),t.nodeName==="BR"&&(t.nextSibling&&t.nextSibling.nodeName==="BR"||F===0)&&I.push([])));for(F=0;F<y;F++)if(t=A[F],x=t.parentNode===D,t.nodeName!=="BR")if(P&&(k=t.style,j||x||(t._x+=t.parentNode._x,t._y+=t.parentNode._y),k.left=t._x+"px",k.top=t._y+"px",k.position="absolute",k.display="block",k.width=t._w+1+"px",k.height=t._h+"px"),!j&&t1)if(t._isSplit)for(t._next=g=t.nextSibling,t.parentNode.appendChild(t);g&&g.nodeType===3&&g.textContent===" ";)t._next=g.nextSibling,t.parentNode.appendChild(g),g=g.nextSibling;else t.parentNode._isSplit?(t._parent=t.parentNode,!t.previousSibling&&t.firstChild&&(t.firstChild._isFirst=!0),t.nextSibling&&t.nextSibling.textContent===" "&&!t.nextSibling.nextSibling&&r1.push(t.nextSibling),t._next=t.nextSibling&&t.nextSibling._isFirst?null:t.nextSibling,t.parentNode.removeChild(t),A.splice(F--,1),y--):x||(L=!t.nextSibling&&te(t.parentNode,D,p1),t.parentNode._parent&&t.parentNode._parent.appendChild(t),L&&t.parentNode.appendChild(v1.createTextNode(" ")),G==="span"&&(t.style.display="inline"),W.push(t));else t.parentNode._isSplit&&!t._isSplit&&t.innerHTML!==""?V.push(t):t1&&!t._isSplit&&(G==="span"&&(t.style.display="inline"),W.push(t));else I||P?(t.parentNode&&t.parentNode.removeChild(t),A.splice(F--,1),y--):j||D.appendChild(t);for(F=r1.length;--F>-1;)r1[F].parentNode.removeChild(r1[F]);if(I){for(P&&(m=v1.createElement(G),D.appendChild(m),q=m.offsetWidth+"px",L=m.offsetParent===D?0:D.offsetLeft,D.removeChild(m)),k=D.style.cssText,D.style.cssText="display:none;";D.firstChild;)D.removeChild(D.firstChild);for(Z=p1===" "&&(!P||!j&&!t1),F=0;F<I.length;F++){for(H=I[F],m=v1.createElement(G),m.style.cssText="display:block;text-align:"+f1+";position:"+(P?"absolute;":"relative;"),J&&(m.className=J+(l1?F+1:"")),_.push(m),y=H.length,g=0;g<y;g++)H[g].nodeName!=="BR"&&(t=H[g],m.appendChild(t),Z&&t._wordEnd&&m.appendChild(v1.createTextNode(" ")),P&&(g===0&&(m.style.top=t._y+"px",m.style.left=n1+L+"px"),t.style.top="0px",L&&(t.style.left=t._x-L+"px")));y===0?m.innerHTML="&nbsp;":j||t1||(pe(m),I1(m," "," ")),P&&(m.style.width=q,m.style.height=t._h+"px"),D.appendChild(m)}D.style.cssText=k}P&&(o>D.clientHeight&&(D.style.height=o-z+"px",D.clientHeight<o&&(D.style.height=o+o1+"px")),n>D.clientWidth&&(D.style.width=n-e1+"px",D.clientWidth<n&&(D.style.width=n+Y+"px"))),B1&&(A1?D.style.display=A1:D.style.removeProperty("display")),W1(s,W),j&&W1(i,V),W1(l,_)},Le=(D,u,s,i)=>{let l,n,o,F,g,y,t,A,x=u.tag?u.tag:u.span?"span":"div",H=~(u.type||u.split||"chars,words,lines").indexOf("chars"),Z=V1(u),k=u.wordDelimiter||" ",m=Y=>Y===k||Y===Te&&k===" ",q=k!==" "?"":Z?"&#173; ":" ",L="</"+x+">",T=1,n1=u.specialChars?typeof u.specialChars=="function"?u.specialChars:ke:null,K=v1.createElement("div"),o1=D.parentNode;for(o1.insertBefore(K,D),K.textContent=D.nodeValue,o1.removeChild(D),l=function Y(z){let e1=z.nodeType,u1="";if(e1===1||e1===9||e1===11){if(typeof z.textContent=="string")return z.textContent;for(z=z.firstChild;z;z=z.nextSibling)u1+=Y(z)}else if(e1===3||e1===4)return z.nodeValue;return u1}(D=K),t=l.indexOf("<")!==-1,u.reduceWhiteSpace!==!1&&(l=l.replace(Se," ").replace(be,"")),t&&(l=l.split("<").join("{{LT}}")),g=l.length,n=(l.charAt(0)===" "?q:"")+s(),o=0;o<g;o++)if(y=l.charAt(o),n1&&(A=n1(l.substr(o),u.specialChars)))y=l.substr(o,A||1),n+=H&&y!==" "?i()+y+"</"+x+">":y,o+=A-1;else if(m(y)&&!m(l.charAt(o-1))&&o){for(n+=T?L:"",T=0;m(l.charAt(o+1));)n+=q,o++;o===g-1?n+=q:l.charAt(o+1)!==")"&&(n+=q+s(),T=1)}else y==="{"&&l.substr(o,6)==="{{LT}}"?(n+=H?i()+"{{LT}}</"+x+">":"{{LT}}",o+=5):y.charCodeAt(0)>=55296&&y.charCodeAt(0)<=56319||l.charCodeAt(o+1)>=65024&&l.charCodeAt(o+1)<=65039?(F=((l.substr(o,12).split(we)||[])[1]||"").length||2,n+=H&&y!==" "?i()+l.substr(o,F)+"</"+x+">":l.substr(o,F),o+=F-1):n+=H&&y!==" "?i()+y+"</"+x+">":y;D.outerHTML=n+(T?L:""),t&&I1(o1,"{{LT}}","<")},ce=(D,u,s,i)=>{let l,n,o=L1(D.childNodes),F=o.length,g=V1(u);if(D.nodeType!==3||F>1){for(u.absolute=!1,l=0;l<F;l++)n=o[l],n._next=n._isFirst=n._parent=n._wordEnd=null,(n.nodeType!==3||/\S+/.test(n.nodeValue))&&(g&&n.nodeType!==3&&he(n).display==="inline"&&(n.style.display="inline-block",n.style.position="relative"),n._isSplit=!0,ce(n,u,s,i));return u.absolute=g,void(D._isSplit=!0)}Le(D,u,s,i)},re=class Ee{constructor(u,s){de||Ce(),this.elements=L1(u),this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=s||{},Fe(this),Re&&this.split(s)}split(u){this.isSplit&&this.revert(),this.vars=u=u||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;let s,i,l,n=this.elements.length,o=u.tag?u.tag:u.span?"span":"div",F=De(u.wordsClass,o),g=De(u.charsClass,o);for(;--n>-1;)l=this.elements[n],this._originals[n]={html:l.innerHTML,style:l.getAttribute("style")},s=l.clientHeight,i=l.clientWidth,ce(l,u,F,g),je(l,u,this.chars,this.words,this.lines,i,s);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this}revert(){let u=this._originals;if(!u)throw"revert() call wasn't scoped properly.";return this.elements.forEach((s,i)=>{s.innerHTML=u[i].html,s.setAttribute("style",u[i].style||"")}),this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this}static create(u,s){return new Ee(u,s)}};re.version="3.12.7",re.register=Ce;const M1=({text:D,cursor:u})=>S.jsx("div",{className:"hover-link","data-cursor":!u&&"disable",children:S.jsxs("div",{className:"hover-in",children:[D," ",S.jsx("div",{children:D})]})});/*!
 * ScrollSmoother 3.12.7
 * https://gsap.com
 * 
 * @license Copyright 2025, GreenSock. All rights reserved.
 * *** DO NOT DEPLOY THIS FILE ***
 * This is a trial version that only works locally and on domains like codepen.io and codesandbox.io.
 * Loading it on an unauthorized domain violates the license and will cause a redirect.
 * Get the unrestricted file by joining Club GSAP at https://gsap.com/pricing
 * @author: Jack Doyle, jack@greensock.com
 */let f,R1,M,h1,T1,i1,c1,se,p,X,k1,ie,ne,oe,le,fe=()=>typeof window<"u",ge=()=>f||fe()&&(f=window.gsap)&&f.registerPlugin&&f,h=function(){return String.fromCharCode.apply(null,arguments)},ae=h(103,114,101,101,110,115,111,99,107,46,99,111,109),Pe=h(103,115,97,112,46,99,111,109),$e=/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/,C1=(function(D){var u=typeof window<"u",s=(u?window.location.href:"").indexOf(h(102,105,108,101,58,47,47))===0||D.indexOf(h(108,111,99,97,108,104,111,115,116))!==-1||$e.test(D)||(u?window.location.hostname:"").split(".").pop()===h(108,111,99,97,108),i=[ae,Pe,h(99,111,100,101,112,101,110,46,105,111),h(99,111,100,101,112,101,110,46,112,108,117,109,98,105,110,103),h(99,111,100,101,112,101,110,46,100,101,118),h(99,111,100,101,112,101,110,46,97,112,112),h(99,111,100,101,112,101,110,46,119,101,98,115,105,116,101),h(112,101,110,115,46,99,108,111,117,100),h(99,115,115,45,116,114,105,99,107,115,46,99,111,109),h(99,100,112,110,46,105,111),h(112,101,110,115,46,105,111),h(103,97,110,110,111,110,46,116,118),h(99,111,100,101,99,97,110,121,111,110,46,110,101,116),h(116,104,101,109,101,102,111,114,101,115,116,46,110,101,116),h(99,101,114,101,98,114,97,120,46,99,111,46,117,107),h(116,121,109,112,97,110,117,115,46,110,101,116),h(116,119,101,101,110,109,97,120,46,99,111,109),h(112,108,110,107,114,46,99,111),h(104,111,116,106,97,114,46,99,111,109),h(119,101,98,112,97,99,107,98,105,110,46,99,111,109),h(97,114,99,104,105,118,101,46,111,114,103),h(99,111,100,101,115,97,110,100,98,111,120,46,105,111),h(99,115,98,46,97,112,112),h(115,116,97,99,107,98,108,105,116,122,46,99,111,109),h(115,116,97,99,107,98,108,105,116,122,46,105,111),h(99,111,100,105,101,114,46,105,111),h(109,111,116,105,111,110,116,114,105,99,107,115,46,99,111,109),h(115,116,97,99,107,111,118,101,114,102,108,111,119,46,99,111,109),h(115,116,97,99,107,101,120,99,104,97,110,103,101,46,99,111,109),h(115,116,117,100,105,111,102,114,101,105,103,104,116,46,99,111,109),h(119,101,98,99,111,110,116,97,105,110,101,114,46,105,111),h(106,115,102,105,100,100,108,101,46,110,101,116)],l=function(){if(u)if(document.readyState==="loading"||document.readyState==="interactive")document.addEventListener("readystatechange",l);else{document.removeEventListener("readystatechange",l);var o=typeof f=="object"?f:u&&window.gsap;u&&window.console&&!window._gsapWarned&&typeof o=="object"&&o.config().trialWarn!==!1&&(console.log(h(37,99,87,97,114,110,105,110,103),h(102,111,110,116,45,115,105,122,101,58,51,48,112,120,59,99,111,108,111,114,58,114,101,100,59)),console.log(h(65,32,116,114,105,97,108,32,118,101,114,115,105,111,110,32,111,102,32)+"ScrollSmoother"+h(32,105,115,32,108,111,97,100,101,100,32,116,104,97,116,32,111,110,108,121,32,119,111,114,107,115,32,108,111,99,97,108,108,121,32,97,110,100,32,111,110,32,100,111,109,97,105,110,115,32,108,105,107,101,32,99,111,100,101,112,101,110,46,105,111,32,97,110,100,32,99,111,100,101,115,97,110,100,98,111,120,46,105,111,46,32,42,42,42,32,68,79,32,78,79,84,32,68,69,80,76,79,89,32,84,72,73,83,32,70,73,76,69,32,42,42,42,32,76,111,97,100,105,110,103,32,105,116,32,111,110,32,97,110,32,117,110,97,117,116,104,111,114,105,122,101,100,32,115,105,116,101,32,118,105,111,108,97,116,101,115,32,116,104,101,32,108,105,99,101,110,115,101,32,97,110,100,32,119,105,108,108,32,99,97,117,115,101,32,97,32,114,101,100,105,114,101,99,116,46,32,80,108,101,97,115,101,32,106,111,105,110,32,67,108,117,98,32,71,114,101,101,110,83,111,99,107,32,116,111,32,103,101,116,32,102,117,108,108,32,97,99,99,101,115,115,32,116,111,32,116,104,101,32,98,111,110,117,115,32,112,108,117,103,105,110,115,32,116,104,97,116,32,98,111,111,115,116,32,121,111,117,114,32,97,110,105,109,97,116,105,111,110,32,115,117,112,101,114,112,111,119,101,114,115,46,32,68,105,115,97,98,108,101,32,116,104,105,115,32,119,97,114,110,105,110,103,32,119,105,116,104,32,103,115,97,112,46,99,111,110,102,105,103,40,123,116,114,105,97,108,87,97,114,110,58,32,102,97,108,115,101,125,41,59)),console.log(h(37,99,71,101,116,32,117,110,114,101,115,116,114,105,99,116,101,100,32,102,105,108,101,115,32,97,116,32,104,116,116,112,115,58,47,47,103,114,101,101,110,115,111,99,107,46,99,111,109,47,99,108,117,98),h(102,111,110,116,45,115,105,122,101,58,49,54,112,120,59,99,111,108,111,114,58,35,52,101,57,56,49,53)),window._gsapWarned=1)}},n=i.length;for(setTimeout(l,50);--n>-1;)if(D.indexOf(i[n])!==-1)return!0;s||setTimeout(function(){u&&(window.location.href=h(104,116,116,112,115,58,47,47)+ae+h(47,114,101,113,117,105,114,101,115,45,109,101,109,98,101,114,115,104,105,112,47)+"?plugin=ScrollSmoother&source=trial")},4e3)}(typeof window<"u"?window.location.host:""),D=>p.maxScroll(D||M)),Oe=D=>{let u=h1.querySelector(".ScrollSmoother-wrapper");return u||(u=h1.createElement("div"),u.classList.add("ScrollSmoother-wrapper"),D.parentNode.insertBefore(u,D),u.appendChild(D)),u};class O{constructor(u){R1||O.register(f)||console.warn("Please gsap.registerPlugin(ScrollSmoother)"),u=this.vars=u||{},X&&X.kill(),X=this,oe(this);let s,i,l,n,o,F,g,y,t,A,x,H,Z,k,m,q,{smoothTouch:L,onUpdate:T,onStop:n1,smooth:K,onFocusIn:o1,normalizeScroll:Y,wholePixels:z}=u,e1=this,u1=u.effectsPrefix||"",f1=p.getScrollFunc(M),W=p.isTouch===1?L===!0?.8:parseFloat(L)||0:K===0||K===!1?0:parseFloat(K)||.8,V=W&&+u.speed||1,_=0,p1=0,G=1,D1=ie(0),I=()=>D1.update(-_),j={y:0},t1=()=>s.style.overflow="visible",P=e=>{e.update();let r=e.getTween();r&&(r.pause(),r._time=r._dur,r._tTime=r._tDur),m=!1,e.animation.progress(e.progress,!0)},J=(e,r)=>{(e!==_&&!A||r)&&(z&&(e=Math.round(e)),W&&(s.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+e+", 0, 1)",s._gsap.y=e+"px"),p1=e-_,_=e,p.isUpdating||O.isRefreshing||p.update())},l1=function(e){return arguments.length?(e<0&&(e=0),j.y=-e,m=!0,A?_=-e:J(-e),p.isRefreshing?n.update():f1(e/V),this):-_},r1=typeof ResizeObserver<"u"&&u.autoResize!==!1&&new ResizeObserver(()=>{if(!p.isRefreshing){let e=C1(i)*V;e<-_&&l1(e),le.restart(!0)}}),B1=e=>{i.scrollTop=0,e.target.contains&&e.target.contains(i)||o1&&o1(this,e)===!1||(p.isInViewport(e.target)||e.target===q||this.scrollTo(e.target,!1,"center center"),q=e.target)},A1=(e,r)=>{if(e<r.start)return e;let a=isNaN(r.ratio)?1:r.ratio,d=r.end-r.start,c=e-r.start,v=r.offset||0,B=r.pins||[],w=B.offset||0,b=r._startClamp&&r.start<=0||r.pins&&r.pins.offset?0:r._endClamp&&r.end===C1()?1:.5;return B.forEach($=>{d-=$.distance,$.nativeStart<=e&&(c-=$.distance)}),w&&(c*=(d-w/a)/d),e+(c-v*b)/a-c},U1=(e,r,a)=>{a||(e.pins.length=e.pins.offset=0);let d,c,v,B,w,b,$,E,_1=e.pins,$1=e.markers;for($=0;$<r.length;$++)if(E=r[$],e.trigger&&E.trigger&&e!==E&&(E.trigger===e.trigger||E.pinnedContainer===e.trigger||e.trigger.contains(E.trigger))&&(w=E._startNative||E._startClamp||E.start,b=E._endNative||E._endClamp||E.end,v=A1(w,e),B=E.pin&&b>0?v+(b-w):A1(b,e),E.setPositions(v,B,!0,(E._startClamp?Math.max(0,v):v)-w),E.markerStart&&$1.push(f.quickSetter([E.markerStart,E.markerEnd],"y","px")),E.pin&&E.end>0&&!a)){if(d=E.end-E.start,c=e._startClamp&&E.start<0,c){if(e.start>0)return e.setPositions(0,e.end+(e._startNative-e.start),!0),void U1(e,r);d+=E.start,_1.offset=-E.start}_1.push({start:E.start,nativeStart:w,end:E.end,distance:d,trig:E}),e.setPositions(e.start,e.end+(c?-E.start:d),!0)}},q1=(e,r)=>{o.forEach(a=>U1(a,e,r))},K1=()=>{T1=h1.documentElement,i1=h1.body,t1(),requestAnimationFrame(t1),o&&(p.getAll().forEach(e=>{e._startNative=e.start,e._endNative=e.end}),o.forEach(e=>{let r=e._startClamp||e.start,a=e.autoSpeed?Math.min(C1(),e.end):r+Math.abs((e.end-r)/e.ratio),d=a-e.end;if(r-=d/2,a-=d/2,r>a){let c=r;r=a,a=c}e._startClamp&&r<0?(a=e.ratio<0?C1():e.end/e.ratio,d=a-e.end,r=0):(e.ratio<0||e._endClamp&&a>=C1())&&(a=C1(),r=e.ratio<0||e.ratio>1?0:a-(a-e.start)/e.ratio,d=(a-r)*e.ratio-(e.end-e.start)),e.offset=d||1e-4,e.pins.length=e.pins.offset=0,e.setPositions(r,a,!0)}),q1(p.sort())),D1.reset()},P1=()=>p.addEventListener("refresh",K1),me=()=>o&&o.forEach(e=>e.vars.onRefresh(e)),ye=()=>(o&&o.forEach(e=>e.vars.onRefreshInit(e)),me),Y1=(e,r,a,d)=>()=>{let c=typeof r=="function"?r(a,d):r;c||c===0||(c=d.getAttribute("data-"+u1+e)||(e==="speed"?1:0)),d.setAttribute("data-"+u1+e,c);let v=(c+"").substr(0,6)==="clamp(";return{clamp:v,value:v?c.substr(6,c.length-7):c}},ve=(e,r,a,d,c)=>{c=(typeof c=="function"?c(d,e):c)||0;let v,B,w,b,$,E,_1=Y1("speed",r,d,e),$1=Y1("lag",a,d,e),N1=f.getProperty(e,"y"),w1=e._gsap,g1=[],J1=()=>{r=_1(),a=parseFloat($1().value),v=parseFloat(r.value)||1,w=r.value==="auto",$=w||B&&B._startClamp&&B.start<=0||g1.offset?0:B&&B._endClamp&&B.end===C1()?1:.5,b&&b.kill(),b=a&&f.to(e,{ease:k1,overwrite:!1,y:"+=0",duration:a}),B&&(B.ratio=v,B.autoSpeed=w)},O1=()=>{w1.y=N1+"px",w1.renderTransform(1),J1()},H1=[],m1=0,Q1=N=>{if(w){O1();let R=((a1,s1)=>{let U,d1,y1=a1.parentNode||T1,b1=a1.getBoundingClientRect(),F1=y1.getBoundingClientRect(),X1=F1.top-b1.top,Z1=F1.bottom-b1.bottom,S1=(Math.abs(X1)>Math.abs(Z1)?X1:Z1)/(1-s1),ee=-S1*s1;return S1>0&&(U=F1.height/(M.innerHeight+F1.height),d1=U===.5?2*F1.height:2*Math.min(F1.height,Math.abs(-S1*U/(2*U-1)))*(s1||1),ee+=s1?-d1*s1:-d1/2,S1+=d1),{change:S1,offset:ee}})(e,se(0,1,-N.start/(N.end-N.start)));m1=R.change,E=R.offset}else E=g1.offset||0,m1=(N.end-N.start-E)*(1-v);g1.forEach(R=>m1-=R.distance*(1-v)),N.offset=m1||.001,N.vars.onUpdate(N),b&&b.progress(1)};return J1(),(v!==1||w||b)&&(B=p.create({trigger:w?e.parentNode:e,start:()=>r.clamp?"clamp(top bottom+="+c+")":"top bottom+="+c,end:()=>r.value<0?"max":r.clamp?"clamp(bottom top-="+c+")":"bottom top-="+c,scroller:i,scrub:!0,refreshPriority:-999,onRefreshInit:O1,onRefresh:Q1,onKill:N=>{let R=o.indexOf(N);R>=0&&o.splice(R,1),O1()},onUpdate:N=>{let R,a1,s1,U=N1+m1*(N.progress-$),d1=g1.length,y1=0;if(N.offset){if(d1){for(a1=-_,s1=N.end;d1--;){if(R=g1[d1],R.trig.isActive||a1>=R.start&&a1<=R.end)return void(b&&(R.trig.progress+=R.trig.direction<0?.001:-.001,R.trig.update(0,0,1),b.resetTo("y",parseFloat(w1.y),-p1,!0),G&&b.progress(1)));a1>R.end&&(y1+=R.distance),s1-=R.distance}U=N1+y1+m1*((f.utils.clamp(N.start,N.end,a1)-N.start-y1)/(s1-N.start)-$)}H1.length&&!w&&H1.forEach(F1=>F1(U-y1)),b1=U+E,U=Math.round(1e5*b1)/1e5||0,b?(b.resetTo("y",U,-p1,!0),G&&b.progress(1)):(w1.y=U+"px",w1.renderTransform(1))}var b1}}),Q1(B),f.core.getCache(B.trigger).stRevert=ye,B.startY=N1,B.pins=g1,B.markers=H1,B.ratio=v,B.autoSpeed=w,e.style.willChange="transform"),B};function x1(){return l=s.clientHeight,s.style.overflow="visible",i1.style.height=M.innerHeight+(l-M.innerHeight)/V+"px",l-M.innerHeight}P1(),p.addEventListener("killAll",P1),f.delayedCall(.5,()=>G=0),this.scrollTop=l1,this.scrollTo=(e,r,a)=>{let d=f.utils.clamp(0,C1(),isNaN(e)?this.offset(e,a,!!r&&!A):+e);r?A?f.to(this,{duration:W,scrollTop:d,overwrite:"auto",ease:k1}):f1(d):l1(d)},this.offset=(e,r,a)=>{let d,c=(e=c1(e)[0]).style.cssText,v=p.create({trigger:e,start:r||"top top"});return o&&(G?p.refresh():q1([v],!0)),d=v.start/(a?V:1),v.kill(!1),e.style.cssText=c,f.core.getCache(e).uncache=1,d},this.content=function(e){if(arguments.length){let r=c1(e||"#smooth-content")[0]||console.warn("ScrollSmoother needs a valid content element.")||i1.children[0];return r!==s&&(s=r,t=s.getAttribute("style")||"",r1&&r1.observe(s),f.set(s,{overflow:"visible",width:"100%",boxSizing:"border-box",y:"+=0"}),W||f.set(s,{clearProps:"transform"})),this}return s},this.wrapper=function(e){return arguments.length?(i=c1(e||"#smooth-wrapper")[0]||Oe(s),y=i.getAttribute("style")||"",x1(),f.set(i,W?{overflow:"hidden",position:"fixed",height:"100%",width:"100%",top:0,left:0,right:0,bottom:0}:{overflow:"visible",position:"relative",width:"100%",height:"auto",top:"auto",bottom:"auto",left:"auto",right:"auto"}),this):i},this.effects=(e,r)=>{if(o||(o=[]),!e)return o.slice(0);(e=c1(e)).forEach(b=>{let $=o.length;for(;$--;)o[$].trigger===b&&o[$].kill()}),r=r||{};let a,d,{speed:c,lag:v,effectsPadding:B}=r,w=[];for(a=0;a<e.length;a++)d=ve(e[a],c,v,a,B),d&&w.push(d);return o.push(...w),r.refresh!==!1&&p.refresh(),w},this.sections=(e,r)=>{if(F||(F=[]),!e)return F.slice(0);let a=c1(e).map(d=>p.create({trigger:d,start:"top 120%",end:"bottom -20%",onToggle:c=>{d.style.opacity=c.isActive?"1":"0",d.style.pointerEvents=c.isActive?"all":"none"}}));return r&&r.add?F.push(...a):F=a.slice(0),a},this.content(u.content),this.wrapper(u.wrapper),this.render=e=>J(e||e===0?e:_),this.getVelocity=()=>D1.getVelocity(-_),p.scrollerProxy(i,{scrollTop:l1,scrollHeight:()=>x1()&&i1.scrollHeight,fixedMarkers:u.fixedMarkers!==!1&&!!W,content:s,getBoundingClientRect:()=>({top:0,left:0,width:M.innerWidth,height:M.innerHeight})}),p.defaults({scroller:i});let G1=p.getAll().filter(e=>e.scroller===M||e.scroller===i);G1.forEach(e=>e.revert(!0,!0)),n=p.create({animation:f.fromTo(j,{y:()=>(k=0,0)},{y:()=>(k=1,-x1()),immediateRender:!1,ease:"none",data:"ScrollSmoother",duration:100,onUpdate:function(){if(k){let e=m;e&&(P(n),j.y=_),J(j.y,e),I(),T&&!A&&T(e1)}}}),onRefreshInit:e=>{if(O.isRefreshing)return;if(O.isRefreshing=!0,o){let a=p.getAll().filter(d=>!!d.pin);o.forEach(d=>{d.vars.pinnedContainer||a.forEach(c=>{if(c.pin.contains(d.trigger)){let v=d.vars;v.pinnedContainer=c.pin,d.vars=null,d.init(v,d.animation)}})})}let r=e.getTween();Z=r&&r._end>r._dp._time,H=_,j.y=0,W&&(p.isTouch===1&&(i.style.position="absolute"),i.scrollTop=0,p.isTouch===1&&(i.style.position="fixed"))},onRefresh:e=>{e.animation.invalidate(),e.setPositions(e.start,x1()/V),Z||P(e),j.y=-f1()*V,J(j.y),G||(Z&&(m=!1),e.animation.progress(f.utils.clamp(0,1,H/V/-e.end))),Z&&(e.progress-=.001,e.update()),O.isRefreshing=!1},id:"ScrollSmoother",scroller:M,invalidateOnRefresh:!0,start:0,refreshPriority:-9999,end:()=>x1()/V,onScrubComplete:()=>{D1.reset(),n1&&n1(this)},scrub:W||!0}),this.smooth=function(e){return arguments.length&&(W=e||0,V=W&&+u.speed||1,n.scrubDuration(e)),n.getTween()?n.getTween().duration():0},n.getTween()&&(n.getTween().vars.ease=u.ease||k1),this.scrollTrigger=n,u.effects&&this.effects(u.effects===!0?"[data-"+u1+"speed], [data-"+u1+"lag]":u.effects,{effectsPadding:u.effectsPadding,refresh:!1}),u.sections&&this.sections(u.sections===!0?"[data-section]":u.sections),G1.forEach(e=>{e.vars.scroller=i,e.revert(!1,!0),e.init(e.vars,e.animation)}),this.paused=function(e,r){return arguments.length?(!!A!==e&&(e?(n.getTween()&&n.getTween().pause(),f1(-_/V),D1.reset(),x=p.normalizeScroll(),x&&x.disable(),A=p.observe({preventDefault:!0,type:"wheel,touch,scroll",debounce:!1,allowClicks:!0,onChangeY:()=>l1(-_)}),A.nested=ne(T1,"wheel,touch,scroll",!0,r!==!1)):(A.nested.kill(),A.kill(),A=0,x&&x.enable(),n.progress=(-_/V-n.start)/(n.end-n.start),P(n))),this):!!A},this.kill=this.revert=()=>{this.paused(!1),P(n),n.kill();let e=(o||[]).concat(F||[]),r=e.length;for(;r--;)e[r].kill();p.scrollerProxy(i),p.removeEventListener("killAll",P1),p.removeEventListener("refresh",K1),i.style.cssText=y,s.style.cssText=t;let a=p.defaults({});a&&a.scroller===i&&p.defaults({scroller:M}),this.normalizer&&p.normalizeScroll(!1),clearInterval(g),X=null,r1&&r1.disconnect(),i1.style.removeProperty("height"),M.removeEventListener("focusin",B1)},this.refresh=(e,r)=>n.refresh(e,r),Y&&(this.normalizer=p.normalizeScroll(Y===!0?{debounce:!0,content:!W&&s}:Y)),p.config(u),"scrollBehavior"in M.getComputedStyle(i1)&&f.set([i1,T1],{scrollBehavior:"auto"}),M.addEventListener("focusin",B1),g=setInterval(I,250),h1.readyState==="loading"||requestAnimationFrame(()=>p.refresh())}get progress(){return this.scrollTrigger?this.scrollTrigger.animation._time/100:0}static register(u){return R1||(f=u||ge(),fe()&&window.document&&(M=window,h1=document,T1=h1.documentElement,i1=h1.body),f&&(c1=f.utils.toArray,se=f.utils.clamp,k1=f.parseEase("expo"),oe=f.core.context||function(){},p=f.core.globals().ScrollTrigger,f.core.globals("ScrollSmoother",O),i1&&p&&(le=f.delayedCall(.2,()=>p.isRefreshing||X&&X.refresh()).pause(),ie=p.core._getVelocityProp,ne=p.core._inputObserver,O.refresh=p.refresh,R1=1))),R1}}O.version="3.12.7",O.create=D=>X&&D&&X.content()===c1(D.content)[0]?X:new O(D),O.get=()=>X,ge()&&f.registerPlugin(O);Ae.registerPlugin(O,xe);let j1;const Me=()=>(Be.useEffect(()=>{j1=O.create({wrapper:"#smooth-wrapper",content:"#smooth-content",smooth:1.7,speed:1.7,effects:!0,autoResize:!0,ignoreMobileResize:!0}),j1.scrollTop(0),j1.paused(!0),document.querySelectorAll(".header ul a").forEach(u=>{u.addEventListener("click",i=>{if(window.innerWidth>1024){i.preventDefault();const n=i.currentTarget.getAttribute("data-href");j1.scrollTo(n,!0,"top top")}})}),window.addEventListener("resize",()=>{O.refresh(!0)})},[]),S.jsxs(S.Fragment,{children:[S.jsxs("div",{className:"header",children:[S.jsx("a",{href:"/#",className:"navbar-title","data-cursor":"disable",children:"Hassan.A"}),S.jsx("a",{href:"mailto:hassan.assaad@devoops.info",className:"navbar-connect","data-cursor":"disable",children:"hassan.assaad@devoops.info"}),S.jsxs("ul",{children:[S.jsx("li",{children:S.jsx("a",{"data-href":"#about",href:"#about",children:S.jsx(M1,{text:"ABOUT"})})}),S.jsx("li",{children:S.jsx("a",{"data-href":"#work",href:"#work",children:S.jsx(M1,{text:"WORK"})})}),S.jsx("li",{children:S.jsx("a",{"data-href":"#contact",href:"#contact",children:S.jsx(M1,{text:"CONTACT"})})})]})]}),S.jsx("div",{className:"landing-circle1"}),S.jsx("div",{className:"landing-circle2"}),S.jsx("div",{className:"nav-fade"})]}));export{M1 as H,Me as N,re as m,j1 as s,O as x};
