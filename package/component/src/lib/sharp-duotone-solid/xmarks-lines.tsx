
import { Icon, generic } from "../../index";

/**
 * A component that renders the `xmarks-lines` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/xmarks-lines?s=sharp-duotone-solid xmarks-lines}
 * @preview ![xmarks-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/xmarks-lines.svg)
 */
const XmarksLines: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 96l32 0 576 0 32 0 0-64-32 0L32 32 0 32zM0 416l0 64 32 0 576 0 32 0 0-64-32 0L32 416 0 416z" />
        <path d="M57 183l-17-17L6.1 200l17 17 39 39L23 295l-17 17L40 345.9l17-17 39-39 39 39 17 17L185.9 312l-17-17-39-39 39-39 17-17L152 166.1l-17 17-39 39L57 183zm448 0l-17-17L454.1 200l17 17 39 39-39 39-17 17L488 345.9l17-17 39-39 39 39 17 17L633.9 312l-17-17-39-39 39-39 17-17L600 166.1l-17 17-39 39-39-39zm-224 0l-17-17L230.1 200l17 17 39 39-39 39-17 17L264 345.9l17-17 39-39 39 39 17 17L409.9 312l-17-17-39-39 39-39 17-17L376 166.1l-17 17-39 39-39-39z" />
    </Icon>
);

export default XmarksLines;