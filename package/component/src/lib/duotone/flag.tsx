
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flag` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flag?s=duotone flag}
 * @preview ![flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/flag.svg)
 */
const Flag: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 48l69-17.2c38.1-9.5 78.3-5.1 113.5 12.5c46.3 23.2 100.8 23.2 147.1 0l9.6-4.8C423.8 28.1 448 43.1 448 66.1l0 247.7c0 13.3-8.3 25.3-20.8 30l-34.7 13c-20.1 7.6-41.3 11.3-62.3 11.3c-27.3 0-54.5-6.3-79.4-18.7c-37.9-19-81.3-23.7-122.5-13.4L64 352 64 48z" />
        <path d="M32 0C49.7 0 64 14.3 64 32l0 448c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 32C0 14.3 14.3 0 32 0z" />
    </Icon>
);

export default Flag;