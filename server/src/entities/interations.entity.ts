import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()

export class Interation {
    @PrimaryGeneratedColumn()
    id_interation: number

    @Column()
    name: string //: Name of the iteration/sprint.

    @Column()
    work_items: string //Work items assigned to the iteration/sprint
    
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;   
}