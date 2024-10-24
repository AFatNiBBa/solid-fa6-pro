
import { Icon } from "../../index";

/**
 * A component that renders the `vial` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vial?s=sharp-solid vial}
 * @preview ![vial](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/vial.svg)
 */
const Vial: typeof Icon = x => (
    <Icon {...x}>
        <path d="M356.1 22.8L333.4 .2 288.2 45.4 306.7 64 28.1 342.6C10.1 360.6 0 385 0 410.5L0 416c0 53 43 96 96 96l5.5 0c25.5 0 49.9-10.1 67.9-28.1L448 205.3l18.6 18.6 45.3-45.3-22.6-22.6-18.6-18.6-96-96s0 0 0 0L356.1 22.8zM205.3 256L352 109.3 402.7 160l-96 96-101.5 0z" />
    </Icon>
);

export default Vial;