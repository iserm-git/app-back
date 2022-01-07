import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Promedio} from '../models';
import {PromedioRepository} from '../repositories';

export class PromedioControllerController {
  constructor(
    @repository(PromedioRepository)
    public promedioRepository : PromedioRepository,
  ) {}

  @post('/promedios', {
    responses: {
      '200': {
        description: 'Promedio model instance',
        content: {'application/json': {schema: getModelSchemaRef(Promedio)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Promedio, {
            title: 'NewPromedio',
            exclude: ['id'],
          }),
        },
      },
    })
    promedio: Omit<Promedio, 'id'>,
  ): Promise<Promedio> {
    return this.promedioRepository.create(promedio);
  }

  @get('/promedios/count', {
    responses: {
      '200': {
        description: 'Promedio model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Promedio) where?: Where<Promedio>,
  ): Promise<Count> {
    return this.promedioRepository.count(where);
  }

  @get('/promedios', {
    responses: {
      '200': {
        description: 'Array of Promedio model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Promedio, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Promedio) filter?: Filter<Promedio>,
  ): Promise<Promedio[]> {
    return this.promedioRepository.find(filter);
  }

  @patch('/promedios', {
    responses: {
      '200': {
        description: 'Promedio PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Promedio, {partial: true}),
        },
      },
    })
    promedio: Promedio,
    @param.where(Promedio) where?: Where<Promedio>,
  ): Promise<Count> {
    return this.promedioRepository.updateAll(promedio, where);
  }

  @get('/promedios/{id}', {
    responses: {
      '200': {
        description: 'Promedio model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Promedio, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Promedio, {exclude: 'where'}) filter?: FilterExcludingWhere<Promedio>
  ): Promise<Promedio> {
    return this.promedioRepository.findById(id, filter);
  }

  @patch('/promedios/{id}', {
    responses: {
      '204': {
        description: 'Promedio PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Promedio, {partial: true}),
        },
      },
    })
    promedio: Promedio,
  ): Promise<void> {
    await this.promedioRepository.updateById(id, promedio);
  }

  @put('/promedios/{id}', {
    responses: {
      '204': {
        description: 'Promedio PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() promedio: Promedio,
  ): Promise<void> {
    await this.promedioRepository.replaceById(id, promedio);
  }

  @del('/promedios/{id}', {
    responses: {
      '204': {
        description: 'Promedio DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.promedioRepository.deleteById(id);
  }
}
