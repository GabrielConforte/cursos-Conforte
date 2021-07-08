
export async function getData(a) {
   console.log(a)
    const response = await fetch('https://60e3b3496c365a0017839363.mockapi.io/cursos/conforte/Cursos')
    let data = await response.json()
    if(a.item === 'home'){
        console.log(data)
        return data;
    } else{
        data = data.filter((i) => i.categoria === a.item)
        return data;
    }

}
