import { TestBed, inject } from '@angular/core/testing';

import { PostsHttpService } from './posts-http.service';

describe('PostsHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostsHttpService]
    });
  });

  it('should be created', inject([PostsHttpService], (service: PostsHttpService) => {
    expect(service).toBeTruthy();
  }));
});
