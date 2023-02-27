import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity("Agencys")
export class AgencyEntity extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    AgencyName: string;
    @Column()
    Email: string;
    @Column()
    location: string;
     @Column()
    workingRecord:number;

  
}