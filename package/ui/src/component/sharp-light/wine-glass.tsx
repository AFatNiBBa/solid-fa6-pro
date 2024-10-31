
import { Icon } from "../../index";

/**
 * A component that renders the `wine-glass` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wine-glass?s=sharp-light wine-glass}
 * @preview ![wine-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/wine-glass.svg)
 */
const WineGlass: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M49.6 160l-3.2 35.6C40.3 262.4 92.9 320 160 320s119.7-57.6 113.6-124.4L270.4 160 49.6 160zm2.9-32l215 0-8.7-96L61.2 32l-8.7 96zm253 64.7c7.3 80.2-51.4 150-129.5 158.5L176 480l64 0 16 0 0 32-16 0-80 0-80 0-16 0 0-32 16 0 64 0 0-128.9C65.9 342.7 7.2 272.8 14.5 192.7L32 0 288 0l17.5 192.7z" />
    </Icon>
);

export default WineGlass;