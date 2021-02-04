import { Prospection } from "@entities/Prospection";
import { ICreateProspectionRequestDTO } from "@useCases/Prospection/CreateProspection/ICreateProspectionDTO";

export interface ISubscriberRepository {
  save(subscriber: Prospection): Promise<Prospection>
  create({ email }: ICreateProspectionRequestDTO): Promise<Prospection>;
  findByProspectionUserByEmail(email: string): Promise<Prospection | undefined>;
  findByProspectionUserByUserId(user_id: string): Promise<Prospection | undefined>;
}