/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-http";
import {
  PhoneNumberSearchRequest as PhoneNumberSearchRequestMapper,
  PhoneNumberPurchaseRequest as PhoneNumberPurchaseRequestMapper,
  AcquiredPhoneNumberUpdate as AcquiredPhoneNumberUpdateMapper,
  PhoneNumberCapabilitiesRequest as PhoneNumberCapabilitiesRequestMapper
} from "../models/mappers";

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const search: OperationParameter = {
  parameterPath: "search",
  mapper: PhoneNumberSearchRequestMapper
};

export const endpoint: OperationURLParameter = {
  parameterPath: "endpoint",
  mapper: {
    serializedName: "endpoint",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const countryCode: OperationURLParameter = {
  parameterPath: "countryCode",
  mapper: {
    serializedName: "countryCode",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2020-11-01-preview3",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const searchId: OperationURLParameter = {
  parameterPath: "searchId",
  mapper: {
    serializedName: "searchId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const purchase: OperationParameter = {
  parameterPath: "purchase",
  mapper: PhoneNumberPurchaseRequestMapper
};

export const operationId: OperationURLParameter = {
  parameterPath: "operationId",
  mapper: {
    serializedName: "operationId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const phoneNumber: OperationURLParameter = {
  parameterPath: "phoneNumber",
  mapper: {
    serializedName: "phoneNumber",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const contentType1: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/merge-patch+json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const update: OperationParameter = {
  parameterPath: "update",
  mapper: AcquiredPhoneNumberUpdateMapper
};

export const update1: OperationParameter = {
  parameterPath: "update",
  mapper: PhoneNumberCapabilitiesRequestMapper
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
