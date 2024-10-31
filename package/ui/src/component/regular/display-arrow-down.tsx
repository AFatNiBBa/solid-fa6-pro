
import { Icon } from "../../index";

/**
 * A component that renders the `display-arrow-down` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/display-arrow-down?s=regular display-arrow-down}
 * @preview ![display-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/display-arrow-down.svg)
 */
const DisplayArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 0L224 0l0 48L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l175.5 0c.3 0 .6 0 .8 0l95.2 0c.3 0 .6 0 .8 0L512 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L352 48l0-48L512 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-147.7 0 8 48 51.7 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-72 0-128 0-72 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l51.7 0 8-48L64 416c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0zM260.3 416l-8 48 71.3 0-8-48-55.3 0zM312 24l0 182.1 39-39c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0l-80-80c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l39 39L264 24c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
    </Icon>
);

export default DisplayArrowDown;