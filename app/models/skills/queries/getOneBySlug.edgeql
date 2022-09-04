select Skill {
  slug,
  title,
  content,
  children: { slug },
  parents
}
filter .slug = <str>$slug