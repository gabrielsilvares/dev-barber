import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Barber } from "./Barber";
import { Image } from "./Image";
import { User } from "./User";

@Entity("favorite", { schema: "public" })
export class Favorite {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "uuid_generate_v4()",
  })
  id: string;

  @ManyToOne(() => User, (user) => user.favorites, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: User;

  @ManyToOne(() => Barber, (barber) => barber.favorites, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "barber_id", referencedColumnName: "id" }])
  barber: Barber;
}
