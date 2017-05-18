import React from 'react'
import styles from  './MovieCard.css'

const MovieCard =({movieInfo,handleAddFavorite,handleRemoveFavorite,index,user,isFavorite}) => {

  const logFavorites = () => {
       if(true) {

         const movie_id  = movieInfo.id
         const user_id = 2
         const title = movieInfo.title
         const poster_path = movieInfo.poster_path
         const release_date = movieInfo.release_date
         const vote_average = movieInfo.vote_average
         const overview     = movieInfo.overview
         console.log(isFavorite)
         if(isFavorite==="not-favorite"){

           console.log("will be fav")
         fetch('/api/users/favorites/new', {
               method: "POST",
               headers: {"Content-Type": "application/json"},
               body: JSON.stringify({  movie_id, user_id, title, poster_path, release_date, vote_average, overview })
             }).then( () => { handleAddFavorite(index)})

       }else {
         console.log("will not be fav")

          fetch(`/api/users/${user_id}/favorites/${movie_id}`, {
          method: "DELETE",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({ user_id, movie_id })
          })
        .then((response) =>{ handleRemoveFavorite(index) })
        }
      }else{
           alert("You must be logged in to include a favorite")
         }
}
const buttonText = isFavorite === "not-favorite"? "favorite":"unfavorite"
    return(
      <div className = {isFavorite}>
        <img src ={`https://image.tmdb.org/t/p/original${movieInfo.poster_path}`}/>

        <button onClick={()=>{
          logFavorites()
          }}>{buttonText}</button>
      </div>
    )

}

export default MovieCard
