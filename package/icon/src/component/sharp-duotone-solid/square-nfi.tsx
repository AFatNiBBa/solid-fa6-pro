
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-nfi` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-nfi?s=sharp-duotone-solid square-nfi}
 * @preview ![square-nfi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-nfi.svg)
 */
const SquareNfi: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM64 160l16 0 8 0 9.9 0 4.4 8.8L160 284.2 160 176l0-16 32 0 0 16 0 160 0 16-16 0-8 0-9.9 0-4.4-8.8L96 227.8 96 336l0 16-32 0 0-16 0-160 0-16zm160 0l16 0 64 0 16 0 0 32-16 0-48 0 0 32 48 0 16 0 0 32-16 0-48 0 0 80 0 16-32 0 0-16 0-96 0-64 0-16zm128 0l32 0 0 16 0 160 0 16-32 0 0-16 0-160 0-16z" />
        <path d="M80 160l-16 0 0 16 0 160 0 16 32 0 0-16 0-108.2 57.7 115.4 4.4 8.8 9.9 0 8 0 16 0 0-16 0-160 0-16-32 0 0 16 0 108.2L102.3 168.8 97.9 160 88 160l-8 0zm160 0l-16 0 0 16 0 64 0 96 0 16 32 0 0-16 0-80 48 0 16 0 0-32-16 0-48 0 0-32 48 0 16 0 0-32-16 0-64 0zm144 16l0-16-32 0 0 16 0 160 0 16 32 0 0-16 0-160z" />
    </Icon>
);

export default SquareNfi;