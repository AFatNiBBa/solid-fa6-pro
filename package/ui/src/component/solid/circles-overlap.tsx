
import { Icon } from "../../index";

/**
 * A component that renders the `circles-overlap` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circles-overlap?s=solid circles-overlap}
 * @preview ![circles-overlap](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circles-overlap.svg)
 */
const CirclesOverlap: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M192 288c0 34.2 7.7 66.6 21.4 95.7C130 378.2 64 308.8 64 224c0-88.4 71.6-160 160-160c32.2 0 62.2 9.5 87.3 25.9C240.4 127.5 192 202.1 192 288zm32 160c11.2 0 22.1-.8 32.8-2.4c40.6 41 96.9 66.4 159.2 66.4c123.7 0 224-100.3 224-224S539.7 64 416 64c-11.2 0-22.1 .8-32.8 2.4C342.6 25.4 286.3 0 224 0C100.3 0 0 100.3 0 224S100.3 448 224 448zm192 0c-32.2 0-62.2-9.5-87.3-25.9C399.6 384.5 448 309.9 448 224c0-34.2-7.7-66.6-21.4-95.7C510 133.8 576 203.2 576 288c0 88.4-71.6 160-160 160z" />
    </Icon>
);

export default CirclesOverlap;