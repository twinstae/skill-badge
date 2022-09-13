import type { PositionT, RequirementT } from './schema';

interface IPositionsRepo {
  getPositionList: () => Promise<PositionT[]>
  getRequirementsByPosition: (positionSlug: PositionT['slug']) => Promise<RequirementT[]>
  addRequirement: (requirement: Omit<RequirementT, 'id'>) => Promise<void>
  deleteRequirement: (id: string) => Promise<void>
  updateRequirement: (requirement: RequirementT) => Promise<void>
};