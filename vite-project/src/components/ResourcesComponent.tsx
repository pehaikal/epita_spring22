import React, { useEffect, useState } from 'react'

type Album = {
  userId: number,
  id: number,
  title: string
}

const ResourcesComponent = () => {
  const [isLoading, setLoading] = useState(true)
  const [albums, setAlbums] = useState<Album[]>([])

  useEffect(() =>{
    const getData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums')
      const responseJson: Album[] = await response.json()
      setAlbums(responseJson)
      setLoading(false)
    }

    getData()
  }, [])

  return(<>
      {isLoading && <div>please wait, data is loading...</div>}

      {!isLoading && <div>
        {albums.map((album:Album, index:number) => <div key={`albums-${index}`}>
          {album.title}
          </div>)}
      </div>}
    </>)
}

export default ResourcesComponent