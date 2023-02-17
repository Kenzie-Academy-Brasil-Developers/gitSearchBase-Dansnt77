import { userByname, repositoryForName } from "./requests.js"

const btn = document.querySelector("#btn-changeUser")

btn.addEventListener("click", () =>{
    window.location.replace("/index.html")
})

export async function renderUser(){
    const informations = localStorage.getItem("@searchGit:user")
    
    const user = await userByname(informations)

    

    const divImgUser = document.querySelector(".img-user")
    let img = document.createElement("img")
    let name = document.createElement("h2")
    
    img.src = user.avatar_url
    name.innerText = user.login

    
    divImgUser.append(img, name)
    
    
    

}
renderUser()

export async function renderRepository(){
    const repositoryInformations = localStorage.getItem("@searchGit:user")

    console.log(repositoryInformations)
    
    const repositories = await repositoryForName(repositoryInformations)

    repositories.forEach(repository =>{
        const ulTag = document.querySelector("ul")

    let card = document.createElement("li")
    let repositoryName = document.createElement("h3")
    let repositoryDescription = document.createElement("p")
    let repositoryLink = document.createElement("a")

    repositoryName.innerText = repository.name
    repositoryDescription.innerText = repository.description
    repositoryLink.href = repository.html_url
    repositoryLink.innerHTML = "Repositório"

    ulTag.append(card)
    card.append(repositoryName, repositoryDescription, repositoryLink)
    })

    

}
renderRepository()