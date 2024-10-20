
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-cowboy` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-cowboy?s=sharp-duotone-solid user-cowboy}
 * @preview ![user-cowboy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-cowboy.svg)
 */
const UserCowboy: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 221.7c17.4 10.1 36.9 18.7 58.3 24.7c10.7 3 21.9 5.4 33.5 7.1c5.8 .8 11.7 1.4 17.8 1.9c3 .2 6.1 .4 9.1 .5c1.5 .1 3.1 .1 4.6 .1s3.1 0 4.7 0c50 0 93.2-14.1 128-34.3c0 .8 0 1.5 0 2.3c0 70.7-57.3 128-128 128s-128-57.3-128-128c0-.8 0-1.5 0-2.3z" />
        <path d="M110 112.4L160 0l64 32L288 0l50 112.4c-27.2 8.7-64.7 15.6-114 15.6s-86.7-6.9-114-15.6zm-81.2-10c5.6 7.5 22.7 22 55 34.7C115.8 149.6 161.8 160 224 160s108.2-10.4 140.2-22.9c32.4-12.7 49.4-27.2 55-34.7l28 14.7c-9.3 27.9-35 62.4-72.5 89.9C336.7 234.6 285.4 256 224 256s-112.7-21.4-150.6-49.1C35.8 179.5 10.1 145 .8 117.1l28-14.7zM400 384l48 128L0 512 48 384l352 0z" />
    </Icon>
);

export default UserCowboy;