with items := ( select Skill filter .slug in array_unpack(<array<str>>$children )),
update Skill
filter .slug = <str>$slug
set {
  title := <str>$title,
  content := <str>$content,
  children := items
};

with
  child := ( select Skill filter .slug = <str>$slug ),
  new_parents := ( select Skill filter .slug in array_unpack(<array<str>>$new_parents )),
for parent in new_parents
union (
  update parent
  set { 
    children += child
  }
);

with
  child := ( select Skill filter .slug = <str>$slug ),
  detached_parents := ( select Skill filter .slug in array_unpack(<array<str>>$detached_parents )),
for parent in detached_parents
union (
  update parent
  set { 
    children -= child
  }
);