import { MegisterEntity } from 'src/Megister/Entity/megister.entity';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm';

@Entity("Admins")
export class AdminEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column({nullable:true})
    area:string;

    @Column({nullable:true})
    address:string;

    @Column({nullable:true})
    password: string;

    @Column({nullable:true})
    ImgfileName: string;

    @OneToMany(() => MegisterEntity, (Megister) => Megister.Admin)
    Megisters: MegisterEntity[]
}