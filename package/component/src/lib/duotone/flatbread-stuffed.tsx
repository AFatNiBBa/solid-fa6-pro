
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flatbread-stuffed` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flatbread-stuffed?s=duotone flatbread-stuffed}
 * @preview ![flatbread-stuffed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/flatbread-stuffed.svg)
 */
const FlatbreadStuffed: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M16 272.1c0 6.7 2.1 13.5 6.4 19.2l40.9 54.8c4 5.3 6.2 11.8 6.4 18.5l.9 41.2c2.6-4.9 5.9-9.4 9.9-13.3l55.9-55.9C121.1 316.3 112 291.2 112 264c0-66.3 53.7-120 120-120c27.2 0 52.3 9.1 72.5 24.3L424.4 48.4c4.6-4.6 10-8.3 15.8-11.1c-6.1-3.9-13.4-5.7-21-4.8l-67.9 8.1c-6.6 .8-13.3-.5-19.2-3.7L272.2 4c-4.8-2.7-10.1-4-15.4-4c-8.6 0-17.1 3.5-23.3 10.1L186.6 59.9c-4.6 4.9-10.5 8.2-17.1 9.5L102.4 82.7c-14.3 2.8-24.9 15-25.7 29.6l-3.8 68.3c-.4 6.7-2.8 13-7 18.2L23.1 252.1c-4.7 5.8-7.1 12.9-7.1 20zM144 264c0 18.4 5.6 35.4 15.3 49.5L281.5 191.3C267.4 181.6 250.4 176 232 176c-48.6 0-88 39.4-88 88z" />
        <path d="M465.4 64c6.8 .4 13.2 3.7 17.4 9C519.1 118.8 544 175.3 544 240c0 150.2-121.8 272-272 272c-64.7 0-121.2-24.9-166.9-61.2c-5.4-4.3-8.6-10.6-9-17.4s2.2-13.5 7-18.3l86-86 86-86 86-86 43-43 43-43c4.8-4.8 11.5-7.4 18.3-7zM272 448a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm80-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-48-48a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default FlatbreadStuffed;