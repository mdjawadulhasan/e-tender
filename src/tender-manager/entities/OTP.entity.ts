
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany, ManyToOne } from 'typeorm';



@Entity("OTP")
export class OTPEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    temail:string;

    @Column()
    OTP:number;

    @Column()
    CreationTime:Date;

    @Column()
    ExpirationTime:Date;


   



}