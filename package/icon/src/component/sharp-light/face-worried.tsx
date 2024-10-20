
import { Icon } from "../../index";

/**
 * A component that renders the `face-worried` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-worried?s=sharp-light face-worried}
 * @preview ![face-worried](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/face-worried.svg)
 */
const FaceWorried: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM337.1 423.6C313.4 413.7 285.7 408 256 408c-29.7 0-57.3 5.7-81 15.5l-26.1 10.9 4.2-28c7.4-49.3 51-86.4 103-86.4s95.7 37.1 103 86.5l4.2 28-26.1-10.9zM256 352c-25.4 0-47.5 12.5-60.3 31.2c19-4.7 39.3-7.2 60.3-7.2c21 0 41.3 2.5 60.3 7.2C303.5 364.5 281.5 352 256 352zM152.4 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm184-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM192 160c-4.4 0-8.8 .3-13 .9c-21.2 2.8-40.6 12.4-56.1 26.8l-11.7 10.9L89.4 175.2l11.7-10.9c20.1-18.7 45.5-31.5 73.7-35.2c5.6-.7 11.4-1.1 17.2-1.1l16 0 0 32-16 0zm141 .9c-4.3-.6-8.6-.9-13-.9l-16 0 0-32 16 0c5.8 0 11.6 .4 17.2 1.1c28.2 3.7 53.7 16.4 73.7 35.2l11.7 10.9-21.8 23.4-11.7-10.9c-15.5-14.5-34.8-24-56.1-26.8z" />
    </Icon>
);

export default FaceWorried;