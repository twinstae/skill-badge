CREATE MIGRATION m1a4v6mw7jjh4hy3xhagvzegf73kat3t3fgvekafmsox66w72ttxzq
    ONTO m1wrv7iwlzxi2rghhp5yktdmgijtkniuernlohickzhoucp6bz2qaa
{
  ALTER TYPE default::Requirement {
      ALTER LINK skill {
          ON TARGET DELETE DELETE SOURCE;
          SET REQUIRED USING (SELECT
              default::Skill FILTER
                  (.slug = 'react')
          LIMIT
              1
          );
      };
  };
  ALTER TYPE default::Resource {
      ALTER LINK skill {
          ON TARGET DELETE DELETE SOURCE;
          SET REQUIRED USING (SELECT
              default::Skill FILTER
                  (.slug = 'react')
          LIMIT
              1
          );
      };
  };
  ALTER TYPE default::Skill {
      ALTER PROPERTY slug {
          CREATE CONSTRAINT std::exclusive;
      };
      ALTER PROPERTY title {
          CREATE CONSTRAINT std::exclusive;
      };
  };
};
