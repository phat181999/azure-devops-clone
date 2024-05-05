import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Projects {
    @PrimaryColumn()
    id_projects: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    repository: string

    @Column()
    team: string // Members involved in the project.

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;   
}