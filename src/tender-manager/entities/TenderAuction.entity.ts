import { AgencyEntity } from 'src/Agency/entities/agency.entity';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany, ManyToOne } from 'typeorm';
import { TenderEntity } from './tender.entity';


@Entity("TenderAucton")
export class TenderAuctonEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Bid: number;


    @ManyToOne(() => AgencyEntity, (Agency) => Agency.tenderAuctonEntity)
    Agency: AgencyEntity


    @ManyToOne(() => TenderEntity, (Tender) => Tender.TenderAucton)
    Tender: TenderEntity




}