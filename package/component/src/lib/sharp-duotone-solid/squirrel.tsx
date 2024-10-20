
import { Icon, generic } from "../../index";

/**
 * A component that renders the `squirrel` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/squirrel?s=sharp-duotone-solid squirrel}
 * @preview ![squirrel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/squirrel.svg)
 */
const Squirrel: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 144c0 79.5 64.5 144 144 144c5.4 0 10.7-.3 16-.9l0 12.2c-19.9 22.6-32 52.2-32 84.7l0 128 128 0c16 0 32 0 48 0c-62-.6-112-51-112-113.1c0-30 11.9-58.8 33.1-80L288 256l0-112C288 64.5 223.5 0 144 0S0 64.5 0 144z" />
        <path d="M416 96l0 1.5c2.9 .9 5.6 2.2 8.1 3.9L512 160l0 32-32 48-64 0 0 58.8c-14.5-6.9-30.8-10.8-48-10.8c-13.1 0-25.6 2.2-37.3 6.4l10.7 30.2c8.3-2.9 17.3-4.5 26.7-4.5c18 0 34.6 6 48 16c19.4 14.6 32 37.8 32 64c0 18-6 34.6-16 48l16 0 32 0 0 64-32 0-72 0-24 0-32 0-14.9 0-1.1 0s0 0 0 0c-62-.6-112-51-112-113.1c0-30 11.9-58.8 33.1-80L320 224l0-41.8 0-54.2 0-32 0-32c20.4 0 38.2 10.9 48 27.1C377.8 74.9 395.6 64 416 64l0 32zm0 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Squirrel;