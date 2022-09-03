CREATE MIGRATION m1wrv7iwlzxi2rghhp5yktdmgijtkniuernlohickzhoucp6bz2qaa
    ONTO m1jix37l2rxuc4mkqc37mowb2ro4xk2dgbvxhxqnbmytm4wkadueva
{
  ALTER TYPE default::Requirement {
      ALTER LINK skill {
          ON TARGET DELETE ALLOW;
      };
  };
  ALTER TYPE default::Resource {
      ALTER LINK skill {
          ON TARGET DELETE ALLOW;
      };
      ALTER PROPERTY href {
          CREATE CONSTRAINT std::exclusive;
          CREATE CONSTRAINT std::min_len_value(1);
      };
      ALTER PROPERTY slug {
          CREATE CONSTRAINT std::exclusive;
          CREATE CONSTRAINT std::min_len_value(1);
      };
      ALTER PROPERTY title {
          CREATE CONSTRAINT std::exclusive;
          CREATE CONSTRAINT std::min_len_value(1);
      };
  };
  ALTER TYPE default::Skill {
      ALTER LINK children {
          ON TARGET DELETE ALLOW;
      };
      ALTER PROPERTY slug {
          CREATE CONSTRAINT std::min_len_value(1);
      };
      ALTER PROPERTY title {
          CREATE CONSTRAINT std::min_len_value(1);
      };
  };
};
