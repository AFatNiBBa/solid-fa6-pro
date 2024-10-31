
import { Icon } from "../../index";

/**
 * A component that renders the `vector-polygon` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vector-polygon?s=regular vector-polygon}
 * @preview ![vector-polygon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/vector-polygon.svg)
 */
const VectorPolygon: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M360 72l48 0 0 48-48 0 0-48zm-8-40c-17.7 0-32 14.3-32 32l0 8L128 72l0-8c0-17.7-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64l0 64c0 17.7 14.3 32 32 32l8 0 0 192-8 0c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-8 192 0 0 8c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-42.4 0-27.4-45.6c3.7-5.2 5.8-11.5 5.8-18.4l0-64c0-6.8-2.1-13.2-5.8-18.4L373.6 160l42.4 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-64 0zM298.4 320l27.4 45.6c-3.7 5.2-5.8 11.5-5.8 18.4l0 8-192 0 0-8c0-17.7-14.3-32-32-32l-8 0 0-192 8 0c17.7 0 32-14.3 32-32l0-8 192 0 0 8c0 6.8 2.1 13.2 5.8 18.4L298.4 192 256 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l42.4 0zM40 440l0-48 48 0 0 48-48 0zm320 0l0-48 48 0 0 48-48 0zM40 120l0-48 48 0 0 48-48 0zM264 232l48 0 0 48-48 0 0-48z" />
    </Icon>
);

export default VectorPolygon;