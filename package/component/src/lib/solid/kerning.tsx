
import { Icon } from "../../index";

/**
 * A component that renders the `kerning` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kerning?s=solid kerning}
 * @preview ![kerning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/kerning.svg)
 */
const Kerning: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M454.3 23.2c4-7.9 .7-17.5-7.2-21.5s-17.5-.7-21.5 7.2l-240 480c-4 7.9-.7 17.5 7.2 21.5s17.5 .7 21.5-7.2l240-480zM60.6 113.7C52.7 97.9 33.5 91.5 17.7 99.4S-4.5 126.5 3.4 142.3l128 256c5.4 10.8 16.5 17.7 28.6 17.7s23.2-6.8 28.6-17.7l128-256c7.9-15.8 1.5-35-14.3-42.9s-35-1.5-42.9 14.3L160 312.4 60.6 113.7zm320 284.6L403.8 352l152.4 0 23.2 46.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-128-256C503.2 102.9 492.1 96 480 96s-23.2 6.8-28.6 17.7l-128 256c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3zM480 199.6L524.2 288l-88.4 0L480 199.6z" />
    </Icon>
);

export default Kerning;