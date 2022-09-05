export function SKILL_NOT_FOUND(slug: string){
  return `[not-found] Skill {slug:"${slug}"}를 찾을 수 없습니다`;
}

export function SKILL_ALREADY_EXISTS(slug: string){
  return `[duplicated] Skill {slug:"${slug}"} 가 이미 있습니다!`
}
