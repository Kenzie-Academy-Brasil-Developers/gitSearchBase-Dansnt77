
import { repositoryForName, userByname } from "./requests.js";


const token = "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"

async function consomeGitHubAPI(){
    const userGitHub = await fetch(`https://api.github.com/users`,
    {
        method:"GET",
        headers: 
        {
            Accept: "application/vnd.github+json",
            Authorization: "Bearer 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"

        }
    }
    )

    .then(
        response => response.json()
    )
    .catch(
        error => console.log(error)
    )
    return userGitHub
}
consomeGitHubAPI()


function searchUser(){
    const search = document.querySelector("#search");
    const button = document.querySelector("#btn-search");


    button.addEventListener("click", async(event) =>{
        event.preventDefault()
        
        
        let user = await userByname(search.value.toLowerCase())
        let repository = await repositoryForName(search.value.toLowerCase())

        if(user.message){
            window.location.replace("./src/pages/error.html")

        }else if(repository.message){
            window.location.replace("./src/pages/error.html")
        }
        else{
            window.location.replace("./src/pages/profile.html")
            setLocalStorage()
        }
        
        
    })
}
searchUser()

function setLocalStorage(){
    const input = document.querySelector("#search")
    localStorage.setItem("@searchGit:user", input.value)
}

