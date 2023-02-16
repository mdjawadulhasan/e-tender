import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity("tenders")
export class TenderEntity extends BaseEntity{
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
}