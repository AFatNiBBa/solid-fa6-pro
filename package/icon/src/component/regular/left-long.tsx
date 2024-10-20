
import { Icon } from "../../index";

/**
 * A component that renders the `left-long` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-long?s=regular left-long}
 * @preview ![left-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/left-long.svg)
 */
const LeftLong: typeof Icon = x => (
    <Icon {...x}>
        <path d="M6.5 272.4c-8.7-9.2-8.7-23.7 0-32.9l121.4-129c8.8-9.3 21-14.6 33.7-14.6c25.6 0 46.3 20.7 46.3 46.3l0 33.7 248 0c30.9 0 56 25.1 56 56l0 48c0 30.9-25.1 56-56 56l-248 0 0 33.7c0 25.6-20.7 46.3-46.3 46.3c-12.8 0-25-5.3-33.7-14.6L6.5 272.4zm153.5 93l0-53.5c0-13.3 10.7-24 24-24l272 0c4.4 0 8-3.6 8-8l0-48c0-4.4-3.6-8-8-8l-272 0c-6.4 0-12.5-2.5-17-7s-7-10.6-7-17l0-53.5L57 256 160 365.5z" />
    </Icon>
);

export default LeftLong;