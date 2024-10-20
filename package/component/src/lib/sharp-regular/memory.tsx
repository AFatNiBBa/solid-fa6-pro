
import { Icon } from "../../index";

/**
 * A component that renders the `memory` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/memory?s=sharp-regular memory}
 * @preview ![memory](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/memory.svg)
 */
const Memory: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 112L0 64l48 0 480 0 48 0 0 48 0 50.7c-18.6 6.6-32 24.4-32 45.3s13.4 38.7 32 45.3L576 400l0 48-48 0L48 448 0 448l0-48L0 253.3c18.6-6.6 32-24.4 32-45.3s-13.4-38.7-32-45.3L0 112zm48 24.5C67.6 154 80 179.5 80 208s-12.4 54-32 71.5L48 304l480 0 0-24.5c-19.6-17.6-32-43.1-32-71.5s12.4-54 32-71.5l0-24.5L48 112l0 24.5zM528 352L48 352l0 48 56 0 0-24 48 0 0 24 32 0 0-24 48 0 0 24 32 0 0-24 48 0 0 24 32 0 0-24 48 0 0 24 32 0 0-24 48 0 0 24 56 0 0-48zM192 144l0 24 0 80 0 24-48 0 0-24 0-80 0-24 48 0zm120 0l0 24 0 80 0 24-48 0 0-24 0-80 0-24 48 0zm120 0l0 24 0 80 0 24-48 0 0-24 0-80 0-24 48 0z" />
    </Icon>
);

export default Memory;