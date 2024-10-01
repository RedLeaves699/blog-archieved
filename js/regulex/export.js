if (params.embed || params.cmd==="export") {
    var embedFooterLink = document.getElementById("embedFooterLink");
    embedFooterLink.href = "https://jex.im/regulex/" + location.hash.replace(/\bembed=true\b/ig,"").replace(/\bcmd=export\b/ig,'');
  }