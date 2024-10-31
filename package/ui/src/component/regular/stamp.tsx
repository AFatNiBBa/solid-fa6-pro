
import { Icon } from "../../index";

/**
 * A component that renders the `stamp` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stamp?s=regular stamp}
 * @preview ![stamp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/stamp.svg)
 */
const Stamp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M299.3 116.7c3-6.2 4.7-13.2 4.7-20.7c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 7.5 1.7 14.5 4.7 20.7l.3 .6c7 14.6 19 39.6 19 68.7c0 65.2-52.8 118-118 118l-18 0c-26.5 0-48 21.5-48 48l0 8c0 4.4 3.6 8 8 8l400 0c4.4 0 8-3.6 8-8l0-8c0-26.5-21.5-48-48-48l-18 0c-65.2 0-118-52.8-118-118c0-29 12-54.1 19-68.6c0 0 0 0 0 0l.3-.6zm43.3 20.8C335.2 152.9 328 168.9 328 186c0 38.7 31.4 70 70 70l18 0c53 0 96 43 96 96l0 8c0 30.9-25.1 56-56 56L56 416c-30.9 0-56-25.1-56-56l0-8c0-53 43-96 96-96l18 0c38.7 0 70-31.3 70-70c0-17.1-7.2-33.1-14.6-48.5c-6-12.6-9.4-26.6-9.4-41.5c0-53 43-96 96-96s96 43 96 96c0 14.9-3.4 28.9-9.4 41.5zM32 480c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L64 512c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default Stamp;