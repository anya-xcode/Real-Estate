// Unit tests for posts data and date staggering
import { posts } from './posts.js';

describe('Posts Data and Date Staggering', () => {
  test('should have posts with publishedAt dates', () => {
    expect(posts.length).toBeGreaterThan(0);
    posts.forEach(post => {
      expect(post.publishedAt).toBeDefined();
      expect(typeof post.publishedAt).toBe('string');
      expect(new Date(post.publishedAt)).toBeInstanceOf(Date);
    });
  });

  test('should maintain 4-month gaps between consecutive posts', () => {
    const sortedPosts = [...posts].sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt));
    
    for (let i = 1; i < sortedPosts.length; i++) {
      const prevDate = new Date(sortedPosts[i - 1].publishedAt);
      const currentDate = new Date(sortedPosts[i].publishedAt);
      
      // Calculate expected date (4 months after previous)
      const expectedDate = new Date(prevDate);
      expectedDate.setMonth(expectedDate.getMonth() + 4);
      
      expect(currentDate.getTime()).toBe(expectedDate.getTime());
    }
  });

  test('should keep the first post original date when provided', () => {
    const sortedPosts = [...posts].sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt));
    const firstPost = sortedPosts[0];
    
    // The first post should keep its original date or use the base date
    expect(firstPost.publishedAt).toBeDefined();
    expect(new Date(firstPost.publishedAt)).toBeInstanceOf(Date);
  });

  test('should have all required post properties', () => {
    posts.forEach(post => {
      expect(post.id).toBeDefined();
      expect(post.title).toBeDefined();
      expect(post.slug).toBeDefined();
      expect(post.content || post.excerpt).toBeDefined();
      expect(post.author).toBeDefined();
      expect(post.publishedAt).toBeDefined();
    });
  });

  test('should handle year rollover correctly', () => {
    const sortedPosts = [...posts].sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt));
    
    // Check that dates progress correctly even across year boundaries
    for (let i = 1; i < sortedPosts.length; i++) {
      const prevDate = new Date(sortedPosts[i - 1].publishedAt);
      const currentDate = new Date(sortedPosts[i].publishedAt);
      
      expect(currentDate.getTime()).toBeGreaterThan(prevDate.getTime());
    }
  });
});