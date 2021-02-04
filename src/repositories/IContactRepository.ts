import { Contact } from '@entities/Contact';
import { ICreateContactRequestDTO } from '@useCases/Contact/CreateContact/ICreateContactDTO';

export interface IContactRepository {
  save(contact: Contact): Promise<Contact>;
  create({
    client_id,
    name,
    email,
    phone,
    office,
    birthday 
  }: ICreateContactRequestDTO): Promise<Contact>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<Contact | undefined>;
  findByIds(ids: String[], id: string): Promise<Contact[] | undefined> 
  findAllPaginated(sub_id: string, page: number): Promise<[Contact[], number]>;

}