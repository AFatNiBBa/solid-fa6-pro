
import { Icon } from "../../index";

/**
 * A component that renders the `thumbs-up` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thumbs-up?s=sharp-thin thumbs-up}
 * @preview ![thumbs-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/thumbs-up.svg)
 */
const ThumbsUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32l8 0 80 0 8 0 0 8 0 51.1c0 29.7-6.4 58.6-18.1 84.9L448 176l48 0 8 0 0 8 0 96 0 8-8 0-8 0 0 56 0 8-8 0-8 0 0 56 0 8-8 0-24 0 0 56 0 8-8 0-48 0-112 0-14.9 0-2.5 0-2.1-1.4-12.3-8.5L160 414.8l0-19.4 89.3 61.6 10.3 7.1 12.5 0 112 0 40 0 0-56 0-8 8 0 24 0 0-56 0-8 8 0 8 0 0-56 0-8 8 0 8 0 0-80-40 0-126.9 0-13.2 0 6.1-11.7c14.2-27 21.9-57.5 21.9-89.1L336 48l-64 0 0 43.1c0 45.9-24.6 88.3-64.5 111.1l-30 17.2-.6 .3-.6 .2L160 226l0-17 10.1-3.7 29.5-16.8c34.9-19.9 56.4-57.1 56.4-97.2L256 40l0-8zM16 208l0 256 96 0 0-256-96 0zM0 192l16 0 96 0 16 0 0 16 0 256 0 16-16 0-96 0L0 480l0-16L0 208l0-16z" />
    </Icon>
);

export default ThumbsUp;