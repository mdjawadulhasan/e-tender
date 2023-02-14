import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("Tendermanager")
export class TendermanagerEntity {
    
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    email: string;
}