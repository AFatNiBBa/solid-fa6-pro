
import { Icon } from "../../index";

/**
 * A component that renders the `bolt-lightning` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bolt-lightning?s=sharp-light bolt-lightning}
 * @preview ![bolt-lightning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bolt-lightning.svg)
 */
const BoltLightning: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M230.4 128l19.2-96L256 0 223.4 0 32 0 3.6 256 0 288l32.2 0 111.1 0 32.7 0-6.9 32L142.3 445.4 128 512l43.9-52.1L384 208l0-16 0-32-32 0-95.4 0L224 160l6.4-32zM352 192l0 4.3L186.2 393.2l21.1-98.5 8.3-38.7L176 256 35.8 256 60.6 32 217 32 192.6 153.7 185 192l39 0 128 0z" />
    </Icon>
);

export default BoltLightning;