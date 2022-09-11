CREATE MIGRATION m1uoaaw5gbdu4tken2eu2cq5dk2el4pbplcdln5adyt5jiq3opo3kq
    ONTO initial
{
  CREATE TYPE default::Position {
      CREATE REQUIRED PROPERTY slug -> std::str {
          CREATE CONSTRAINT std::exclusive;
          CREATE CONSTRAINT std::min_len_value(1);
          CREATE CONSTRAINT std::regexp('^[a-z0-9]+(?:-[a-z0-9]+)*$');
      };
      CREATE INDEX ON (.slug);
      CREATE REQUIRED PROPERTY title -> std::str {
          CREATE CONSTRAINT std::exclusive;
          CREATE CONSTRAINT std::min_len_value(1);
      };
  };
  CREATE TYPE default::Requirement {
      CREATE REQUIRED LINK position -> default::Position {
          ON TARGET DELETE DELETE SOURCE;
      };
      CREATE REQUIRED PROPERTY content -> std::str;
  };
  CREATE TYPE default::Skill {
      CREATE REQUIRED PROPERTY slug -> std::str {
          CREATE CONSTRAINT std::exclusive;
          CREATE CONSTRAINT std::min_len_value(1);
          CREATE CONSTRAINT std::regexp('^[a-z0-9]+(?:-[a-z0-9]+)*$');
      };
      CREATE INDEX ON (.slug);
      CREATE MULTI LINK children -> default::Skill {
          ON TARGET DELETE ALLOW;
      };
      CREATE PROPERTY parents := (.<children[IS default::Skill].slug);
      CREATE REQUIRED PROPERTY content -> std::str;
      CREATE REQUIRED PROPERTY title -> std::str {
          CREATE CONSTRAINT std::exclusive;
          CREATE CONSTRAINT std::min_len_value(1);
      };
  };
  ALTER TYPE default::Requirement {
      CREATE REQUIRED LINK skill -> default::Skill {
          ON TARGET DELETE DELETE SOURCE;
      };
  };
  ALTER TYPE default::Skill {
      CREATE MULTI LINK requirements := (.<skill[IS default::Requirement]);
  };
  CREATE TYPE default::Resource {
      CREATE REQUIRED PROPERTY slug -> std::str {
          CREATE CONSTRAINT std::exclusive;
          CREATE CONSTRAINT std::min_len_value(1);
          CREATE CONSTRAINT std::regexp('^[a-z0-9]+(?:-[a-z0-9]+)*$');
      };
      CREATE INDEX ON (.slug);
      CREATE REQUIRED LINK skill -> default::Skill {
          ON TARGET DELETE DELETE SOURCE;
      };
      CREATE REQUIRED PROPERTY content -> std::str;
      CREATE REQUIRED PROPERTY href -> std::str {
          CREATE CONSTRAINT std::exclusive;
          CREATE CONSTRAINT std::min_len_value(1);
      };
      CREATE REQUIRED PROPERTY title -> std::str {
          CREATE CONSTRAINT std::exclusive;
          CREATE CONSTRAINT std::min_len_value(1);
      };
  };
  ALTER TYPE default::Skill {
      CREATE MULTI LINK resources := (.<skill[IS default::Resource]);
  };
};
