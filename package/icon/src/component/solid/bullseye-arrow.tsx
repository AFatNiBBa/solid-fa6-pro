
import { Icon } from "../../index";

/**
 * A component that renders the `bullseye-arrow` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bullseye-arrow?s=solid bullseye-arrow}
 * @preview ![bullseye-arrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/bullseye-arrow.svg)
 */
const BullseyeArrow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M335.2 244.7c.5 3.7 .8 7.5 .8 11.3c0 44.2-35.8 80-80 80s-80-35.8-80-80s35.8-80 80-80c3.8 0 7.6 .3 11.3 .8l31.2-31.2L293.7 117c-12-3.3-24.7-5-37.7-5c-79.5 0-144 64.5-144 144s64.5 144 144 144s144-64.5 144-144c0-13.1-1.7-25.7-5-37.7l-28.6-4.8-31.2 31.2zm110.1-20.8c1.8 10.4 2.7 21.1 2.7 32.1c0 106-86 192-192 192S64 362 64 256S150 64 256 64c10.9 0 21.6 .9 32.1 2.7l9.3-9.3 43.1-43.1C314 5 285.6 0 256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256c0-29.6-5-58-14.3-84.5l-43.1 43.1-9.3 9.3zm-80.2-43.1l50.7 8.4c10.2 1.7 20.6-1.6 27.9-8.9l51.2-51.2c8.1-8.1 5.3-21.9-5.4-26.2L432 80 409 22.5c-4.3-10.7-18-13.5-26.2-5.4L331.6 68.4c-7.3 7.3-10.6 17.7-8.9 27.9l8.4 50.7L239 239c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l92.1-92.1z" />
    </Icon>
);

export default BullseyeArrow;