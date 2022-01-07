import {Entity, model, property} from '@loopback/repository';

@model()
export class Maestro extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nomMaestro: string;

  @property({
    type: 'number',
    required: true,
  })
  idCarrera: number;


  constructor(data?: Partial<Maestro>) {
    super(data);
  }
}

export interface MaestroRelations {
  // describe navigational properties here
}

export type MaestroWithRelations = Maestro & MaestroRelations;
