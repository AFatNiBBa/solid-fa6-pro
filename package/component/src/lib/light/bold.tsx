
import { Icon } from "../../index";

/**
 * A component that renders the `bold` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bold?s=light bold}
 * @preview ![bold](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bold.svg)
 */
const Bold: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 48c0-8.8 7.2-16 16-16l32 0 32 0 152 0c66.3 0 120 53.7 120 120c0 38.8-18.4 73.3-46.9 95.2C351.1 264 384 308.1 384 360c0 66.3-53.7 120-120 120L80 480l-32 0-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l16 0 0-192L32 64 16 64C7.2 64 0 56.8 0 48zM64 448l16 0 184 0c48.6 0 88-39.4 88-88s-39.4-88-88-88l-32 0L64 272l0 176zm0-208l168 0c48.6 0 88-39.4 88-88s-39.4-88-88-88L80 64 64 64l0 176z" />
    </Icon>
);

export default Bold;