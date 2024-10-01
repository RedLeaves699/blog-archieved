var params=getParams();
if (params.embed || params.cmd=="export") {
  document.body.className+= " embed";
}

function trim(s) {
  return s.replace(/^\s+/,'').replace(/\s+$/,'');
}

function getParams() {
  var params=location.hash;
  if (!params || params.length<2) {
    params={embed:false,re:"",highlight:true,flags:''};
  } else {
    params=params.slice(2);
    params=params.split("&").reduce(function (p,a) {
      a=a.split("=");
      p[a[0]]=a[1];
      return p;
    },{});
    params.embed=params.embed==='true';
    params.flags=params.flags || '';
    params.re=params.re?trim(decodeURIComponent(params.re)):'';
  }
  return params;
}