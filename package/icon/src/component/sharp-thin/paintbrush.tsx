
import { Icon } from "../../index";

/**
 * A component that renders the `paintbrush` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paintbrush?s=sharp-thin paintbrush}
 * @preview ![paintbrush](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/paintbrush.svg)
 */
const Paintbrush: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M187.2 308.6l49.4-105.8L510 20.6 555.4 66 373.2 339.4 267.4 388.8l-80.2-80.2zm68.4 91c.3 2.8 .4 5.6 .4 8.4c0 46.3-35.8 84.3-81.2 87.7l-3.4 .3-3.4 0L32 496l-16 0 0-32 16 0 32 0 16 0 0-16 0-40c0-48.6 39.4-88 88-88c2.8 0 5.6 .1 8.4 .4l79.2 79.2zm16.3 4.7L384 352 576 64 512 0 224 192 171.7 304.1c-1.2 0-2.5-.1-3.7-.1c-57.4 0-104 46.6-104 104l0 24 0 16-16 0-16 0-16 0L0 448l0 16 0 32 0 16 16 0 16 0 128 0 8 0 8 0 0-.3c53.7-4.1 96-49 96-103.7c0-1.2 0-2.5-.1-3.7z" />
    </Icon>
);

export default Paintbrush;