import type { Types } from 'mongoose';

//#############################################################################
//   Types for use in `apps/api`                                              #
//#############################################################################

/**
 * Interface representing the base model with common fields.
 */
export interface IBaseModel {
  /**
   * The unique identifier for the model.
   */
  _id: Types.ObjectId;

  /**
   * The date when the model was created.
   */
  createdAt: Date;

  /**
   * The date when the model was last updated.
   */
  updatedAt: Date;

  /**
   * The version number of the document.
   * This is used for internal versioning by the database.
   */
  _version: number;
}

/**
 * Type representing the fields to omit from the base model.
 */
export type OmitBaseModelFields = '_id' | 'createdAt' | 'updatedAt' | '_version';

//#############################################################################
//  Types used in REST API requests and responses                             #
//#############################################################################

/**
 * Interface representing the base model for API responses, with string types for certain fields.
 */
export interface APIBaseModel extends Omit<IBaseModel, OmitBaseModelFields> {
  /**
   * The unique identifier for the model as a string.
   */
  _id: string;

  /**
   * The creation date as a string.
   */
  createdAt: string;

  /**
   * The last update date as a string.
   */
  updatedAt: string;

  /**
   * The version number of the entity.
   * This is used for version control and concurrency management.
   */
  _version: number;
}
