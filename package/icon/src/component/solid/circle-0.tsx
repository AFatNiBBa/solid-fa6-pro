
import { Icon } from "../../index";

/**
 * A component that renders the `circle-0` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-0?s=solid circle-0}
 * @preview ![circle-0](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-0.svg)
 */
const Circle_0: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c53 0 96 43 96 96l0 64c0 53-43 96-96 96s-96-43-96-96l0-64c0-53 43-96 96-96zm-48 96l0 64c0 26.5 21.5 48 48 48s48-21.5 48-48l0-64c0-26.5-21.5-48-48-48s-48 21.5-48 48z" />
    </Icon>
);

export default Circle_0;