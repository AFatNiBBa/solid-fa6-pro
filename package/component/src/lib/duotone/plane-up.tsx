
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plane-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane-up?s=duotone plane-up}
 * @preview ![plane-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/plane-up.svg)
 */
const PlaneUp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 305.1l0 56.7c0 10.9 10.7 18.6 21.1 15.2L192 320l0-160L14.2 278.5C5.3 284.4 0 294.4 0 305.1zM320 160l0 160 170.9 57c10.4 3.5 21.1-4.3 21.1-15.2l0-56.7c0-10.7-5.3-20.7-14.2-26.6L320 160z" />
        <path d="M192 93.7C192 59.5 221 0 256 0c36 0 64 59.5 64 93.7L320 400l57.6 43.2c4 3 6.4 7.8 6.4 12.8l0 42c0 7.8-6.3 14-14 14c-1.3 0-2.6-.2-3.9-.5L256 480 145.9 511.5c-1.3 .4-2.6 .5-3.9 .5c-7.8 0-14-6.3-14-14l0-42c0-5 2.4-9.8 6.4-12.8L192 400l0-306.3z" />
    </Icon>
);

export default PlaneUp;