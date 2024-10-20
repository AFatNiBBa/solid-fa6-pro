
import { Icon } from "../../index";

/**
 * A component that renders the `bullhorn` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bullhorn?s=sharp-light bullhorn}
 * @preview ![bullhorn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bullhorn.svg)
 */
const Bullhorn: typeof Icon = x => (
    <Icon {...x}>
        <path d="M424.8 0l-6 0-4.5 4L352.2 58.5c-45.7 40.1-103.5 63.7-164.2 67.1L143.6 128 16 128 0 128l0 16L0 336l0 16 16 0 48 0 0 144 0 16 16 0 96 0 16 0 0-16 0-141.3c59.2 4.2 115.5 27.6 160.2 66.8L414.3 476l4.5 4 6 0 7.2 0 16 0 0-16 0-448 0-16L432 0l-7.2 0zM160 352.9L160 480l-64 0 0-128 47.6 0 16.4 .9zM373.3 82.5L416 45 416 435l-42.7-37.5c-42.4-37.2-94.1-61.7-149.3-71.1l0-172.8c55.1-9.4 106.9-33.9 149.3-71.1zM192 157.4l0 165.3c-.8 0-1.5-.1-2.3-.1L144.9 320l-.4 0-.4 0L32 320l0-160 112 0 .4 0 .4 0 44.8-2.5c.8 0 1.5-.1 2.3-.1zM512 192l-32 0 0 16 0 64 0 16 32 0 0-16 0-64 0-16z" />
    </Icon>
);

export default Bullhorn;