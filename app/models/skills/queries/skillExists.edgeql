with result := (select Skill filter .slug = <str>$slug)
select count(result) = 1