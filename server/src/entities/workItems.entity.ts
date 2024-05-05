import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class WorkItems {
    @PrimaryColumn()
    id_workitems: number;

    @Column()
    type: string //Type of work item (e.g., User Story, Task, Bug).

    @Column()
    title: string //Brief description of the work item.

    @Column()
    description: string

    @Column()
    assignto: string

    @Column()
    State: string // Current state of the work item (e.g., New, Active, Resolved, Closed).

    @Column()
    tags: string //Labels to categorize work items.

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;   
}