module default {
  type Skill {
    required property slug -> str {
      constraint min_len_value(1);
      constraint exclusive;
    };
    required property title -> str {
      constraint min_len_value(1);
      constraint exclusive;
    };
    required property content -> str;
    multi link children -> Skill  {
      on target delete allow;
    };
  }

  type Resource {
    required property slug -> str {
      constraint min_len_value(1);
      constraint exclusive;
    };
    required property title -> str {
      constraint min_len_value(1);
      constraint exclusive;
    };
    required property description -> str;
    required property href -> str {
      constraint min_len_value(1);
      constraint exclusive;
    };
    required link skill -> Skill {
      on target delete delete source;
    };
  }

  type Requirement {
    required property text -> str;
    required link skill -> Skill {
      on target delete delete source;
    };
  }
}