import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";

import { Contact } from "./contact.entity";

@Entity()
export class User {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @CreateDateColumn()
  create_at: Date;

  @OneToMany((type) => Contact, (contact) => contact.user, {
    onDelete: "CASCADE",
  })
  contacts: Contact[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
