
import { Icon, generic } from "../../index";

/**
 * A component that renders the `spade` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spade?s=duotone spade}
 * @preview ![spade](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/spade.svg)
 */
const Spade: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 289.3c0 31.6 11.6 63.3 35.1 88c48.6 51.3 129.6 53.5 181 4.9l8-7.6L224 256c0-17.7 14.3-32 32-32s32 14.3 32 32l0 118.6 8 7.6c24.8 23.4 56.4 35.1 88 35.1c33.9 0 67.8-13.4 92.9-40c23.4-24.8 35.1-56.4 35.1-88c0-33.9-13.4-67.8-40-92.9L344 75.1 278 12.5c-6.2-5.8-14.1-8.8-22-8.8s-15.8 2.9-22 8.8L168 75.1 40 196.3c-26.6 25.2-40 59-40 92.9z" />
        <path d="M256 224c17.7 0 32 14.3 32 32l0 192 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-192c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default Spade;