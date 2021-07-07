
export async function getData() {
    const response = await fetch('https://60e3b3496c365a0017839363.mockapi.io/cursos/conforte/Cursos')
    const data = await response.json()
    return data;
}
