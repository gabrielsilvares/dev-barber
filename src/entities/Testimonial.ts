import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Barber } from "./Barber";

@Entity("testimonial", { schema: "public" })
export class Testimonial {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "uuid_generate_v4()",
  })
  id: string;

  @Column("character varying", { name: "name" })
  name: string;
  
  @Column("numeric", { name: "rate" })
  rate: number;

  @Column("text", { name: "body"})
  body: string;

  @ManyToOne(() => Barber, (barber) => barber.testimonials, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "barber_id", referencedColumnName: "id" }])
  barber: Barber;
}
