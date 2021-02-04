import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Barber } from "./Barber";
import { Favorite } from "./Favorite";
import { Image } from "./Image";

@Entity("service", { schema: "public" })
export class Service {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "uuid_generate_v4()",
  })
  id: string;

  @Column("character varying", { name: "name" })
  name: string;

  @Column("numeric", { name: "price" })
  price: number;

  @ManyToOne(() => Barber, (barber) => barber.services, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "barber_id", referencedColumnName: "id" }])
  barber: Barber;
}
