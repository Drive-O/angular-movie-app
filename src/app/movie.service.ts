import { Injectable } from '@angular/core';
import { IMovieData } from './IMovieData';

@Injectable()
export class MovieService{

  apiKey: string = '579680975c0a476a8906708b0cc45739';

  getMovie(): IMovieData[] {
    return [
          {
            "poster_path": "/45Y1G5FEgttPAwjTYic6czC9xCn.jpg",
            "adult": false,
            "overview": "In the near future, a weary Logan cares for an ailing Professor X in a hide out on the Mexican border. But Logan's attempts to hide from the world and his legacy are up-ended when a young mutant arrives, being pursued by dark forces.",
            "release_date": "2017-02-28",
            "genre_ids": [
              28,
              18,
              878
            ],
            "id": 263115,
            "original_title": "Logan",
            "original_language": "en",
            "title": "Logan",
            "backdrop_path": "/5pAGnkFYSsFJ99ZxDIYnhQbQFXs.jpg",
            "popularity": 131.985386,
            "vote_count": 1615,
            "video": false,
            "vote_average": 7.7
          },
          {
            "poster_path": "/z09QAf8WbZncbitewNk6lKYMZsh.jpg",
            "adult": false,
            "overview": "Dory is reunited with her friends Nemo and Marlin in the search for answers about her past. What can she remember? Who are her parents? And where did she learn to speak Whale?",
            "release_date": "2016-06-16",
            "genre_ids": [
              16,
              10751
            ],
            "id": 127380,
            "original_title": "Finding Dory",
            "original_language": "en",
            "title": "Finding Dory",
            "backdrop_path": "/iWRKYHTFlsrxQtfQqFOQyceL83P.jpg",
            "popularity": 95.451413,
            "vote_count": 2731,
            "video": false,
            "vote_average": 6.7
          }
        ]
    }
}
