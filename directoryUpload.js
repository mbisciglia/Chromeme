let picker = document.getElementById("filepicker");
let imgBox = document.getElementById("imgHolder");



picker.addEventListener("change", event => {
  let files = event.target.files;
  let list = document.getElementById("filelist");
  list.innerHTML = "You selected these files:";

  for (let i = 0; i < files.length; i++) {
    let file = files[i];
    list.innerHTML += "<br>" + file.webkitRelativePath;
    var img = document.createElement("img");
    img.style.width = "150px";
    img.style.height = "100px";
    img.src = URL.createObjectURL(files[i]);
    //imgBox.contentEditable = true;

    imgBox.appendChild(img);

    img.addEventListener("click", function() {

      //alert(img.src);
      
      //document.execCommand("copy");
      alert("Image has been coppied to clipboard");
      //copyTextToClipboard(URL.createObjectURL(files[i]));
    });
  }
});

function myFunction() {
  alert("ree");
}

function copyTextToClipboard(text) {
  navigator.clipboard.writeText(text).then(
    function() {
      alert("Async: Copying to clipboard was successful!");
    },
    function(err) {
      alert("Async: Could not copy text: ", err);
    }
  );
}
