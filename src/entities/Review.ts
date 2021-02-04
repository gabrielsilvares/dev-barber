import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Barber } from "./Barber";
import { Favorite } from "./Favorite";
import { Image } from "./Image";
import { Service } from "./Service";

@Entity("review", { schema: "public" })
export class Review {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "uuid_generate_v4()",
  })
  id: string;
  
  @Column("numeric", { name: "rate" })
  rate: number;

  @ManyToOne(() => Barber, (barber) => barber.reviews, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "barber_id", referencedColumnName: "id" }])
  barber: Barber;
}
