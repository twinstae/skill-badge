CREATE MIGRATION m1o7wwxw6yixry5oqs5xqrhw3uhjujwyqe4clsakpsdnwfgwdnooha
    ONTO m1sba6adey3nz6hrtb6hue2uaciwexjwjqbnsdjwvigtsph4myr2fq
{
  ALTER TYPE default::SlugTitle {
      CREATE INDEX ON (.slug);
  };
};
