
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bulldozer` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bulldozer?s=sharp-duotone-solid bulldozer}
 * @preview ![bulldozer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bulldozer.svg)
 */
const Bulldozer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 400c0-30.5 12.2-58.2 32-78.4C52.3 300.9 80.7 288 112 288l256 0c44.7 0 83.2 26.2 101.2 64c6.9 14.5 10.8 30.8 10.8 48c0 61.9-50.1 112-112 112l-256 0C50.1 512 0 461.9 0 400zm64 0c0 26.5 21.5 48 48 48l256 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-256 0c-26.5 0-48 21.5-48 48z" />
        <path d="M32 32l32 0 128 0 19.8 0 8.8 17.7L291.8 192l28.2 0 0-64 0-32 64 0 0 32 0 64 64 0 0 96 64 0 0-64 0-11.2 7-8.8 64-80 50 40-57 71.2 0 52.8 0 64 0 50.7 54.6 54.6-45.3 45.3-64-64-9.4-9.4 0-13.3 0-64-42.8 0c-18-37.8-56.5-64-101.2-64l-256 0c-31.3 0-59.7 12.9-80 33.6L32 256l0-64L32 64l0-32zM172.2 96L96 96l0 96 124.2 0-48-96zM96 400a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm264-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM256 400a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm-56-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Bulldozer;