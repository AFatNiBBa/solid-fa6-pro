
import { Icon, generic } from "../../index";

/**
 * A component that renders the `galaxy` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/galaxy?s=duotone galaxy}
 * @preview ![galaxy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/galaxy.svg)
 */
const Galaxy: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 180.5L0 192c0 70.3 37.8 131.8 94.2 165.2c28.7 17 62.1 26.8 97.8 26.8c22.3 0 43.7-3.8 63.5-10.8c-8.4 25.9-23 49.5-42.4 68.8c-9.2 9.1-19.6 17.3-30.9 24.3L169.8 474c-6.1 3.7-9.8 10.4-9.8 17.5c0 11.3 9.2 20.5 20.5 20.5l11.5 0c70.3 0 131.8-37.8 165.2-94.2c17-28.7 26.8-62.1 26.8-97.8c0-22.3-3.8-43.7-10.8-63.5c25.9 8.4 49.5 23 68.8 42.4c9.1 9.2 17.3 19.6 24.3 30.9l7.7 12.5c3.7 6.1 10.4 9.8 17.5 9.8c11.3 0 20.5-9.2 20.5-20.5l0-11.5c0-70.3-37.8-131.8-94.2-165.2c-28.7-17-62.1-26.8-97.8-26.8c-22.3 0-43.7 3.8-63.5 10.8c8.4-25.9 23-49.5 42.4-68.8c9.2-9.1 19.6-17.3 30.9-24.3L342.2 38c6.1-3.7 9.8-10.4 9.8-17.5C352 9.2 342.8 0 331.5 0L320 0C249.7 0 188.2 37.8 154.8 94.2c-8.5 14.3-15.2 29.9-19.8 46.3c-2.3 8.2-4 16.6-5.2 25.2c-.6 4.3-1 8.7-1.3 13c-.1 2.2-.3 4.4-.3 6.6c-.1 2.2-.1 4.5-.1 6.7c0 1.4 0 2.8 0 4.2c0 1.4 .1 2.7 .1 4.1c.1 2.7 .3 5.5 .5 8.2c.5 5.4 1.2 10.8 2.1 16.1c1.8 10.6 4.5 20.9 8 30.9c-25.9-8.4-49.5-23-68.8-42.4c-9.1-9.2-17.3-19.6-24.3-30.9L38 169.8c-3.7-6.1-10.4-9.8-17.5-9.8C9.2 160 0 169.2 0 180.5zM288 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M154.8 94.2c.1-13 1.6-26.1 4.7-39l3.4-14.2c1.7-6.9-.4-14.2-5.5-19.3c-8-8-21-8-29 0l-8.1 8.1C70.5 79.4 53.8 149.6 70 213.1c19.3 19.4 42.9 34 68.8 42.4c-7-19.9-10.8-41.3-10.8-63.5c0-35.7 9.8-69.2 26.8-97.8zM94.2 357.2c-13-.1-26.1-1.6-39-4.7l-14.2-3.4c-6.9-1.7-14.2 .4-19.3 5.5c-8 8-8 21 0 29l8.1 8.1c49.7 49.7 119.9 66.5 183.4 50.3c19.4-19.3 34-42.9 42.4-68.8c-19.9 7-41.3 10.8-63.5 10.8c-35.7 0-69.2-9.8-97.8-26.8zm263.1 60.6c-.1 13-1.6 26.1-4.7 39l-3.4 14.2c-1.7 6.9 .4 14.2 5.5 19.3c8 8 21 8 29 0l8.1-8.1c49.7-49.7 66.5-119.9 50.3-183.4c-19.3-19.4-42.9-34-68.8-42.4c7 19.9 10.8 41.3 10.8 63.5c0 35.7-9.8 69.2-26.8 97.8zm60.6-263.1c13 .1 26.1 1.6 39 4.7l14.2 3.4c6.9 1.7 14.2-.4 19.3-5.5c8-8 8-21 0-29l-8.1-8.1C432.6 70.5 362.4 53.8 298.9 70c-19.4 19.3-34 42.9-42.4 68.8c19.9-7 41.3-10.8 63.5-10.8c35.7 0 69.2 9.8 97.8 26.8z" />
    </Icon>
);

export default Galaxy;