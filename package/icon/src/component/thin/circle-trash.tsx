
import { Icon } from "../../index";

/**
 * A component that renders the `circle-trash` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-trash?s=thin circle-trash}
 * @preview ![circle-trash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-trash.svg)
 */
const CircleTrash: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm160-96l8 0 16 0 12 0 21.6-28.8c1.5-2 3.9-3.2 6.4-3.2l64 0c2.5 0 4.9 1.2 6.4 3.2L316 160l12 0 16 0 8 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-9.1 0L330.1 354.3C328.9 371 315 384 298.2 384l-84.4 0c-16.8 0-30.7-13-31.9-29.7L169.1 176l-9.1 0c-4.4 0-8-3.6-8-8s3.6-8 8-8zm56 0l80 0-12-16-56 0-12 16zm110.8 16l-141.6 0 12.7 177.1c.6 8.4 7.6 14.9 16 14.9l84.4 0c8.4 0 15.4-6.5 16-14.9L326.8 176z" />
    </Icon>
);

export default CircleTrash;