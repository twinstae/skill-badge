CREATE MIGRATION m1imqzrdwo2skh5snwyvduzpacxaajnysd37axtisys6ttv7nrsb4a
    ONTO m1odqcnuzdmnnttwcmepyko5jbltgv6sjglfjodflof6zfkzpup7wq
{
  ALTER TYPE default::Skill {
      CREATE MULTI LINK requirements := (.<skill[IS default::Requirement]);
      CREATE MULTI LINK resources := (.<skill[IS default::Resource]);
  };
};
