import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from 'typeorm';
import { TenderAuctonEntity } from './TenderAuction.entity';
import { TendermanagerEntity } from './tendermanager.entity';

@Entity("Tenders")
export class TenderEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    Tendername: string;

    @Column()
    Projectlocation: string;

    @Column()
    LocationXCoordinate: string;

    @Column()
    LocationYCoordinate: string;

    @Column()
    Tenderbudget: number;

    @Column()
    ProjectStartDate: number;

    @Column()
    ProjectCmplttDate: number;

    @Column()
    Deadline: number;

    @Column()
    Cmpltpercentege: number;

    @Column()
    isActive: boolean;

   
    @ManyToOne(() => TendermanagerEntity, (Tendermanager) => Tendermanager.tenders)
    Tendermanager: TendermanagerEntity

    @ManyToOne(() => TenderAuctonEntity, (TenderAucton) => TenderAucton.Tender)
    TenderAucton: TenderAuctonEntity


}