
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-caret-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-caret-left?s=duotone square-caret-left}
 * @preview ![square-caret-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-caret-left.svg)
 */
const SquareCaretLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zM128 256c0-6.7 2.8-13 7.7-17.6l112-104c4.5-4.2 10.4-6.4 16.3-6.4c3.2 0 6.5 .7 9.6 2c8.7 3.8 14.4 12.5 14.4 22l0 208c0 9.5-5.7 18.2-14.4 22c-3.1 1.3-6.3 2-9.6 2c-5.9 0-11.8-2.2-16.3-6.4l-112-104c-4.9-4.5-7.7-10.9-7.7-17.6z" />
        <path d="M135.7 238.4c-4.9 4.5-7.7 10.9-7.7 17.6s2.8 13 7.7 17.6l112 104c7 6.5 17.2 8.2 25.9 4.4s14.4-12.5 14.4-22l0-208c0-9.5-5.7-18.2-14.4-22s-18.9-2.1-25.9 4.4l-112 104z" />
    </Icon>
);

export default SquareCaretLeft;