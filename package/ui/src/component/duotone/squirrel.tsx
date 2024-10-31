
import { Icon, generic } from "../../index";

/**
 * A component that renders the `squirrel` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/squirrel?s=duotone squirrel}
 * @preview ![squirrel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/squirrel.svg)
 */
const Squirrel: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 144c0 79.5 64.5 144 144 144c2.3 0 4.6-.1 6.9-.2c4.9-.2 9.1 3.5 9.1 8.4c0 2-.7 3.9-2 5.4c-18.7 22.3-30 51-30 82.3c0 70.7 57.3 128 128 128c16 0 32 0 48 0c-62-.6-112-51-112-113.1l0-3.8c0-27.6 11-54.1 30.5-73.6l7-7c1.5-1.5 3-3 4.5-4.5s2.9-3.1 4.4-4.6c2.9-3.1 5.7-6.3 8.4-9.5c5.5-6.4 10.6-13.1 15.5-19.9c9.8-13.6 18.4-28 25.8-43l0-88.9C288 64.5 223.5 0 144 0S0 64.5 0 144z" />
        <path d="M320 75.2C320 69 325 64 331.2 64c15.2 0 28.7 7.6 36.8 19.2C376.1 71.6 389.6 64 404.8 64C411 64 416 69 416 75.2L416 96c53 0 96 43 96 96l-8.2 12.4c-14.8 22.3-39.8 35.6-66.6 35.6L416 240l0 58.8c-14.5-6.9-30.8-10.8-48-10.8c-13.1 0-25.6 2.2-37.3 6.4c-8.3 2.9-12.7 12.1-9.8 20.4s12.1 12.7 20.4 9.8c8.3-2.9 17.3-4.5 26.7-4.5c18 0 34.6 6 48 16c19.4 14.6 32 37.8 32 64c0 18-6 34.6-16 48l16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-72 0-24 0-32 0-14.9 0-1.1 0s0 0 0 0c-62-.6-112-51-112-113.1l0-3.8c0-27.6 11-54.1 30.5-73.6l7-7C287.4 256.6 320 178 320 96l0-20.8zM416 176a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Squirrel;