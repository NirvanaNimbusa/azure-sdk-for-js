/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const AcquiredPhoneNumbers: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AcquiredPhoneNumbers",
    modelProperties: {
      phoneNumbers: {
        serializedName: "phoneNumbers",
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "AcquiredPhoneNumber" }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AcquiredPhoneNumber: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AcquiredPhoneNumber",
    modelProperties: {
      phoneNumber: {
        serializedName: "phoneNumber",
        required: true,
        type: {
          name: "String"
        }
      },
      acquiredCapabilities: {
        serializedName: "acquiredCapabilities",
        required: true,
        type: {
          name: "Sequence",
          element: { type: { name: "String" } }
        }
      },
      availableCapabilities: {
        serializedName: "availableCapabilities",
        required: true,
        type: {
          name: "Sequence",
          element: { type: { name: "String" } }
        }
      },
      assignmentStatus: {
        serializedName: "assignmentStatus",
        type: {
          name: "String"
        }
      },
      placeName: {
        serializedName: "placeName",
        type: {
          name: "String"
        }
      },
      activationState: {
        serializedName: "activationState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorBody"
        }
      }
    }
  }
};

export const ErrorBody: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorBody",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LocationOptionsQueries: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LocationOptionsQueries",
    modelProperties: {
      locationOptions: {
        serializedName: "locationOptions",
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "LocationOptionsQuery" }
          }
        }
      }
    }
  }
};

export const LocationOptionsQuery: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LocationOptionsQuery",
    modelProperties: {
      labelId: {
        serializedName: "labelId",
        type: {
          name: "String"
        }
      },
      optionsValue: {
        serializedName: "optionsValue",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AreaCodes: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AreaCodes",
    modelProperties: {
      primaryAreaCodes: {
        serializedName: "primaryAreaCodes",
        type: {
          name: "Sequence",
          element: { type: { name: "String" } }
        }
      },
      secondaryAreaCodes: {
        serializedName: "secondaryAreaCodes",
        type: {
          name: "Sequence",
          element: { type: { name: "String" } }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UpdatePhoneNumberCapabilitiesResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdatePhoneNumberCapabilitiesResponse",
    modelProperties: {
      capabilitiesUpdateId: {
        serializedName: "capabilitiesUpdateId",
        type: {
          name: "String"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      capabilitiesUpdateStatus: {
        serializedName: "capabilitiesUpdateStatus",
        type: {
          name: "String"
        }
      },
      phoneNumberCapabilitiesUpdates: {
        serializedName: "phoneNumberCapabilitiesUpdates",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "NumberUpdateCapabilities" }
          }
        }
      }
    }
  }
};

export const NumberUpdateCapabilities: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NumberUpdateCapabilities",
    modelProperties: {
      add: {
        serializedName: "add",
        type: {
          name: "Sequence",
          element: { type: { name: "String" } }
        }
      },
      remove: {
        serializedName: "remove",
        type: {
          name: "Sequence",
          element: { type: { name: "String" } }
        }
      }
    }
  }
};

export const UpdateNumberCapabilitiesRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateNumberCapabilitiesRequest",
    modelProperties: {
      phoneNumberCapabilitiesUpdate: {
        serializedName: "phoneNumberCapabilitiesUpdate",
        required: true,
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "NumberUpdateCapabilities" }
          }
        }
      }
    }
  }
};

export const UpdateNumberCapabilitiesResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateNumberCapabilitiesResponse",
    modelProperties: {
      capabilitiesUpdateId: {
        serializedName: "capabilitiesUpdateId",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PhoneNumberCountries: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PhoneNumberCountries",
    modelProperties: {
      countries: {
        serializedName: "countries",
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "PhoneNumberCountry" }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PhoneNumberCountry: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PhoneNumberCountry",
    modelProperties: {
      localizedName: {
        serializedName: "localizedName",
        required: true,
        type: {
          name: "String"
        }
      },
      countryCode: {
        serializedName: "countryCode",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NumberConfigurationPhoneNumber: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NumberConfigurationPhoneNumber",
    modelProperties: {
      phoneNumber: {
        serializedName: "phoneNumber",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NumberConfigurationResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NumberConfigurationResponse",
    modelProperties: {
      pstnConfiguration: {
        serializedName: "pstnConfiguration",
        type: {
          name: "Composite",
          className: "PstnConfiguration"
        }
      }
    }
  }
};

export const PstnConfiguration: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PstnConfiguration",
    modelProperties: {
      callbackUrl: {
        serializedName: "callbackUrl",
        required: true,
        type: {
          name: "String"
        }
      },
      applicationId: {
        serializedName: "applicationId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NumberConfiguration: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NumberConfiguration",
    modelProperties: {
      pstnConfiguration: {
        serializedName: "pstnConfiguration",
        type: {
          name: "Composite",
          className: "PstnConfiguration"
        }
      },
      phoneNumber: {
        serializedName: "phoneNumber",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PhonePlanGroups: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PhonePlanGroups",
    modelProperties: {
      phonePlanGroups: {
        serializedName: "phonePlanGroups",
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "PhonePlanGroup" } }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PhonePlanGroup: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PhonePlanGroup",
    modelProperties: {
      phonePlanGroupId: {
        serializedName: "phonePlanGroupId",
        required: true,
        type: {
          name: "String"
        }
      },
      phoneNumberType: {
        serializedName: "phoneNumberType",
        type: {
          name: "String"
        }
      },
      localizedName: {
        serializedName: "localizedName",
        required: true,
        type: {
          name: "String"
        }
      },
      localizedDescription: {
        serializedName: "localizedDescription",
        required: true,
        type: {
          name: "String"
        }
      },
      carrierDetails: {
        serializedName: "carrierDetails",
        type: {
          name: "Composite",
          className: "CarrierDetails"
        }
      },
      rateInformation: {
        serializedName: "rateInformation",
        type: {
          name: "Composite",
          className: "RateInformation"
        }
      }
    }
  }
};

export const CarrierDetails: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CarrierDetails",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      localizedName: {
        serializedName: "localizedName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RateInformation: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RateInformation",
    modelProperties: {
      monthlyRate: {
        serializedName: "monthlyRate",
        type: {
          name: "Number"
        }
      },
      currencyType: {
        defaultValue: "USD",
        isConstant: true,
        serializedName: "currencyType",
        type: {
          name: "String"
        }
      },
      rateErrorMessage: {
        serializedName: "rateErrorMessage",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PhonePlansResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PhonePlansResponse",
    modelProperties: {
      phonePlans: {
        serializedName: "phonePlans",
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "PhonePlan" } }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PhonePlan: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PhonePlan",
    modelProperties: {
      phonePlanId: {
        serializedName: "phonePlanId",
        required: true,
        type: {
          name: "String"
        }
      },
      localizedName: {
        serializedName: "localizedName",
        required: true,
        type: {
          name: "String"
        }
      },
      locationType: {
        serializedName: "locationType",
        required: true,
        type: {
          name: "String"
        }
      },
      areaCodes: {
        serializedName: "areaCodes",
        type: {
          name: "Sequence",
          element: { type: { name: "String" } }
        }
      },
      capabilities: {
        serializedName: "capabilities",
        type: {
          name: "Sequence",
          element: { type: { name: "String" } }
        }
      },
      maximumSearchSize: {
        serializedName: "maximumSearchSize",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LocationOptionsResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LocationOptionsResponse",
    modelProperties: {
      locationOptions: {
        serializedName: "locationOptions",
        type: {
          name: "Composite",
          className: "LocationOptions"
        }
      }
    }
  }
};

export const LocationOptions: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LocationOptions",
    modelProperties: {
      labelId: {
        serializedName: "labelId",
        type: {
          name: "String"
        }
      },
      labelName: {
        serializedName: "labelName",
        type: {
          name: "String"
        }
      },
      options: {
        serializedName: "options",
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "LocationOptionsDetails" }
          }
        }
      }
    }
  }
};

export const LocationOptionsDetails: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LocationOptionsDetails",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      locationOptions: {
        serializedName: "locationOptions",
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "LocationOptions" } }
        }
      }
    }
  }
};

