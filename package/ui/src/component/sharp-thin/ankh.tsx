
import { Icon } from "../../index";

/**
 * A component that renders the `ankh` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ankh?s=sharp-thin ankh}
 * @preview ![ankh](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/ankh.svg)
 */
const Ankh: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M48 128c0 54.1 28.9 98.3 59.5 129.9c15.2 15.7 30.4 27.8 41.9 36c4.1 3 7.7 5.4 10.7 7.3c2.9-1.9 6.5-4.3 10.7-7.3c11.4-8.2 26.7-20.4 41.9-36C243.1 226.3 272 182.1 272 128c0-61.9-50.1-112-112-112S48 66.1 48 128zm88.1 176C99 276.5 32 214.8 32 128C32 57.3 89.3 0 160 0s128 57.3 128 128c0 86.8-67 148.5-104.1 176L312 304l8 0 0 16-8 0-144 0 0 184 0 8-16 0 0-8 0-184L8 320l-8 0 0-16 8 0 128.1 0z" />
    </Icon>
);

export default Ankh;