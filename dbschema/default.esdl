module default {
  abstract type SlugTitle {
    required property slug -> str {
      constraint min_len_value(1);
      constraint exclusive;
      constraint regexp(r'^[a-z0-9]+(?:-[a-z0-9]+)*$');
    };
    required property title -> str {
      constraint min_len_value(1);
      constraint exclusive;
    };

    index on (.slug);
  }

  type Skill extending SlugTitle {
    required property content -> str;
    multi link children -> Skill  {
      on target delete allow;
    };
    property parents := .<children[is Skill].slug;
  }

  type Resource extending SlugTitle {
    required property content -> str;
    required property href -> str {
      constraint min_len_value(1);
      constraint exclusive;
    };
    required link skill -> Skill {
      on target delete delete source;
    };
  }

  type Requirement {
    required property content -> str;
    required link skill -> Skill {
      on target delete delete source;
    };
  }
}