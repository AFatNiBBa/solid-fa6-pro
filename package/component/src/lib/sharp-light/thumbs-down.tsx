
import { Icon } from "../../index";

/**
 * A component that renders the `thumbs-down` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thumbs-down?s=sharp-light thumbs-down}
 * @preview ![thumbs-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/thumbs-down.svg)
 */
const ThumbsDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 480l16 0 96 0 16 0 0-16 0-50.4c0-21.1-3-41.8-8.6-61.6L448 352l48 0 16 0 0-16 0-96 0-16-16 0 0-56 0-16-16 0-8 0 0-48 0-16-16 0-8 0 0-40 0-16-16 0-48 0L272 32l-14.5 0-4.8 0-4 2.7-12.1 8.1L160 93.8l0 38.5 94.2-62.8 8.1-5.4 9.7 0 112 0 32 0 0 40 0 16 16 0 8 0 0 48 0 16 16 0 8 0 0 56 0 16 16 0 0 64-32 0-127 0-23.7 0 8.8 22c9 22.5 13.9 46.7 13.9 71.7l0 34.4-64 0 0-34.4c0-42.8-21.4-82.8-57-106.5l-24.8-16.5-6.5-4.4-1.4-.9-1.6-.6-4.7-1.9 0 36.8 21.3 14.2C208 351.6 224 381.5 224 413.6l0 50.4 0 16zM32 352l0-224 64 0 0 224-64 0zM0 384l32 0 64 0 32 0 0-32 0-224 0-32L96 96 32 96 0 96l0 32L0 352l0 32z" />
    </Icon>
);

export default ThumbsDown;