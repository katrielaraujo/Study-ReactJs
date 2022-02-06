export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key);

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}


export async function saveLink(key,newLink){
    let linksStored = await getLinksSave(key);

    const hasLink = linksStored.some(link => link.id === newLink.id)

    if(hasLink){
        console.log('ESSE LINK JÁ EXISTE NA SUA LISTA')
        return;
    }

    linksStored.push(newLink)
    await localStorage.setItem(key,JSON.stringify(linksStored));
    console.log('LINK SALVO COM SUCESSO')
}

export function deleteLink(link,id){

    let myLinks = link.filter(item => {
        return (item.id !== id)
    })

    localStorage.setItem('@encurtaLink',JSON.stringify(myLinks));
    console.log('LINK DELETADO COM SUCESSO!')

    return myLinks;
}