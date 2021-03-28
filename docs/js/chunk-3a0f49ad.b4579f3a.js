(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a0f49ad"],{"4e76":function(t,e,n){},"60b5":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("example-wrapper",{attrs:{title:"Polylines and Polygons"},scopedSlots:t._u([{key:"description",fn:function(){return[n("p",[t._v("We can also add polylines.")])]},proxy:!0},{key:"map",fn:function(){return[n("gmaps-map",{attrs:{options:t.mapOptions}},[t.polygon?n("gmaps-polygon",{attrs:{editable:t.editable,path:t.items,"fill-color":"red","stroke-color":"dodgerblue","stroke-weight":"5"},on:{pathChanged:function(e){t.items=e}}}):n("gmaps-polyline",{attrs:{editable:t.editable,icons:t.icons,path:t.items,"stroke-color":"dodgerblue","stroke-weight":"5"},on:{pathChanged:function(e){t.items=e}}})],1)]},proxy:!0},{key:"code",fn:function(){return[n("div",[n("pre",[t._v('<gmaps-map>\n  <gmaps-polyline\n    :editable="editable"\n    :icons="icons"\n    :path="items"\n    stroke-color="dodgerblue"\n    stroke-weight="5"\n    @pathChanged="items = $event"\n  />\n</gmaps-map>\n\n...\n\nicon = {\n  path: \'M -2,0 0,-2 2,0 0,2 z\',\n  strokeColor: \'#F00\',\n  fillColor: \'#F00\',\n  fillOpacity: 1\n}\n\nitems = [\n  { lat: -32, lng: 125 },\n  { lat: -34, lng: 128 },\n  ...,\n  { lat: -28, lng: 126 },\n  { lat: -30, lng: 130 },\n]\n\nicons: [\n  { icon, offset: \'0%\' },\n  { icon, offset: \'100%\' }\n]\n        ')])])]},proxy:!0}])},[n("div",{staticClass:"instructions"},[n("p",{staticClass:"instructions-title"},[t._v(" Polygons are basically the same as polylines but are able to be filled in. ")]),n("button",{staticClass:"instructions-action",on:{click:function(e){t.polygon=!t.polygon}}},[t._v(" Switch to "+t._s(t.polygon?"Polyline":"Polygon")+" ")]),n("button",{staticClass:"instructions-action",on:{click:t.generatePoints}},[t._v(" Regenerate points ")]),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.editable,expression:"editable"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.editable)?t._i(t.editable,null)>-1:t.editable},on:{change:function(e){var n=t.editable,o=e.target,a=!!o.checked;if(Array.isArray(n)){var i=null,l=t._i(n,i);o.checked?l<0&&(t.editable=n.concat([i])):l>-1&&(t.editable=n.slice(0,l).concat(n.slice(l+1)))}else t.editable=a}}}),t._v(" Editable")])])])},a=[],i=n("e19f"),l=n("4d85"),s=n("f99b"),r={path:"M -2,0 0,-2 2,0 0,2 z",strokeColor:"#F00",fillColor:"#F00",fillOpacity:1},c={name:"ExamplePolyline",components:{ExampleWrapper:i["a"],gmapsMap:l["h"],gmapsPolyline:l["k"],gmapsPolygon:l["j"]},data:function(){return{mapOptions:s["a"],polygon:!1,editable:!1,items:[],icons:[{icon:r,offset:"0%"},{icon:r,offset:"100%"}]}},created:function(){this.generatePoints()},methods:{generatePoints:function(){for(var t=[],e=0;e<5;e++)t.push({lat:15*Math.random()-32,lng:120+25*Math.random()});this.items=t}}},p=c,d=n("2877"),u=Object(d["a"])(p,o,a,!1,null,null,null);e["default"]=u.exports},b83a:function(t,e,n){"use strict";n("4e76")},e19f:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[t.title?n("h2",{staticClass:"title"},[t._v(" "+t._s(t.title)+" ")]):t._e(),n("div",{staticClass:"description"},[t._t("description")],2),n("div",{staticClass:"sides"},[n("div",{staticClass:"side",staticStyle:{overflow:"hidden"}},[t._t("map")],2),n("div",{staticClass:"side"},[n("div",{staticClass:"code"},[n("h4",[t._v("Code:")]),t._t("code")],2)])]),t._t("default")],2)},a=[],i={name:"Wrapper",props:{title:{type:String,default:null}}},l=i,s=(n("b83a"),n("2877")),r=Object(s["a"])(l,o,a,!1,null,"62ebedd4",null);e["a"]=r.exports},f99b:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o={center:{lat:-27,lng:133},zoom:4,fullscreenControl:!1,mapTypeControl:!1,rotateControl:!1,scaleControl:!1,streetViewControl:!1,zoomControl:!1}}}]);
//# sourceMappingURL=chunk-3a0f49ad.b4579f3a.js.map