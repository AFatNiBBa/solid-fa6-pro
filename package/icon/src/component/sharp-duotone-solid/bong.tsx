
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bong` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bong?s=sharp-duotone-solid bong}
 * @preview ![bong](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bong.svg)
 */
const Bong: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 384c0 49.2 18.5 94 48.9 128l286.2 0c30.4-34 48.9-78.8 48.9-128c0-36.1-10-69.9-27.3-98.8L400 241.9l7 7 17 17L457.9 232l-17-17-24-24-24-24-17-17L342.1 184l17 17 7 7-39.3 39.3c-11.6-11.4-24.6-21.4-38.8-29.6L288 64l32 0 0-64L288 0 224 0 160 0 96 0 64 0l0 64 32 0 0 153.7C38.6 250.9 0 312.9 0 384zm64 0c0-23.3 6.2-45.2 17.1-64c11.2-19.4 27.4-35.6 46.9-46.9l32-18.5 0-36.9L160 64l64 0 0 153.7 0 36.9 32 18.5c19.5 11.3 35.7 27.5 46.9 46.9c10.9 18.8 17.1 40.7 17.1 64c0 23.4-6.2 45.2-17.1 64L81.1 448C70.2 429.2 64 407.4 64 384z" />
        <path d="M302.9 320L81.1 320C70.2 338.8 64 360.7 64 384c0 23.4 6.2 45.2 17.1 64l221.8 0c10.9-18.8 17.1-40.6 17.1-64c0-23.3-6.2-45.2-17.1-64z" />
    </Icon>
);

export default Bong;