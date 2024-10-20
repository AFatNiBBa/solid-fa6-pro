
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-sun` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-sun?s=duotone cloud-sun}
 * @preview ![cloud-sun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cloud-sun.svg)
 */
const CloudSun: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M1.2 121.8c-2.1 5.1-1.5 10.9 1.6 15.4L52.5 208 2.9 278.8c-3.2 4.5-3.8 10.3-1.6 15.4s6.7 8.7 12.1 9.6l84.7 14.1 14.1 84.7c.9 5.4 4.5 10 9.6 12.1s10.9 1.5 15.4-1.6l24.4-17c6.5-41.8 33.2-76.8 69.8-94.9c-7.5 1.9-15.3 2.9-23.4 2.9c-53 0-96-43-96-96s43-96 96-96s96 43 96 96c0 .4 0 .7 0 1.1c18.8-10.9 40.7-17.1 64-17.1c2.2 0 4.5 .1 6.7 .2l38.5-55c1.9-2.7 2.9-5.9 2.9-9.2c0-2.1-.4-4.2-1.2-6.2c-2.1-5.1-6.7-8.7-12.1-9.6L317.9 98.1 303.8 13.4c-.9-5.4-4.5-10-9.6-12.1s-10.9-1.5-15.4 1.6L208 52.5 137.2 2.9c-4.5-3.2-10.3-3.8-15.4-1.6s-8.7 6.7-9.6 12.1L98.1 98.1 13.4 112.2c-5.4 .9-10 4.5-12.1 9.6zM144 208a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
        <path d="M559.9 511.9c44.2 0 80-35.8 80-80c0-39.3-28.4-72.1-65.8-78.7c1.2-5.6 1.9-11.3 1.9-17.2c0-44.2-35.8-80-80-80c-17 0-32.8 5.3-45.8 14.4C433.3 242.6 402.8 224 368 224c-53 0-96 43-96 96l0 1.3c-45.4 7.6-80 47.1-80 94.6c0 53 43 96 96 96l271.9 0z" />
    </Icon>
);

export default CloudSun;