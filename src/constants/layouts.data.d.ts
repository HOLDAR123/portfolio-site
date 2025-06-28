import type { HeaderDataItemType } from "@/types/header.type.ts";
export declare const leftHeaderData: HeaderDataItemType[];
export declare const rightHeaderData: HeaderDataItemType[];
export declare const leftFooterData: ({
    id: number;
    name: string;
    isStatic: boolean;
    icon?: undefined;
    link?: undefined;
} | {
    id: number;
    icon: import("vue").DefineComponent<{}, {
        width: string | number;
        height: string | number;
        color: string;
        $props: {
            readonly width?: string | number | undefined;
            readonly height?: string | number | undefined;
            readonly color?: string | undefined;
        };
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    isStatic: boolean;
    link: string;
    name?: undefined;
})[];
export declare const rightFooterData: {
    id: number;
    name: string;
    icon: import("vue").DefineComponent<{}, {
        width: string | number;
        height: string | number;
        color: string;
        $props: {
            readonly width?: string | number | undefined;
            readonly height?: string | number | undefined;
            readonly color?: string | undefined;
        };
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    isStatic: boolean;
    link: string;
}[];
