
import { Icon } from "../../index";

/**
 * A component that renders the `hotel` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hotel?s=sharp-regular hotel}
 * @preview ![hotel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/hotel.svg)
 */
const Hotel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 0L0 0 0 48l32 0 0 416L0 464l0 48 512 0 0-48-32 0 0-416 32 0 0-48zM432 464l-128 0 0-80 48 0c0-53-43-96-96-96s-96 43-96 96l48 0 0 80L80 464 80 48l352 0 0 416zM192 96l-64 0 0 64 64 0 0-64zm32 0l0 64 64 0 0-64-64 0zm160 0l-64 0 0 64 64 0 0-64zM128 192l0 64 64 0 0-64-64 0zm160 0l-64 0 0 64 64 0 0-64zm32 0l0 64 64 0 0-64-64 0z" />
    </Icon>
);

export default Hotel;