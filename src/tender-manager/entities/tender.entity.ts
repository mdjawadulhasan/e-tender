import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity("Tenders")
export class TenderEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;

    @Column()
    location: string;

    @Column()
    budget: number;

    @Column()
    Startyear: number;

    @Column()
    Completeyear: number;

    @Column()
    Status: number;

    //1 open
    //2 running
    //3 Blocked
    //4 Completed
}