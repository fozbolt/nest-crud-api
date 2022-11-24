import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postsRepository: Repository<Post>,
  ) {}

  create(createPostDto: CreatePostDto) {
    const newPost = this.postsRepository.create(createPostDto);

    return this.postsRepository.save(newPost); //sejvamo instancu post entity klase u db
  }

  findAll() {
    return this.postsRepository.find();
  }

  findOne(id: number) {
    // return this.postsRepository.findOne(id); // u typeorm@0.3 zamijenjen: https://stackoverflow.com/questions/71548592/nest-js-typeorm-cannot-use-findone-properly
    return this.postsRepository.findOneBy({ id });
  }

  //   async findOne(id: number): Promise<Post> {
  //     const user = await this.postsRepository.findOne({
  //       where: { id },
  //     });
  //     return user;
  //   }

  async update(id: number, updatePostDto: UpdatePostDto) {
    //prvo query pa onda update s mutacijom
    const post = await this.findOne(id);

    post.title = updatePostDto.title;
    return this.postsRepository.save(post);
  }

  async remove(id: number) {
    return this.postsRepository.delete(id);

    //ili ako zelimo da vracen bude obrisan objekt a ne podaci o brisanju opet radimo query prije deletea:
    // const post = await this.findOne(id);

    // return this.postsRepository.remove(post);
  }
}
