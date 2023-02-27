import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm';
import { TenderEntity } from './tender.entity';

@Entity("Tendermanager")
export class TendermanagerEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => TenderEntity, (tender) => tender.Tendermanager)
    tenders: TenderEntity[]

}