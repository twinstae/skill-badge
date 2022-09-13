import {
	fakeRequirementList,
	FakePositionsRepo,
} from '~/models/requirements/fakeRepo';

export async function action() {
	global.__fakePositionsRepo = FakePositionsRepo(fakeRequirementList);
	return new Response('', {
		status: 204,
	});
}
