import {Entity, model, property} from '@loopback/repository';

@model()
export class Promedio extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  idMateria: number;

  @property({
    type: 'number',
    required: true,
  })
  idAlumno: number;

  @property({
    type: 'number',
    required: true,
  })
  idMaestro: number;

  @property({
    type: 'number',
    required: true,
  })
  calificacion: number;


  constructor(data?: Partial<Promedio>) {
    super(data);
  }
}

export interface PromedioRelations {
  // describe navigational properties here
}

export type PromedioWithRelations = Promedio & PromedioRelations;
