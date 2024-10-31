
import { Icon } from "../../index";

/**
 * A component that renders the `starship` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/starship?s=solid starship}
 * @preview ![starship](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/starship.svg)
 */
const Starship: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0 256a192 192 0 1 0 0-384 192 192 0 1 0 0 384zm32-192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM188.9 205.4L137 160l71 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l32.1 0 65.5 57.3-2.2 .4C109.1 221.4 96 237.4 96 256s13.1 34.6 31.4 38.3l2.2 .4L64.1 352 32 352c-17.7 0-32 14.3-32 32s14.3 32 32 32l176 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-71 0 51.9-45.4 43 8.6c-5.2-18.9-7.9-38.7-7.9-59.2s2.7-40.3 7.9-59.2l-43 8.6z" />
    </Icon>
);

export default Starship;