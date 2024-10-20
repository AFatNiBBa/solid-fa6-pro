
import { Icon } from "../../index";

/**
 * A component that renders the `user-injured` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-injured?s=sharp-regular user-injured}
 * @preview ![user-injured](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/user-injured.svg)
 */
const UserInjured: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 208c-44.2 0-80-35.8-80-80l32 0 128 0c0 44.2-35.8 80-80 80zM150.7 96C163 67.7 191.2 48 224 48c1.2 0 2.5 0 3.7 .1L170.2 96l-19.6 0zM264.6 59c14.5 8.5 26 21.5 32.8 37l-77.2 0 44.4-37zM224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zM65 464L96 363.2 96 464l-31 0zm239 0l-42.7 0-32-48 74.7 0 0 48zm32 0l0-64 0-16-16 0-112 0-21.3-32 161.9 0L383 464l-47 0zm48-160L64 304 14.8 464 0 512l50.2 0 347.6 0 50.2 0-14.8-48L384 304z" />
    </Icon>
);

export default UserInjured;