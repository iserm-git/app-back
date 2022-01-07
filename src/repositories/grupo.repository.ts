import {DefaultCrudRepository} from '@loopback/repository';
import {Grupo, GrupoRelations} from '../models';
import {DataJsonDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class GrupoRepository extends DefaultCrudRepository<
  Grupo,
  typeof Grupo.prototype.id,
  GrupoRelations
> {
  constructor(
    @inject('datasources.dataJson') dataSource: DataJsonDataSource,
  ) {
    super(Grupo, dataSource);
  }
}
