
import { Icon } from "../../index";

/**
 * A component that renders the `mace` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mace?s=solid mace}
 * @preview ![mace](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/mace.svg)
 */
const Mace: typeof Icon = x => (
    <Icon {...x}>
        <path d="M244.8 95l28-84.1C275 4.4 281.1 0 288 0s13 4.4 15.2 10.9l28 84.1c40.4 13.5 72.3 45.4 85.8 85.8l84.1 28c6.5 2.2 10.9 8.3 10.9 15.2s-4.4 13-10.9 15.2l-84.1 28c-13.5 40.4-45.4 72.3-85.8 85.8l-28 84.1C301 443.6 294.9 448 288 448s-13-4.4-15.2-10.9l-28-84.1c-9.8-3.3-19-7.6-27.7-12.9L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L171.9 294.9c-5.3-8.6-9.6-17.9-12.9-27.7l-84.1-28C68.4 237 64 230.9 64 224s4.4-13 10.9-15.2l84.1-28c13.5-40.4 45.4-72.3 85.8-85.8zM288 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Mace;