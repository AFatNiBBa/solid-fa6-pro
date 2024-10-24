
import { Icon, generic } from "../../index";

/**
 * A component that renders the `triangle-exclamation` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/triangle-exclamation?s=duotone triangle-exclamation}
 * @preview ![triangle-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/triangle-exclamation.svg)
 */
const TriangleExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 440c0 6.9 1.8 13.7 5.3 19.9C12.4 472.3 25.7 480 40 480l432 0c14.3 0 27.6-7.7 34.7-20.1c3.5-6.2 5.3-13 5.3-19.9c0-7-1.8-14-5.5-20.2l-216-368C283.3 39.5 270.2 32 256 32s-27.3 7.5-34.5 19.8l-216 368C1.8 426 0 433 0 440zm288-56a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM232 184c0-13.3 10.7-24 24-24s24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112z" />
        <path d="M280 184c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112zM256 416a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default TriangleExclamation;