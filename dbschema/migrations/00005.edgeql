CREATE MIGRATION m1sba6adey3nz6hrtb6hue2uaciwexjwjqbnsdjwvigtsph4myr2fq
    ONTO m1a4v6mw7jjh4hy3xhagvzegf73kat3t3fgvekafmsox66w72ttxzq
{
  ALTER TYPE default::Requirement {
      ALTER PROPERTY text {
          RENAME TO content;
      };
  };
  ALTER TYPE default::Resource {
      ALTER PROPERTY description {
          RENAME TO content;
      };
  };
  CREATE ABSTRACT TYPE default::SlugTitle {
      CREATE REQUIRED PROPERTY slug -> std::str {
          CREATE CONSTRAINT std::exclusive;
          CREATE CONSTRAINT std::min_len_value(1);
          CREATE CONSTRAINT std::regexp('^[a-z0-9]+(?:-[a-z0-9]+)*$');
      };
      CREATE REQUIRED PROPERTY title -> std::str {
          CREATE CONSTRAINT std::exclusive;
          CREATE CONSTRAINT std::min_len_value(1);
      };
  };
  ALTER TYPE default::Resource {
      EXTENDING default::SlugTitle LAST;
      ALTER PROPERTY slug {
          ALTER CONSTRAINT std::exclusive {
              DROP OWNED;
          };
          ALTER CONSTRAINT std::min_len_value(1) {
              DROP OWNED;
          };
      };
  };
  ALTER TYPE default::Resource {
      ALTER PROPERTY slug {
          RESET OPTIONALITY;
          DROP OWNED;
          RESET TYPE;
      };
      ALTER PROPERTY title {
          ALTER CONSTRAINT std::exclusive {
              DROP OWNED;
          };
          ALTER CONSTRAINT std::min_len_value(1) {
              DROP OWNED;
          };
      };
  };
  ALTER TYPE default::Resource {
      ALTER PROPERTY title {
          RESET OPTIONALITY;
          DROP OWNED;
          RESET TYPE;
      };
  };
  ALTER TYPE default::Skill {
      EXTENDING default::SlugTitle LAST;
      ALTER PROPERTY slug {
          ALTER CONSTRAINT std::exclusive {
              DROP OWNED;
          };
          ALTER CONSTRAINT std::min_len_value(1) {
              DROP OWNED;
          };
      };
  };
  ALTER TYPE default::Skill {
      ALTER PROPERTY slug {
          RESET OPTIONALITY;
          DROP OWNED;
          RESET TYPE;
      };
      ALTER PROPERTY title {
          ALTER CONSTRAINT std::exclusive {
              DROP OWNED;
          };
          ALTER CONSTRAINT std::min_len_value(1) {
              DROP OWNED;
          };
      };
  };
  ALTER TYPE default::Skill {
      ALTER PROPERTY title {
          RESET OPTIONALITY;
          DROP OWNED;
          RESET TYPE;
      };
  };
};
