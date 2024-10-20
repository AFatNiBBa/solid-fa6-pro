
import { Icon, generic } from "../../index";

/**
 * A component that renders the `restroom` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/restroom?s=sharp-duotone-solid restroom}
 * @preview ![restroom](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/restroom.svg)
 */
const Restroom: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M1.5 294.5l54.5 17L56 480l0 32 64 0 0-32 0-128 16 0 0 128 0 32 64 0 0-32 0-168.5 54.5-17-44.9-144-7-22.5-23.5 0L76.9 128l-23.5 0-7 22.5L1.5 294.5zM80 48a48 48 0 1 0 96 0A48 48 0 1 0 80 48zM385.5 294.5L425.7 307 400 384l40 0 0 96 0 32 64 0 0-32 0-96 16 0 0 96 0 32 64 0 0-32 0-96 40 0-25.7-77 40.2-12.5-44.9-144-7-22.5-23.5 0-102.2 0-23.5 0-7 22.5-44.9 144zM464 48a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M344 0l0 24 0 464 0 24-48 0 0-24 0-464 0-24 48 0z" />
    </Icon>
);

export default Restroom;