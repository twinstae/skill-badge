CREATE MIGRATION m1nkiwyg42wk6rdmtn7rlcydohnhmuhluq2paxrzd6dsumd2gl5dza
    ONTO m1uoaaw5gbdu4tken2eu2cq5dk2el4pbplcdln5adyt5jiq3opo3kq
{
  ALTER TYPE default::Requirement {
      ALTER PROPERTY content {
          CREATE CONSTRAINT std::exclusive;
          CREATE CONSTRAINT std::min_len_value(1);
      };
  };
};
