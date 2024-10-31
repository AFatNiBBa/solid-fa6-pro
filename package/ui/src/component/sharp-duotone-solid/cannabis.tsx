
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cannabis` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cannabis?s=sharp-duotone-solid cannabis}
 * @preview ![cannabis](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cannabis.svg)
 */
const Cannabis: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M7 350.3l25.2 14c14.8 8.2 38.4 19.4 65.5 26c18.9 4.6 40.1 7.3 61.4 4.7l-8.3 33.1-8.5 33.7 31.1-15.5L232 417.2l0 70.8 0 24 48 0 0-24 0-136c0 21.8 0 43.5 0 65.2l58.5 29.1 31.1 15.5-8.5-33.7L352.8 395c21.4 2.5 42.6-.1 61.4-4.7c27.1-6.7 50.7-17.8 65.5-26l25.2-14-25.2-14c-13.8-7.7-35.2-17.8-60-24.6c12.9-14.8 23.9-30.9 33.2-47.1c23.4-40.8 37.1-84 42.7-111.7l4.7-23.5L476.9 134c-27.9 5.5-71.2 19.2-112.2 42.5c-11.8 6.7-23.6 14.3-34.8 22.8C332.9 83.9 256 0 256 0s-76.9 83.9-73.9 199.3c-11.2-8.5-23-16.1-34.8-22.8C106.3 153.2 63 139.6 35.1 134l-23.5-4.7 4.7 23.5c5.6 27.7 19.3 70.9 42.7 111.7c9.3 16.2 20.3 32.4 33.2 47.1c-24.8 6.7-46.2 16.9-60 24.6L7 350.3z" />
        <path d="M232 488l0-136 48 0 0 136 0 24-48 0 0-24z" />
    </Icon>
);

export default Cannabis;