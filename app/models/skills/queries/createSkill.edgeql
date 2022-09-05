with items := ( select Skill filter .slug in array_unpack(<array<str>>$children ))
insert Skill {
  slug := <str>$slug,
  title := <str>$title,
  content := <str>$content,
  children := items
};

with parents_slug := array_unpack(<array<str>>$parents),
  child := ( select Skill filter .slug = <str>$slug )
for parent_slug in parents_slug union (
  update Skill
  filter .slug = parent_slug
  set { 
    children += child
  }
);