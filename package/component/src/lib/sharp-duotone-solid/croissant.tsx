
import { Icon, generic } from "../../index";

/**
 * A component that renders the `croissant` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/croissant?s=sharp-duotone-solid croissant}
 * @preview ![croissant](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/croissant.svg)
 */
const Croissant: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288c0 66.7 22.6 128 60.7 176.8L238.2 326.7 6.3 227.9C2.2 247.3 0 267.4 0 288zM227.9 6.3l98.9 231.9L464.8 60.7C416 22.6 354.7 0 288 0c-20.6 0-40.7 2.2-60.1 6.3z" />
        <path d="M468.6 108L390 209l90 15 32-41.3c-10.2-27.4-25-52.7-43.4-74.7zM209 390l15 90-41.3 32c-27.4-10.2-52.7-25-74.7-43.4L209 390zM0 190.4C30.2 100.9 100.9 30.3 190.4 0L306.4 272 272 306.4 0 190.4z" />
    </Icon>
);

export default Croissant;