import React, { useState } from 'react';
import './Admin.css';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [properties, setProperties] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [filter, setFilter] = useState('all'); // all, pending, approved, denied
  const [activeTab, setActiveTab] = useState('properties'); // properties, reviews
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!password.trim()) {
      setError('Please enter admin password');
      return;
    }

    // Store the password in sessionStorage for API calls
    sessionStorage.setItem('adminPassword', password);
    
    // Try to fetch properties to verify password
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/admin/properties`, {
        headers: {
          'x-admin-password': password
        }
      });

      if (response.ok) {
        const data = await response.json();
        setProperties(data.properties);
        setIsAuthenticated(true);
        // Also fetch reviews
        fetchReviews(password);
      } else {
        const data = await response.json();
        setError(data.message || 'Invalid admin password');
        sessionStorage.removeItem('adminPassword');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Failed to connect to server');
      sessionStorage.removeItem('adminPassword');
    } finally {
      setLoading(false);
    }
  };

  const fetchProperties = async () => {
    const adminPassword = sessionStorage.getItem('adminPassword');
    if (!adminPassword) return;

    try {
      setLoading(true);
      setError('');
      const response = await fetch(`${API_BASE_URL}/api/admin/properties`, {
        headers: {
          'x-admin-password': adminPassword
        }
      });

      if (response.ok) {
        const data = await response.json();
        setProperties(data.properties);
      } else {
        setError('Failed to fetch properties');
      }
    } catch (err) {
      console.error('Fetch properties error:', err);
      setError('Failed to connect to server');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (propertyId, status) => {
    const adminPassword = sessionStorage.getItem('adminPassword');
    if (!adminPassword) return;

    try {
      setLoading(true);
      setError('');
      setSuccessMessage('');
      
      const response = await fetch(`${API_BASE_URL}/api/admin/properties/${propertyId}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': adminPassword
        },
        body: JSON.stringify({ status })
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage(data.message);
        await fetchProperties();
        
        // Clear success message after 3 seconds
        setTimeout(() => setSuccessMessage(''), 3000);
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to update property status');
      }
    } catch (err) {
      console.error('Status change error:', err);
      setError('Failed to connect to server');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (propertyId) => {
    if (!window.confirm('Are you sure you want to delete this property? This action cannot be undone.')) {
      return;
    }

    const adminPassword = sessionStorage.getItem('adminPassword');
    if (!adminPassword) return;

    try {
      setLoading(true);
      setError('');
      setSuccessMessage('');
      
      const response = await fetch(`${API_BASE_URL}/api/admin/properties/${propertyId}`, {
        method: 'DELETE',
        headers: {
          'x-admin-password': adminPassword
        }
      });

      if (response.ok) {
        setSuccessMessage('Property deleted successfully');
        await fetchProperties();
        
        // Clear success message after 3 seconds
        setTimeout(() => setSuccessMessage(''), 3000);
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to delete property');
      }
    } catch (err) {
      console.error('Delete error:', err);
      setError('Failed to connect to server');
    } finally {
      setLoading(false);
    }
  };

  const fetchReviews = async (adminPassword) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/reviews/all`, {
        headers: {
          'x-admin-password': adminPassword || sessionStorage.getItem('adminPassword')
        }
      });

      if (response.ok) {
        const data = await response.json();
        setReviews(data.reviews);
      }
    } catch (err) {
      console.error('Error fetching reviews:', err);
    }
  };

  const handleApproveReview = async (reviewId) => {
    const adminPassword = sessionStorage.getItem('adminPassword');
    if (!adminPassword) return;

    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/reviews/${reviewId}/approve`, {
        method: 'PATCH',
        headers: {
          'x-admin-password': adminPassword
        }
      });

      if (response.ok) {
        setSuccessMessage('Review approved successfully');
        fetchReviews(adminPassword);
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to approve review');
      }
    } catch (err) {
      console.error('Approve error:', err);
      setError('Failed to connect to server');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteReview = async (reviewId) => {
    if (!window.confirm('Are you sure you want to delete this review?')) return;

    const adminPassword = sessionStorage.getItem('adminPassword');
    if (!adminPassword) return;

    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/reviews/${reviewId}`, {
        method: 'DELETE',
        headers: {
          'x-admin-password': adminPassword
        }
      });

      if (response.ok) {
        setSuccessMessage('Review deleted successfully');
        fetchReviews(adminPassword);
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to delete review');
      }
    } catch (err) {
      console.error('Delete error:', err);
      setError('Failed to connect to server');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminPassword');
    setIsAuthenticated(false);
    setPassword('');
    setProperties([]);
    setReviews([]);
    setShowChangePassword(false);
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setError('New passwords do not match');
      return;
    }

    if (passwordForm.newPassword.length < 6) {
      setError('New password must be at least 6 characters long');
      return;
    }

    const adminPassword = sessionStorage.getItem('adminPassword');
    if (!adminPassword) return;

    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/admin/change-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': adminPassword
        },
        body: JSON.stringify({
          currentPassword: passwordForm.currentPassword,
          newPassword: passwordForm.newPassword
        })
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage(data.message);
        
        // Update stored password
        sessionStorage.setItem('adminPassword', passwordForm.newPassword);
        
        // Reset form and close modal
        setPasswordForm({
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        });
        setShowChangePassword(false);
        
        setTimeout(() => setSuccessMessage(''), 3000);
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to change password');
      }
    } catch (err) {
      console.error('Change password error:', err);
      setError('Failed to connect to server');
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price) => {
    if (!price) return 'N/A';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(Number(price));
  };

  const getFilteredProperties = () => {
    if (filter === 'all') return properties;
    return properties.filter(prop => prop.verificationStatus === filter);
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'approved':
        return 'status-badge approved';
      case 'denied':
        return 'status-badge denied';
      case 'pending':
        return 'status-badge pending';
      default:
        return 'status-badge';
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-login-container">
        <div className="admin-login-card">
          <h1>Admin Login</h1>
          <p className="admin-login-subtitle">Enter admin password to access property management</p>
          
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="password"
                placeholder="Admin Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="admin-input"
                disabled={loading}
              />
            </div>
            
            {error && <div className="error-message">{error}</div>}
            
            <button 
              type="submit" 
              className="admin-login-btn"
              disabled={loading}
            >
              {loading ? 'Authenticating...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const filteredProperties = getFilteredProperties();
  const stats = {
    total: properties.length,
    pending: properties.filter(p => p.verificationStatus === 'pending').length,
    approved: properties.filter(p => p.verificationStatus === 'approved').length,
    denied: properties.filter(p => p.verificationStatus === 'denied').length
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Admin Panel</h1>
        <div className="admin-header-actions">
          <button onClick={() => setShowChangePassword(true)} className="change-password-btn">
            Change Password
          </button>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </div>

      {error && <div className="error-message">{error}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}

      {/* Tab Navigation */}
      <div className="admin-tabs">
        <button 
          className={activeTab === 'properties' ? 'active' : ''} 
          onClick={() => setActiveTab('properties')}
        >
          Property Management
        </button>
        <button 
          className={activeTab === 'reviews' ? 'active' : ''} 
          onClick={() => setActiveTab('reviews')}
        >
          Reviews Management
        </button>
      </div>

      {/* Change Password Modal */}
      {showChangePassword && (
        <div className="modal-overlay" onClick={() => setShowChangePassword(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Change Admin Password</h2>
              <button 
                className="modal-close" 
                onClick={() => setShowChangePassword(false)}
              >
                ×
              </button>
            </div>
            <form onSubmit={handleChangePassword}>
              <div className="form-group">
                <label>Current Password</label>
                <input
                  type="password"
                  value={passwordForm.currentPassword}
                  onChange={(e) => setPasswordForm({...passwordForm, currentPassword: e.target.value})}
                  required
                  className="admin-input"
                />
              </div>
              <div className="form-group">
                <label>New Password</label>
                <input
                  type="password"
                  value={passwordForm.newPassword}
                  onChange={(e) => setPasswordForm({...passwordForm, newPassword: e.target.value})}
                  required
                  minLength="6"
                  className="admin-input"
                />
              </div>
              <div className="form-group">
                <label>Confirm New Password</label>
                <input
                  type="password"
                  value={passwordForm.confirmPassword}
                  onChange={(e) => setPasswordForm({...passwordForm, confirmPassword: e.target.value})}
                  required
                  minLength="6"
                  className="admin-input"
                />
              </div>
              <div className="modal-actions">
                <button 
                  type="button" 
                  onClick={() => setShowChangePassword(false)}
                  className="cancel-btn"
                  disabled={loading}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={loading}
                >
                  {loading ? 'Changing...' : 'Change Password'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {activeTab === 'properties' && (
        <>
          <div className="admin-stats">
            <div className="stat-card">
              <h3>{stats.total}</h3>
              <p>Total Properties</p>
            </div>
            <div className="stat-card pending">
              <h3>{stats.pending}</h3>
              <p>Pending</p>
            </div>
            <div className="stat-card approved">
              <h3>{stats.approved}</h3>
              <p>Approved</p>
            </div>
            <div className="stat-card denied">
              <h3>{stats.denied}</h3>
              <p>Denied</p>
            </div>
          </div>

          <div className="filter-tabs">
        <button 
          className={filter === 'all' ? 'active' : ''} 
          onClick={() => setFilter('all')}
        >
          All ({stats.total})
        </button>
        <button 
          className={filter === 'pending' ? 'active' : ''} 
          onClick={() => setFilter('pending')}
        >
          Pending ({stats.pending})
        </button>
        <button 
          className={filter === 'approved' ? 'active' : ''} 
          onClick={() => setFilter('approved')}
        >
          Approved ({stats.approved})
        </button>
        <button 
          className={filter === 'denied' ? 'active' : ''} 
          onClick={() => setFilter('denied')}
        >
          Denied ({stats.denied})
        </button>
      </div>

      {loading ? (
        <div className="loading-overlay">
          <div className="spinner-container">
            <div className="spinner-circle"></div>
            <div className="spinner-circle"></div>
            <div className="spinner-circle"></div>
          </div>
          <p className="loading-text">Loading...</p>
        </div>
      ) : (
        <div className="properties-table">
          {filteredProperties.length === 0 ? (
            <div className="no-properties">No properties found</div>
          ) : (
            <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Location</th>
                <th>Owner</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProperties.map((property) => (
                <tr key={property.id}>
                  <td>
                    <img 
                      src={property.images?.[0]?.url || 'https://via.placeholder.com/100'} 
                      alt={property.title}
                      className="property-thumbnail"
                    />
                  </td>
                  <td>{property.title || 'Untitled'}</td>
                  <td>{formatPrice(property.price)}</td>
                  <td>
                    {property.address 
                      ? `${property.address.city}, ${property.address.state}`
                      : 'N/A'
                    }
                  </td>
                  <td>{property.owner?.username || property.owner?.email || 'N/A'}</td>
                  <td>
                    <span className={getStatusBadgeClass(property.verificationStatus)}>
                      {property.verificationStatus}
                    </span>
                  </td>
                  <td className="actions-cell">
                    {property.verificationStatus !== 'approved' && (
                      <button
                        onClick={() => handleStatusChange(property.id, 'approved')}
                        className="action-btn approve-btn"
                        disabled={loading}
                      >
                        Approve
                      </button>
                    )}
                    {property.verificationStatus !== 'denied' && (
                      <button
                        onClick={() => handleStatusChange(property.id, 'denied')}
                        className="action-btn deny-btn"
                        disabled={loading}
                      >
                        Deny
                      </button>
                    )}
                    {property.verificationStatus !== 'pending' && (
                      <button
                        onClick={() => handleStatusChange(property.id, 'pending')}
                        className="action-btn pending-btn"
                        disabled={loading}
                      >
                        Pending
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(property.id)}
                      className="action-btn delete-btn"
                      disabled={loading}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      )}
        </>
      )}

      {activeTab === 'reviews' && (
        <>
          <div className="admin-stats">
            <div className="stat-card">
              <h3>{reviews.length}</h3>
              <p>Total Reviews</p>
            </div>
            <div className="stat-card approved">
              <h3>{reviews.filter(r => r.isApproved).length}</h3>
              <p>Approved</p>
            </div>
            <div className="stat-card pending">
              <h3>{reviews.filter(r => !r.isApproved).length}</h3>
              <p>Pending</p>
            </div>
          </div>

          {loading ? (
            <div className="loading-overlay">
              <div className="spinner-container">
                <div className="spinner-circle"></div>
                <div className="spinner-circle"></div>
                <div className="spinner-circle"></div>
              </div>
              <p className="loading-text">Loading...</p>
            </div>
          ) : (
            <div className="reviews-table">
              {reviews.length === 0 ? (
                <div className="no-properties">No reviews found</div>
              ) : (
                <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Rating</th>
                    <th>Review</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {reviews.map((review) => (
                    <tr key={review.id}>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <img 
                            src={review.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(review.name)}&background=667eea&color=fff&size=40`}
                            alt={review.name}
                            style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                          />
                          <span>{review.name}</span>
                        </div>
                      </td>
                      <td>{review.role}</td>
                      <td>
                        <div style={{ display: 'flex', gap: '2px' }}>
                          {[...Array(review.rating)].map((_, i) => (
                            <span key={i} style={{ color: '#fbbf24' }}>★</span>
                          ))}
                        </div>
                      </td>
                      <td style={{ maxWidth: '300px' }}>
                        <div style={{ 
                          overflow: 'hidden', 
                          textOverflow: 'ellipsis', 
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical'
                        }}>
                          {review.text}
                        </div>
                      </td>
                      <td>{new Date(review.createdAt).toLocaleDateString()}</td>
                      <td>
                        <span className={review.isApproved ? 'status-badge approved' : 'status-badge pending'}>
                          {review.isApproved ? 'Approved' : 'Pending'}
                        </span>
                      </td>
                      <td className="actions-cell">
                        {!review.isApproved && (
                          <button
                            onClick={() => handleApproveReview(review.id)}
                            className="action-btn approve-btn"
                            disabled={loading}
                          >
                            Approve
                          </button>
                        )}
                        <button
                          onClick={() => handleDeleteReview(review.id)}
                          className="action-btn delete-btn"
                          disabled={loading}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          )}
        </>
      )}
    </div>
  );
}
