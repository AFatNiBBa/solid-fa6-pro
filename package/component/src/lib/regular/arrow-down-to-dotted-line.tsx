
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-to-dotted-line` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-dotted-line?s=regular arrow-down-to-dotted-line}
 * @preview ![arrow-down-to-dotted-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-down-to-dotted-line.svg)
 */
const ArrowDownToDottedLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 416a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 32a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 32a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM241.5 360.4c-4.5 4.8-10.9 7.6-17.5 7.6s-12.9-2.7-17.5-7.6l-128-136c-9.1-9.7-8.6-24.8 1-33.9s24.8-8.6 33.9 1L200 283.5l0-83.5 0-128c0-13.3 10.7-24 24-24s24 10.7 24 24l0 128 0 83.5 86.5-91.9c9.1-9.7 24.3-10.1 33.9-1s10.1 24.3 1 33.9l-128 136z" />
    </Icon>
);

export default ArrowDownToDottedLine;