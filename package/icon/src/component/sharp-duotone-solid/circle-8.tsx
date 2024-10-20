
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-8` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-8?s=sharp-duotone-solid circle-8}
 * @preview ![circle-8](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-8.svg)
 */
const Circle_8: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm160 48c0-25 11.5-47.4 29.5-62C181 230.1 176 215.7 176 200c0-39.8 32.2-72 72-72l16 0c39.8 0 72 32.2 72 72c0 15.7-5 30.1-13.5 42c18 14.7 29.5 37 29.5 62c0 44.2-35.8 80-80 80l-32 0c-44.2 0-80-35.8-80-80zm48 0c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-8 0-16 0-8 0c-17.7 0-32 14.3-32 32zm16-104c0 13.2 10.7 24 24 24l16 0c13.3 0 24-10.8 24-24c0-13.3-10.7-24-24-24l-16 0c-13.3 0-24 10.7-24 24z" />
        <path d="M336 200c0-39.8-32.2-72-72-72l-16 0c-39.8 0-72 32.2-72 72c0 15.7 5 30.1 13.5 42c-18 14.7-29.5 37-29.5 62c0 44.2 35.8 80 80 80l32 0c44.2 0 80-35.8 80-80c0-25-11.5-47.4-29.5-62c8.5-11.8 13.5-26.3 13.5-42zm-72 72l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c0 0 0 0 0 0l16 0c0 0 0 0 0 0zm0-48L248 224c-13.2 0-24-10.8-24-24s10.7-24 24-24l16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24z" />
    </Icon>
);

export default Circle_8;