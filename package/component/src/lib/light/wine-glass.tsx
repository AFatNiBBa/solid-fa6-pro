
import { Icon } from "../../index";

/**
 * A component that renders the `wine-glass` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wine-glass?s=light wine-glass}
 * @preview ![wine-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/wine-glass.svg)
 */
const WineGlass: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M49.6 160l220.8 0 3.2 35.6C279.7 262.4 227.1 320 160 320S40.3 262.4 46.4 195.6L49.6 160zm2.9-32l8.7-96 197.6 0 8.7 96-215 0zM29.4 29.1L14.5 192.7C7.2 272.8 65.9 342.7 144 351.1L144 480l-64 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0 0-128.9c78.1-8.5 136.8-78.3 129.5-158.5L290.6 29.1C289.1 12.6 275.3 0 258.8 0L61.2 0C44.7 0 30.9 12.6 29.4 29.1z" />
    </Icon>
);

export default WineGlass;