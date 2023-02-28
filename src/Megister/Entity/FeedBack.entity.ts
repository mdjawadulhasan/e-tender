
import { AgencyEntity } from 'src/Agency/entities/agency.entity';
import { TenderEntity } from 'src/tender-manager/entities/tender.entity';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany, ManyToOne } from 'typeorm';
import { MegisterEntity } from './megister.entity';

@Entity("FeedBack")
export class FeedBackEntity extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    FeedbackText: string;
    // @Column()
    // AgencyID:string;
    // @Column()
    // TenderID:number;

    // @Column()
    // AuditPanelID:number;
    @Column()
    Rating:number;

    @ManyToOne(() => TenderEntity, (Tender) => Tender.feedBack)
    Tender : TenderEntity

    @ManyToOne(() => AgencyEntity, (Agency) => Agency.feedBack)
    Agency : AgencyEntity
    
    @ManyToOne(() => MegisterEntity, (AuditPannel) => AuditPannel.feedBack)
    AuditPannel : MegisterEntity

  
}