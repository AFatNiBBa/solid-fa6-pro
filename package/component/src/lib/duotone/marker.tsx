
import { Icon, generic } from "../../index";

/**
 * A component that renders the `marker` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/marker?s=duotone marker}
 * @preview ![marker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/marker.svg)
 */
const Marker: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 488c0 6.3 2.5 12.4 7 17s10.7 7 17 7c1.6 0 3.1-.2 4.7-.5l25-5c66.6-13.3 127.8-46.1 175.8-94.1L305 337C261.7 293.7 218.4 250.4 175 207L99.5 282.5c-48 48-80.8 109.2-94.1 175.8l-5 25c-.3 1.6-.5 3.1-.5 4.7z" />
        <path d="M481 31C445.1-4.8 386.9-4.8 351 31l-15 15L322.9 33C294.8 4.9 249.2 4.9 221.1 33L135 119c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L255 66.9c9.4-9.4 24.6-9.4 33.9 0L302.1 80 175 207 305 337 481 161c35.9-35.9 35.9-94.1 0-129.9z" />
    </Icon>
);

export default Marker;