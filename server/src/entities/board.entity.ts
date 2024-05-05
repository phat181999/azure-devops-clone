import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity()

export class Board {
    @PrimaryColumn()
    id_board: number;

    @Column()
    back_log: string

    @Column()
    sprints: string

    @Column()
    dashboards: string

    @CreateDateColumn({name: 'created_at'})
    created_at: Date

    @CreateDateColumn({name: 'updated_at'})
    updated_at: Date
}