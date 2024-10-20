
import { Icon } from "../../index";

/**
 * A component that renders the `user-hair` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-hair?s=regular user-hair}
 * @preview ![user-hair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/user-hair.svg)
 */
const UserHair: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M304 128c0-11.4-2.4-22.2-6.7-32L296 96c-20.5 0-38.7-9.6-50.4-24.5C231.9 95.7 205.8 112 176 112l-30.4 0c-1 5.2-1.6 10.5-1.6 16l0 16c0 44.2 35.8 80 80 80s80-35.8 80-80l0-16zM96 128C96 57.3 153.3 0 224 0s128 57.3 128 128l0 16c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-16zM49.6 464l348.7 0c-9.3-54.5-56.8-96-113.9-96l-120.9 0c-57.2 0-104.6 41.5-113.9 96zM0 483.6C0 393.2 73.2 320 163.6 320l120.9 0C374.8 320 448 393.2 448 483.6c0 15.7-12.7 28.4-28.4 28.4L28.4 512C12.7 512 0 499.3 0 483.6z" />
    </Icon>
);

export default UserHair;