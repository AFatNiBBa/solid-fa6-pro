
import { Icon, generic } from "../../index";

/**
 * A component that renders the `yen-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/yen-sign?s=duotone yen-sign}
 * @preview ![yen-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/yen-sign.svg)
 */
const YenSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M16 256c0 17.7 14.3 32 32 32l80 0c0-7.4 0-14.9 0-22.3c-9.3-13.9-18.5-27.8-27.8-41.7L48 224c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32l80 0c0-21.3 0-42.7 0-64l-80 0c-17.7 0-32 14.3-32 32zm176-86.3l0 22.3 80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-52.2 0L192 265.7zm0 54.3l0 64 80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-80 0z" />
        <path d="M58.6 46.3C48.8 31.5 29 27.6 14.2 37.4S-4.4 67 5.4 81.8L128 265.7 128 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-182.3L314.6 81.8c9.8-14.7 5.8-34.6-8.9-44.4s-34.6-5.8-44.4 8.9L160 198.3 58.6 46.3z" />
    </Icon>
);

export default YenSign;