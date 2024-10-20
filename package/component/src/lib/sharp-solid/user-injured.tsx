
import { Icon } from "../../index";

/**
 * A component that renders the `user-injured` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-injured?s=sharp-solid user-injured}
 * @preview ![user-injured](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/user-injured.svg)
 */
const UserInjured: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M240 80l102.7 0c-7.9-19.5-20.4-36.5-36.2-49.9L240 80zm37.7-68.2C261.3 4.2 243.2 0 224 0c-53.7 0-99.7 33.1-118.7 80l81.4 0 91-68.2zM224 256c70.7 0 128-57.3 128-128c0-5.4-.3-10.8-1-16L97 112c-.7 5.2-1 10.6-1 16c0 70.7 57.3 128 128 128zM448 512L384 304l-227.7 0 48 80L336 384l16 0 0 16 0 112 96 0zm-204.3 0L181.5 408.2 118.9 304 96 304l0 208 147.7 0zm37.3 0l38.9 0 0-96-96.5 0 57.6 96zM0 512l64 0 0-208L0 512z" />
    </Icon>
);

export default UserInjured;