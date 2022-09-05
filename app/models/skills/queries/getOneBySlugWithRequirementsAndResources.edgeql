select Skill {
  slug,
  title,
  content,
  children: { slug },
  parents,
  resources: {
    slug,
    title,
    content,
    href,
  },
  requirements: {
    content
  }
}
filter .slug = <str>$slug