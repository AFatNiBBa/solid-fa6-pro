
import { Icon } from "../../index";

/**
 * A component that renders the `paintbrush` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paintbrush?s=sharp-regular paintbrush}
 * @preview ![paintbrush](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/paintbrush.svg)
 */
const Paintbrush: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M274.5 216L505.9 61.8l8.3 8.4L360 301.5 274.5 216zM199.1 321.6l55.4 55.4c1 4.9 1.6 9.9 1.6 15.1c0 39.8-32.2 72-72 72l-72 0 0-72c0-39.8 32.2-72 72-72c5.2 0 10.2 .5 15.1 1.6zM512 0L224 192l-32 80 .3 .3c-2.7-.2-5.5-.3-8.3-.3c-66.3 0-120 53.7-120 120l0 24 0 48-16 0-24 0-8 0L0 464l0 48 24 0 24 0 16 0 48 0 72 0c66.3 0 120-53.7 120-120c0-2.8-.1-5.5-.3-8.3l.3 .3 80-32L576 64 512 0z" />
    </Icon>
);

export default Paintbrush;