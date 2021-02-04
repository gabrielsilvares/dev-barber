import { Column, Entity, JoinColumn, OneToMany } from "typeorm";
import { Appointment } from "./Appointment";
import { Availability } from "./Availability";
import { Favorite } from "./Favorite";
import { Image } from "./Image";
import { Review } from "./Review";
import { Service } from "./Service";
import { Testimonial } from "./Testimonial";

@Entity("barber", { schema: "public" })
export class Barber {
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

  @Column("numeric", { name: "stars" })
  stars: number;

  @Column("character varying", { name: "latitude" })
  latitude: string;

  @Column("character varying", { name: "longitude" })
  longitude: string;

  @OneToMany(() => Image, (image) => image.barber, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'barber_id' })
  images: Image[];

  @OneToMany(() => Favorite, (favorite) => favorite.barber, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'barber_id' })
  favorites: Favorite[];

  @OneToMany(() => Service, (service) => service.barber, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'barber_id' })
  services: Service[];

  @OneToMany(() => Testimonial, (testimonial) => testimonial.barber, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'barber_id' })
  testimonials: Testimonial[];

  @OneToMany(() => Review, (review) => review.barber, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'barber_id' })
  reviews: Review[];

  @OneToMany(() => Availability, (availability) => availability.barber, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'barber_id' })
  availabilitys: Availability[];

  @OneToMany(() => Appointment, (appointment) => appointment.barber, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'barber_id' })
  appointments: Availability[];
}
