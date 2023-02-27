import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm';
import { BudgetRequestEntity } from './BudgetRequest.entity';

@Entity("Agencys")
export class AgencyEntity extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    AgencyName: string;
    @Column()
    password: string;
    @Column()
    Email: string;
    //  @Column()
    //  location: string;

     @Column()
    Ratings:number;
     @Column()
     Noprojectcomleted:number;
     @Column()
      Status:number;


      @OneToMany(() => BudgetRequestEntity, (budgetRequestEntity) => budgetRequestEntity.Agency)
      budgetRequestEntity : BudgetRequestEntity[]
}