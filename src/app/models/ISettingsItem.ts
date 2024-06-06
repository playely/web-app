export interface ISettingsSection {
    title: string;
    items: ISettingsItem[];
}

export interface ISettingsItem {
    title: string;
    description: string;
    control: 'select' | 'boolean' | 'arrow';
    values?: {value: string; label: string}[];
    link?: string;
    value?: boolean | string;
}