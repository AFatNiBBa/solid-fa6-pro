
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-arrow-up-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-up-right?s=duotone circle-arrow-up-right}
 * @preview ![circle-arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-arrow-up-right.svg)
 */
const CircleArrowUpRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M512 256A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM144 344c0 6.1 2.3 12.3 7 17s10.8 7 17 7s12.3-2.3 17-7l135-135 0 94.1c0 13.3 10.7 24 24 24s24-10.7 24-24l0-152c0-13.3-10.7-24-24-24l-160 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l102.1 0L151 327c-4.7 4.7-7 10.8-7 17z" />
        <path d="M368 168l0 152c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-94.1L185 361c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l135-135L184 192c-13.3 0-24-10.7-24-24s10.7-24 24-24l160 0c13.3 0 24 10.7 24 24z" />
    </Icon>
);

export default CircleArrowUpRight;