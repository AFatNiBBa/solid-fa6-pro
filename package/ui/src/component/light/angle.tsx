
import { Icon } from "../../index";

/**
 * A component that renders the `angle` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle?s=light angle}
 * @preview ![angle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/angle.svg)
 */
const Angle: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M238.3 55.2c4-7.9 .7-17.5-7.2-21.5s-17.5-.7-21.5 7.2l-208 416c-2.5 5-2.2 10.8 .7 15.6s8.1 7.6 13.6 7.6l416 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L41.9 448 238.3 55.2zM295 238.9c-16.3-20.5-35-39.1-55.6-55.2c-7.7-6.1-19-3.2-23.4 5.6c-3.5 7.1-1.4 15.6 4.8 20.5c17.8 14.1 34 30.2 48.2 47.9c5.3 6.6 14.7 8.4 21.9 3.9c7.8-4.9 9.9-15.4 4.1-22.7zm14.5 84.9c9.9 22.2 17.3 45.7 21.7 70.3c1.4 8 8.2 14 16.3 14c9.6 0 17.2-8.4 15.5-17.9c-4.9-28.4-13.4-55.5-25-81c-3.9-8.6-14.5-11.4-22.5-6.4c-7 4.4-9.4 13.5-6 21z" />
    </Icon>
);

export default Angle;