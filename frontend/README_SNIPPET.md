# Careers Page Implementation

## Added Files

### Data Layer
- `src/data/jobs.js` - Mock job listings with detailed information (6 positions across different departments)

### Components
- `src/components/JobCard.jsx` + `JobCard.css` - Job listing cards with hover effects
- `src/components/TeamHighlight.jsx` + `TeamHighlight.css` - Team member showcase section
- `src/components/ApplyModal.jsx` + `ApplyModal.css` - Job application modal with form validation

### Pages
- `src/pages/Careers.jsx` + `Careers.css` - Main careers page with hero, culture, and job listings

### Routes Added
- `/careers` - Main careers page

## Features Implemented

✅ **Hero Section** - Mission-driven copy with purple gradient background  
✅ **Culture Section** - "Why Work With Us" with 3 key value propositions  
✅ **Team Highlight** - 3 team members with roles and culture quotes  
✅ **Job Listings** - Cards showing title, department, location, type, and summary  
✅ **Search & Filter** - Real-time search by title/department/location + job type filters  
✅ **Apply Modal** - Full job details with application form and mailto fallback  
✅ **Form Validation** - Name, email, and cover letter validation with error states  
✅ **Responsive Design** - Mobile-friendly layout with collapsing grids  
✅ **Accessibility** - ARIA labels, keyboard navigation, ESC to close modal  
✅ **Purple Theme** - Consistent gradient branding throughout  
✅ **Animations** - Smooth transitions and entrance animations  

## How to Test Locally

1. Start the development server: `npm run dev`
2. Navigate to `/careers` to see the main page
3. Use the search bar to filter jobs by keywords
4. Click job type filters (Full-time, Part-time, Remote) to filter results
5. Click any job card to open the detailed application modal
6. Test the application form:
   - Try submitting with empty fields to see validation
   - Fill out the form and submit to see success state
   - Click "Apply via Email" to test mailto functionality
7. Test keyboard accessibility:
   - Press ESC to close modal
   - Tab through form fields
   - Click outside modal to close
8. Test responsive design by resizing browser window

## Sample Jobs Included

- Senior Frontend Developer (Engineering, San Francisco)
- Product Manager (Product, Remote)
- UX Designer (Design, New York)
- Data Scientist (Data, Austin)
- Marketing Coordinator (Marketing, Los Angeles, Part-time)
- Customer Success Manager (Customer Success, Chicago)

## Backend Integration Notes

To connect the application form to a real backend:

1. Replace the `console.log` in `ApplyModal.jsx` with an API call
2. Add proper file upload handling for resume attachments
3. Implement email notifications for new applications
4. Add application tracking and status updates
5. Consider adding a job application dashboard for HR team

The current implementation logs application data to console and shows success feedback, making it easy to wire up to any backend service later.