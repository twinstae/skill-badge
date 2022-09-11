module default {
  type Skill {
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

    required property content -> str;
    multi link children -> Skill  {
      on target delete allow;
    };
    property parents := .<children[is Skill].slug;
    multi link resources := .<skill[is Resource];
    multi link requirements := .<skill[is Requirement];
  }

  type Resource {
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

    required property content -> str;
    required property href -> str {
      constraint min_len_value(1);
      constraint exclusive;
    };
    required link skill -> Skill {
      on target delete delete source;
    };
  }

  type Position {
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

  type Requirement {
    required property content -> str {
      constraint min_len_value(1);
      constraint exclusive;
    };

    required link skill -> Skill {
      on target delete delete source;
    };

    required link position -> Position {
      on target delete delete source;
    }
  }
}