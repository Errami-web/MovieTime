var moviesList = document.getElementsByClassName("moviesList")[0];


 moviesList.addEventListener('click',btn_delete);

 function btn_delete(e){
    if( e.target.classList.contains('delete')){
        const del = e.target.parentElement;
        moviesList.removeChild(del)
    }
 }

function add(){
    var text = document.getElementById("text-input").value;
    var div = document.createElement("div");
    div.className = "text";
    
    var h4 = document.createElement("h4");
    h4.innerHTML=text;
    var button = document.createElement("button");
    // button.onclick = btn_delete();
    button.type = "button";
    button.className = "btn btn-danger delete";
    button.innerHTML="delete";

    div.append(h4);
    div.append(button);

    moviesList.insertAdjacentElement("beforeend",div);

    // moviesList.append(div);

}





    // moviesList.removeChild(del);   




// <div class="text">
//     <h4>The Intern</h4>
//     <button onclick="btn_delete()" type="button" class="btn btn-danger delete">delete</button>
// </div>