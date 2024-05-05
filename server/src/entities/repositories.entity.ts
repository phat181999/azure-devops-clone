import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class Repositories {
    @PrimaryColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    branch: string

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;   
}