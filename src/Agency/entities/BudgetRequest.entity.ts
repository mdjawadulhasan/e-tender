import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from 'typeorm';
import { AgencyEntity } from './agency.entity';

@Entity("BudgetRequest")
export class BudgetRequestEntity extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number;
    // @Column()
    // Agency_id: number;
    @Column()
    Tender_id : number;
    @Column()
    Amount: number;
     @Column()
     Status : number;

     @Column()
     Created_at: Date;
     @Column()
     Updated_at  : Date;




     @ManyToOne(() => AgencyEntity, (Agency) => Agency.budgetRequestEntity)
     Agency:AgencyEntity


    
}