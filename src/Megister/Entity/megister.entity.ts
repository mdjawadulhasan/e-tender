
import { AdminEntity } from 'src/admin/entities/admin.entity';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany, ManyToOne } from 'typeorm';
import { FeedBackEntity } from './FeedBack.entity';

@Entity("Megisters")
export class MegisterEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    password: string;
    @Column()
    Email: string;
    @Column({nullable:true})
    ImgfileName: string;

    @OneToMany(() => FeedBackEntity, (feedBack) => feedBack.Megister)
    feedBacks: FeedBackEntity[]

    @ManyToOne(() => AdminEntity, (Admin) => Admin.Megisters)
    Admin: AdminEntity

}