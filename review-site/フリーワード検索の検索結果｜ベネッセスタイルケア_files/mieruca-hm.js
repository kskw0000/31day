var MierucaHM=function(){"use strict";var e,t={local_url:window.location.href,referrer_url:document.referrer,sWs:("https:"===document.location.protocol?"wss":"ws")+"://ntjp.mieru-ca.com/hm",HM:{},site_id:window.__fid[0][0],temp_scroll_pos:0,window_width:0,idl:null,iwc:0,time_out:!1,document_height:0,document_width:0,chkPrevEvent:null,temp_x_pos:0,temp_y_pos:0,read_check:"",scroll_read_top:0,window_height:0,href:"",text:"",ipa:0,device:(e=navigator.userAgent||navigator.vendor||window.opera,/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))?"m":/android|ipad|playbook|silk/i.test(e)?"t":"d")},o=null,i=MierucaHM.prototype={initWindowElement:function(){var e=Math.floor(document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset||0);t.document_height=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),t.document_width=Math.max(document.body.scrollLeft,document.body.offsetWidth,document.documentElement.clientWidth,document.documentElement.scrollWidth,document.documentElement.offsetWidth),t.scroll_read_top=e,t.window_width=Math.floor(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth),t.window_height=Math.floor(window.innerHeight+e>t.document_height?t.document_height:window.innerHeight)},sendPageView:function(){if("WebSocket"in window)o=new WebSocket(t.sWs);else{if(!("MozWebSocket"in window))return;o=new MozWebSocket(t.sWs)}i.initWindowElement(),o.onopen=function(){var e;(e=new Object).type="p",e.sId=t.site_id,e.url=t.local_url,e.refUrl=t.referrer_url,e.d=t.device,e.sP=t.window_height,e.dH=t.document_height,e.wW=t.window_width,e.wH=t.window_height,e.ipa="ipa",e.ua=navigator.userAgent||navigator.vendor||window.opera,o.sendMessage(JSON.stringify(e))},o.onclose=function(){t.iwc=1},o.sendMessage=function(e){""!==e&&0===t.iwc&&o.readyState===o.OPEN&&o.send(e)},o.onmessage=function(e){"IS_ALLOW_LOAD_POPUP"===e.data&&i.popupHandle()};for(var e=document.querySelectorAll("label,a,input,button,textarea,img,iframe,video"),n=0;n<e.length;n+=1)i.setEventClickListener(e[n]);window.onscroll=function(){t.time_out||(i.scrollHandle(),i.readHandle(),i.resetTimeOut())},i.resetTimeOut()},readHandle:function(){clearTimeout(t.read_check),t.read_check=setTimeout((function(){if(i.initWindowElement(),0!==t.scroll_read_top){var e=new Object;e.type="r",e.rP=Math.floor(window.innerHeight+t.scroll_read_top)>=t.document_height?Math.floor(t.document_height-window.innerHeight):Math.floor(t.scroll_read_top),e.wW=Math.floor(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth),e.dH=t.document_height,e.wH=t.window_height,e.d=t.device,o.sendMessage(JSON.stringify(e))}}),4e3)},scrollHandle:function(){clearTimeout(t.sChk),t.sChk=setTimeout((function(){i.initWindowElement();var e=Math.floor(document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset||0)+t.window_height;if(e>t.temp_scroll_pos){t.temp_scroll_pos=e;var n=new Object;n.type="s",n.sP=e>=t.document_height?t.document_height:e,n.dH=t.document_height,n.wW=t.window_width,n.wH=t.window_height,n.d=t.device,o.sendMessage(JSON.stringify(n))}}),300)},resetTimeOut:function(){null!==t.idl&&clearTimeout(t.idl),t.idl=setTimeout((function(){t.time_out=!0,t.idl=null}),6e5)},setEventClickListener:function(e){e.addEventListener("click",(function(e){if(i.initWindowElement(),!t.timeOut){var n=void 0!==(e=e||window.event).pageX?Math.floor(e.pageX):0,d=void 0!==e.pageY?Math.floor(e.pageY):0;if(t.tempXp===n&&t.tempYp===d){if("A"!==this.nodeName)return;clearTimeout(t.chkPrevEvent)}t.tempXp=n,t.tempYp=d;var c=new Object;if("IMG"===this.nodeName)c.txt=void 0===this.alt?"":this.alt,c.href=void 0===this.src?"":this.src;else{c.txt=void 0===this.innerText?"":this.innerText,c.href=void 0===this.href?"":this.href;var a=this.getElementsByTagName("img");""===c.txt&&a.length&&(c.txt=void 0===a[0].alt?"":a[0].alt)}c.type="c",c.xP=n,c.yP=d,c.dW=t.document_width,c.dH=t.document_height,c.wW=t.window_width,c.d=t.device,t.chkPrevEvent=setTimeout((function(){o.sendMessage(JSON.stringify(c)),t.chkPrevEvent=null}),"A"!==this.nodeName?300:1)}}))},popupHandle:function(){let e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=document.location.protocol+"//hpjp.mieru-ca.com/embed?service=heatmap-popup&tokenId="+window.__fid[0][0]+"&protocol="+window.location.protocol+"&hostname="+window.location.hostname+"&pathname="+encodeURIComponent(window.location.pathname)+"&search="+encodeURIComponent(window.location.search)+"&hash="+encodeURIComponent(window.location.hash)+"&dv="+t.device;let o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(e,o)}};this.init=function(){i.sendPageView()}};!function(){"use strict";window.__mieruca_heatmap=new MierucaHM,window.__mieruca_heatmap.init()}();
