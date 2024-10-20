
import { Icon } from "../../index";

/**
 * A component that renders the `fill` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fill?s=light fill}
 * @preview ![fill](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/fill.svg)
 */
const Fill: typeof Icon = x => (
    <Icon {...x}>
        <path d="M59.3 4.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l97.4 97.4L30.6 228.1c-37.5 37.5-37.5 98.3 0 135.8L148.1 481.4c37.5 37.5 98.3 37.5 135.8 0L474.3 290.9c28.1-28.1 28.1-73.7 0-101.8L322.9 37.7c-28.1-28.1-73.7-28.1-101.8 0l-64.4 64.4L59.3 4.7zm97.4 142.6l88 88c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-88-88 64.4-64.4c15.6-15.6 40.9-15.6 56.6 0L451.7 211.7c15.6 15.6 15.6 40.9 0 56.6L432 288 35 288c1.7-13.6 7.8-26.8 18.2-37.3L156.7 147.3zM53.3 341.3C47 335 42.3 327.7 39.2 320L400 320 261.3 458.7c-25 25-65.5 25-90.5 0L53.3 341.3z" />
    </Icon>
);

export default Fill;