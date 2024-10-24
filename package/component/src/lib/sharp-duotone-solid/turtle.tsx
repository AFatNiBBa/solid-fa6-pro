
import { Icon, generic } from "../../index";

/**
 * A component that renders the `turtle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turtle?s=sharp-duotone-solid turtle}
 * @preview ![turtle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/turtle.svg)
 */
const Turtle: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 320l0 64 32 0 32 0 0 96 128 0 0-96 32 0 0 96 128 0 0-96 96 0 32 0 0-32 0-64 96 0 0-80c0-53-43-96-96-96l-64 0 0 80 0 32 0 96-64 0-128 0-32 0L64 320l-32 0L0 320zM512 208a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
        <path d="M384 288V208c0-97.2-78.8-176-176-176S32 110.8 32 208v80H384z" />
    </Icon>
);

export default Turtle;