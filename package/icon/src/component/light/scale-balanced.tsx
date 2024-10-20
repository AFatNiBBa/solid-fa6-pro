
import { Icon } from "../../index";

/**
 * A component that renders the `scale-balanced` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scale-balanced?s=light scale-balanced}
 * @preview ![scale-balanced](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/scale-balanced.svg)
 */
const ScaleBalanced: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M384 64c0 29.8-20.4 54.9-48 62l0 354 192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-208 0-208 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l192 0 0-354c-27.6-7.1-48-32.2-48-62L112 64c-8.8 0-16-7.2-16-16s7.2-16 16-16l152.6 0C275.6 12.9 296.3 0 320 0s44.4 12.9 55.4 32L512 32c8.8 0 16 7.2 16 16s-7.2 16-16 16L384 64zm56.7 298.3C457.8 375.1 482.9 384 512 384s54.2-8.9 71.3-21.7C600.4 349.5 608 334.2 608 320l-192 0 0-1.6c0 0 0 .1 0 .1l0 1.6c0 14.2 7.6 29.5 24.7 42.3zm71.3-215L426.3 288l171.3 0L512 147.3zM384 320l0-1.6c0-14.7 4-29.1 11.7-41.6l92-151.2c5.2-8.5 14.4-13.7 24.3-13.7s19.2 5.2 24.3 13.7l92 151.2c7.6 12.5 11.7 26.9 11.7 41.6l0 1.6c0 53-57.3 96-128 96s-128-43-128-96zM32 320c0 14.2 7.6 29.5 24.7 42.3C73.8 375.1 98.9 384 128 384s54.2-8.9 71.3-21.7C216.4 349.5 224 334.2 224 320L32 320l0-1.6c0 0 0 .1 0 .1l0 1.6zm10.3-32l171.3 0L128 147.3 42.3 288zM128 416C57.3 416 0 373 0 320l0-1.6c0-14.7 4-29.1 11.7-41.6l92-151.2c5.2-8.5 14.4-13.7 24.3-13.7s19.2 5.2 24.3 13.7l92 151.2c7.6 12.5 11.7 26.9 11.7 41.6l0 1.6c0 53-57.3 96-128 96zM320 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default ScaleBalanced;