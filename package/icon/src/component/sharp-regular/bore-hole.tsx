
import { Icon } from "../../index";

/**
 * A component that renders the `bore-hole` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bore-hole?s=sharp-regular bore-hole}
 * @preview ![bore-hole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bore-hole.svg)
 */
const BoreHole: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 24l0 204.7c23.5 9.5 40 32.5 40 59.3c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-26.9 16.5-49.9 40-59.3L232 24l0-24 48 0 0 24zM240 288a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zM464 176l-64 0 0 112c0 79.5-64.5 144-144 144s-144-64.5-144-144l0-112-64 0 0 288 416 0 0-288zM112 128l48 0 0 48 0 112c0 53 43 96 96 96s96-43 96-96l0-112 0-48 48 0 64 0 48 0 0 48 0 288 0 48-48 0L48 512 0 512l0-48L0 176l0-48 48 0 64 0z" />
    </Icon>
);

export default BoreHole;