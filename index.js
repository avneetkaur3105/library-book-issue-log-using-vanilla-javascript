function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}
function Display() {}
//add the details
Display.prototype.add=function(body){
    console.log("adding");
    let tablebody=document.getElementById("tablebody");
    let uistring=`
            <tr>
                <td >${body.name}</td>
                <td>${body.author}</td>
                <td >${body.type}</td>
            </tr>`;
    tablebody.innerHTML+=uistring;
}
//clear after adding
Display.prototype.clear=function(){
    let libraryform = document.getElementById("libraryform");
    libraryform.reset();
}
//validate
Display.prototype.validate=function(book){
    if(book.name.length>2||book.author.length>2){
        return true;
    }
    else{
        return false;
    }
}
//show
Display.prototype.show=function(type,displaymessage)
{
    let message=document.getElementById('message');
    message.innerHTML=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message:</strong> ${displaymessage}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`;
  setTimeout(function(){
    message.innerHTML='';
  },2000);
}

let libraryform = document.getElementById("libraryform");
document.addEventListener("submit", libraryformsubmit);
function libraryformsubmit(e) {
  let name = document.getElementById("bookname").value;
  let author = document.getElementById("author").value;
  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");
  let type;
  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }
  let book = new Book(name, author, type);
  let display=new Display();
  if(display.validate(book)){
    display.add(book);
    display.clear();
    display.show('success','You have successfully added the entry');
  }
  else{
      display.show("error","You cannot add this book");
  }
  
  e.preventDefault();
  console.log(book);
}
