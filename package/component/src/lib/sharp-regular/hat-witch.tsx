
import { Icon } from "../../index";

/**
 * A component that renders the `hat-witch` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hat-witch?s=sharp-regular hat-witch}
 * @preview ![hat-witch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/hat-witch.svg)
 */
const HatWitch: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 224l26.6-46.6L576 112 448 0 208 128 96 384l52.4 0 96.9-221.5L441.3 58l73.5 64.3-3.3 5.7-5.9 0L480 128l-48 0-29.7 0-13.3 26.5-16 32L363.8 205l7.1 19.4 58 159.6 51.1 0L416 208l16-32 48 0 2.2 3.3L512 224zM336 304l-96 0 0 80 96 0 0-80zM0 416l0 32 128 64 320 0 128-64 0-32L0 416z" />
    </Icon>
);

export default HatWitch;