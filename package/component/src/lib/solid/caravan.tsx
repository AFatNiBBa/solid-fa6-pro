
import { Icon } from "../../index";

/**
 * A component that renders the `caravan` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caravan?s=solid caravan}
 * @preview ![caravan](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/caravan.svg)
 */
const Caravan: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 112C0 67.8 35.8 32 80 32l336 0c88.4 0 160 71.6 160 160l0 160 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0-288 0c0 53-43 96-96 96s-96-43-96-96l-16 0c-44.2 0-80-35.8-80-80L0 112zM320 352l128 0 0-96-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l32 0 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 192zM96 128c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L96 128zm96 336a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default Caravan;