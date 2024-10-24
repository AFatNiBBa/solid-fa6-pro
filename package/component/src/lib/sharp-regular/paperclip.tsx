
import { Icon } from "../../index";

/**
 * A component that renders the `paperclip` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paperclip?s=sharp-regular paperclip}
 * @preview ![paperclip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/paperclip.svg)
 */
const Paperclip: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M375 73c-26-26-68.1-26-94.1 0L89 265C45.3 308.6 45.3 379.4 89 423s114.4 43.6 158.1 0L391 279l17-17L441.9 296l-17 17L281 457c-62.4 62.4-163.5 62.4-225.9 0S-7.4 293.4 55 231L247 39C291.7-5.7 364.3-5.7 409 39s44.7 117.2 0 161.9L225.2 384.7c-31.6 31.6-83.6 28.7-111.5-6.2c-23.8-29.8-21.5-72.8 5.5-99.8L271 127l17-17L321.9 144l-17 17L153.2 312.7c-9.7 9.7-10.6 25.1-2 35.8c10 12.5 28.7 13.6 40 2.2L375 167c26-26 26-68.1 0-94.1z" />
    </Icon>
);

export default Paperclip;