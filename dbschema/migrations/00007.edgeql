CREATE MIGRATION m1odqcnuzdmnnttwcmepyko5jbltgv6sjglfjodflof6zfkzpup7wq
    ONTO m1o7wwxw6yixry5oqs5xqrhw3uhjujwyqe4clsakpsdnwfgwdnooha
{
  ALTER TYPE default::Skill {
      CREATE PROPERTY parents := (.<children[IS default::Skill].slug);
  };
};
