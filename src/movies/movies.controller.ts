import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Body,
  // Query,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
    // return 'This will return all movies';
  }

  //   @Get('search')
  //   search(@Query('year') searchingYear: string) {
  //     return `We are searching for a movie with the made after: ${searchingYear}`;
  //   }

  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    return this.moviesService.getOne(movieId);
    // return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
    // return 'This will create a movie';
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
    // return `This will delete a movie with the id: ${movieId}`;
  }

  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(movieId, updateData);
    // return {
    //   updateMovie: movieId,
    //   ...updateData,
    // };
    // return `This will patch a movie with the id: ${movieId}`;
  }
}
