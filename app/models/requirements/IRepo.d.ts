import type { IsomorphicArrayT } from '~/functional/Array';
import type { PositionT, RequirementT } from './schema';

interface IPositionsRepo {
	getPositionList: () => Promise<IsomorphicArrayT<PositionT>>;
	getRequirements: () => Promise<RequirementT[]>;
	getRequirementById: (id: string) => Promise<RequirementT | null>;
	getRequirementsByPosition: (
		positionSlug: PositionT['slug'],
	) => Promise<RequirementT[]>;
	addRequirement: (requirement: Omit<RequirementT, 'id'>) => Promise<string>; // return id (uuid format)
	deleteRequirement: (targetId: string) => Promise<void>;
	updateRequirement: (requirement: RequirementT) => Promise<void>;
}
