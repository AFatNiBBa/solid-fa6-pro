
import { Icon } from "../../index";

/**
 * A component that renders the `comma` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comma?s=light comma}
 * @preview ![comma](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/comma.svg)
 */
const Comma: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M136 352.3c0-17.8-14.4-32.3-32.3-32.3c-16.1 0-29.7 11.8-31.9 27.7l-18 125.8c-.5 3.4 2.2 6.5 5.7 6.5c1.9 0 3.7-1 4.8-2.6l66-101.9c3.8-5.8 5.8-12.6 5.8-19.5l0-3.7zm32 0l0 3.7c0 13.1-3.8 25.9-10.9 36.9l-66 101.9C84.2 505.5 72.3 512 59.5 512c-23 0-40.6-20.3-37.3-43l18-125.8c4.5-31.7 31.6-55.2 63.6-55.2c35.5 0 64.3 28.8 64.3 64.3z" />
    </Icon>
);

export default Comma;