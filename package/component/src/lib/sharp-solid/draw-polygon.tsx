
import { Icon } from "../../index";

/**
 * A component that renders the `draw-polygon` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/draw-polygon?s=sharp-solid draw-polygon}
 * @preview ![draw-polygon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/draw-polygon.svg)
 */
const DrawPolygon: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 32C28.7 32 0 60.7 0 96c0 23.7 12.9 44.4 32 55.4l0 209.1C12.9 371.6 0 392.3 0 416c0 35.3 28.7 64 64 64c23.7 0 44.4-12.9 55.4-32l209.1 0c11.1 19.1 31.7 32 55.4 32c35.3 0 64-28.7 64-64c0-35.3-28.5-63.8-63.7-64l-4.5-7.9-32-56-2.3-4c4.2-8.5 6.5-18 6.5-28.1s-2.3-19.6-6.5-28.1l2.3-4 32-56 4.5-7.9c35.2-.2 63.7-28.7 63.7-64c0-35.3-28.7-64-64-64c-23.7 0-44.4 12.9-55.4 32L119.4 64C108.4 44.9 87.7 32 64 32zM292.2 192.1c-1.4-.1-2.8-.1-4.2-.1c-35.3 0-64 28.7-64 64s28.7 64 64 64c1.4 0 2.8 0 4.2-.1c0 0 0 0 0 0l32 56 4.5 7.9-.1 .3-209.1 0c-5.6-9.7-13.7-17.8-23.4-23.4l0-209.1c9.7-5.6 17.8-13.7 23.4-23.4l209.1 0 .1 .3-4.5 7.9-32 56s0 0 0 0z" />
    </Icon>
);

export default DrawPolygon;