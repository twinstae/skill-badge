/* eslint-disable @typescript-eslint/no-floating-promises */
import edgedb from 'edgedb';
// import fakeSkills from './skills/fakeSkills.json';
// import fakeRequirementList from './requirements/fakeRequirementList.json';

const client = edgedb();

async function restore(){
  // for (const skill of fakeSkillList){
  // await client.execute(`
  //   with items := ( select Skill filter .slug in array_unpack(<array<str>>$children ))
  //   insert Skill {
  //     slug := <str>$slug,
  //     title := <str>$title,
  //     content := <str>$content,
  //     children := items
  //   };

  //     with parents_slug := array_unpack(<array<str>>$parents),
  //       child := ( select Skill filter .slug = <str>$slug )
  //     for parent_slug in parents_slug union (
  //       update Skill
  //       filter .slug = parent_slug
  //       set { 
  //         children += child
  //       }
  //     );
  //     `, skill);  
  // }


  // for(const requirement of fakeRequirementList){
  //   await client.execute(`
  //     with skill := ( select Skill filter .slug in <str>$skillSlug limit 1),
  //       position := ( select Position filter .slug in <str>$positionSlug limit 1)
  //     insert Requirement {
  //       content := <str>$content,
  //       skill := skill,
  //       position := position,
  //     };
  //   `, {
  //     content: requirement.content,
  //     skillSlug: requirement.skillSlug,
  //     positionSlug: requirement.positionSlug,
  //   })
  //   .catch(() => console.log(requirement.content))
  // }
}

restore();
