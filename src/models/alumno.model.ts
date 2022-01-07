import {Entity, model, property} from '@loopback/repository';

@model()
export class Alumno extends Entity {
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
  noControl: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'number',
    required: true,
  })
  cveCarrera: number;


  constructor(data?: Partial<Alumno>) {
    super(data);
  }
}

export interface AlumnoRelations {
  // describe navigational properties here
}

export type AlumnoWithRelations = Alumno & AlumnoRelations;
