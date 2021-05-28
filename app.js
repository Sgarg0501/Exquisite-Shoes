  window.onload = function() {
  //cartbox
  const icon = document.querySelector(".icon");
  const closebtn = document.querySelector(".fa-close");
  const cartbox = document.querySelector(".cartbox");
    icon.addEventListener("click", function() {
    // cartbox.classlist - to access the class cartbox in index2.html
    cartbox.classList.add("active"); //add class active made in css
  });
  closebtn.addEventListener("click", function() {
    cartbox.classList.remove("active"); //remove class active to remove cartbox
  });


  //localstorage basics w3schools
  //adding data to local Storage
  const addtocart = document.getElementsByClassName("addtocart");
  let items = [];
  for (let i = 0; i < addtocart.length; i++) {
    addtocart[i].addEventListener("click", function(e) {
  
  if (typeof(Storage) !== "undefined") {
        let item = {
          id: i + 1,
          name: e.target.parentElement.children[0].children[0].textContent,
          no: 1
        };

    if (JSON.parse(localStorage.getItem("items")) === null) {
        items.push(item);
        localStorage.setItem("items",JSON.stringify(items));
        window.location.reload();
    } else {
        const localItems = JSON.parse(localStorage.getItem("items"));
        localItems.map(data => {
        if (item.id == data.id) {
    item.no = data.no + 1;
  } else {
    items.push(data);
  }
  });
  items.push(item);
  localStorage.setItem("items", JSON.stringify(items));
  window.location.reload();
}
} else{
        alert("localstorage is not working in your system");
      }
    });
  }

  //adding data to shopping cart
  const iconshop=document.querySelector(".icon p");
  let no=0;
  JSON.parse(localStorage.getItem("items")).map(data=>{
    no=no+data.no;
  });
  iconshop.innerHTML=no;


  //adding cartbox data in table
  const cartboxtable=cartbox.querySelector('table');
  let tableData='';
  tableData+='<tr><th>IDno__</th><th>Price__</th><th>No__</th><th>Total__</th><th>Cancel</th></tr>';
if(JSON.parse(localStorage.getItem("items"))===null){
  tableData+='<tr><td> colspan="5">No Items found</td></tr>'
}
else{
  JSON.parse(localStorage.getItem("items")).map(data=>{
  tableData+='<tr><th>'+data.id+'</th><th>'+data.name+'</th><th>'+data.no+'</th><th>'+(data.no*data.name)+'</th><th><a href="#" onclick=Delete(this);>Delete</a></th></tr>';
});
}
  cartboxtable.innerHTML=tableData;
}
