
import { Icon } from "../../index";

/**
 * A component that renders the `house-circle-xmark` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-circle-xmark?s=thin house-circle-xmark}
 * @preview ![house-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/house-circle-xmark.svg)
 */
const HouseCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M282.7 2c3-2.7 7.6-2.7 10.6 0l215 190.4c-4.1-.3-8.2-.4-12.3-.4c-4 0-8 .1-11.9 .4L288 18.7 80 202.9 80 448c0 26.5 21.5 48 48 48l80 0 0-168c0-13.3 10.7-24 24-24l100 0c-2 5.2-3.8 10.6-5.4 16L256 320l-24 0c-4.4 0-8 3.6-8 8l0 168 32 0 96 0 16 0 7.2 0c6.1 5.8 12.7 11.1 19.6 16L128 512c-35.3 0-64-28.7-64-64l0-230.9L13.3 262c-3.3 2.9-8.4 2.6-11.3-.7S-.6 252.9 2.7 250L282.7 2zM624 368a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zm-272 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm205.7-50.3L507.3 368l50.3 50.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L496 379.3l-50.3 50.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L484.7 368l-50.3-50.3c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L496 356.7l50.3-50.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3z" />
    </Icon>
);

export default HouseCircleXmark;