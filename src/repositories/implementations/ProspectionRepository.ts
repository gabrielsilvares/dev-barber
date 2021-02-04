export class ProspectionRepository {
  public async create({
    provider_id,
    date,
    user_id,
  }: ICreateProspectionRequestDTO): Promise<Appointment> {
    const appointment = this.ormRepository.create({
      provider_id,
      date,
      user_id,
    });

    await this.ormRepository.save(appointment);

    return appointment;
  }
}