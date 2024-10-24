
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diploma` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diploma?s=duotone diploma}
 * @preview ![diploma](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/diploma.svg)
 */
const Diploma: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 272c0 56.9 24.1 119.2 81 140.7c10.5 4 22.5 4.2 33.4 1.8L256 383l0-223 0-16-16 0-73.3 0L96 144c-65.1 .3-96 71.5-96 128zM384 144l0 16 0 223 141.6 31.5c4.6 1 9.4 1.6 14.1 1.6c6.6 0 13.2-1 19.3-3.3c56.9-21.5 81-83.8 81-140.7c0-56.5-30.9-127.7-96-128l-70.7 0L400 144l-16 0z" />
        <path d="M302 59.7l18 20.6 18-20.6C353.4 42.1 375.6 32 399 32l1 0c44.2 0 80 35.8 80 80c0 11.4-2.4 22.2-6.7 32L400 144c17.7 0 32-14.3 32-32s-14.3-32-32-32l-1 0c-1.2 0-2.3 .1-3.5 .2c-8.2 .9-15.8 4.8-21.3 11.1l-34.5 39.5c-4.5 5.2-.9 13.3 6 13.3l22.4 0 16 0 0 16 0 304c0 6.2-3.6 11.9-9.2 14.5s-12.3 1.8-17-2.2L320 444.8l-37.8 31.5c-4.8 4-11.4 4.8-17 2.2s-9.2-8.3-9.2-14.5l0-304 0-16 16 0 22.4 0c6.9 0 10.5-8.1 6-13.3L265.9 91.3C259.6 84.1 250.5 80 241 80l-1 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l-73.3 0c-4.3-9.8-6.7-20.6-6.7-32c0-44.2 35.8-80 80-80l1 0c23.4 0 45.6 10.1 61 27.7z" />
    </Icon>
);

export default Diploma;