import React from 'react';
import MovieList from './MovieList';
/* import SearchBar from './SearchBar'; */

class App extends React.Component{
    state={
        movies:[
            {
                "name": "The Queen's Gambit",
                "rating": "8.7",
                "overview": "Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But child stardom comes at.",
                "imageURL": "https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_UX182_CR0,0,182,268_AL_.jpg",
                "id": 1
              },
              {
                "name": "Tenet",
                "rating": "7.7",
                "imageURL": "https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_UX182_CR0,0,182,268_AL_.jpg",
                "overview": "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage.",
                "id": 2
              },
              {
                "name": "The Mandalorian",
                "rating": "8.7",
                "overview": "Pedro Pascal, perhaps best known for his performances in Game of Thrones and Narcos, stars as the title character in The Mandalorian. What other roles has.",
                "imageURL": "https://m.media-amazon.com/images/M/MV5BZDhlMzY0ZGItZTcyNS00ZTAxLWIyMmYtZGQ2ODg5OWZiYmJkXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_UX182_CR0,0,182,268_AL_.jpg",
                "id": 3
              },
              {
                "name": "Joker",
                "rating": "8.5",
                "overview": "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and.",
                "imageURL": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
                "id": 4
              },
              {
                "name": "Parazit",
                "rating": "8.6",
                "imageURL": "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
                "overview": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
                "id": 5
              },
              {
                "name": "Dövüş Kulübü",
                "rating": "8.8",
                "imageURL": "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
                "overview": "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
                "id": 6
              }
        ],
        searchQuery:""
    }

    deleteMovie=(movie)=>{
      const newMovieList=this.state.movies.filter(
        m=>m.id!==movie.id
      );

      this.setState(state=>({
        movies:newMovieList
      }))//DURUM GÜNCELLENİYOR


    }

    searchMovie=()=>{

    }

    //CLASS BASED COMPONENT OLDUĞU İÇİN THİS KULLANIYORUZ
    render(){
        return(
            <div className="container mt-4">
                <div className="row mt-4">
                    <div className="col-lg-12 mt-4">
                     {/*  <SearchBar searchMovieProp={this.searchMovie}/> */}
                    </div>
                </div>
                <MovieList movies={this.state.movies} deleteMovieProp={this.deleteMovie}/>
            </div>
        )
        
    }

}

export default App;