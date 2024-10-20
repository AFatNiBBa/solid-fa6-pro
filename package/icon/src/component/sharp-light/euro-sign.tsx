
import { Icon } from "../../index";

/**
 * A component that renders the `euro-sign` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/euro-sign?s=sharp-light euro-sign}
 * @preview ![euro-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/euro-sign.svg)
 */
const EuroSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M34.3 224c-1.5 10.5-2.3 21.1-2.3 32s.8 21.5 2.3 32L0 288l0 32 41.3 0C68.8 412.5 154.5 480 256 480l49 0 16 0 0-32-16 0-49 0c-83.6 0-154.7-53.4-181.1-128L288 320l0-32L66.7 288c-1.7-10.4-2.7-21.1-2.7-32s.9-21.6 2.7-32L288 224l0-32L74.9 192C101.3 117.4 172.4 64 256 64l49 0 16 0 0-32-16 0-49 0C154.5 32 68.8 99.5 41.3 192L0 192l0 32 34.3 0z" />
    </Icon>
);

export default EuroSign;