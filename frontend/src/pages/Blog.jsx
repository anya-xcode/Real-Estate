import { useState, useMemo } from 'react';
import { blogPosts, tags } from '../data/blog';
import PostCard from '../components/PostCard';
import SearchBar from '../components/SearchBar';
import TagList from '../components/TagList';
import Pagination from '../components/Pagination';
import './Blog.css';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = !searchTerm || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(tag => post.tags.includes(tag));
      
      return matchesSearch && matchesTags;
    });
  }, [searchTerm, selectedTags]);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handleTagClick = (tag) => {
    if (!tag) {
      setSelectedTags([]);
    } else {
      setSelectedTags(prev => 
        prev.includes(tag) 
          ? prev.filter(t => t !== tag)
          : [...prev, tag]
      );
    }
    setCurrentPage(1);
  };

  return (
    <div className="blog">
      <div className="blog__hero">
        <div className="blog__hero-content">
          <h1 className="blog__title">Real Estate Blog</h1>
          <p className="blog__subtitle">
            Simple tips and real experiences from home buyers like us
          </p>
        </div>
      </div>

      {featuredPosts.length > 0 && (
        <section className="blog__featured">
          <div className="blog__container">
            <h2 className="blog__section-title">Featured Articles</h2>
            <div className="blog__featured-grid">
              {featuredPosts.slice(0, 2).map(post => (
                <PostCard key={post.id} post={post} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="blog__main">
        <div className="blog__container">
          <div className="blog__filters">
            <SearchBar onSearch={setSearchTerm} />
            <TagList 
              tags={tags} 
              selectedTags={selectedTags} 
              onTagClick={handleTagClick} 
            />
          </div>

          <div className="blog__results">
            <p className="blog__results-count">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </p>
            
            <div className="blog__grid">
              {currentPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>

            {currentPosts.length === 0 && (
              <div className="blog__no-results">
                <h3>No posts found</h3>
                <p>Try searching something else or come back later</p>
              </div>
            )}

            <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;