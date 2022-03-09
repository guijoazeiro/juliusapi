import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Lancamento {

    constructor(valor: number, descricao: string, data: Date){
        this.valor = valor;
        this.descricao = descricao;
        this.data = data;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'float' })
    valor: number

    @Column()
    descricao: string;

    @Column()
    data: Date
}