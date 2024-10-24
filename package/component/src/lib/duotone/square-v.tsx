
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-v` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-v?s=duotone square-v}
 * @preview ![square-v](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-v.svg)
 */
const SquareV: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm98.5 82.7c-5.9-11.9-1.1-26.3 10.7-32.2s26.3-1.1 32.2 10.7c27.5 55 55 110.1 82.5 165.1c27.5-55 55-110 82.5-165.1c5.9-11.9 20.3-16.7 32.2-10.7c8.4 4.2 13.3 12.7 13.3 21.5c0 3.6-.8 7.3-2.5 10.7c-34.7 69.3-69.3 138.7-104 208c-4.1 8.1-12.4 13.3-21.5 13.3s-17.4-5.1-21.5-13.3c-34.7-69.3-69.3-138.7-104-208z" />
        <path d="M109.3 146.5c11.9-5.9 26.3-1.1 32.2 10.7L224 322.3l82.5-165.1c5.9-11.9 20.3-16.7 32.2-10.7s16.7 20.3 10.7 32.2l-104 208c-4.1 8.1-12.4 13.3-21.5 13.3s-17.4-5.1-21.5-13.3l-104-208c-5.9-11.9-1.1-26.3 10.7-32.2z" />
    </Icon>
);

export default SquareV;