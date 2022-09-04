select Skill {
  slug,
  title,
  content,
  children: { slug },
  parents := .<children[is Skill].slug
}
filter .slug = <str>$slug