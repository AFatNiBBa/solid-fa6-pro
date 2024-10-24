
import { Icon } from "../../index";

/**
 * A component that renders the `vector-polygon` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vector-polygon?s=solid vector-polygon}
 * @preview ![vector-polygon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/vector-polygon.svg)
 */
const VectorPolygon: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64C0 46.3 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32l192 0c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-31.7 0-4.5 7.9-28.4 49.7c.4 2.1 .6 4.2 .6 6.4l0 64c0 2.2-.2 4.3-.6 6.4l28.4 49.7 4.5 7.9 31.7 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l-192 0c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l0-192c-17.7 0-32-14.3-32-32L0 64zM322.2 372.3L292.3 320 256 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l36.3 0 29.9-52.3c-1.4-3.6-2.2-7.5-2.2-11.7l-192 0c0 17.7-14.3 32-32 32l0 192c17.7 0 32 14.3 32 32l192 0c0-4.1 .8-8.1 2.2-11.7zM48 80l0 32 32 0 0-32L48 80zm320 0l0 32 32 0 0-32-32 0zM80 400l-32 0 0 32 32 0 0-32zm288 0l0 32 32 0 0-32-32 0zM304 240l-32 0 0 32 32 0 0-32z" />
    </Icon>
);

export default VectorPolygon;