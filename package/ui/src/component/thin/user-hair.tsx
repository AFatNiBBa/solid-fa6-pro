
import { Icon } from "../../index";

/**
 * A component that renders the `user-hair` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-hair?s=thin user-hair}
 * @preview ![user-hair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/user-hair.svg)
 */
const UserHair: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M336 128c0-5.4-.4-10.8-1.1-16L312 112c-22.1 0-43-10.2-56.6-27.5L251 89.9C231.2 114 201.7 128 170.5 128L112 128l0 16c0 61.9 50.1 112 112 112s112-50.1 112-112l0-16zm-4.6-32c-6.8-22.8-20.6-42.5-39-56.7L265.8 71.8l1.4 1.8C277.8 87.7 294.4 96 312 96l19.4 0zM170.5 112c26.4 0 51.4-11.8 68.1-32.3L279 30.4C262.7 21.2 244 16 224 16c-56.4 0-103.1 41.7-110.9 96l57.4 0zM96 128C96 57.3 153.3 0 224 0s128 57.3 128 128l0 16c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-16zM16 483.6c0 6.9 5.6 12.4 12.4 12.4l391.1 0c6.9 0 12.4-5.6 12.4-12.4C432 402.1 365.9 336 284.4 336l-120.9 0C82.1 336 16 402.1 16 483.6zm-16 0C0 393.2 73.2 320 163.6 320l120.9 0C374.8 320 448 393.2 448 483.6c0 15.7-12.7 28.4-28.4 28.4L28.4 512C12.7 512 0 499.3 0 483.6z" />
    </Icon>
);

export default UserHair;