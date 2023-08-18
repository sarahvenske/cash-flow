import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Transaction } from "./index";

@Entity("methods")
export class Method {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 120, unique: true })
  name: string;

  @OneToMany(() => Transaction, (transaction) => transaction.method)
  transactions: Transaction[];
}
