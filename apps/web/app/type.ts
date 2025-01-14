export type Order = {
  id: string;
  orderCreaterName: string;
  status: EOrderStatus;
  processMark: string;
  subProcessMark: string;
  division: OrderDivisionType;
  installationDate: Date;
  planStartDate: Date;
  planEndDate: Date;
  customerInformation: CustomerInformation;
  devices: Devices[];
};

export interface CustomerInformation {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  mobilePhone: string;
  address: CustomerInformationAddress;
}

export interface CustomerInformationAddress {
  city: string;
  district: string;
  postalCode: string;
  street: string;
}

export interface Devices {
  deviceType: string; // 'Z'
  deviceCode: string; // 'MMF/ABF'
  measurementType: string;
  deviceClassification: string; // 'ZN9F10DG'
}

export enum EOrderStatus {
  "DISPATCH" = "dispatch",
  "WORKING" = "working",
}

export type OrderDivisionType = "ELECTRICITY" | "DIVISION";
