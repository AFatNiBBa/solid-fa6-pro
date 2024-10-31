
import { Icon, generic } from "../../index";

/**
 * A component that renders the `spa` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spa?s=duotone spa}
 * @preview ![spa](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/spa.svg)
 */
const Spa: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M183.1 235.3c19.6-113 73.8-178.8 91.3-197.7C278 33.9 282.9 32 288 32s10 1.9 13.5 5.6c17.5 18.8 71.8 84.7 91.3 197.7c-22 13.5-42.1 29.9-59.7 48.7c-8.8 9.4-17.1 19.3-24.6 29.8c-3.8 5.2-7.4 10.6-10.8 16.1c-1.7 2.7-3.4 5.5-5 8.3s-3.2 5.6-4.8 8.6c-24.5-46-60.9-84.5-104.9-111.6z" />
        <path d="M267.9 480l20.1 0 20.1 0C456.1 480 576 360.1 576 212.1c0-11.1-9-20.1-20.1-20.1l-9.9 0c-110.8 0-208.5 62-258 154.9C238.5 254 140.8 192 30 192l-9.9 0C9 192 0 201 0 212.1C0 360.1 119.9 480 267.9 480z" />
    </Icon>
);

export default Spa;