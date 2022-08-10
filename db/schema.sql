CREATE TABLE books (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(80),
    subtitle VARCHAR(255),
    authors VARCHAR(40),
    categories VARCHAR(50),
    thumbnail VARCHAR(255),
    description TEXT,
    published_year INTEGER,
    average_rating DECIMAL(10,0),
    num_pages INTEGER,
    ratings_count INTEGER,
    price DECIMAL(10,0)
);
