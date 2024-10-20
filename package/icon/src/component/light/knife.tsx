
import { Icon } from "../../index";

/**
 * A component that renders the `knife` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/knife?s=light knife}
 * @preview ![knife](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/knife.svg)
 */
const Knife: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 9.7C453.8 3.5 461.8 0 470.3 0c12.3 0 24.1 7.6 28.2 20.4c5 15.9 13.6 49.2 13.6 91.6c0 49.1-15.6 86.8-42.9 123.7c-22.7 30.6-54 61.2-91 97.4c-6.5 6.4-13.2 12.9-20 19.6l-9.8 9.8c-13.9 13.9-32.7 21.7-52.3 21.7s-38.4-7.8-52.3-21.7l-42-42L27.7 506.9c-6 6.5-16.2 6.8-22.6 .8s-6.8-16.2-.8-22.6L189.6 286.5 448 9.7zM223.5 297.1l42.8 42.8c7.9 7.9 18.5 12.3 29.7 12.3s21.8-4.4 29.7-12.3l9.9-9.9 .1-.1s0 0 0 0c7.1-7 13.9-13.7 20.5-20.1c37.2-36.4 66.3-64.9 87.3-93.2C467.4 184.2 480 153 480 112c0-34.9-6.5-63-10.9-78L223.5 297.1z" />
    </Icon>
);

export default Knife;