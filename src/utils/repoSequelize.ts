import { Model } from 'sequelize-typescript';
import { NonAbstract } from 'sequelize-typescript/dist/shared/types';

export declare type Repository<M> = (new () => M) & NonAbstract<typeof Model>;
export declare type ModelCtor<M extends Model = Model> = Repository<M>;

export default class RepositoryService<T extends Model<T>> {
    // constructor(protected model: ModelCtor<T>) {}

    public async getOneRow(model: ModelCtor<T>): Promise<T[]> {
        return model.findAll({
            limit: 1,
            raw: true,
            nest: true,
        });
    }
}
