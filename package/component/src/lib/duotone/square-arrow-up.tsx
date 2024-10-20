
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-arrow-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-up?s=duotone square-arrow-up}
 * @preview ![square-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-arrow-up.svg)
 */
const SquareArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zM88 248c0-6.1 2.3-12.3 7-17L207 119c4.7-4.7 10.8-7 17-7s12.3 2.3 17 7L353 231c4.7 4.7 7 10.8 7 17s-2.3 12.3-7 17c-9.4 9.4-24.6 9.4-33.9 0l-71-71L248 376c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-182.1-71 71c-9.4 9.4-24.6 9.4-33.9 0c-4.7-4.7-7-10.8-7-17z" />
        <path d="M207 119c9.4-9.4 24.6-9.4 33.9 0L353 231c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-71-71L248 376c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-182.1-71 71c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L207 119z" />
    </Icon>
);

export default SquareArrowUp;