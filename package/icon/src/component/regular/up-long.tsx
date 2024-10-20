
import { Icon } from "../../index";

/**
 * A component that renders the `up-long` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-long?s=regular up-long}
 * @preview ![up-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/up-long.svg)
 */
const UpLong: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M143.6 6.5c9.2-8.7 23.7-8.7 32.9 0l129 121.4c9.3 8.8 14.6 21 14.6 33.7c0 25.6-20.7 46.3-46.3 46.3L240 208l0 248c0 30.9-25.1 56-56 56l-48 0c-30.9 0-56-25.1-56-56l0-248-33.7 0C20.7 208 0 187.3 0 161.7c0-12.8 5.3-25 14.6-33.7L143.6 6.5zM50.5 160l53.5 0c13.3 0 24 10.7 24 24l0 272c0 4.4 3.6 8 8 8l48 0c4.4 0 8-3.6 8-8l0-272c0-13.3 10.7-24 24-24l53.5 0L160 57 50.5 160z" />
    </Icon>
);

export default UpLong;