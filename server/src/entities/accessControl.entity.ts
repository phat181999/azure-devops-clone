import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity()

export class AccessControl {
    @PrimaryColumn()
    id_access_control: number

    @Column()
    user: string

    @Column()
    role: string //Users and roles with access permissions.

    @Column()
    group: string

    @Column()
    sercurity_policies: string

    @CreateDateColumn({name: 'created_at'})
    created_at: Date // Grouping of users for simplified permission management.

    @CreateDateColumn({name: 'updated_at'})
    updated_at: Date //Policies governing access to resources.
}