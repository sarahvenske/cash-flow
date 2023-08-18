import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Category, Method, User } from "./index";

@Entity("transactions")
export class Transaction {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @ManyToOne(() => User)
  userOrigin: User;

  @Column()
  destinationName: string;

  @Column("decimal", { precision: 10, scale: 2 })
  value: number;

  @Column({ type: "date" })
  date: Date | string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => Category)
  category: Category;

  @ManyToOne(() => Method)
  method: Method;
}
