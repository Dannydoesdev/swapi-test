import Link from 'next/link'
import { useEffect, useState } from 'react'

function Film({ title, releaseYear, director, uid, url, onFavourite, isCurrentFavourite, alreadyFavourited }: any) {

  const [isFavourite, setIsFavourite] = useState<boolean>(false)

  useEffect(() => {
    if (isCurrentFavourite) {
      setIsFavourite(true)
    } else {
      setIsFavourite(false)
    }

  }, [isCurrentFavourite])

  function handleClick() {
    if (isFavourite) {
      setIsFavourite(false)
    } else {
      setIsFavourite(true)
    }
  }

  return (
    <div>
      <h3>
        <Link href={`/films/${uid}`}>
          {title}
        </Link>
      </h3>
      <p>Released {releaseYear}</p>
      <p>Directed by {director}</p>
      <button onClick={() => onFavourite(uid, url) && handleClick()}>{alreadyFavourited ? 'Remove Favourite' : 'Add to Favourites'}</button>
    </div>
  )
}

export default Film