CREATE TABLE IF NOT EXISTS restaurantes(
    slug integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    description text,
    logo text,
    rating decimal,
    name text NOT NULL CHECK (name <> '')
);

CREATE TABLE IF NOT EXISTS categorias(
    slug INTEGER PRIMARY KEY GENERATED BY DEFAULT  AS IDENTITY,
    name text NOT NULL CHECK (name <> '')
);

CREATE TABLE IF NOT EXISTS resenias(
    slug INTEGER PRIMARY KEY GENERATED BY DEFAULT  AS IDENTITY,
    comments text,
    rating decimal,
    email text NOT NULL CHECK (email <> '')
);

CREATE TABLE IF NOT EXISTS restaurantcategorias(
    restaurant_category integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    restaurantId INTEGER REFERENCES restaurantes(slug),
    categoryId INTEGER REFERENCES categorias(slug)
);

CREATE TABLE IF NOT EXISTS restaurantresenias(
    restaurant_review integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    restaurantId INTEGER REFERENCES restaurantes(slug),
    reviewId INTEGER REFERENCES resenias(slug)
);

