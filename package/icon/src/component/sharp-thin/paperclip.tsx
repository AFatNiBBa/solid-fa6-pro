
import { Icon } from "../../index";

/**
 * A component that renders the `paperclip` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paperclip?s=sharp-thin paperclip}
 * @preview ![paperclip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/paperclip.svg)
 */
const Paperclip: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M386.3 61.7c-32.2-32.2-84.5-32.2-116.7 0l-192 192c-49.9 49.9-49.9 130.8 0 180.7s130.8 49.9 180.7 0l152-152 5.7-5.7L427.3 288l-5.7 5.7-152 152c-56.1 56.1-147.2 56.1-203.3 0s-56.1-147.2 0-203.3l192-192c38.5-38.5 100.8-38.5 139.3 0s38.5 100.8 0 139.3L213.9 373.4c-24.8 24.8-65.7 22.6-87.7-4.9c-18.8-23.4-16.9-57.2 4.3-78.5L282.3 138.3l5.7-5.7L299.3 144l-5.7 5.7L141.9 301.4c-15.5 15.5-16.8 40.1-3.2 57.2c16 20 45.8 21.6 63.9 3.5L386.3 178.3c32.2-32.2 32.2-84.5 0-116.7z" />
    </Icon>
);

export default Paperclip;