
import { Icon, generic } from "../../index";

/**
 * A component that renders the `taco` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/taco?s=duotone taco}
 * @preview ![taco](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/taco.svg)
 */
const Taco: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 448c0-43.2 10.7-84 29.7-119.7C72.6 247.2 157.9 192 256 192s183.4 55.2 226.3 136.3C501.3 364 512 404.8 512 448c0 17.7-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32zm96-48a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm64-64a16 16 0 1 0 32 0 16 16 0 1 0 -32 0z" />
        <path d="M237.2 38.4c11-8.6 26.5-8.6 37.5 0l44.1 34.2c5.6 4.4 12.6 6.6 19.7 6.4l55.8-1.7c14-.4 26.5 8.6 30.4 22.1l15.6 53.6c2 6.8 6.3 12.8 12.2 16.8L498.6 201c11.6 7.9 16.3 22.5 11.6 35.7l-27.8 91.6C439.4 247.2 354.1 192 256 192s-183.4 55.2-226.3 136.3L1.8 236.7c-4.7-13.1 0-27.8 11.6-35.7l46.1-31.4c5.9-4 10.2-9.9 12.2-16.8L87.3 99.3c3.9-13.4 16.4-22.5 30.4-22.1L173.4 79c7.1 .2 14.1-2 19.7-6.4l44.1-34.2z" />
    </Icon>
);

export default Taco;