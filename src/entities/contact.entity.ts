import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";

import { v4 as uuid } from "uuid";
import { User } from "./user.entity";

@Entity()
export class Contact {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @ManyToOne(() => User, user => user.contacts, {
    eager: true,
    onDelete:"CASCADE"
  })
  @JoinColumn({ name: "user_id" })
  user: User;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
