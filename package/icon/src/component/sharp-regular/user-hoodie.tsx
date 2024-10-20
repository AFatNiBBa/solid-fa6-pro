
import { Icon } from "../../index";

/**
 * A component that renders the `user-hoodie` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-hoodie?s=sharp-regular user-hoodie}
 * @preview ![user-hoodie](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/user-hoodie.svg)
 */
const UserHoodie: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 336l0-55.8-18.8-22.7C106.9 235.3 96 207 96 176c0-70.7 57.3-128 128-128s128 57.3 128 128c0 31-11 59.3-29.2 81.4L304 280.2l0 55.8 43.8 0 36.6 128L63.6 464l36.6-128 43.8 0zM434.3 464L391.5 314.2 384 288l-24.2 0c9.7-11.7 17.8-24.6 24.2-38.6c1.4-3.1 2.8-6.2 4-9.4c7.7-19.8 12-41.4 12-64C400 78.8 321.2 0 224 0S48 78.8 48 176c0 22.6 4.3 44.2 12 64c1.2 3.2 2.6 6.3 4 9.4c6.4 13.9 14.6 26.9 24.2 38.6L64 288l-7.5 26.2L13.7 464 0 512l49.9 0 348.2 0 49.9 0-13.7-48zM192 352l-32 0 0 16 0 64 0 16 32 0 0-16 0-64 0-16zm96 0l-32 0 0 16 0 64 0 16 32 0 0-16 0-64 0-16zM144 176c0 64 80 112 80 112s80-48 80-112c0-44.2-35.8-80-80-80s-80 35.8-80 80z" />
    </Icon>
);

export default UserHoodie;