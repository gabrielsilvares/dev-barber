import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Barber } from "./Barber";

@Entity("image", { schema: "public" })
export class Image {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "uuid_generate_v4()",
  })
  id: string;

  @Column("character varying", { name: "path" })
  path: string;

  @ManyToOne(() => Barber, (barber) => barber.images, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "barber_id", referencedColumnName: "id" }])
  barber: Barber;
}
