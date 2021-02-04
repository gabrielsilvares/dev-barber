import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Barber } from "./Barber";
import { User } from "./User";

@Entity("availability", { schema: "public" })
export class Appointment {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "uuid_generate_v4()",
  })
  id: string;

  @Column("timestamp with time zone", { name: "date" })
  date: string;

  @ManyToOne(() => User, (user) => user.appointments, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: User;

  @ManyToOne(() => Barber, (barber) => barber.appointments, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "barber_id", referencedColumnName: "id" }])
  barber: Barber;

}
