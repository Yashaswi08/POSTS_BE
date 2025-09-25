import { Controller, Get, Post as HttpPost, Param, Body, Patch } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostModel } from './post.model';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getAllPosts(): PostModel[] {
    return this.postsService.getAllPosts();
  }

  @Get(':id')
  getPost(@Param('id') id: string): PostModel | undefined {
    return this.postsService.getPostById(id);
  }

  @HttpPost()
  addPost(
    @Body('title') title: string,
    @Body('content') content: string,
  ): PostModel {
    return this.postsService.addPost(title, content);
  }

  @Patch(':id/fav')
  toggleFavorite(@Param('id') id: string): PostModel | undefined {
    return this.postsService.toggleFavorite(id);
  }
}
