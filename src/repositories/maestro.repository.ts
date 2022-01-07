import {DefaultCrudRepository} from '@loopback/repository';
import {Maestro, MaestroRelations} from '../models';
import {DataJsonDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MaestroRepository extends DefaultCrudRepository<
  Maestro,
  typeof Maestro.prototype.id,
  MaestroRelations
> {
  constructor(
    @inject('datasources.dataJson') dataSource: DataJsonDataSource,
  ) {
    super(Maestro, dataSource);
  }
}
