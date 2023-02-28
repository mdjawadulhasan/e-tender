import { FeedBackEntity } from 'src/Megister/Entity/FeedBack.entity';
import { TenderEntity } from 'src/tender-manager/entities/tender.entity';
import { TenderAuctonEntity } from 'src/tender-manager/entities/TenderAuction.entity';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm';
import { BudgetRequestEntity } from './BudgetRequest.entity';

@Entity("Agencys")
export class AgencyEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    AgencyName: string;
    @Column()
    password: string;
    @Column()
    Email: string;


    @Column()
    Ratings: number;
    @Column()
    Noprojectcomleted: number;
    @Column()
    Status: number;


    @OneToMany(() => BudgetRequestEntity, (budgetRequestEntity) => budgetRequestEntity.Agency)
    budgetRequestEntity: BudgetRequestEntity[]


    @OneToMany(() => TenderAuctonEntity, (tenderAuctonEntity) => tenderAuctonEntity.Agency)
    tenderAuctonEntity: TenderAuctonEntity[]

    @OneToMany(() => FeedBackEntity, (feedBack) => feedBack.Agency)
    feedBack: FeedBackEntity[]

    @OneToMany(() => TenderEntity, (tender) => tender.Agency)
    tenders: TenderEntity[]


}