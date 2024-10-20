
import { Icon } from "../../index";

/**
 * A component that renders the `chalkboard-user` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chalkboard-user?s=sharp-solid chalkboard-user}
 * @preview ![chalkboard-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chalkboard-user.svg)
 */
const ChalkboardUser: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M192 0L160 0l0 32 0 64c23.3 0 45.2 6.2 64 17.1L224 64l352 0 0 288-64 0 0-64-128 0 0 64-78.6 0 19.2 64L608 416l32 0 0-32 0-352 0-32L608 0 192 0zM160 320a96 96 0 1 0 0-192 96 96 0 1 0 0 192zM320 512L272 352 48 352 0 512l320 0z" />
    </Icon>
);

export default ChalkboardUser;