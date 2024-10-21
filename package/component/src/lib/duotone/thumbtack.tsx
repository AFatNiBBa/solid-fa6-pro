
import { Icon, generic } from "../../index";

/**
 * A component that renders the `thumbtack` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thumbtack?s=duotone thumbtack}
 * @preview ![thumbtack](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/thumbtack.svg)
 */
const Thumbtack: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 320c0 6.6 2.1 13.2 6 18.7c6 8.3 15.7 13.3 26 13.3l128 0 0-96c0-17.7 14.3-32 32-32s32 14.3 32 32l0 96 128 0c10.3 0 19.9-4.9 26-13.3c4-5.5 6-12.1 6-18.7c0-3.4-.5-6.8-1.6-10.1l-1-3c-13.8-41.5-42.8-74.8-79.5-94.7L290.5 64 320 64c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 0C46.3 0 32 14.3 32 32s14.3 32 32 32l29.5 0L82.1 212.2c-36.7 19.9-65.7 53.2-79.5 94.7l-1 3C.5 313.2 0 316.6 0 320z" />
        <path d="M192 224c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-224c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default Thumbtack;