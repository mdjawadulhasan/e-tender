import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
@Entity("Jawad")
export class Jawad extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number;

}