
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-c` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-c?s=duotone square-c}
 * @preview ![square-c](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-c.svg)
 */
const SquareC: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zM96 256c0-32.8 12.5-65.5 37.5-90.5s57.8-37.5 90.5-37.5s65.5 12.5 90.5 37.5c4.7 4.7 7 10.8 7 17s-2.3 12.3-7 17c-9.4 9.4-24.6 9.4-34 0l-.4-.4c-31.3-30.8-81.6-30.7-112.7 .4c-31.2 31.2-31.2 81.9 0 113.1s81.9 31.2 113.1 0c9.4-9.4 24.6-9.4 33.9 0c4.7 4.7 7 10.8 7 17s-2.3 12.3-7 17c-25 25-57.8 37.5-90.5 37.5s-65.5-12.5-90.5-37.5s-37.5-57.8-37.5-90.5z" />
        <path d="M280.6 199.4c-31.2-31.2-81.9-31.2-113.1 0s-31.2 81.9 0 113.1s81.9 31.2 113.1 0c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-50 50-131 50-181 0s-50-131 0-181s131-50 181 0c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0z" />
    </Icon>
);

export default SquareC;