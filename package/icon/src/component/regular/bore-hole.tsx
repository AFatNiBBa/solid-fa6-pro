
import { Icon } from "../../index";

/**
 * A component that renders the `bore-hole` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bore-hole?s=regular bore-hole}
 * @preview ![bore-hole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bore-hole.svg)
 */
const BoreHole: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0c13.3 0 24 10.7 24 24l0 204.7c23.5 9.5 40 32.5 40 59.3c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-26.9 16.5-49.9 40-59.3L232 24c0-13.3 10.7-24 24-24zm0 272a16 16 0 1 0 0 32 16 16 0 1 0 0-32zM112 176l-32 0c-17.7 0-32 14.3-32 32l0 224c0 17.7 14.3 32 32 32l352 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32l-32 0 0 112c0 79.5-64.5 144-144 144s-144-64.5-144-144l0-112zm16-48c17.7 0 32 14.3 32 32l0 128c0 53 43 96 96 96s96-43 96-96l0-128c0-17.7 14.3-32 32-32l48 0c44.2 0 80 35.8 80 80l0 224c0 44.2-35.8 80-80 80L80 512c-44.2 0-80-35.8-80-80L0 208c0-44.2 35.8-80 80-80l48 0z" />
    </Icon>
);

export default BoreHole;