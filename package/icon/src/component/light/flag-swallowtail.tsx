
import { Icon } from "../../index";

/**
 * A component that renders the `flag-swallowtail` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flag-swallowtail?s=light flag-swallowtail}
 * @preview ![flag-swallowtail](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/flag-swallowtail.svg)
 */
const FlagSwallowtail: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 16C32 7.2 24.8 0 16 0S0 7.2 0 16L0 32 0 64 0 320l0 32L0 496c0 8.8 7.2 16 16 16s16-7.2 16-16l0-144 392 0c13.3 0 24-10.7 24-24c0-5.2-1.7-10.2-4.8-14.4L352 192 443.2 70.4c3.1-4.2 4.8-9.2 4.8-14.4c0-13.3-10.7-24-24-24L32 32l0-16zm0 48l376 0L326.4 172.8c-8.5 11.4-8.5 27 0 38.4L408 320 32 320 32 64z" />
    </Icon>
);

export default FlagSwallowtail;