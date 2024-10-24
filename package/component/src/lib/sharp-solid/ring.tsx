
import { Icon } from "../../index";

/**
 * A component that renders the `ring` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ring?s=sharp-solid ring}
 * @preview ![ring](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/ring.svg)
 */
const Ring: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 184.3l0 51C106.8 212.1 170 192 256 192s149.2 20.1 192 43.3l0-51c-23.1-20-82.6-56.3-192-56.3s-168.9 36.3-192 56.3zM512 192l0 88.1 0 7.9 0 16 0 32 0 16c-21.3 32-102.4 96-256 96S21.3 384 0 352l0-16 0-32 0-16 0-7.9L0 192l0-32c21.3-32 102.4-96 256-96s234.7 64 256 96l0 32zM400.1 265.6C365.8 251.5 318.4 240 256 240s-109.8 11.5-144.1 25.6C150 278.8 197.8 288 256 288s106-9.2 144.1-22.4z" />
    </Icon>
);

export default Ring;