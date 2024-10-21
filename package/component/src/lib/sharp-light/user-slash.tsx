
import { Icon } from "../../index";

/**
 * A component that renders the `user-slash` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-slash?s=sharp-light user-slash}
 * @preview ![user-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/user-slash.svg)
 */
const UserSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M541 512l-40.5-32-361.1 0 44.3-144L318 336l-40.5-32L160 304 105.8 480 96 512l33.5 0 381 0 30.5 0zM448 128C448 57.3 390.7 0 320 0C266.1 0 219.9 33.4 201.1 80.6l26.6 21C239.2 61.4 276.1 32 320 32c53 0 96 43 96 96c0 35.9-19.7 67.2-48.9 83.7l26.6 21C426.6 209.5 448 171.2 448 128zM40.4 18L27.8 8.1 8.1 33.4l12.6 9.8L599.8 494.3l12.6 9.8 19.7-25.2L619.5 469 40.4 18z" />
    </Icon>
);

export default UserSlash;