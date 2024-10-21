
import { Icon } from "../../index";

/**
 * A component that renders the `boombox` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boombox?s=sharp-light boombox}
 * @preview ![boombox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/boombox.svg)
 */
const Boombox: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 0L80 0 560 0l16 0 0 16 0 144 32 0 32 0 0 32 0 288 0 32-32 0L32 512 0 512l0-32L0 192l0-32 32 0 32 0L64 16 64 0zM96 32l0 128 448 0 0-128L96 32zM32 192l0 288 576 0 0-288-48 0L80 192l-48 0zM256 336A80 80 0 1 0 96 336a80 80 0 1 0 160 0zM64 336a112 112 0 1 1 224 0A112 112 0 1 1 64 336zm400 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-192a112 112 0 1 1 0 224 112 112 0 1 1 0-224zM208 96l32 0 16 0 0 32-16 0-32 0-16 0 0-32 16 0zm96 0l32 0 16 0 0 32-16 0-32 0-16 0 0-32 16 0zm96 0l32 0 16 0 0 32-16 0-32 0-16 0 0-32 16 0z" />
    </Icon>
);

export default Boombox;