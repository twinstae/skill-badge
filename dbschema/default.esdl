module default {
  type Skill {
    required property slug -> str {
      readonly := true;
      constraint min_len_value(1);
      constraint max_len_value(16);
      constraint exclusive;
      constraint regexp(r'^[a-z0-9]+(?:-[a-z0-9]+)*$');
    };
    required property title -> str {
      constraint min_len_value(1);
      constraint max_len_value(32);
      constraint exclusive;
    };

    required property content -> str {
      constraint max_len_value(1024);
    };
    multi link children -> Skill  {
      on target delete allow;
    };
    property parents := .<children[is Skill].slug;
    multi link resources := .<skill[is Resource];
    multi link requirements := .<skill[is Requirement];
  }

  type Resource {
     required property slug -> str {
      readonly := true;
      constraint min_len_value(1);
      constraint max_len_value(32);
      constraint exclusive;
      constraint regexp(r'^[a-z0-9]+(?:-[a-z0-9]+)*$');
    };
    required property title -> str {
      constraint min_len_value(1);
      constraint max_len_value(32);
    };

    required property content -> str;
    required property href -> str {
      constraint min_len_value(1);
      constraint max_len_value(128);
    };
    required link skill -> Skill {
      on target delete delete source;
    };
  }

  type Position {
    required property slug -> str {
      readonly := true;
      constraint min_len_value(1);
      constraint max_len_value(16);
      constraint exclusive;
      constraint regexp(r'^[a-z0-9]+(?:-[a-z0-9]+)*$');
    };
    required property title -> str {
      constraint min_len_value(1);
      constraint max_len_value(16);
      constraint exclusive;
    };
  }

  type Requirement {
    required property content -> str {
      readonly := true;
      constraint min_len_value(1);
      constraint max_len_value(64);
      constraint exclusive;
    };

    required link skill -> Skill {
      on target delete delete source;
    };

    required link position -> Position {
      on target delete delete source;
    }
  }

  type Badge {
    required property slug -> str {
      readonly := true;
      constraint min_len_value(1);
      constraint max_len_value(32);
      constraint exclusive;
      constraint regexp(r'^[a-z0-9]+(?:-[a-z0-9]+)*$');
    };

    required property title -> str {
      constraint min_len_value(1);
      constraint max_len_value(64);
      constraint exclusive;
    };

    required property icon -> str {
      constraint min_len_value(1);
      constraint max_len_value(32);
    }

    required link skill -> Skill {
      on target delete delete source;
    };

    multi link pieces := .<badge[is Piece];

    property max := count(.pieces)
  }

  type Piece {
    required property title -> str {
      readonly := true;
      constraint min_len_value(1);
      constraint max_len_value(64);
      constraint exclusive;
    };

    required property content -> str {
      constraint max_len_value(1024);
    };

    required link badge -> Badge {
      on target delete delete source;
    };
  }
}