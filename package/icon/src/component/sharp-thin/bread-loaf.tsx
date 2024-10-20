
import { Icon } from "../../index";

/**
 * A component that renders the `bread-loaf` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bread-loaf?s=sharp-thin bread-loaf}
 * @preview ![bread-loaf](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bread-loaf.svg)
 */
const BreadLoaf: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M80 240l-16 0c-26.5 0-48-21.5-48-48c0-54.9 37.2-90.6 86.7-113.5C152.2 55.7 209.8 48 240 48s87.8 7.7 137.3 30.5C426.8 101.4 464 137.1 464 192c0 26.5-21.5 48-48 48l-16 0 0 16 0 208-80 0L80 464l0-208 0-16zm336 16l144 0 0 208-144 0 0-192 0-16zm152-16l-8 0-101.7 0c13.3-11.7 21.7-28.9 21.7-48c0-81.1-70.7-123.7-138.8-144L400 48c30.2 0 87.8 7.7 137.3 30.5C586.8 101.4 624 137.1 624 192c0 26.5-21.5 48-48 48l-8 0zM80 480l240 0 80 0 16 0 144 0 16 0 0-16 0-192 0-16c35.3 0 64-28.7 64-64C640 64 464 32 400 32L240 32C176 32 0 64 0 192c0 35.3 28.7 64 64 64l0 16 0 192 0 16 16 0z" />
    </Icon>
);

export default BreadLoaf;