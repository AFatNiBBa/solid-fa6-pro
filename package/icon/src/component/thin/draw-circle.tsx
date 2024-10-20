
import { Icon } from "../../index";

/**
 * A component that renders the `draw-circle` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/draw-circle?s=thin draw-circle}
 * @preview ![draw-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/draw-circle.svg)
 */
const DrawCircle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 80a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm46.1-18.7C296.3 81.4 277.9 96 256 96s-40.3-14.6-46.1-34.7C136.5 78.7 78.7 136.5 61.3 209.9C81.4 215.7 96 234.1 96 256s-14.6 40.3-34.7 46.1c17.3 73.4 75.1 131.2 148.5 148.5c5.8-20 24.2-34.7 46.1-34.7s40.3 14.6 46.1 34.7c73.4-17.3 131.2-75.1 148.5-148.5c-20-5.8-34.7-24.2-34.7-46.1s14.6-40.3 34.7-46.1C433.3 136.5 375.5 78.7 302.1 61.3zM466.7 208.1c25.3 1.4 45.3 22.3 45.3 47.9s-20.1 46.5-45.3 47.9c-18.3 80.8-81.9 144.4-162.7 162.7C302.5 491.9 281.6 512 256 512s-46.5-20.1-47.9-45.3C127.3 448.4 63.6 384.7 45.3 303.9C20.1 302.5 0 281.6 0 256s20.1-46.5 45.3-47.9C63.6 127.3 127.3 63.6 208.1 45.3C209.5 20.1 230.4 0 256 0s46.5 20.1 47.9 45.3c80.8 18.3 144.4 81.9 162.7 162.7zM256 496a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM80 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm384 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default DrawCircle;