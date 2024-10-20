
import { Icon } from "../../index";

/**
 * A component that renders the `down-to-line` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-to-line?s=solid down-to-line}
 * @preview ![down-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/down-to-line.svg)
 */
const DownToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M342.1 249.9L219.3 372.7c-7.2 7.2-17.1 11.3-27.3 11.3s-20.1-4.1-27.3-11.3L41.9 249.9c-6.4-6.4-9.9-15-9.9-24C32 207.2 47.2 192 65.9 192l62.1 0 0-128c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 128 62.1 0c18.7 0 33.9 15.2 33.9 33.9c0 9-3.6 17.6-9.9 24zM32 416l320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
    </Icon>
);

export default DownToLine;