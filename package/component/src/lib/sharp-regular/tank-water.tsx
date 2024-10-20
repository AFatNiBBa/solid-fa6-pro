
import { Icon } from "../../index";

/**
 * A component that renders the `tank-water` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tank-water?s=sharp-regular tank-water}
 * @preview ![tank-water](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/tank-water.svg)
 */
const TankWater: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M206.4 32L48 32 0 32 0 80 0 432l0 48 48 0 352 0 48 0 0-48 0-352 0-48-48 0L241.6 32 251 46.8 272.1 80 400 80l0 222.4c-14.2-2.7-27.8-8.7-39.4-15.3c-15.4-8.7-27-19.1-40-30.7l-.7-.6-.7 .6c-13 11.6-24.6 22-40 30.7c-15.9 9-35.6 16.9-55.3 16.9s-39.5-7.8-55.3-16.9c-15.4-8.7-27-19.1-40-30.7l-.7-.6-.7 .6c-13 11.6-24.6 22-40 30.7c-11.6 6.6-25.2 12.5-39.3 15.3L48 80l127.9 0L197 46.8 206.4 32zM48 351c25-3.1 47.1-13 63-22.1c6.5-3.7 12.2-7.4 16.9-10.7c4.7 3.3 10.5 7 16.9 10.7c19.3 11 47.6 23.1 79.1 23.1s59.7-12.2 79.1-23.1c6.5-3.7 12.2-7.4 16.9-10.7c4.8 3.3 10.5 7 17 10.7c16 9.1 38.1 19 63.1 22.1l0 81L48 432l0-81zM213.8 80l-37.1 58.3c-5.7 8.9-8.7 19.3-8.7 29.9c0 30.8 25.2 55.8 56 55.8s56-25 56-55.8c0-10.6-3-21-8.7-29.9L234.2 80 224 64 213.8 80z" />
    </Icon>
);

export default TankWater;