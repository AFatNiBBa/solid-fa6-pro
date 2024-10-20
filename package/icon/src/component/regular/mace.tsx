
import { Icon } from "../../index";

/**
 * A component that renders the `mace` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mace?s=regular mace}
 * @preview ![mace](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/mace.svg)
 */
const Mace: typeof Icon = x => (
    <Icon {...x}>
        <path d="M244.8 95l28-84.1C275 4.4 281.1 0 288 0s13 4.4 15.2 10.9l28 84.1c40.4 13.5 72.3 45.4 85.8 85.8l84.1 28c6.5 2.2 10.9 8.3 10.9 15.2s-4.4 13-10.9 15.2l-84.1 28c-13.5 40.4-45.4 72.3-85.8 85.8l-28 84.1C301 443.6 294.9 448 288 448s-13-4.4-15.2-10.9l-28-84.1c-12.4-4.1-24-10-34.5-17.4L41 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L176.4 301.7c-7.3-10.5-13.2-22.1-17.4-34.5l-84.1-28C68.4 237 64 230.9 64 224s4.4-13 10.9-15.2l84.1-28c13.5-40.4 45.4-72.3 85.8-85.8zM288 312a88 88 0 1 0 0-176 88 88 0 1 0 0 176zm-32-88a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default Mace;