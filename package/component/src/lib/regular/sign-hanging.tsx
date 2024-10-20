
import { Icon } from "../../index";

/**
 * A component that renders the `sign-hanging` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-hanging?s=regular sign-hanging}
 * @preview ![sign-hanging](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/sign-hanging.svg)
 */
const SignHanging: typeof Icon = x => (
    <Icon {...x}>
        <path d="M88 0c13.3 0 24 10.7 24 24l0 40 376 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-376 0 0 376c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-376-40 0C10.7 112 0 101.3 0 88S10.7 64 24 64l40 0 0-40C64 10.7 74.7 0 88 0zM192 336l240 0 0-144-240 0 0 144zM144 176c0-17.7 14.3-32 32-32l272 0c17.7 0 32 14.3 32 32l0 176c0 17.7-14.3 32-32 32l-272 0c-17.7 0-32-14.3-32-32l0-176z" />
    </Icon>
);

export default SignHanging;