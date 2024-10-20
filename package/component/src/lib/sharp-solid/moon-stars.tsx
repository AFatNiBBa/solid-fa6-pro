
import { Icon } from "../../index";

/**
 * A component that renders the `moon-stars` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/moon-stars?s=sharp-solid moon-stars}
 * @preview ![moon-stars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/moon-stars.svg)
 */
const MoonStars: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320 64L304 16 288 64 240 80l48 16 16 48 16-48 48-16L320 64zM440 200l-24-72-24 72-72 24 72 24 24 72 24-72 72-24-72-24zM128 288c0-72.5 48.2-133.7 114.2-153.4c-16-4.3-32.9-6.6-50.2-6.6C86 128 0 214 0 320S86 512 192 512c61.5 0 116.2-28.9 151.3-73.8c-17.2 6.4-35.9 9.8-55.3 9.8c-88.4 0-160-71.6-160-160z" />
    </Icon>
);

export default MoonStars;