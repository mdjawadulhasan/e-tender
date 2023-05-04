import { TenderEntity } from 'src/tender-manager/entities/tender.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import { AgencyEntity } from './agency.entity';

@Entity('BudgetRequest')
export class BudgetRequestEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Amount: number;

  @Column({ nullable: true, default: 0 })
  Status: number;

  @Column({ nullable: true })
  Created_at: Date;

  @Column({ nullable: true })
  Updated_at: Date;

  @Column()
  Cause: string;

  @ManyToOne(() => AgencyEntity, (Agency) => Agency.budgetRequestEntity)
  Agency: AgencyEntity;

  @ManyToOne(() => TenderEntity, (Tender) => Tender.budgetRequestEntity)
  Tender: TenderEntity;
}
