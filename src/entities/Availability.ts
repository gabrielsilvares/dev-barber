import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Barber } from "./Barber";

@Entity("availability", { schema: "public" })
export class Availability {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "uuid_generate_v4()",
  })
  id: string;
  
  @Column("integer", { name: "weekday" })
  weekday: number;

  @Column("text", { name: "hours" })
  hours: string;

  @ManyToOne(() => Barber, (barber) => barber.availabilitys, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "barber_id", referencedColumnName: "id" }])
  barber: Barber;
}
