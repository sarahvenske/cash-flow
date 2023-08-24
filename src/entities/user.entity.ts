import { getRounds, hashSync } from "bcryptjs"
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  PrimaryColumn,
  BeforeInsert,
} from "typeorm"

@Entity("users")
export class User {
  @PrimaryColumn("uuid")
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  name: string

  @Column({ length: 120, unique: true })
  email: string

  @Column()
  password: string

  @Column({ length: 10 })
  accountNumber: string

  @CreateDateColumn({ type: "date" })
  createdAt: Date | string

  @Column({ default: "false" })
  isCompany: boolean

  @BeforeInsert()
  hashPassword() {
    const isEncrypted = getRounds(this.password)
    if (!isEncrypted) {
      this.password = hashSync(this.password, 10)
    }
  }
}
