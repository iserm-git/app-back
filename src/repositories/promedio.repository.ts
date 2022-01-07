import {DefaultCrudRepository} from '@loopback/repository';
import {Promedio, PromedioRelations} from '../models';
import {DataJsonDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PromedioRepository extends DefaultCrudRepository<
  Promedio,
  typeof Promedio.prototype.id,
  PromedioRelations
> {
  constructor(
    @inject('datasources.dataJson') dataSource: DataJsonDataSource,
  ) {
    super(Promedio, dataSource);
  }
}
