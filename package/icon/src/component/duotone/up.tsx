
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up?s=duotone up}
 * @preview ![up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/up.svg)
 */
const Up: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M128 256c42.7 0 85.3 0 128 0c0 61.3 0 122.7 0 184c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40c0-61.3 0-122.7 0-184z" />
        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l96 0s0 0 0 0l128 0s0 0 0 0l96 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-160-160z" />
    </Icon>
);

export default Up;