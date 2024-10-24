
import { Icon } from "../../index";

/**
 * A component that renders the `starship` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/starship?s=sharp-solid starship}
 * @preview ![starship](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/starship.svg)
 */
const Starship: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0 256a192 192 0 1 0 0-384 192 192 0 1 0 0 384zm32-192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM188.9 205.4L137 160l71 0 32 0 0-64-32 0L32 96 0 96l0 64 32 0 32.1 0 65.5 57.3L96 224l0 64 33.6 6.7L64.1 352 32 352 0 352l0 64 32 0 176 0 32 0 0-64-32 0-71 0 51.9-45.4 43 8.6c-5.2-18.9-7.9-38.7-7.9-59.2s2.7-40.3 7.9-59.2l-43 8.6z" />
    </Icon>
);

export default Starship;