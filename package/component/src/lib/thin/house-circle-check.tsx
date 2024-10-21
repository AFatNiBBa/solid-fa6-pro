
import { Icon } from "../../index";

/**
 * A component that renders the `house-circle-check` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-circle-check?s=thin house-circle-check}
 * @preview ![house-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/house-circle-check.svg)
 */
const HouseCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M282.7 2c3-2.7 7.6-2.7 10.6 0l215 190.4c-4.1-.3-8.2-.4-12.3-.4c-4 0-8 .1-11.9 .4L288 18.7 80 202.9 80 448c0 26.5 21.5 48 48 48l80 0 0-168c0-13.3 10.7-24 24-24l100 0c-2 5.2-3.8 10.6-5.4 16L256 320l-24 0c-4.4 0-8 3.6-8 8l0 168 32 0 96 0 16 0 7.2 0c6.1 5.8 12.7 11.1 19.6 16L128 512c-35.3 0-64-28.7-64-64l0-230.9L13.3 262c-3.3 2.9-8.4 2.6-11.3-.7S-.6 252.9 2.7 250L282.7 2zM496 496a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm0-272a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm58.3 98.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-80 80c-3.1 3.1-8.2 3.1-11.3 0l-48-48c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L480 396.7l74.3-74.3z" />
    </Icon>
);

export default HouseCircleCheck;