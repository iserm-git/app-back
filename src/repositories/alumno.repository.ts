import {DefaultCrudRepository} from '@loopback/repository';
import {Alumno, AlumnoRelations} from '../models';
import {DataJsonDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AlumnoRepository extends DefaultCrudRepository<
  Alumno,
  typeof Alumno.prototype.id,
  AlumnoRelations
> {
  constructor(
    @inject('datasources.dataJson') dataSource: DataJsonDataSource,
  ) {
    super(Alumno, dataSource);
  }
}
