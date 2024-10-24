
import { Icon } from "../../index";

/**
 * A component that renders the `up-from-dotted-line` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-from-dotted-line?s=solid up-from-dotted-line}
 * @preview ![up-from-dotted-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/up-from-dotted-line.svg)
 */
const UpFromDottedLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M73.9 166.1L196.7 43.3C203.9 36.1 213.8 32 224 32s20.1 4.1 27.3 11.3L374.1 166.1c6.4 6.4 9.9 15 9.9 24c0 18.7-15.2 33.9-33.9 33.9L288 224l0 128c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-128-62.1 0C79.2 224 64 208.8 64 190.1c0-9 3.6-17.6 9.9-24zM32 416a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default UpFromDottedLine;