
import { Icon } from "../../index";

/**
 * A component that renders the `moon-stars` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/moon-stars?s=light moon-stars}
 * @preview ![moon-stars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/moon-stars.svg)
 */
const MoonStars: typeof Icon = x => (
    <Icon {...x}>
        <path d="M304 0c8.8 0 16 7.2 16 16l0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l32 0 0-32c0-8.8 7.2-16 16-16zM156.6 163.9C85.3 180 32 243.8 32 320.2c0 88.5 71.6 160.2 159.8 160.2c25.7 0 50-6.1 71.5-16.9c-87.6-11.3-155.1-86.4-155.1-177.2c0-47.4 18.4-90.4 48.4-122.4zM0 320.2C0 214.1 85.8 128 191.8 128c5.5 0 10.9 .2 16.3 .7c7 .6 12.8 5.7 14.3 12.5s-1.6 13.9-7.7 17.3c-44.4 25.2-74.4 73-74.4 127.8c0 81 65.5 146.6 146.2 146.6c8.6 0 17-.7 25.1-2.2c6.9-1.2 13.8 2.2 17 8.5s1.9 13.8-3.1 18.7c-34.5 33.6-81.7 54.4-133.6 54.4C85.8 512.4 0 426.3 0 320.2zM432 160l0 64 64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0 0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l64 0 0-64c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </Icon>
);

export default MoonStars;