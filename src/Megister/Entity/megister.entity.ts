
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm';
import { FeedBackEntity } from './FeedBack.entity';

@Entity("Megisters")
export class MegisterEntity extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    password:string;
    @Column()
    Email:string;
    
    @OneToMany(() => FeedBackEntity, (feedBack) => feedBack.AuditPannel)
    feedBack: FeedBackEntity[]


  
}