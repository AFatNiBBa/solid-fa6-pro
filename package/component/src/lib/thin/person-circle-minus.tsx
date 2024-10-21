
import { Icon } from "../../index";

/**
 * A component that renders the `person-circle-minus` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-circle-minus?s=thin person-circle-minus}
 * @preview ![person-circle-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/person-circle-minus.svg)
 */
const PersonCircleMinus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M160 16a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm0 96A56 56 0 1 0 160 0a56 56 0 1 0 0 112zm-18.9 32l37.8 0c21.5 0 41.1 12.3 50.4 31.7l50.3 104.2c3.1-5.4 6.5-10.6 10.2-15.6l-46.1-95.5c-12-24.9-37.2-40.7-64.8-40.7l-37.8 0c-27.6 0-52.8 15.8-64.8 40.7L8.8 308.5c-1.9 4-.3 8.8 3.7 10.7s8.8 .3 10.7-3.7L90.7 175.7c9.3-19.4 28.9-31.7 50.4-31.7zM104 248c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 232c0 17.7 14.3 32 32 32s32-14.3 32-32l0-120c0-4.4 3.6-8 8-8s8 3.6 8 8l0 120c0 17.7 14.3 32 32 32s32-14.3 32-32l0-232c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 232c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 120c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-232zm328-8a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm80-144c0-4.4-3.6-8-8-8l-144 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l144 0c4.4 0 8-3.6 8-8z" />
    </Icon>
);

export default PersonCircleMinus;