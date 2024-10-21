
import { Icon } from "../../index";

/**
 * A component that renders the `moon-stars` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/moon-stars?s=sharp-thin moon-stars}
 * @preview ![moon-stars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/moon-stars.svg)
 */
const MoonStars: typeof Icon = x => (
    <Icon {...x}>
        <path d="M328 8l0-8L312 0l0 8 0 48-48 0-8 0 0 16 8 0 48 0 0 48 0 8 16 0 0-8 0-48 48 0 8 0 0-16-8 0-48 0 0-48zM242.2 134.6c-9.7-2.6-19.7-4.5-29.9-5.6c-6.7-.7-13.5-1.1-20.3-1.1C86 128 0 214 0 320S86 512 192 512c50.5 0 96.5-19.5 130.8-51.4c7.4-6.9 14.3-14.4 20.5-22.4c-9 3.3-18.4 5.9-28.1 7.5c-8.8 1.5-17.9 2.3-27.2 2.3c-88.4 0-160-71.6-160-160c0-62.1 35.4-116 87.2-142.5c8.6-4.4 17.7-8.1 27.1-10.9zm-55.6 9.4C141.5 175.9 112 228.5 112 288c0 97.2 78.8 176 176 176c1.8 0 3.6 0 5.3-.1C264.7 484.1 229.7 496 192 496C94.8 496 16 417.2 16 320c0-95.4 75.9-173.1 170.7-175.9zM424 128l-16 0 0 8 0 80-80 0-8 0 0 16 8 0 80 0 0 80 0 8 16 0 0-8 0-80 80 0 8 0 0-16-8 0-80 0 0-80 0-8z" />
    </Icon>
);

export default MoonStars;