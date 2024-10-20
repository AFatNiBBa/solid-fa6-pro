
import { Icon } from "../../index";

/**
 * A component that renders the `user-crown` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-crown?s=thin user-crown}
 * @preview ![user-crown](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/user-crown.svg)
 */
const UserCrown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M176.9 45.3l41.3-27.6c1.7-1.1 3.7-1.8 5.8-1.8s4.1 .6 5.8 1.8l41.3 27.6c5 3.4 11.6 3.6 16.8 .6L336 18.4l0 93.6-224 0 0-93.6 48.1 27.5c5.3 3 11.8 2.8 16.8-.6zM336 128l0 16c0 61.9-50.1 112-112 112s-112-50.1-112-112l0-16 224 0zM280 32L238.7 4.4C234.3 1.5 229.2 0 224 0s-10.3 1.5-14.7 4.4L168 32 114.9 1.7C113 .6 110.8 0 108.6 0C101.7 0 96 5.7 96 12.6L96 144c0 70.7 57.3 128 128 128s128-57.3 128-128l0-131.4c0-7-5.7-12.6-12.6-12.6c-2.2 0-4.4 .6-6.3 1.7L280 32zM168 320l112 0c83.9 0 152 68.1 152 152l0 8c0 8.8-7.2 16-16 16L32 496c-8.8 0-16-7.2-16-16l0-8c0-83.9 68.1-152 152-152zm0-16C75.2 304 0 379.2 0 472l0 8c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-8c0-92.8-75.2-168-168-168l-112 0z" />
    </Icon>
);

export default UserCrown;