import { AgencyEntity } from 'src/Agency/entities/agency.entity';
import { BudgetRequestEntity } from 'src/Agency/entities/BudgetRequest.entity';
import { FeedBackEntity } from 'src/Megister/Entity/FeedBack.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TenderAuctonEntity } from './TenderAuction.entity';
import { TendermanagerEntity } from './tendermanager.entity';

@Entity('Tenders')
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

  @Column({ nullable: true })
  ProjectStartDate: Date;

  @Column({ nullable: true })
  ProjectCmplttDate: Date;

  @Column({ nullable: true })
  Deadline: Date;

  @Column()
  Cmpltpercentege: number;

  @Column({ nullable: true })
  Status: number;

  @ManyToOne(
    () => TendermanagerEntity,
    (Tendermanager) => Tendermanager.tenders,
  )
  Tendermanager: TendermanagerEntity;

  @ManyToOne(() => AgencyEntity, (Agency) => Agency.tenders)
  Agency: AgencyEntity;

  @OneToMany(() => TenderAuctonEntity, (TenderAucton) => TenderAucton.Tender)
  TenderAucton: TenderAuctonEntity[];

  @OneToMany(() => FeedBackEntity, (feedBack) => feedBack.Tender)
  feedBack: FeedBackEntity[];

  @OneToMany(
    () => BudgetRequestEntity,
    (budgetRequestEntity) => budgetRequestEntity.Tender,
  )
  budgetRequestEntity: BudgetRequestEntity[];
}
