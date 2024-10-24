
import { Icon, generic } from "../../index";

/**
 * A component that renders the `industry` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/industry?s=duotone industry}
 * @preview ![industry](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/industry.svg)
 */
const Industry: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 64l0 240 0 48 0 80c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-128 0-148.4c-64 36.6-128 73.1-192 109.7l0-50 0-5.3 0-54.4c-64 36.6-128 73.1-192 109.7l0-50 0-5.3L160 64c0-17.7-14.3-32-32-32L64 32C46.3 32 32 46.3 32 64z" />
        <path d="M372.8 116.1c6.6 11.5 2.6 26.2-8.9 32.7L160 265.4l0-55.3L340.1 107.2c11.5-6.6 26.2-2.6 32.7 8.9zm192 0c6.6 11.5 2.6 26.2-8.9 32.7L352 265.4l0-55.3L532.1 107.2c11.5-6.6 26.2-2.6 32.7 8.9z" />
    </Icon>
);

export default Industry;