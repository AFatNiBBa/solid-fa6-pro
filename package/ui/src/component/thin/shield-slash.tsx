
import { Icon } from "../../index";

/**
 * A component that renders the `shield-slash` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-slash?s=thin shield-slash}
 * @preview ![shield-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/shield-slash.svg)
 */
const ShieldSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2L13 1.7zM424.9 430.5c-23.8 22.4-52 42.2-85.4 58.2c-12.3 5.9-26.7 5.9-39 0C153.3 418.2 106 271.3 97.5 172.1l-17-13.4c5.3 101.9 51.1 266.9 213.1 344.5c16.7 8 36.1 8 52.8 0c35.8-17.1 65.9-38.5 91.2-62.6l-12.7-10zM295 7.8L182.4 55.6l14.3 11.3L301.3 22.6c12-5.1 25.5-5.1 37.5 0l176.7 75c16.6 7.1 28.6 23.2 28.5 42.4c-.2 46.1-9.4 109.7-36.8 172.2l13 10.2C550 256 559.8 188.2 560 140c.1-26.2-16.3-47.9-38.3-57.2L345 7.8c-16-6.8-34-6.8-50 0z" />
    </Icon>
);

export default ShieldSlash;