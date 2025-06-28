import type { DefineComponent } from 'vue';
export interface HeaderDataItemType {
    id: number;
    name: string;
    link?: string;
    isStatic?: boolean;
    isLast?: boolean;
    icon?: DefineComponent<{}, {}, any>;
    isIndicator?: boolean;
}
