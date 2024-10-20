
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-progress` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-progress?s=duotone arrow-progress}
 * @preview ![arrow-progress](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-progress.svg)
 */
const ArrowProgress: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 448c0 35.3 28.7 64 64 64c23.7 0 44.4-12.9 55.4-32l40.6 0 0 14.1c0 9.9 8 17.9 17.9 17.9c4 0 7.8-1.3 11-3.8l60.8-47.3c4-3.1 6.3-7.9 6.3-12.9s-2.3-9.8-6.3-12.9l-60.8-47.3c-3.1-2.4-7-3.8-11-3.8c-9.9 0-17.9 8-17.9 17.9l0 14.1-40.6 0c-11.1-19.1-31.7-32-55.4-32c-35.3 0-64 28.7-64 64zM384 64a64 64 0 1 0 128 0A64 64 0 1 0 384 64z" />
        <path d="M256 110.1L256 96 128 96c-35.3 0-64 28.7-64 64s28.7 64 64 64l256 0c70.7 0 128 57.3 128 128c0 62.2-44.4 114.1-103.2 125.6C398.1 498 376.7 512 352 512c-35.3 0-64-28.7-64-64s28.7-64 64-64c22.2 0 41.7 11.3 53.2 28.4c24.9-8.7 42.8-32.5 42.8-60.4c0-35.3-28.7-64-64-64l-256 0C57.3 288 0 230.7 0 160S57.3 32 128 32l128 0 0-14.1C256 8 264 0 273.9 0c4 0 7.8 1.3 11 3.8l60.8 47.3c4 3.1 6.3 7.9 6.3 12.9s-2.3 9.8-6.3 12.9l-60.8 47.3c-3.1 2.4-7 3.8-11 3.8c-9.9 0-17.9-8-17.9-17.9z" />
    </Icon>
);

export default ArrowProgress;