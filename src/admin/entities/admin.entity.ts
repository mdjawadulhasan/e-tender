import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity("admins")
export class AdminEntity extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    email: string;

    @Column()
    phoneNumber: string;
}