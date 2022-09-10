import type { PositionT, RequirementT } from './schema';

interface IPositionsRepo {
  async getPositionList(): Promise<PositionT[]>
  async getRequirementsByPosition(positionSlug: PositionT['slug']): Promise<RequirementT[]>
  async addRequirement(requirement: Omit<RequirementT, 'id'>): Promise<void>
  async deleteRequirement(id: string): Promise<void>
  async updateRequirement(requirement: RequirementT): Promise<void>
}