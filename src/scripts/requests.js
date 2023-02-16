export async function userByname(name){
    const user = await fetch(`https://api.github.com/users/${name}`,{
    })
    .then(res => res.json())

    return user
}

export async function repositoryForName(name){
    const user = await fetch(`https://api.github.com/users/${name}/repos`,{
    })
    .then(res => res.json())
    return user
}
