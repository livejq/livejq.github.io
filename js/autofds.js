"use strict";function _templateObject2(){var e=_taggedTemplateLiteral(["(",":[s]*|[\r\n]*)"],["(",":[\\s]*|[\\r\\n]*)"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral(["",":[^\n]*\n"],["",":[^\\n]*\\n"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t=t||e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}!function(e){function t(e){return new t.prototype.init(e)}t.extend=(t.prototype={constructor:t,version:"2020-08-17 16:52:00",owner:"livejq",repo:"friends",direction_sort:"asc",page:1,per_page:100,el:"#friend1",sort_container:["大佬们","菜鸡们"],text:[],labelDescr:{"大佬们":"<span style='color:#E67E22;font-weight:500'>这是一群大佬哦！</span>","菜鸡们":"<span style='color:red;font-weight:500'>这是一群菜鸡哦！</span>"},init:function(e){for(var n in e)this[n]=e[n];return t.setHead(this),t.getPageFriend(this),this}}).extend=function(e){for(var t in e)this[t]=e[t]},t.extend({setHead:function(){t.loadingCss()},loadingCss:function(){$("head").append("<style>.loader{width:150px;height:150px;margin:0 auto}svg{width:90%;fill:none}.load{transform-origin:50% 50%;stroke-dasharray:570;stroke-width:20px}.load.one{stroke:#554d73;animation:load 1.5s infinite}.load.two{stroke:#a496a4;animation:load 1.5s infinite;animation-delay:.1s}.load.three{stroke:#a5a7bb;animation:load 1.5s infinite;animation-delay:.2s}.point{animation:bounce 1s infinite ease-in-out}.point.one{fill:#a5a7bb;animation-delay:0s}.point.two{fill:#a496a4;animation-delay:.1s}.point.three{fill:#554d73;animation-delay:.2s}@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-20px)}}@keyframes load{0%{stroke-dashoffset:570}50%{stroke-dashoffset:530}100%{stroke-dashoffset:570;transform:rotate(360deg)}}</style>")},loading:function(e){$("".concat(e.el)).html('<div class="loader"><svg viewBox="0 0 120 120" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle class="load one" cx="60" cy="60" r="40"></circle><circle class="load two" cx="60" cy="60" r="40"></circle><circle class="load three" cx="60" cy="60" r="40"></circle><g><circle class="point one" cx="45" cy="70" r="5"></circle><circle class="point two" cx="60" cy="70" r="5"></circle><circle class="point three" cx="75" cy="70" r="5"></circle></g></svg></div>')},createContainer:function(e){for(var t in e.sort_container)$("".concat(e.el)).append("<h2 id=".concat(e.sort_container[t],">").concat(e.sort_container[t],'</h2><div class="flink-desc"><h4>').concat(e.sort_container[t],'</h4></div><div class="flink-list">')+"</div>")}}),t.extend({createFriend:function(e){var n,a=e.text;for(var r in $(".loader").hide(),a)a[r].labels&&(n=a[r].body,$("#"+a[r].labels).length?$("#".concat(a[r].labels)).next().next().append(n):$(e.el).append("<h2 id=".concat(a[r].labels,">").concat(a[r].labels,'</h2><div class="flink-desc">').concat(t.getLabelDescr(e,a[r].labels),'</div><div class="flink-list">')+n+"</div>"))},getPageFriend:function(e){t.loading(e),t.getFriends(e).then((function(){return t.createFriend(e)}))}}),t.extend({getFriends:function(e){return $.ajax({url:"https://gitee.com/api/v5/repos/".concat(e.owner,"/").concat(e.repo,"/issues?state=open&sort=created&direction=").concat(e.direction_sort,"&page=").concat(e.page,"&per_page=").concat(e.per_page),type:"get",success:function(n){if(e.text=[],n)for(var a in n){var r={};r.body=t.getBody(e,n[a].body),r.labels=t.getLabels(n[a].labels),e.text.push(r)}}})}}),t.extend({getBody:function(e,n){var a=t.getInfo(e,n,"link"),r=t.getInfo(e,n,"name"),o=t.getInfo(e,n,"avatar"),i=t.getInfo(e,n,"descr");return'<div class="flink-list-item friend-card'+parseInt(10*Math.random(),10)+'" style="'.concat(t.getCustom(e,n),'"><a href="').concat(a,'" title="').concat(r,'" target="_blank"><img class="rauto" style="animation:').concat(t.getImgCustom(e,n),'" data-lazy-src="').concat(o,'" onerror="this.onerror=null,this.src=&quot;https://www.livejq.top/img/friend_404.gif&quot;" alt="').concat(r,'" src="').concat(o,'"><span class="flink-item-name">').concat(r,'</span><span class="flink-item-desc" title="').concat(i,'">').concat(i,"</span></a></div>")},getLabels:function(e){if(e.length)return e[0].name}}),t.extend({getLabelDescr:function(e,t){var n="";return e.labelDescr[t]&&(n=e.labelDescr[t]),n},getInfo:function(e,t,n){var a=new RegExp(String.raw(_templateObject(),n)),r=new RegExp(String.raw(_templateObject2(),n),"g"),o="你写的好像不对哦！";return(t=t.match(a))&&0<t.length&&(o=t[0].replace(r,"")),o},getCustom:function(e,n){var a=["--primary-color","border-width","border-style","animation","background","--primary-rotate"],r="";for(var o in a){var i=t.getInfo(e,n,a[o]);"你写的好像不对哦！"!==i&&(r+="".concat(a[o],":").concat(i,";"))}return r},getImgCustom:function(e,n){var a=["img_animation"],r="";for(var o in a){var i=t.getInfo(e,n,a[o]);"你写的好像不对哦！"!==i&&(r+="".concat(i,";"))}return r}}),t.prototype.init.prototype=t.prototype,e.Friend=t}(window);