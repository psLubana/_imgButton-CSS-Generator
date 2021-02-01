var arr = [
  "accept",
  "active",
  "add",
  "approve",
  "delete",
  "edit",
  "exportCsv",
  "exportPdf",
  "fileDownload",
  "filePlus",
  "history",
  "minus",
  "pause",
  "play",
  "report",
  "resume",
  "shutDown",
  "exportPdfRed"
];
var sizes = ["xs", "sm", "md", "lg", "xl", "xxl", "xxxl"];
arr.forEach(x => {
  var btn =
    "." +
    x +
    "-btn { background: url('../../content/images/buttons/" +
    x +
    ".png'); }";
  var btnHover =
    "." +
    x +
    "-btn:hover { background: url('../../content/images/buttons/" +
    x +
    "_hover.png'); }";
  var br = "<br/>";
  //console.log(btn)
  //console.log(btnHover)

  sizes.forEach(y => {
    var btnUI =
      '<span class="img-btn ' + y + " " + x + '-btn" title="' + x + '"></span>';
    console.log(btnUI);
  });
  console.log(br);
});
