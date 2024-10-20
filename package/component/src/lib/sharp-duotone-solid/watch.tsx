
import { Icon, generic } from "../../index";

/**
 * A component that renders the `watch` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/watch?s=sharp-duotone-solid watch}
 * @preview ![watch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/watch.svg)
 */
const Watch: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M384 256A192 192 0 1 1 0 256a192 192 0 1 1 384 0zM168 152l0 24 0 80 0 12.8 10.7 7.1 48 32 20 13.3 26.6-39.9-20-13.3L216 243.2l0-67.2 0-24-48 0z" />
        <path d="M64 0L320 0l0 112.9C286 82.5 241.2 64 192 64s-94 18.5-128 48.9L64 0zM192 448c49.2 0 94-18.5 128-48.9L320 512 64 512l0-112.9C98 429.5 142.8 448 192 448zm24-272l0 67.2L253.3 268l20 13.3-26.6 39.9-20-13.3-48-32L168 268.8l0-12.8 0-80 0-24 48 0 0 24z" />
    </Icon>
);

export default Watch;