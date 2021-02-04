import { Column, Entity, Index, JoinColumn, OneToMany } from "typeorm";
import { Appointment } from "./Appointment";
import { Favorite } from "./Favorite";

@Index("UQ_e12875dfb3b1d92d7d7c5377e22", ["email"], { unique: true })
@Entity("user", { schema: "public" })
export class User {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "uuid_generate_v4()",
  })
  id: string;

  @Column("character varying", { name: "name" })
  name: string;

  @Column("character varying", { name: "avatar", default: () => "'default.png'" })
  avatar: string;

  @Column("character varying", { name: "email", unique: true })
  email: string;

  @Column("character varying", { name: "password" })
  password: string;

  @OneToMany(() => Favorite, (favorite) => favorite.user, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'user_id' })
  favorites: Favorite[];

  @OneToMany(() => Appointment, (appointment) => appointment.user, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'user_id' })
  appointments: Appointment[];
}
