import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { Length, IsNotEmpty } from "class-validator";
import * as bcrypt from "bcryptjs";
  
export enum PartnerRole {
    PARTNER = '파트너',
    DEALER = '지역 파트너',
    ASSIGNEE = '배정자',
    OFFICER = '주무관'
}

@Entity({ name : "tbl_partner_node"})
export class User {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column()
    @CreateDateColumn()
    created_at: Date;

    @Column()
    @UpdateDateColumn()
    modified_at: Date;

    @Column()
    @Length(0, 50)
    name: string;

    @Column()
    @Length(4, 50)
    username: string;

    @Column()
    @Length(4, 100)
    password: string;

    @Column()
    @Length(0, 20)
    type: PartnerRole;

    @Column()
    @Length(0, 20)
    phone_number: string;

    @Column({ type: 'bigint' })
    customer_id: number;

    @Column()
    @Length(0, 1)
    enabled: string;

    hashPassword() {
        this.password = '{brypt}' + bcrypt.hashSync(this.password, 10);
    }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        var r = /\{bcrypt\}/gi; 
        var c = this.password.replace(r, ""); 
        let ok = bcrypt.compareSync(unencryptedPassword, c);

        return ok;
    }
}