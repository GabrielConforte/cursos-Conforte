
export async function getData(a) {
    const response = await fetch('https://60e3b3496c365a0017839363.mockapi.io/cursos/conforte/Cursos')
    let data = await response.json()
    if(a === undefined){
        
        return data;
        
    } else{
        data = data.filter((i) => i.categoria === a)
        return data;
    }
}


export async function getDataID(a) {

        const response = await fetch('https://60e3b3496c365a0017839363.mockapi.io/cursos/conforte/Cursos')
        const data = await response.json()
        
        const delta = data.find((i) => i.id === a.id)
        return delta;
    
}