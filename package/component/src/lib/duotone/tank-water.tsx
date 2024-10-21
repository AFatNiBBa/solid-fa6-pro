
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tank-water` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tank-water?s=duotone tank-water}
 * @preview ![tank-water](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tank-water.svg)
 */
const TankWater: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 297.9L64 348l0 68 320 0 0-68 0-50.1c-8.3-3-16.2-6.8-23.4-10.8c-6.9-3.9-13.1-8.2-19-12.8c-12.9-10-30.6-10-43.4 0c-5.9 4.6-12 8.8-18.9 12.7c-15.8 9-35.5 16.8-55.2 16.9l-.4 0c-19.6 0-39.3-7.9-55.2-16.9c-6.9-3.9-13.1-8.2-18.9-12.7c-12.9-10-30.6-10-43.4 0c-5.9 4.6-12 8.8-18.9 12.7c-7.1 4-15 7.8-23.3 10.8zM168 166.6l0 1.4c0 30.9 25.1 56 56 56s56-25.1 56-56l0-1.4c0-9.6-2.4-19-7-27.5L235.8 71c-2.4-4.3-6.9-7-11.8-7s-9.5 2.7-11.8 7L175 139.2c-4.6 8.4-7 17.9-7 27.5z" />
        <path d="M285.9 96l-22-40.3L251 32l133 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l133 0L184.1 55.7 162.1 96 64 96l0 320 320 0 0-320-98.1 0z" />
    </Icon>
);

export default TankWater;