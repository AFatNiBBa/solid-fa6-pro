
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fondue-pot` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fondue-pot?s=sharp-duotone-solid fondue-pot}
 * @preview ![fondue-pot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/fondue-pot.svg)
 */
const FonduePot: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 224l0 16 0 64 0 16 32 0 0-16 0-48 32 0 0 16 0 16 32 0 0-16 0-32 0-16-16 0-64 0-16 0zm160 0l32.5 0 15.3-61.1 15.5 3.9L325.1 15.5 263 0 225.2 151.3l15.5 3.9-16.2 65c-.3 1.3-.5 2.6-.5 3.9zm80 0l35.2 0 40.3-60.5 13.3 8.9L484.1 35.5 430.9 0 339.6 136.9l13.3 8.9-46.3 69.4c-1.8 2.7-2.7 5.8-2.7 8.9z" />
        <path d="M64 224L0 224l0 96c0 52.3 25.1 98.8 64 128l0 32 0 32 64 0 0-32 0-3.2c10.3 2.1 21 3.2 32 3.2l128 0c11 0 21.7-1.1 32-3.2l0 3.2 0 32 64 0 0-32 0-32c38.9-29.2 64-75.7 64-128l0-32 32 0 32 0 0-64-32 0-32 0-64 0-32 0-192 0 0 16 0 32 0 16-32 0 0-16 0-16-32 0 0 48 0 16-32 0 0-16 0-64 0-16z" />
    </Icon>
);

export default FonduePot;