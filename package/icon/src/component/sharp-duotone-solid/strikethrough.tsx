
import { Icon, generic } from "../../index";

/**
 * A component that renders the `strikethrough` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/strikethrough?s=sharp-duotone-solid strikethrough}
 * @preview ![strikethrough](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/strikethrough.svg)
 */
const Strikethrough: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M87.5 436.3l30.4 10.1c3.6 1.2 7.9 2.7 12.8 4.3c24.9 8.5 63.6 21.7 87.6 25.6c15.5 2.4 30.7 3.7 45.5 3.7c28.3 0 55.2-4.6 78.4-14.6c36.5-15.6 64.4-44.8 71.8-87.3c3.6-21 2.7-40.4-3.1-58.1l-75.7 0c7 5.6 11.4 11.2 13.9 17.2c2.7 6.5 4.4 15.8 1.9 30.1c-3 17.6-13.8 30.8-33.9 39.4c-21.1 9-51.7 12.3-88.5 6.5c-18-2.9-49.1-13.5-74.4-22.1c-5.6-1.9-11-3.7-15.9-5.4l-30.4-10.1L87.5 436.3zM98.1 133.9c-.1 .6-.2 1.1-.2 1.7c-2.8 23.9 .5 45.6 10.1 64.6c4.5 9 10.2 16.9 16.7 23.9l145.5 0-.4-.1-1.1-.3c-36-10.8-65.2-19.6-85.2-33.1c-9.3-6.3-15-12.6-18.2-19.1c-3.1-6.1-5.2-14.6-3.8-27.4c3.2-17.2 14-30.1 33.7-38.6c21.1-9 51.8-12.3 88.6-6.5c11.9 1.9 48.8 9.1 60.1 12l30.9 8.2 16.5-61.8-30.9-8.2c-14.3-3.8-53.6-11.4-66.6-13.4c-15.3-2.4-30.5-3.6-45.3-3.6c-28.3 0-55.2 4.6-78.4 14.6c-36.5 15.6-64.4 44.8-71.8 87.3z" />
        <path d="M0 224l32 0 448 0 32 0 0 64-32 0L32 288 0 288l0-64z" />
    </Icon>
);

export default Strikethrough;