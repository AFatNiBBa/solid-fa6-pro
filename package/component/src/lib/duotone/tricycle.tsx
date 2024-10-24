
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tricycle` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tricycle?s=duotone tricycle}
 * @preview ![tricycle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tricycle.svg)
 */
const Tricycle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 368.1A112 112 0 1 1 0 368a112 112 0 1 1 224 .1zM56 368a56 56 0 1 0 112 0A56 56 0 1 0 56 368zm200-16c0-51.5 30.4-95.9 74.2-116.2c4.7 18.7 9.4 37.4 14 56.1c-19.4 12.9-32.2 35-32.2 60c0 39.8 32.2 72 72 72s72-32.2 72-72c0-37.5-28.6-68.2-65.2-71.7c-4.7-18.7-9.4-37.4-14-56.1c2.4-.1 4.8-.2 7.2-.2c70.7 0 128 57.3 128 128s-57.3 128-128 128s-128-57.3-128-128z" />
        <path d="M256 56c0-13.3 10.7-24 24-24l73.6 0C388.1 32 416 59.9 416 94.4c0 18.2-8 35.5-21.8 47.3l-31.3 26.9 44.4 177.6c3.2 12.9-4.6 25.9-17.5 29.1s-25.9-4.6-29.1-17.5L319.3 192l-12.1 0c-57.6 0-110.9 29.5-141.6 77.6c-14.3-7.8-30.5-12.6-47.8-13.5c1.2-2.3 2.5-4.5 3.9-6.7L77.6 176 56 176c-13.3 0-24-10.7-24-24s10.7-24 24-24l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-2.4 0 19.6 32.6c40-40.7 95.3-64.6 154.1-64.6l10.9 0c.7-.8 1.5-1.5 2.3-2.2L363 105.3c3.2-2.7 5-6.7 5-10.9c0-7.9-6.4-14.4-14.4-14.4L280 80c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default Tricycle;