
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-arrow-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-left?s=duotone square-arrow-left}
 * @preview ![square-arrow-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-arrow-left.svg)
 */
const SquareArrowLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zM80 256c0-6.1 2.3-12.3 7-17L199 127c4.7-4.7 10.8-7 17-7s12.3 2.3 17 7c9.4 9.4 9.4 24.6 0 33.9l-71 71L344 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-182.1 0 71 71c9.4 9.4 9.4 24.6 0 33.9c-4.7 4.7-10.8 7-17 7s-12.3-2.3-17-7L87 273c-4.7-4.7-7-10.8-7-17z" />
        <path d="M87 273c-9.4-9.4-9.4-24.6 0-33.9L199 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71L344 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-182.1 0 71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L87 273z" />
    </Icon>
);

export default SquareArrowLeft;