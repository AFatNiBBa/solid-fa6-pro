
import { Icon, generic } from "../../index";

/**
 * A component that renders the `deer` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/deer?s=sharp-duotone-solid deer}
 * @preview ![deer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/deer.svg)
 */
const Deer: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 0l0 16 0 24c0 30.9 25.1 56 56 56l16 0 24 0 7 0 25 0 16 0 0-31.2 0-.8-16 0-5.4 0c3.5-7.3 5.4-15.4 5.4-24l0-24 0-16L320 0l0 16 0 24c0 13.3-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24l0-24 0-16L224 0zM377.2 64c1.5 0 3 0 4.5 .1s3 .2 4.5 .3c3 .3 5.9 .7 8.8 1.3c5.8 1.1 11.5 2.8 17 5c10.9 4.4 21.1 10.8 29.7 19.1C459.7 80.4 472 61.7 472 40l0-24 0-16L440 0l0 16 0 24c0 13.3-10.7 24-24 24l-24 0-14.8 0z" />
        <path d="M320 96l-64 16 0 32 56 0-9.6 32L224 176l-96 0-14.1 0-7.9 0C51.7 176 6.6 217.8 2.4 272L.1 302.2l-1.8 23.9 47.9 3.7 1.8-23.3c2.4 3.3 5.2 6.5 8.1 9.5L72.1 332 46.1 358.1 24.7 379.4 34.7 408 71.5 512l101.8 0L135.3 404.6l26.6-26.6L176 363.9l0-19.9 0-3.4L240 368l48 0 0 144 96 0 0-144 0-64 26.7-80 5.3 0 96 0 0-64L443.4 91.4C425.9 73.9 402.1 64 377.2 64c-3.1 0-6.2 .3-9.2 .8L368 96l-16 0-25 0-7 0zm64 48a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default Deer;