
import { Icon } from "../../index";

/**
 * A component that renders the `bolt-lightning` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bolt-lightning?s=sharp-thin bolt-lightning}
 * @preview ![bolt-lightning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bolt-lightning.svg)
 */
const BoltLightning: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M227.2 144L252.8 16 256 0 239.7 0 32 0 1.8 272 0 288l16.1 0 143.5 0 16.4 0-3.4 16L135.1 478.7 128 512l21.9-26.1L384 208l0-32 0-16-16 0-127.7 0L224 160l3.2-16zM368 176l0 26.2L157.1 452.6l34.6-161.3 4.1-19.4L176 272 17.9 272 46.3 16l190.2 0L208.3 156.9 204.5 176l19.5 0 144 0z" />
    </Icon>
);

export default BoltLightning;