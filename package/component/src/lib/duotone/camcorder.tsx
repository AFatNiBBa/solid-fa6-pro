
import { Icon, generic } from "../../index";

/**
 * A component that renders the `camcorder` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camcorder?s=duotone camcorder}
 * @preview ![camcorder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/camcorder.svg)
 */
const Camcorder: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 224L0 416c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-36.2 0-119.6 0-36.2c0-35.3-28.7-64-64-64L96 160l0-32c0-17.7 14.3-32 32-32l160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L128 32c-53 0-96 43-96 96l0 40.6C12.9 179.6 0 200.3 0 224zm64 16c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 256c-8.8 0-16-7.2-16-16z" />
        <path d="M559.1 163.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6L384 379.8l0-119.6 142.2-94.8c9.8-6.5 22.4-7.2 32.9-1.6zM80 224l224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 256c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default Camcorder;