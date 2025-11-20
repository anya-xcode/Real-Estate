import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { blogPosts } from '../data/blog';
import AuthorCard from '../components/AuthorCard';
import ShareButtons from '../components/ShareButtons';
import CommentsPlaceholder from '../components/CommentsPlaceholder';
import PostCard from '../components/PostCard';
import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    const foundPost = blogPosts.find(p => p.slug === slug);
    setPost(foundPost);

    if (foundPost) {
      document.title = `${foundPost.title} | Real Estate Blog`;
      
      const related = blogPosts
        .filter(p => p.id !== foundPost.id && 
          p.tags.some(tag => foundPost.tags.includes(tag)))
        .slice(0, 3);
      setRelatedPosts(related);
    }
  }, [slug]);

  if (!post) {
    return (
      <div className="blog-post__not-found">
        <h1>Article Not Found</h1>
        <p>The article you're looking for doesn't exist.</p>
        <Link to="/blog" className="blog-post__back-link">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const currentUrl = window.location.href;

  return (
    <article className="blog-post">
      <div className="blog-post__header">
        <div className="blog-post__container">
          <Link to="/blog" className="blog-post__back">
            ← Back to Blog
          </Link>
          
          <div className="blog-post__meta">
            <time className="blog-post__date">{formatDate(post.publishedAt)}</time>
            <span className="blog-post__read-time">{post.readTime}</span>
          </div>
          
          <h1 className="blog-post__title">{post.title}</h1>
          
          <div className="blog-post__tags">
            {post.tags.map((tag, index) => (
              <span key={index} className="blog-post__tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {post.heroImage && (
        <div className="blog-post__hero">
          <img src={post.heroImage} alt={post.title} />
        </div>
      )}

      <div className="blog-post__container">
        <div className="blog-post__content">
          <div 
            className="blog-post__body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <ShareButtons 
            url={currentUrl}
            title={post.title}
            description={post.excerpt}
          />
          
          <AuthorCard author={post.author} />
          
          {relatedPosts.length > 0 && (
            <section className="blog-post__related">
              <h3>Related Articles</h3>
              <div className="blog-post__related-grid">
                {relatedPosts.map(relatedPost => (
                  <PostCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </section>
          )}
          
          <CommentsPlaceholder />
        </div>
      </div>
    </article>
  );
};

export default BlogPost;