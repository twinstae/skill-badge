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
    id,
    content,
    skillSlug := .skill.slug,
    positionSlug := .position.slug,
  }
}
filter .slug = <str>$slug