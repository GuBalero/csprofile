
export default async function handler(req, res) {

    if(req.method !== 'POST')
         return res.status(405).json({ message: 'Method not allowed' })

    const body = JSON.parse(req.body)
    const { idUser, idPlayer, idTeam } = body

    if(!idUser || !idPlayer || !idTeam) 
        return res.status(400).json({ message: 'Missing data' })

    const response = await fetch(`${process.env.EXTERNA_URL_API}/${idUser}/${idPlayer}/${idTeam}`)

    if(!response.ok) return res.status(400).json({ message: 'Error' })

    const infos = await response.json()
    res.status(200).json({ infos })
}