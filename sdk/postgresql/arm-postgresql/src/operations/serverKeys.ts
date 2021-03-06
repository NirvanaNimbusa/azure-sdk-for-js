/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/serverKeysMappers";
import * as Parameters from "../models/parameters";
import { PostgreSQLManagementClientContext } from "../postgreSQLManagementClientContext";

/** Class representing a ServerKeys. */
export class ServerKeys {
  private readonly client: PostgreSQLManagementClientContext;

  /**
   * Create a ServerKeys.
   * @param {PostgreSQLManagementClientContext} client Reference to the service client.
   */
  constructor(client: PostgreSQLManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of  Server keys.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServerKeysListResponse>
   */
  list(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase): Promise<Models.ServerKeysListResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param callback The callback
   */
  list(resourceGroupName: string, serverName: string, callback: msRest.ServiceCallback<Models.ServerKeyListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, serverName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServerKeyListResult>): void;
  list(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServerKeyListResult>, callback?: msRest.ServiceCallback<Models.ServerKeyListResult>): Promise<Models.ServerKeysListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ServerKeysListResponse>;
  }

  /**
   * Gets a PostgreSQL Server key.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param keyName The name of the PostgreSQL Server key to be retrieved.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServerKeysGetResponse>
   */
  get(resourceGroupName: string, serverName: string, keyName: string, options?: msRest.RequestOptionsBase): Promise<Models.ServerKeysGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param keyName The name of the PostgreSQL Server key to be retrieved.
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, keyName: string, callback: msRest.ServiceCallback<Models.ServerKey>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param keyName The name of the PostgreSQL Server key to be retrieved.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, keyName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServerKey>): void;
  get(resourceGroupName: string, serverName: string, keyName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServerKey>, callback?: msRest.ServiceCallback<Models.ServerKey>): Promise<Models.ServerKeysGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        keyName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ServerKeysGetResponse>;
  }

  /**
   * Creates or updates a PostgreSQL Server key.
   * @param serverName The name of the server.
   * @param keyName The name of the PostgreSQL Server key to be operated on (updated or created).
   * @param parameters The requested PostgreSQL Server key resource state.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServerKeysCreateOrUpdateResponse>
   */
  createOrUpdate(serverName: string, keyName: string, parameters: Models.ServerKey, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.ServerKeysCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(serverName,keyName,parameters,resourceGroupName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ServerKeysCreateOrUpdateResponse>;
  }

  /**
   * Deletes the PostgreSQL Server key with the given name.
   * @param serverName The name of the server.
   * @param keyName The name of the PostgreSQL Server key to be deleted.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(serverName: string, keyName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(serverName,keyName,resourceGroupName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates or updates a PostgreSQL Server key.
   * @param serverName The name of the server.
   * @param keyName The name of the PostgreSQL Server key to be operated on (updated or created).
   * @param parameters The requested PostgreSQL Server key resource state.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(serverName: string, keyName: string, parameters: Models.ServerKey, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        serverName,
        keyName,
        parameters,
        resourceGroupName,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes the PostgreSQL Server key with the given name.
   * @param serverName The name of the server.
   * @param keyName The name of the PostgreSQL Server key to be deleted.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(serverName: string, keyName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        serverName,
        keyName,
        resourceGroupName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Gets a list of  Server keys.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServerKeysListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ServerKeysListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ServerKeyListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServerKeyListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServerKeyListResult>, callback?: msRest.ServiceCallback<Models.ServerKeyListResult>): Promise<Models.ServerKeysListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ServerKeysListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/servers/{serverName}/keys",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ServerKeyListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/servers/{serverName}/keys/{keyName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.keyName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ServerKey
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/servers/{serverName}/keys/{keyName}",
  urlParameters: [
    Parameters.serverName,
    Parameters.keyName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ServerKey,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ServerKey
    },
    202: {
      bodyMapper: Mappers.ServerKey
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/servers/{serverName}/keys/{keyName}",
  urlParameters: [
    Parameters.serverName,
    Parameters.keyName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ServerKeyListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
