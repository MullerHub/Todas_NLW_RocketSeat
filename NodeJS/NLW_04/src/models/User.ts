import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'

import { v4 as uuidV4 } from 'uuid'

@Entity('users')
class User {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @CreateDateColumn()
  created_at: Date
}

export { User }
