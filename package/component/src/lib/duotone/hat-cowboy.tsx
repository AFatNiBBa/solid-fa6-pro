
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hat-cowboy` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hat-cowboy?s=duotone hat-cowboy}
 * @preview ![hat-cowboy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hat-cowboy.svg)
 */
const HatCowboy: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M144.3 286.1c1.1-6.9 5.4-32.2 12.4-64.4C195.8 239.6 250.5 256 320 256s124.2-16.4 163.3-34.2c7 32.2 11.3 57.6 12.4 64.4c-11.2 4.6-23.3 9-36.2 13.1c-6.5 2-13.2 3.9-20 5.7c-3.4 .9-6.9 1.8-10.5 2.6c-3.6 .8-7.2 1.6-10.9 2.4c-14.7 3.1-30.2 5.6-46.5 7.3c-8.2 .9-16.5 1.5-25.1 2c-4.3 .2-8.6 .4-13 .5c-2.2 .1-4.4 .1-6.6 .1s-4.5 0-6.7 0c-72.1 0-131-15.3-175.8-33.8z" />
        <path d="M320 64c14.4 0 22.3-7 30.8-14.4C360.4 41.1 370.7 32 392 32c42.7 0 74.7 113.9 91.3 189.8C444.2 239.6 389.5 256 320 256s-124.2-16.4-163.3-34.2C173.3 145.9 205.3 32 248 32c21.3 0 31.6 9.1 41.2 17.6C297.7 57 305.6 64 320 64zM111.1 270.7c47.2 24.5 117.5 49.3 209 49.3s161.8-24.8 208.9-49.3c24.8-12.9 49.8-28.3 70.1-47.7c7.9-7.9 20.2-9.2 29.6-3.3c9.5 5.9 13.5 17.9 9.9 28.5c-13.5 37.7-38.4 72.3-66.1 100.6C523.7 398.9 443.6 448 320 448s-203.6-49.1-252.5-99.2C39.8 320.4 14.9 285.8 1.4 248.1c-3.6-10.6 .4-22.6 9.9-28.5c9.5-5.9 21.7-4.5 29.6 3.3c20.4 19.4 45.3 34.8 70.1 47.7z" />
    </Icon>
);

export default HatCowboy;