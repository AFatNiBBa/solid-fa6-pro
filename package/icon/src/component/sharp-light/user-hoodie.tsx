
import { Icon } from "../../index";

/**
 * A component that renders the `user-hoodie` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-hoodie?s=sharp-light user-hoodie}
 * @preview ![user-hoodie](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/user-hoodie.svg)
 */
const UserHoodie: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M292.8 269.3l13.2-11c28.2-23.5 46-58.8 46-98.3c0-70.7-57.3-128-128-128S96 89.3 96 160c0 39.5 17.8 74.7 46 98.3l13.2 11-1.9 17.1-.6 5.2L149.5 320l-28.6 0-32.8 0L42.4 480l363.2 0L359.9 320l-32.8 0-28.6 0-3.2-28.5-.6-5.2-1.9-17.1zM367.1 288l16.9 0 54.9 192 9.1 32-33.3 0L33.3 512 0 512l9.1-32L64 288l16.9 0 36.3 0 3.7 0 .6-5.2-.6-.5c-9.3-7.8-17.6-16.7-24.9-26.3c-20.1-26.7-32-60-32-96C64 71.6 135.6 0 224 0s160 71.6 160 160c0 36-11.9 69.3-32 96c-7.3 9.7-15.6 18.5-24.9 26.3l-.6 .5 .6 5.2 3.7 0 36.2 0zM192 352l0 16 0 64 0 16-32 0 0-16 0-64 0-16 32 0zm96 0l0 16 0 64 0 16-32 0 0-16 0-64 0-16 32 0zM160 157.3c0 24 16 48.7 38.3 70.4c9 8.8 18.2 16.2 25.7 21.7c7.5-5.5 16.6-12.9 25.7-21.7C272 206 288 181.3 288 157.3c0-33-27.8-61.3-64-61.3s-64 28.3-64 61.3zm-32 0c0-51.5 43-93.3 96-93.3s96 41.8 96 93.3C320 232 224 288 224 288s-96-56-96-130.7z" />
    </Icon>
);

export default UserHoodie;