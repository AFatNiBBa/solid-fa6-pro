
import { Icon } from "../../index";

/**
 * A component that renders the `triangle-exclamation` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/triangle-exclamation?s=regular triangle-exclamation}
 * @preview ![triangle-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/triangle-exclamation.svg)
 */
const TriangleExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M248.4 84.3c1.6-2.7 4.5-4.3 7.6-4.3s6 1.6 7.6 4.3L461.9 410c1.4 2.3 2.1 4.9 2.1 7.5c0 8-6.5 14.5-14.5 14.5l-387 0c-8 0-14.5-6.5-14.5-14.5c0-2.7 .7-5.3 2.1-7.5L248.4 84.3zm-41-25L9.1 385c-6 9.8-9.1 21-9.1 32.5C0 452 28 480 62.5 480l387 0c34.5 0 62.5-28 62.5-62.5c0-11.5-3.2-22.7-9.1-32.5L304.6 59.3C294.3 42.4 275.9 32 256 32s-38.3 10.4-48.6 27.3zM288 368a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-8-184c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 96c0 13.3 10.7 24 24 24s24-10.7 24-24l0-96z" />
    </Icon>
);

export default TriangleExclamation;