export const PhoneNumberRelease: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PhoneNumberRelease",
    modelProperties: {
      releaseId: {
        serializedName: "releaseId",
        type: {
          name: "String"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      errorMessage: {
        serializedName: "errorMessage",
        type: {
          name: "String"
        }
      },
      phoneNumberReleaseStatusDetails: {
        serializedName: "phoneNumberReleaseStatusDetails",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "PhoneNumberReleaseDetails" }
          }
        }
      }
    }
  }
};

export const PhoneNumberReleaseDetails: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PhoneNumberReleaseDetails",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      errorCode: {
        serializedName: "errorCode",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ReleaseRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ReleaseRequest",
    modelProperties: {
      phoneNumbers: {
        serializedName: "phoneNumbers",
        required: true,
        type: {
          name: "Sequence",
          element: { type: { name: "String" } }
        }
      }
    }
  }
};

export const ReleaseResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ReleaseResponse",
    modelProperties: {
      releaseId: {
        serializedName: "releaseId",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PhoneNumberEntities: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PhoneNumberEntities",
    modelProperties: {
      entities: {
        serializedName: "entities",
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "PhoneNumberEntity" }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PhoneNumberEntity: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PhoneNumberEntity",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      quantity: {
        serializedName: "quantity",
        type: {
          name: "Number"
        }
      },
      quantityObtained: {
        serializedName: "quantityObtained",
        type: {
          name: "Number"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      focDate: {
        serializedName: "focDate",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const PhoneNumberReservation: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PhoneNumberReservation",
    modelProperties: {
      reservationId: {
        serializedName: "searchId",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      phonePlanIds: {
        serializedName: "phonePlanIds",
        type: {
          name: "Sequence",
          element: { type: { name: "String" } }
        }
      },
      areaCode: {
        serializedName: "areaCode",
        type: {
          name: "String"
        }
      },
      quantity: {
        serializedName: "quantity",
        type: {
          name: "Number"
        }
      },
      locationOptions: {
        serializedName: "locationOptions",
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "LocationOptionsDetails" }
          }
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      phoneNumbers: {
        serializedName: "phoneNumbers",
        type: {
          name: "Sequence",
          element: { type: { name: "String" } }
        }
      },
      reservationExpiryDate: {
        serializedName: "reservationExpiryDate",
        type: {
          name: "DateTime"
        }
      },
      errorCode: {
        serializedName: "errorCode",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const CreateSearchOptions: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateSearchOptions",
    modelProperties: {
      displayName: {
        constraints: {
          MaxLength: 255
        },
        serializedName: "displayName",
        required: true,
        type: {
          name: "String"
        }
      },
      description: {
        constraints: {
          MaxLength: 255
        },
        serializedName: "description",
        required: true,
        type: {
          name: "String"
        }
      },
      phonePlanIds: {
        serializedName: "phonePlanIds",
        required: true,
        type: {
          name: "Sequence",
          element: { type: { name: "String" } }
        }
      },
      areaCode: {
        serializedName: "areaCode",
        required: true,
        type: {
          name: "String"
        }
      },
      quantity: {
        constraints: {
          InclusiveMaximum: 2147483647,
          InclusiveMinimum: 1
        },
        serializedName: "quantity",
        type: {
          name: "Number"
        }
      },
      locationOptions: {
        serializedName: "locationOptions",
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "LocationOptionsDetails" }
          }
        }
      }
    }
  }
};

export const CreateSearchResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateSearchResponse",
    modelProperties: {
      searchId: {
        serializedName: "searchId",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};
