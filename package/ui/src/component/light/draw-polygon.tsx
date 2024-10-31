
import { Icon } from "../../index";

/**
 * A component that renders the `draw-polygon` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/draw-polygon?s=light draw-polygon}
 * @preview ![draw-polygon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/draw-polygon.svg)
 */
const DrawPolygon: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M96 96A32 32 0 1 0 32 96a32 32 0 1 0 64 0zM80 158l0 196c22.5 5.8 40.2 23.5 46 46l196 0c2.9-11.1 8.6-21 16.4-28.9l-32.2-53.7c-5.8 1.7-11.9 2.6-18.2 2.6c-35.3 0-64-28.7-64-64s28.7-64 64-64c6.3 0 12.4 .9 18.2 2.6l32.2-53.7c-7.8-7.9-13.5-17.8-16.4-28.9l-196 0c-5.8 22.5-23.5 40.2-46 46zM365.8 354.6c5.8-1.7 11.9-2.6 18.2-2.6c35.3 0 64 28.7 64 64s-28.7 64-64 64c-29.8 0-54.9-20.4-62-48l-196 0c-7.1 27.6-32.2 48-62 48c-35.3 0-64-28.7-64-64c0-29.8 20.4-54.9 48-62l0-196C20.4 150.9 0 125.8 0 96C0 60.7 28.7 32 64 32c29.8 0 54.9 20.4 62 48l196 0c7.1-27.6 32.2-48 62-48c35.3 0 64 28.7 64 64s-28.7 64-64 64c-6.3 0-12.4-.9-18.2-2.6l-32.2 53.7C345 222.6 352 238.5 352 256s-7 33.4-18.4 44.9l32.2 53.7zM64 384a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM352 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm32 352a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default DrawPolygon;