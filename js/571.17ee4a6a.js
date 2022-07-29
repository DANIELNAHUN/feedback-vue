"use strict";(self["webpackChunkfeedback_vue"]=self["webpackChunkfeedback_vue"]||[]).push([[571],{6119:function(t,e,n){n.r(e),n.d(e,{default:function(){return ee}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ChronometerCool")],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-chronometer"},[n("div",{staticClass:"container-date-picker"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.yearPicker,expression:"yearPicker"}],staticClass:"input-date",attrs:{type:"number",placeholder:"year",min:"1",max:"9999",maxlength:"4",oninput:"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength)"},domProps:{value:t.yearPicker},on:{input:function(e){e.target.composing||(t.yearPicker=e.target.value)}}}),t._v("/ "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.monthPicker,expression:"monthPicker"}],staticClass:"input-date",attrs:{type:"number",placeholder:"month",min:"1",max:"12",maxlength:"2",oninput:"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength)"},domProps:{value:t.monthPicker},on:{input:function(e){e.target.composing||(t.monthPicker=e.target.value)}}}),t._v("/ "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.dayPicker,expression:"dayPicker"}],staticClass:"input-date",attrs:{type:"number",placeholder:"day",min:"1",max:"31",maxlength:"2",oninput:"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength)"},domProps:{value:t.dayPicker},on:{input:function(e){e.target.composing||(t.dayPicker=e.target.value)}}}),t._v(" --- "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.hourPicker,expression:"hourPicker"}],staticClass:"input-date",attrs:{type:"number",placeholder:"hour",min:"1",max:"23",maxlength:"2",oninput:"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength)"},domProps:{value:t.hourPicker},on:{input:function(e){e.target.composing||(t.hourPicker=e.target.value)}}}),t._v(": "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.minPicker,expression:"minPicker"}],staticClass:"input-date",attrs:{type:"number",placeholder:"minutes",min:"1",max:"59",maxlength:"2",oninput:"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength)"},domProps:{value:t.minPicker},on:{input:function(e){e.target.composing||(t.minPicker=e.target.value)}}})]),n("div",[n("v-btn",{on:{click:t.startChronometer}},[t._v("Iniciar cronometro")])],1),n("div",{staticClass:"container-card"},[n("div",{staticClass:"card"},[n("div",{staticClass:"days"},[t._v(t._s(t.day))]),n("p",[t._v("Days")])]),n("div",{staticClass:"card"},[t.hours>=10?n("div",[t._v(t._s(t.hours))]):n("div",{staticClass:"hours"},[t._v("0"+t._s(t.hours))]),n("p",[t._v("Hours")])]),n("div",{staticClass:"card"},[t.minutes>=10?n("div",[t._v(t._s(t.minutes))]):n("div",{staticClass:"minutes"},[t._v("0"+t._s(t.minutes))]),n("p",[t._v("Minutes")])]),n("div",{staticClass:"card"},[t.seg>=10?n("div",[t._v(t._s(t.seg))]):n("div",{staticClass:"seg"},[t._v("0"+t._s(t.seg))]),n("p",[t._v("Seconds")])])])])},o=[];function u(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function s(t){return u(1,arguments),t instanceof Date||"object"===typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function c(t){u(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"===typeof t||"[object Number]"===e?new Date(t):("string"!==typeof t&&"[object String]"!==e||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function d(t){if(u(1,arguments),!s(t)&&"number"!==typeof t)return!1;var e=c(t);return!isNaN(Number(e))}var l={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},h=function(t,e,n){var a,r=l[t];return a="string"===typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},m=h;function f(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,a=t.formats[n]||t.formats[t.defaultWidth];return a}}var g={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},v={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},w={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},y={date:f({formats:g,defaultWidth:"full"}),time:f({formats:v,defaultWidth:"full"}),dateTime:f({formats:w,defaultWidth:"full"})},b=y,p={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},C=function(t,e,n,a){return p[t]},T=C;function M(t){return function(e,n){var a,r=n||{},i=r.context?String(r.context):"standalone";if("formatting"===i&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,u=r.width?String(r.width):o;a=t.formattingValues[u]||t.formattingValues[o]}else{var s=t.defaultWidth,c=r.width?String(r.width):t.defaultWidth;a=t.values[c]||t.values[s]}var d=t.argumentCallback?t.argumentCallback(e):e;return a[d]}}var P={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},x={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},k={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},D={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},U={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},S={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Y=function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},W={ordinalNumber:Y,era:M({values:P,defaultWidth:"wide"}),quarter:M({values:x,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:M({values:k,defaultWidth:"wide"}),day:M({values:D,defaultWidth:"wide"}),dayPeriod:M({values:U,defaultWidth:"wide",formattingValues:S,defaultFormattingWidth:"wide"})},N=W;function E(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],i=e.match(r);if(!i)return null;var o,u=i[0],s=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?_(s,(function(t){return t.test(u)})):O(s,(function(t){return t.test(u)}));o=t.valueCallback?t.valueCallback(c):c,o=n.valueCallback?n.valueCallback(o):o;var d=e.slice(u.length);return{value:o,rest:d}}}function O(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function _(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}function q(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.match(t.matchPattern);if(!a)return null;var r=a[0],i=e.match(t.parsePattern);if(!i)return null;var o=t.valueCallback?t.valueCallback(i[0]):i[0];o=n.valueCallback?n.valueCallback(o):o;var u=e.slice(r.length);return{value:o,rest:u}}}var L=/^(\d+)(th|st|nd|rd)?/i,H=/\d+/i,F={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},j={any:[/^b/i,/^(a|c)/i]},z={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},X={any:[/1/i,/2/i,/3/i,/4/i]},Q={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},B={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},G={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},A={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},R={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},J={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},I={ordinalNumber:q({matchPattern:L,parsePattern:H,valueCallback:function(t){return parseInt(t,10)}}),era:E({matchPatterns:F,defaultMatchWidth:"wide",parsePatterns:j,defaultParseWidth:"any"}),quarter:E({matchPatterns:z,defaultMatchWidth:"wide",parsePatterns:X,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:E({matchPatterns:Q,defaultMatchWidth:"wide",parsePatterns:B,defaultParseWidth:"any"}),day:E({matchPatterns:G,defaultMatchWidth:"wide",parsePatterns:A,defaultParseWidth:"any"}),dayPeriod:E({matchPatterns:R,defaultMatchWidth:"any",parsePatterns:J,defaultParseWidth:"any"})},V=I,$={code:"en-US",formatDistance:m,formatLong:b,formatRelative:T,localize:N,match:V,options:{weekStartsOn:0,firstWeekContainsDate:1}},Z=$;function K(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function tt(t,e){u(2,arguments);var n=c(t).getTime(),a=K(e);return new Date(n+a)}function et(t,e){u(2,arguments);var n=K(e);return tt(t,-n)}var nt=864e5;function at(t){u(1,arguments);var e=c(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var a=e.getTime(),r=n-a;return Math.floor(r/nt)+1}function rt(t){u(1,arguments);var e=1,n=c(t),a=n.getUTCDay(),r=(a<e?7:0)+a-e;return n.setUTCDate(n.getUTCDate()-r),n.setUTCHours(0,0,0,0),n}function it(t){u(1,arguments);var e=c(t),n=e.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var r=rt(a),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=rt(i);return e.getTime()>=r.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function ot(t){u(1,arguments);var e=it(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var a=rt(n);return a}var ut=6048e5;function st(t){u(1,arguments);var e=c(t),n=rt(e).getTime()-ot(e).getTime();return Math.round(n/ut)+1}function ct(t,e){u(1,arguments);var n=e||{},a=n.locale,r=a&&a.options&&a.options.weekStartsOn,i=null==r?0:K(r),o=null==n.weekStartsOn?i:K(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=c(t),d=s.getUTCDay(),l=(d<o?7:0)+d-o;return s.setUTCDate(s.getUTCDate()-l),s.setUTCHours(0,0,0,0),s}function dt(t,e){u(1,arguments);var n=c(t),a=n.getUTCFullYear(),r=e||{},i=r.locale,o=i&&i.options&&i.options.firstWeekContainsDate,s=null==o?1:K(o),d=null==r.firstWeekContainsDate?s:K(r.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(a+1,0,d),l.setUTCHours(0,0,0,0);var h=ct(l,e),m=new Date(0);m.setUTCFullYear(a,0,d),m.setUTCHours(0,0,0,0);var f=ct(m,e);return n.getTime()>=h.getTime()?a+1:n.getTime()>=f.getTime()?a:a-1}function lt(t,e){u(1,arguments);var n=e||{},a=n.locale,r=a&&a.options&&a.options.firstWeekContainsDate,i=null==r?1:K(r),o=null==n.firstWeekContainsDate?i:K(n.firstWeekContainsDate),s=dt(t,e),c=new Date(0);c.setUTCFullYear(s,0,o),c.setUTCHours(0,0,0,0);var d=ct(c,e);return d}var ht=6048e5;function mt(t,e){u(1,arguments);var n=c(t),a=ct(n,e).getTime()-lt(n,e).getTime();return Math.round(a/ht)+1}function ft(t,e){var n=t<0?"-":"",a=Math.abs(t).toString();while(a.length<e)a="0"+a;return n+a}var gt={y:function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return ft("yy"===e?a%100:a,e.length)},M:function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):ft(n+1,2)},d:function(t,e){return ft(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(t,e){return ft(t.getUTCHours()%12||12,e.length)},H:function(t,e){return ft(t.getUTCHours(),e.length)},m:function(t,e){return ft(t.getUTCMinutes(),e.length)},s:function(t,e){return ft(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,a=t.getUTCMilliseconds(),r=Math.floor(a*Math.pow(10,n-3));return ft(r,e.length)}},vt=gt,wt={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},yt={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var a=t.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return vt.y(t,e)},Y:function(t,e,n,a){var r=dt(t,a),i=r>0?r:1-r;if("YY"===e){var o=i%100;return ft(o,2)}return"Yo"===e?n.ordinalNumber(i,{unit:"year"}):ft(i,e.length)},R:function(t,e){var n=it(t);return ft(n,e.length)},u:function(t,e){var n=t.getUTCFullYear();return ft(n,e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return ft(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return ft(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return vt.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return ft(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){var r=mt(t,a);return"wo"===e?n.ordinalNumber(r,{unit:"week"}):ft(r,e.length)},I:function(t,e,n){var a=st(t);return"Io"===e?n.ordinalNumber(a,{unit:"week"}):ft(a,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):vt.d(t,e)},D:function(t,e,n){var a=at(t);return"Do"===e?n.ordinalNumber(a,{unit:"dayOfYear"}):ft(a,e.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return ft(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return ft(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return ft(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours(),r=a/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a,r=t.getUTCHours();switch(a=12===r?wt.noon:0===r?wt.midnight:r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a,r=t.getUTCHours();switch(a=r>=17?wt.evening:r>=12?wt.afternoon:r>=4?wt.morning:wt.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var a=t.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return vt.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):vt.H(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):ft(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):ft(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):vt.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):vt.s(t,e)},S:function(t,e){return vt.S(t,e)},X:function(t,e,n,a){var r=a._originalDate||t,i=r.getTimezoneOffset();if(0===i)return"Z";switch(e){case"X":return pt(i);case"XXXX":case"XX":return Ct(i);case"XXXXX":case"XXX":default:return Ct(i,":")}},x:function(t,e,n,a){var r=a._originalDate||t,i=r.getTimezoneOffset();switch(e){case"x":return pt(i);case"xxxx":case"xx":return Ct(i);case"xxxxx":case"xxx":default:return Ct(i,":")}},O:function(t,e,n,a){var r=a._originalDate||t,i=r.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+bt(i,":");case"OOOO":default:return"GMT"+Ct(i,":")}},z:function(t,e,n,a){var r=a._originalDate||t,i=r.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+bt(i,":");case"zzzz":default:return"GMT"+Ct(i,":")}},t:function(t,e,n,a){var r=a._originalDate||t,i=Math.floor(r.getTime()/1e3);return ft(i,e.length)},T:function(t,e,n,a){var r=a._originalDate||t,i=r.getTime();return ft(i,e.length)}};function bt(t,e){var n=t>0?"-":"+",a=Math.abs(t),r=Math.floor(a/60),i=a%60;if(0===i)return n+String(r);var o=e||"";return n+String(r)+o+ft(i,2)}function pt(t,e){if(t%60===0){var n=t>0?"-":"+";return n+ft(Math.abs(t)/60,2)}return Ct(t,e)}function Ct(t,e){var n=e||"",a=t>0?"-":"+",r=Math.abs(t),i=ft(Math.floor(r/60),2),o=ft(r%60,2);return a+i+n+o}var Tt=yt;function Mt(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function Pt(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}function xt(t,e){var n,a=t.match(/(P+)(p+)?/)||[],r=a[1],i=a[2];if(!i)return Mt(t,e);switch(r){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"});break}return n.replace("{{date}}",Mt(r,e)).replace("{{time}}",Pt(i,e))}var kt={p:Pt,P:xt},Dt=kt;function Ut(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var St=["D","DD"],Yt=["YY","YYYY"];function Wt(t){return-1!==St.indexOf(t)}function Nt(t){return-1!==Yt.indexOf(t)}function Et(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var Ot=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,_t=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,qt=/^'([^]*?)'?$/,Lt=/''/g,Ht=/[a-zA-Z]/;function Ft(t,e,n){u(2,arguments);var a=String(e),r=n||{},i=r.locale||Z,o=i.options&&i.options.firstWeekContainsDate,s=null==o?1:K(o),l=null==r.firstWeekContainsDate?s:K(r.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=i.options&&i.options.weekStartsOn,m=null==h?0:K(h),f=null==r.weekStartsOn?m:K(r.weekStartsOn);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var g=c(t);if(!d(g))throw new RangeError("Invalid time value");var v=Ut(g),w=et(g,v),y={firstWeekContainsDate:l,weekStartsOn:f,locale:i,_originalDate:g},b=a.match(_t).map((function(t){var e=t[0];if("p"===e||"P"===e){var n=Dt[e];return n(t,i.formatLong,y)}return t})).join("").match(Ot).map((function(n){if("''"===n)return"'";var a=n[0];if("'"===a)return jt(n);var o=Tt[a];if(o)return!r.useAdditionalWeekYearTokens&&Nt(n)&&Et(n,e,t),!r.useAdditionalDayOfYearTokens&&Wt(n)&&Et(n,e,t),o(w,n,i.localize,y);if(a.match(Ht))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return n})).join("");return b}function jt(t){return t.match(qt)[1].replace(Lt,"'")}function zt(t){u(1,arguments);var e=c(t),n=e.getFullYear(),a=e.getMonth(),r=new Date(0);return r.setFullYear(n,a+1,0),r.setHours(0,0,0,0),r.getDate()}function Xt(t,e){u(2,arguments);var n=c(t),a=K(e),r=n.getFullYear(),i=n.getDate(),o=new Date(0);o.setFullYear(r,a,15),o.setHours(0,0,0,0);var s=zt(o);return n.setMonth(a,Math.min(i,s)),n}function Qt(t,e){if(u(2,arguments),"object"!==typeof e||null===e)throw new RangeError("values parameter must be an object");var n=c(t);return isNaN(n.getTime())?new Date(NaN):(null!=e.year&&n.setFullYear(e.year),null!=e.month&&(n=Xt(n,e.month)),null!=e.date&&n.setDate(K(e.date)),null!=e.hours&&n.setHours(K(e.hours)),null!=e.minutes&&n.setMinutes(K(e.minutes)),null!=e.seconds&&n.setSeconds(K(e.seconds)),null!=e.milliseconds&&n.setMilliseconds(K(e.milliseconds)),n)}var Bt={data(){return{date:new Date,yearPicker:null,monthPicker:null,dayPicker:null,hourPicker:null,minPicker:null,day:0,hours:0,minutes:0,seg:0}},computed:{datePickerValue:{get(){return Ft(this.date,"yyyy-MM-dd")},set(t){const[e,n,a]=t.split("-");this.date=Qt(this.date,{year:e,month:n-1,date:a})}},total(){return this.hours+this.minutes}},mounted(){setInterval(this.loadSec,1e3)},methods:{startChronometer(){var t=6e4,e=60*t,n=24*e,a=new Date,r=new Date(this.yearPicker,this.monthPicker-1,this.dayPicker,this.hourPicker,this.minPicker,0),i=r-a,o=Math.floor(i/n);i-=o*n;var u=Math.floor(i/e);i-=u*e;var s=Math.floor(i/t);i-=s*t,this.day=o,this.hours=u,this.minutes=s},loadSec(){this.seg<=0&&(this.seg=60),this.seg--,this.loadMinutes(this.seg)},loadMinutes(t){0==t&&0!=this.minutes?setTimeout((()=>this.minutes--),500):0==t&&0==this.minutes&&setTimeout((()=>this.minutes=0),500),this.loadHoras(t,this.minutes)},loadHoras(t,e){0==t&&0==e&&0!==this.hours?setTimeout((()=>{this.hours--}),500):0==t&&0==e&&0==this.hours&&setTimeout((()=>{this.hours=0}),500),this.loadDays(t,e,this.hours)},loadDays(t,e,n){0==t&&0==e&&0==n&&0!==this.day?setTimeout((()=>{this.day--}),500):0==t&&0==e&&0==n&&0==this.day&&setTimeout((()=>{this.day=0}),500)}}},Gt=Bt,At=n(1001),Rt=n(3453),Jt=n.n(Rt),It=n(3208),Vt=(0,At.Z)(Gt,i,o,!1,null,null,null),$t=Vt.exports;Jt()(Vt,{VBtn:It.Z});var Zt={components:{ChronometerCool:$t},created(){console.log(this.$route)}},Kt=Zt,te=(0,At.Z)(Kt,a,r,!1,null,null,null),ee=te.exports}}]);
//# sourceMappingURL=571.17ee4a6a.js.map