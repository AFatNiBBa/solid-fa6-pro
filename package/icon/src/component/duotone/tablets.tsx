
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tablets` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablets?s=duotone tablets}
 * @preview ![tablets](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tablets.svg)
 */
const Tablets: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M320 160c0 88.4 71.6 160 160 160c32.1 0 61.9-9.4 87-25.7c7.9-5.2 8.5-16.2 1.8-22.9L368.6 71.2c-6.7-6.7-17.8-6.2-22.9 1.8c-16.3 25-25.7 54.9-25.7 87zM391.2 48.6L591.4 248.8c6.7 6.7 17.8 6.2 22.9-1.8c16.3-25 25.7-54.9 25.7-87C640 71.6 568.4 0 480 0c-32.1 0-61.9 9.4-87 25.7c-7.9 5.2-8.5 16.2-1.8 22.9z" />
        <path d="M316.5 385.5c2-9.3-5.5-17.5-15-17.5L18.5 368c-9.5 0-16.9 8.2-15 17.5C18.9 457.8 83.1 512 160 512s141.1-54.2 156.5-126.5zm0-66.9C301.1 246.2 236.9 192 160 192S18.9 246.2 3.5 318.5c-2 9.3 5.5 17.5 15 17.5l283.1 0c9.5 0 16.9-8.2 15-17.5z" />
    </Icon>
);

export default Tablets;