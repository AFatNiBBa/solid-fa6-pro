
import { Icon } from "../../index";

/**
 * A component that renders the `moon-stars` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/moon-stars?s=sharp-regular moon-stars}
 * @preview ![moon-stars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/moon-stars.svg)
 */
const MoonStars: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320 64l48 16L320 96l-16 48L288 96 240 80l48-16 16-48 16 48zM440 200l72 24-72 24-24 72-24-72-72-24 72-24 24-72 24 72zM192 128c21 0 41.2 3.4 60.2 9.6c-21.5 8.3-40.5 21.6-55.6 38.5C173.8 201.5 160 235.2 160 272c0 78 62 141.5 139.4 143.9c1.5 0 3.1 .1 4.6 .1c22 0 42.9-4.9 61.6-13.8c-11.1 23.4-26.8 44.1-45.8 61.1C285.8 493.6 241 512 192 512C86 512 0 426 0 320C0 219.2 77.6 136.6 176.3 128.6c5.2-.4 10.4-.6 15.7-.6zM48 320c0 79.5 64.5 144 144 144c18.3 0 35.8-3.4 51.8-9.6C167.3 429.1 112 357 112 272c0-29.4 6.6-57.3 18.4-82.2C81.7 212.9 48 262.5 48 320z" />
    </Icon>
);

export default MoonStars;