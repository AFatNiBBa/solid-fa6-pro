
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trash-can-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can-slash?s=duotone trash-can-slash}
 * @preview ![trash-can-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/trash-can-slash.svg)
 */
const TrashCanSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M98.4 51.8C117.2 66.5 136 81.3 154.8 96L512 96c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C403.4 6.8 392.3 0 380.2 0L259.8 0c-12.1 0-23.2 6.8-28.6 17.7L224 32l-96 0c-13.4 0-24.8 8.2-29.6 19.8zm29.6 145L128 448c0 35.3 28.7 64 64 64l256 0c20.1 0 38.1-9.3 49.8-23.8L431.5 436c-1.8 6.9-8 12-15.5 12c-8.8 0-16-7.2-16-16l0-20.8-64-50.4 0 71.3c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96.5-64-50.4L240 432c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-172.1-80-63zM195.6 128c36.1 28.3 72.3 56.6 108.4 85l0-5c0-8.8 7.2-16 16-16s16 7.2 16 16l0 30c21.3 16.7 42.7 33.4 64 50.2l0-80.2c0-8.8 7.2-16 16-16s16 7.2 16 16l0 105.3c26.7 20.9 53.3 41.8 80 62.7l0-248-316.4 0z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default TrashCanSlash;