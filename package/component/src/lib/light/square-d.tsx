
import { Icon } from "../../index";

/**
 * A component that renders the `square-d` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-d?s=light square-d}
 * @preview ![square-d](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-d.svg)
 */
const SquareD: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM160 352l64 0c53 0 96-43 96-96s-43-96-96-96l-64 0 0 192zm-1.2-224l65.2 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-65.2 0c-17 0-30.8-13.8-30.8-30.8l0-194.5c0-17 13.8-30.8 30.8-30.8z" />
    </Icon>
);

export default SquareD;