
import { Icon } from "../../index";

/**
 * A component that renders the `vector-circle` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vector-circle?s=regular vector-circle}
 * @preview ![vector-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/vector-circle.svg)
 */
const VectorCircle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M232 88l48 0 0-48-48 0 0 48zM192 32c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 17.6c67.8 21 121.4 74.5 142.4 142.4l17.6 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-17.6 0c-21 67.8-74.5 121.4-142.4 142.4l0 17.6c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-17.6C124.2 441.4 70.6 387.8 49.6 320L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l17.6 0C70.6 124.2 124.2 70.6 192 49.6L192 32zM100.5 192.3C116 194.5 128 207.9 128 224l0 64c0 16.1-12 29.5-27.5 31.7c17 41.6 50.3 74.8 91.8 91.8C194.5 396 207.9 384 224 384l64 0c16.1 0 29.5 12 31.7 27.5c41.6-17 74.8-50.3 91.8-91.8C396 317.5 384 304.1 384 288l0-64c0-16.1 12-29.5 27.5-31.7c-17-41.6-50.3-74.8-91.8-91.8C317.5 116 304.1 128 288 128l-64 0c-16.1 0-29.5-12-31.7-27.5c-41.6 17-74.8 50.3-91.8 91.8zM424 232l0 48 48 0 0-48-48 0zM232 424l0 48 48 0 0-48-48 0zM40 232l0 48 48 0 0-48-48 0z" />
    </Icon>
);

export default VectorCircle;