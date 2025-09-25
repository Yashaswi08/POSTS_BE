import { Injectable } from '@nestjs/common';
import { Post } from './post.model';

@Injectable()
export class PostsService {
  private posts: Post[] = [
    {
      id: '0',
      title: 'First Title',
      content: 'Fist item in array',
      isFav: false,
    },
    {
      id: '1',
      title: 'Second Title',
      content: 'Fist item in array',
      isFav: false,
    },
    {
      id: '2',
      title: 'Second Title',
      content: 'Fist item in array',
      isFav: false,
    },
    {
      id: '3',
      title: 'Second Title',
      content: 'Fist item in array',
      isFav: false,
    },
  ];

  getAllPosts(): Post[] {
    return this.posts;
  }

  getPostById(id: string): Post | undefined {
    return this.posts.find((post) => post.id === id);
  }

  addPost(title: string, content: string): Post {
    const newPost: Post = {
      id: Date.now().toString(),
      title,
      content,
      isFav: false,
    };
    this.posts.push(newPost);
    return newPost;
  }

  toggleFavorite(id: string): Post | undefined {
    const post = this.getPostById(id);
    if (post) {
      post.isFav = !post.isFav;
    }
    return post;
  }
}
