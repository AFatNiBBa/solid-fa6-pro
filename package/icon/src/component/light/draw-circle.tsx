
import { Icon } from "../../index";

/**
 * A component that renders the `draw-circle` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/draw-circle?s=light draw-circle}
 * @preview ![draw-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/draw-circle.svg)
 */
const DrawCircle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm58.5-6c-10 22.4-32.4 38-58.5 38s-48.6-15.6-58.5-38C147.4 107.6 107.6 147.4 90 197.5c22.4 10 38 32.4 38 58.5s-15.6 48.6-38 58.5c17.7 50.1 57.4 89.9 107.5 107.5c10-22.4 32.4-38 58.5-38s48.6 15.6 58.5 38c50.1-17.7 89.9-57.4 107.5-107.5c-22.4-10-38-32.4-38-58.5s15.6-48.6 38-58.5C404.4 147.4 364.6 107.6 314.5 90zM454.1 192.3c32.5 3.1 57.9 30.4 57.9 63.7s-25.4 60.7-57.9 63.7c-20.5 63.6-70.7 113.9-134.3 134.3C316.7 486.6 289.3 512 256 512s-60.7-25.4-63.7-57.9C128.7 433.6 78.4 383.3 57.9 319.7C25.4 316.7 0 289.3 0 256s25.4-60.7 57.9-63.7C78.4 128.7 128.7 78.4 192.3 57.9C195.3 25.4 222.7 0 256 0s60.7 25.4 63.7 57.9c63.6 20.5 113.9 70.7 134.3 134.3zM256 480a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM96 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm352 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default DrawCircle;