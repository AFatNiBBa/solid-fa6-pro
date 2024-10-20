
import { Icon } from "../../index";

/**
 * A component that renders the `down` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down?s=solid down}
 * @preview ![down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/down.svg)
 */
const Down: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M214.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l96 0 0-184c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 184 96 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-160 160z" />
    </Icon>
);

export default Down;