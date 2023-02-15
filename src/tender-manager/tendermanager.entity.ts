import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity("Tendermanager")
export class TendermanagerEntity extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    email: string;

    @Column({
        type:'boolean',
        default:1,
    })
    isActive:boolean;
}