
import { Icon, generic } from "../../index";

/**
 * A component that renders the `knife` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/knife?s=duotone knife}
 * @preview ![knife](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/knife.svg)
 */
const Knife: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M201.4 265.4l16-16C298.1 168.7 378.7 88 459.5 7.3c4.7-4.7 11-7.3 17.6-7.3c11.2 0 21 7.5 23.5 18.4C505.3 38.6 512 71.5 512 96c0 90.1-56.3 137.9-149.2 229.3c-12.1 11.9-28.4 18.7-45.3 18.7l-11 0c-17 0-33.3-6.7-45.3-18.7c-4.9-4.9-9.8-9.8-14.6-14.6c-15.1-15.1-30.2-30.2-45.3-45.3z" />
        <path d="M217.4 249.4l-16 16 45.3 45.3-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l208-208z" />
    </Icon>
);

export default Knife;