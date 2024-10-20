
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-arrow-up-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-up-left?s=duotone square-arrow-up-left}
 * @preview ![square-arrow-up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-arrow-up-left.svg)
 */
const SquareArrowUpLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm112 72c0-13.3 10.7-24 24-24l152 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-94.1 0L329 327c4.7 4.7 7 10.8 7 17s-2.3 12.3-7 17s-10.8 7-17 7s-12.3-2.3-17-7l-135-135L160 328c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-160z" />
        <path d="M136 144l152 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-94.1 0L329 327c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-135-135L160 328c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-160c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default SquareArrowUpLeft;