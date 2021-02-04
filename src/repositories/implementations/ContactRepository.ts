import { Contact } from "@entities/Contact";
import { getRepository } from "typeorm";

export class ContactRepository {
  async save(contact: Contact): Promise<Contact> {
    const contactRepository = getRepository(Contact);

    return contactRepository.save(contact);
  }

  async create({
    client_id,
    sub_id,  
    name,
    email,
    phone,
    office,
    birthday
  }): Promise<Contact> {
    const contactRepository = getRepository(Contact);

    const contact = await contactRepository.create({
      client: {
        id: client_id
      },
      subscriber: {
        id: sub_id
      },
      name,
      email,
      phone,
      office,
      birthday,
    })

    await contactRepository.save(contact);

    return contact;
  }

  public async delete(id: string): Promise<void> {
    await getRepository(Contact).delete(id);
  }

  public async findAllPaginated(sub_id: string, page: number): Promise<[Contact[], number]> {
    const contactRepository = await getRepository(Contact)

    return contactRepository.findAndCount({
      where: { 
        subscriber: {
          id: sub_id
        }
      },
      skip: page,
      take: 10,
    })
  }

  public async findAll(client_id: string, sub_id: string, page: number): Promise<[Contact[], number]> {
    const contactRepository = await getRepository(Contact)

    return contactRepository.findAndCount({
      where: { 
        client: { 
          id: client_id
        },
        subscriber: {
          id: sub_id
        }
      },
      skip: page,
      take: 10,
    })
  }
  async findById(id: string): Promise<Contact | undefined> {
    return await getRepository(Contact).findOneOrFail(id, { relations: ["subscriber", "client"] })
  }

  public async findByIds(ids: String[], id: string): Promise<Contact[] | undefined> {
    return await getRepository(Contact).findByIds(ids, {
      where: { 
        subscriber: id
      }
    });
  }
  
}