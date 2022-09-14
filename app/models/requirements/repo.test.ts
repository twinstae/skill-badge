import { describe, it, expect } from 'vitest';
import { FakePositionsRepo } from './fakeRepo';

describe('PositionsRepo', () => {
	const repo = FakePositionsRepo([
		{
			id: 'd5836f15-208e-447a-9c8c-9d360b25f26a',
			content: 'HTML5, CSS3, ES6 Javascript 등 웹 표준, 시맨틱 마크업에 능숙하신 분',
			positionSlug: 'frontend',
			skillSlug: 'web-standard',
		},
		{
			id: 'e45797bd-e028-4b89-ad82-6c18b5ff9753',
			content: '전공지식은 필요하지만 전공학위는 꼭 필요하다고 생각하지 않기에 컴퓨터공학 학위 여부는 보지 않아요.',
			positionSlug: 'backend',
			skillSlug: 'computer-science',
		},
	]);

	it('모든 포지션의 요구사항 개수를 합하면, 모든 요구사항의 개수와 같다', async () => {
		const positions = await repo.getPositionList();
		const allRequirements = await repo.getRequirements();

		const requirementsByAllPosition = await Promise.all(
			positions.slug.map(repo.getRequirementsByPosition),
		).then((result) => result.flat());

		expect(requirementsByAllPosition).toHaveLength(allRequirements.length);
	});

	let newReqId: string; // uuid
	it('새 요구사항을 추가할 수 있다', async () => {
		const newReqData = {
			content: '테스트용: EdgeDB 경력이 3년 이상이신 분',
			positionSlug: 'backend',
			skillSlug: 'database',
		};
		newReqId = await repo.addRequirement(newReqData);

		await expect(repo.getRequirementById(newReqId)).resolves.toEqual({
			id: newReqId,
			...newReqData,
		});
	});

	it('요구사항을 수정할 수 있다', async () => {
		const updatedRequirement = {
			id: newReqId,
			content: '테스트용: EdgeDB 경력이 1년 이상이신 분',
			positionSlug: 'backend',
			skillSlug: 'edgedb',
		};
		await repo.updateRequirement(updatedRequirement);

		await expect(repo.getRequirementById(newReqId)).resolves.toEqual(
			updatedRequirement,
		);
	});

	it('요구사항을 삭제할 수 있다', async () => {
		await repo.deleteRequirement(newReqId);

		await expect(repo.getRequirementById(newReqId)).resolves.toEqual(null);
	});

	it('존재하지 않는 요구사항은 삭제할 수 없다', async () => {
		await expect(repo.deleteRequirement(newReqId)).rejects.toThrow(
			/\[not-found\]/,
		);
	});
});
