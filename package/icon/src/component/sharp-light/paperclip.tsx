
import { Icon } from "../../index";

/**
 * A component that renders the `paperclip` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paperclip?s=sharp-light paperclip}
 * @preview ![paperclip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/paperclip.svg)
 */
const Paperclip: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M380.7 67.3c-29.1-29.1-76.3-29.1-105.4 0l-192 192c-46.8 46.8-46.8 122.6 0 169.4s122.6 46.8 169.4 0l152-152L416 265.4 438.6 288l-11.3 11.3-152 152c-59.3 59.3-155.4 59.3-214.6 0S1.4 296 60.7 236.7l192-192c41.6-41.6 109-41.6 150.6 0s41.6 109 0 150.6L219.5 379.1c-28.2 28.2-74.6 25.6-99.6-5.5c-21.3-26.6-19.2-65 4.9-89.1L276.7 132.7 288 121.4 310.6 144l-11.3 11.3L147.5 307.1c-12.6 12.6-13.7 32.6-2.6 46.5c13 16.2 37.2 17.6 51.9 2.9L380.7 172.7c29.1-29.1 29.1-76.3 0-105.4z" />
    </Icon>
);

export default Paperclip;