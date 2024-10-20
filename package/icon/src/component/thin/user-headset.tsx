
import { Icon } from "../../index";

/**
 * A component that renders the `user-headset` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-headset?s=thin user-headset}
 * @preview ![user-headset](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/user-headset.svg)
 */
const UserHeadset: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 32C135.6 32 64 103.6 64 192l0 16c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-16C48 94.8 126.8 16 224 16s176 78.8 176 176l0 24c0 57.4-46.6 104-104 104l-56 0-16 0-16 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32c0 5.8-1.6 11.3-4.3 16l28.3 0c48.6 0 88-39.4 88-88l0-24c0-88.4-71.6-160-160-160zm32 256c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 16 0c8.8 0 16-7.2 16-16zm96-96c0 25.5-7.5 49.3-20.3 69.3c-7.6 4-16.2 6.4-25.4 6.7c18.4-20 29.7-46.6 29.7-76c0-61.9-50.1-112-112-112s-112 50.1-112 112c0 31.5 13 60 33.9 80.3c-1.3 5-1.9 10.3-1.9 15.7c0 1.4 0 2.7 .1 4C114.8 268.6 96 232.5 96 192c0-70.7 57.3-128 128-128s128 57.3 128 128zM208 352l32 0 73.6 0C387.8 352 448 412.2 448 486.4c0 14.1-11.5 25.6-25.6 25.6L25.6 512C11.5 512 0 500.5 0 486.4C0 412.2 60.2 352 134.4 352l73.6 0zM16 486.4c0 5.3 4.3 9.6 9.6 9.6l396.8 0c5.3 0 9.6-4.3 9.6-9.6C432 421 379 368 313.6 368l-179.2 0C69 368 16 421 16 486.4z" />
    </Icon>
);

export default UserHeadset;