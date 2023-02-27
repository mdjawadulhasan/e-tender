import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from 'typeorm';
import { TendermanagerEntity } from './tendermanager.entity';

@Entity("Tenders")
export class TenderEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    Tenderid: number;
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
}