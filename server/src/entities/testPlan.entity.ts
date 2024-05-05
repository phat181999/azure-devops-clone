import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity()

export class TestPlan {
    @PrimaryColumn()
    id_testPlan: number

    @Column()
    name: string //Name of the test plan.

    @Column()
    test_suites: string //Suites of test cases.

    @Column()
    assigned_to: string // Team member responsible for test execution

    @Column()
    results: string // Test results (pass/fail).

    @CreateDateColumn({name: 'created_date'})
    created_at: Date;

    @CreateDateColumn({name: 'updated_at'})
    updated_at: Date
}