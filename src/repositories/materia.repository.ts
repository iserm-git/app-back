import {DefaultCrudRepository} from '@loopback/repository';
import {Materia, MateriaRelations} from '../models';
import {DataJsonDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MateriaRepository extends DefaultCrudRepository<
  Materia,
  typeof Materia.prototype.id,
  MateriaRelations
> {
  constructor(
    @inject('datasources.dataJson') dataSource: DataJsonDataSource,
  ) {
    super(Materia, dataSource);
  }
}
