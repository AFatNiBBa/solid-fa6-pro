
import { Icon } from "../../index";

/**
 * A component that renders the `user-hair` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-hair?s=light user-hair}
 * @preview ![user-hair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/user-hair.svg)
 */
const UserHair: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M320 128c0-5.5-.5-10.8-1.3-16l-30.1 0c-14.9 0-29.1-5.9-39.6-16.4l-6.3-6.3C223.4 113.5 194 128 162.3 128L128 128l0 16c0 53 43 96 96 96s96-43 96-96l0-16zM307.2 80C290.6 51.3 259.5 32 224 32c-41.8 0-77.4 26.7-90.5 64l28.9 0c26.7 0 51.2-15 63.2-38.9c.8-1.6 1.8-3.1 3.1-4.5c6.2-6.2 16.4-6.2 22.6 0L271.6 73c4.5 4.5 10.6 7 17 7l18.6 0zM96 128C96 57.3 153.3 0 224 0s128 57.3 128 128l0 16c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-16zM32 480L416 480c-1.9-71-60-128-131.5-128l-120.9 0C92.1 352 33.9 409 32 480zM0 483.6C0 393.2 73.2 320 163.6 320l120.9 0C374.8 320 448 393.2 448 483.6c0 15.7-12.7 28.4-28.4 28.4L28.4 512C12.7 512 0 499.3 0 483.6z" />
    </Icon>
);

export default UserHair;