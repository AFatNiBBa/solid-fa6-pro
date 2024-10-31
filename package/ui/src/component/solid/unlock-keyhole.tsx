
import { Icon } from "../../index";

/**
 * A component that renders the `unlock-keyhole` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/unlock-keyhole?s=solid unlock-keyhole}
 * @preview ![unlock-keyhole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/unlock-keyhole.svg)
 */
const UnlockKeyhole: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 64c-44.2 0-80 35.8-80 80l0 48 240 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0 0-48C80 64.5 144.5 0 224 0c57.5 0 107 33.7 130.1 82.3c7.6 16 .8 35.1-15.2 42.6s-35.1 .8-42.6-15.2C283.4 82.6 255.9 64 224 64zm32 320c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0z" />
    </Icon>
);

export default UnlockKeyhole;