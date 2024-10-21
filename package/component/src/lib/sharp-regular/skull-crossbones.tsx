
import { Icon } from "../../index";

/**
 * A component that renders the `skull-crossbones` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/skull-crossbones?s=sharp-regular skull-crossbones}
 * @preview ![skull-crossbones](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/skull-crossbones.svg)
 */
const SkullCrossbones: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M290.1 185.8L272 200.3l0 23.2 0 16.6-96 0 0-16.6 0-23.2-18.1-14.4C138.4 170.4 128 149.5 128 128c0-39 37.5-80 96-80s96 41 96 80c0 21.5-10.4 42.4-29.9 57.8zM368 128C368 57.3 303.5 0 224 0S80 57.3 80 128c0 37.9 18.5 72 48 95.4l0 16.6 0 48 48 0 96 0 48 0 0-48 0-16.6c29.5-23.4 48-57.5 48-95.4zm58.4 128L405 266.7 223.9 357.2 42.8 266.7 21.3 256-.1 298.9l21.5 10.7L170.2 384 21.3 458.4-.1 469.1l21.5 42.9 21.5-10.7 181.1-90.5L405 501.4l21.5 10.7 21.5-42.9-21.5-10.7L277.6 384l148.8-74.4 21.5-10.7L426.4 256zM208 136a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default SkullCrossbones;