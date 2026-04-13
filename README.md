# Portfolio Website

A modern, animated portfolio website with PHP backend and MySQL database integration.

## Features

- **Responsive Design**: Works beautifully on desktop and mobile
- **Dark/Light Theme Toggle**: User preference saved in localStorage
- **Smooth Animations**: CSS animations and scroll-triggered effects
- **Contact Form**: Functional form that saves messages to database
- **Dynamic Projects**: Projects loaded from MySQL database
- **PHP Backend**: Server-side processing for contact form
- **MySQL Database**: Stores contact messages and projects

## Setup Instructions

### Prerequisites
- XAMPP (or similar Apache + MySQL + PHP stack)
- Web browser

### Installation

1. **Start XAMPP**: Make sure Apache and MySQL services are running

2. **Database Setup**:
   - Open your browser and go to `http://localhost/MiniWeb/setup.php`
   - This will create the database and tables automatically

3. **View the Website**:
   - Go to `http://localhost/MiniWeb/` in your browser

### File Structure
```
MiniWeb/
├── index.html          # Main portfolio page
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript for interactivity
├── config.php          # Database configuration
├── setup.php           # Database setup script
├── contact.php         # Contact form handler
├── get_projects.php    # API to fetch projects
└── README.md           # This file
```

## Customization

### Adding Projects
You can add new projects by inserting records into the `projects` table:

```sql
INSERT INTO projects (title, description, link) VALUES
('Your Project Title', 'Project description', 'https://link-to-project.com');
```

### Modifying Animations
- Edit `styles.css` to change animation timings and effects
- Modify `script.js` for scroll trigger behavior

### Database Configuration
Update `config.php` if your MySQL credentials differ from the defaults:
```php
$servername = "localhost";
$username = "your_username";
$password = "your_password";
```

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: PHP 7+
- **Database**: MySQL
- **Animations**: CSS Keyframes, Intersection Observer API

## Browser Support

- Chrome 58+
- Firefox 55+
- Safari 11+
- Edge 79+

## License

This project is open source and available under the [MIT License](LICENSE).