
import { Icon } from "../../index";

/**
 * A component that renders the `draw-square` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/draw-square?s=thin draw-square}
 * @preview ![draw-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/draw-square.svg)
 */
const DrawSquare: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 112a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm8 15.3l0 257.3C76.1 388 92 403.9 95.3 424l257.3 0c3.4-20.1 19.2-36 39.3-39.3l0-257.3c-20.1-3.4-36-19.2-39.3-39.3L95.3 88C92 108.1 76.1 124 56 127.3zM95.3 440c-3.8 22.7-23.6 40-47.3 40c-26.5 0-48-21.5-48-48c0-23.8 17.3-43.5 40-47.3l0-257.3C17.3 123.5 0 103.8 0 80C0 53.5 21.5 32 48 32c23.8 0 43.5 17.3 47.3 40l257.3 0c3.8-22.7 23.6-40 47.3-40c26.5 0 48 21.5 48 48c0 23.8-17.3 43.5-40 47.3l0 257.3c22.7 3.8 40 23.6 40 47.3c0 26.5-21.5 48-48 48c-23.8 0-43.5-17.3-47.3-40L95.3 440zM80 432a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm352 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-352a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default DrawSquare;