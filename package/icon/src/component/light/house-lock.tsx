
import { Icon } from "../../index";

/**
 * A component that renders the `house-lock` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-lock?s=light house-lock}
 * @preview ![house-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/house-lock.svg)
 */
const HouseLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M298.6 4c-6-5.3-15.1-5.3-21.2 0L5.4 244c-6.6 5.8-7.3 16-1.4 22.6s16 7.3 22.6 1.4L64 235l0 197c0 44.2 35.8 80 80 80l248.6 0c-5.4-9.4-8.6-20.3-8.6-32l-16 0 0-160c0-17.7-14.3-32-32-32l-96 0c-17.7 0-32 14.3-32 32l0 160-64 0c-26.5 0-48-21.5-48-48l0-225.3L288 37.3 456.4 185.9c8.6-7.1 18.2-13 28.7-17.4L298.6 4zM336 480l-96 0 0-160 96 0 0 160zM528 224c26.5 0 48 21.5 48 48l0 48-96 0 0-48c0-26.5 21.5-48 48-48zm-80 48l0 48c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zm0 80l160 0 0 128-160 0 0-128z" />
    </Icon>
);

export default HouseLock;