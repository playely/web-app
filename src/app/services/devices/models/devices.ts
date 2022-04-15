export enum DeviceType {
    WEB = 'web',
    MOBILE_WEB = 'mobile-web',
    MOBILE = 'mobile',
    SMART_TV = 'smart-tv'
}

export interface IDevice {
    id: string;
    serial: string;
    name: string;
    type: DeviceType;
    enrollDate: Date;
    status: boolean;
    isCurrentDevice: boolean;
}

