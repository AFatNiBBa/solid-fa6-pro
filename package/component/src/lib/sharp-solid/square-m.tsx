
import { Icon } from "../../index";

/**
 * A component that renders the `square-m` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-m?s=sharp-solid square-m}
 * @preview ![square-m](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-m.svg)
 */
const SquareM: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM96 152l0-24 36.3 0 7.2 9.9L224 255l84.5-117.1 7.2-9.9 36.3 0 0 24 0 208 0 24-48 0 0-24 0-133.8-60.5 83.8L224 337l-19.5-26.9L144 226.2 144 360l0 24-48 0 0-24 0-208z" />
    </Icon>
);

export default SquareM;