
import { Icon } from "../../index";

/**
 * A component that renders the `moon-stars` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/moon-stars?s=solid moon-stars}
 * @preview ![moon-stars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/moon-stars.svg)
 */
const MoonStars: typeof Icon = x => (
    <Icon {...x}>
        <path d="M284.8 99.2l11 38.6c1 3.6 4.4 6.2 8.2 6.2s7.1-2.5 8.2-6.2l11-38.6 38.6-11c3.6-1 6.2-4.4 6.2-8.2s-2.5-7.1-6.2-8.2l-38.6-11-11-38.6c-1-3.6-4.4-6.2-8.2-6.2s-7.1 2.5-8.2 6.2l-11 38.6-38.6 11c-3.6 1-6.2 4.4-6.2 8.2s2.5 7.1 6.2 8.2l38.6 11zm119 211.6c1.6 5.5 6.6 9.2 12.2 9.2s10.7-3.8 12.2-9.2l16.6-58 58-16.6c5.5-1.6 9.2-6.6 9.2-12.2s-3.8-10.7-9.2-12.2l-58-16.6-16.6-58c-1.6-5.5-6.6-9.2-12.2-9.2s-10.7 3.8-12.2 9.2l-16.6 58-58 16.6c-5.5 1.6-9.2 6.6-9.2 12.2s3.8 10.7 9.2 12.2l58 16.6 16.6 58zM191.8 128C85.8 128 0 214.1 0 320.2S85.8 512.4 191.8 512.4c52 0 99.1-20.7 133.6-54.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-8.1 1.4-16.5 2.2-25.1 2.2c-80.7 0-146.2-65.6-146.2-146.6c0-54.8 30-102.6 74.4-127.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-5.4-.5-10.8-.7-16.3-.7z" />
    </Icon>
);

export default MoonStars;