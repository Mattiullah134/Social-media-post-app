let form = document.getElementById("form");
let input = document.getElementById("inp");
let msg = document.getElementById("error");
let post = document.getElementById("post");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("hi i'm press")
    formValidation();
})


let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Post cannot be blank"
        console.log("failure")
    }
    else {
        msg.innerHTML = "";
        acceptData();
        console.log("success")

    }
}

let val = {};

let acceptData = () => {
    val["text"] = input.value;
    console.log("data is post");
    console.log(val);
    createPost();
}
let createPost = () => {
    post.innerHTML +=
    `
        <div class="post flex">

            <p>${val.text}</p>
            <span class="icons flex ">
                <i onClick = "editPost(this)" class="fa-regular fa-pen-to-square"></i>
                <i onClick = "deletePost(this)" class="fa-solid fa-trash"></i>
            </span>
        </div>
    `
    input.value = ""
}

let deletePost = (e)=>{
    e.parentElement.parentElement.remove();
}

let editPost = (e)=>{
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();

}