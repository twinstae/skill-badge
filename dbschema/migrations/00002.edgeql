CREATE MIGRATION m1jix37l2rxuc4mkqc37mowb2ro4xk2dgbvxhxqnbmytm4wkadueva
    ONTO m1j6lzcm47fbype3pot3on3cawb76pfk3v5tlkca2kvdf4ofjztrea
{
  ALTER TYPE default::Skill {
      DROP LINK parents;
  };
};
