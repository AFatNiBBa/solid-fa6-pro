
import { Icon } from "../../index";

/**
 * A component that renders the `eraser` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eraser?s=light eraser}
 * @preview ![eraser](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/eraser.svg)
 */
const Eraser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M353 74.3c-9.4-9.4-24.6-9.4-33.9 0l-111 111L390.6 368l111-111c9.4-9.4 9.4-24.6 0-33.9L353 74.3zM74.3 319c-9.4 9.4-9.4 24.6 0 33.9l88 88c4.5 4.5 10.6 7 17 7l121.4 0c6.4 0 12.5-2.5 17-7L368 390.6 185.4 208 74.3 319zM296.4 51.7c21.9-21.9 57.3-21.9 79.2 0L524.3 200.4c21.9 21.9 21.9 57.3 0 79.2L355.9 448 528 448c8.8 0 16 7.2 16 16s-7.2 16-16 16l-224 0 0-.1c-1.1 .1-2.2 .1-3.3 .1l-121.4 0c-14.9 0-29.1-5.9-39.6-16.4l-88-88c-21.9-21.9-21.9-57.3 0-79.2L296.4 51.7z" />
    </Icon>
);

export default Eraser;