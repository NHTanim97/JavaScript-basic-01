function cheackcoding() {
  var txt;
  var coding = document.getElementById("code-text").value;

  switch (coding) {

    case "java":
       txt="javascript is very deficult";
       break;

    case "html":
      txt="hypertext markup language";
      break;

      case "css":
        txt="stylesheet";
        break;

    default:
      txt="unknown..";

  }
  document.getElementById("show").innerHTML = txt;
}
