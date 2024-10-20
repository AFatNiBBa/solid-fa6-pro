
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-8` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-8?s=duotone square-8}
 * @preview ![square-8](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-8.svg)
 */
const Square_8: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM128 304c0 44.2 35.8 80 80 80l32 0c44.2 0 80-35.8 80-80c0-25-11.5-47.4-29.5-62c8.5-11.8 13.5-26.3 13.5-42c0-39.8-32.2-72-72-72l-16 0c-39.8 0-72 32.2-72 72c0 15.7 5 30.1 13.5 42c-18 14.7-29.5 37-29.5 62zm48 0c0-17.7 14.3-32 32-32l8 0 16 0 8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32zm16-104c0-13.3 10.7-24 24-24l16 0c13.3 0 24 10.7 24 24c0 13.2-10.7 24-24 24l-16 0c-13.2 0-24-10.8-24-24z" />
        <path d="M304 200c0-39.8-32.2-72-72-72l-16 0c-39.8 0-72 32.2-72 72c0 15.7 5 30.1 13.5 42c-18 14.7-29.5 37-29.5 62c0 44.2 35.8 80 80 80l32 0c44.2 0 80-35.8 80-80c0-25-11.5-47.4-29.5-62c8.5-11.8 13.5-26.3 13.5-42zm-72 72l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c0 0 0 0 0 0l16 0c0 0 0 0 0 0zm0-48L216 224c-13.2 0-24-10.8-24-24s10.7-24 24-24l16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24z" />
    </Icon>
);

export default Square_8;