CREATE MIGRATION m1j6lzcm47fbype3pot3on3cawb76pfk3v5tlkca2kvdf4ofjztrea
    ONTO initial
{
  CREATE TYPE default::Skill {
      CREATE MULTI LINK children -> default::Skill;
      CREATE MULTI LINK parents -> default::Skill;
      CREATE REQUIRED PROPERTY content -> std::str;
      CREATE REQUIRED PROPERTY slug -> std::str;
      CREATE REQUIRED PROPERTY title -> std::str;
  };
  CREATE TYPE default::Requirement {
      CREATE LINK skill -> default::Skill;
      CREATE REQUIRED PROPERTY text -> std::str;
  };
  CREATE TYPE default::Resource {
      CREATE LINK skill -> default::Skill;
      CREATE REQUIRED PROPERTY description -> std::str;
      CREATE REQUIRED PROPERTY href -> std::str;
      CREATE REQUIRED PROPERTY slug -> std::str;
      CREATE REQUIRED PROPERTY title -> std::str;
  };
};
