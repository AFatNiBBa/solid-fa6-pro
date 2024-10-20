
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-m` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-m?s=duotone square-m}
 * @preview ![square-m](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-m.svg)
 */
const SquareM: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm96 56c0-10.4 6.7-19.6 16.6-22.8c2.4-.8 4.9-1.2 7.4-1.2c7.6 0 14.9 3.6 19.5 9.9c28.2 39 56.4 78 84.5 117.1c28.2-39 56.4-78 84.5-117.1c4.6-6.4 11.9-10 19.5-9.9c2.5 0 4.9 .4 7.4 1.2c9.9 3.2 16.6 12.4 16.6 22.8l0 208c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-133.8c-20.2 27.9-40.4 55.9-60.5 83.8c-4.5 6.2-11.7 10-19.5 9.9s-14.9-3.7-19.5-9.9c-20.2-27.9-40.4-55.9-60.5-83.8L144 360c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-208z" />
        <path d="M112.6 129.2c9.9-3.2 20.7 .3 26.8 8.8L224 255l84.5-117.1c6.1-8.4 16.9-12 26.8-8.8s16.6 12.4 16.6 22.8l0 208c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-133.8-60.5 83.8c-4.5 6.2-11.7 9.9-19.5 9.9s-14.9-3.7-19.5-9.9L144 226.2 144 360c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-208c0-10.4 6.7-19.6 16.6-22.8z" />
    </Icon>
);

export default SquareM;