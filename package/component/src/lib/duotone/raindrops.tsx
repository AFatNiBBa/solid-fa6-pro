
import { Icon, generic } from "../../index";

/**
 * A component that renders the `raindrops` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/raindrops?s=duotone raindrops}
 * @preview ![raindrops](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/raindrops.svg)
 */
const Raindrops: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 353.2C0 387.9 28.1 416 62.8 416l2.4 0c34.7 0 62.8-28.1 62.8-62.8c0-9.6-2.2-19-6.4-27.6L75.5 231.2c-2.1-4.4-6.6-7.2-11.5-7.2s-9.4 2.8-11.5 7.2L6.4 325.6c-4.2 8.6-6.4 18-6.4 27.6zm96-192c0 34.7 28.1 62.8 62.8 62.8l2.4 0c34.7 0 62.8-28.1 62.8-62.8c0-9.6-2.2-19-6.4-27.6L171.5 39.2c-2.1-4.4-6.6-7.2-11.5-7.2s-9.4 2.8-11.5 7.2l-46.1 94.4c-4.2 8.6-6.4 18-6.4 27.6z" />
        <path d="M210 294.2l97.8-159.4c2.6-4.2 7.2-6.8 12.2-6.8s9.6 2.6 12.2 6.8L430 294.2c11.8 19.2 18 41.3 18 63.8c0 67.4-54.6 122-122 122H314c-67.4 0-122-54.6-122-122c0-22.5 6.2-44.6 18-63.8z" />
    </Icon>
);

export default Raindrops;