import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Index,
} from "typeorm"
import { Category, Method, User } from "./index"

@Entity("transactions")
export class Transaction {
  @PrimaryGeneratedColumn("increment")
  id: number

  @ManyToOne(() => User)
  userOrigin: User

  @Column()
  destinationName: string

  @Column("decimal", { precision: 10, scale: 2 })
  value: number

  @Index()
  @Column({ type: "date" })
  date: Date | string

  @Column({ type: "time" })
  hour: string

  @Index()
  @ManyToOne(() => Category)
  category: Category

  @Index()
  @ManyToOne(() => Method)
  method: Method
}
