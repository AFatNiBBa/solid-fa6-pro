
import { Icon } from "../../index";

/**
 * A component that renders the `left-to-line` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-to-line?s=regular left-to-line}
 * @preview ![left-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/left-to-line.svg)
 */
const LeftToLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M256 146.2L146 256 256 365.8l0-53.8c0-13.3 10.7-24 24-24l120 0 0-64-120 0c-13.3 0-24-10.7-24-24l0-53.8zM96 256c0-11.5 4.6-22.5 12.7-30.6L224.8 109.6c8.7-8.7 20.5-13.6 32.8-13.6c25.6 0 46.4 20.8 46.4 46.4l0 33.6 96 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-96 0 0 33.6c0 25.6-20.8 46.4-46.4 46.4c-12.3 0-24.1-4.9-32.8-13.6L108.7 286.6C100.6 278.5 96 267.5 96 256zM48 88l0 336c0 13.3-10.7 24-24 24s-24-10.7-24-24L0 88C0 74.7 10.7 64 24 64s24 10.7 24 24z" />
    </Icon>
);

export default LeftToLine;