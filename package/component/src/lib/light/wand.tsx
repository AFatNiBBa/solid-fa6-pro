
import { Icon } from "../../index";

/**
 * A component that renders the `wand` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wand?s=light wand}
 * @preview ![wand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/wand.svg)
 */
const Wand: typeof Icon = x => (
    <Icon {...x}>
        <path d="M446.8 9.9C454 3.5 463.2 0 472.8 0C494.5 0 512 17.5 512 39.2l0 .5c0 9-3.1 17.8-8.7 24.8L448 133.6l0 26.4c0 17.7-14.3 32-32 32l-24.9 0L119 494.4C108.9 505.6 94.5 512 79.4 512c-14.1 0-27.7-5.6-37.6-15.6L15.6 470.2C5.6 460.2 0 446.7 0 432.6c0-15.1 6.5-29.5 17.7-39.6L96 323.1 96 296c0-22.1 17.9-40 40-40l33.9 0L446.8 9.9zm26 22.1c-1.8 0-3.5 .6-4.8 1.8L186.6 284c-2.9 2.6-6.7 4-10.6 4l-40 0c-4.4 0-8 3.6-8 8l0 34.3c0 4.6-1.9 8.9-5.3 11.9L39.1 416.9c-4.5 4-7.1 9.7-7.1 15.8c0 5.6 2.2 11 6.2 14.9l26.2 26.2c4 4 9.4 6.2 15 6.2c6 0 11.8-2.6 15.8-7L372.1 165.3c3-3.4 7.4-5.3 11.9-5.3l32 0 0-32c0-3.6 1.2-7.2 3.5-10l58.8-73.5c1.1-1.4 1.7-3.1 1.7-4.8l0-.5c0-4-3.2-7.2-7.2-7.2z" />
    </Icon>
);

export default Wand;