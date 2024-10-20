
import { Icon, generic } from "../../index";

/**
 * A component that renders the `balloons` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/balloons?s=duotone balloons}
 * @preview ![balloons](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/balloons.svg)
 */
const Balloons: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M324.7 261.9C340.5 231.8 352 197.2 352 160c0-9.9-.7-19.6-2.2-29c29-40.5 76.5-67 130.2-67c88.4 0 160 71.6 160 160c0 92.5-87.2 174-117.7 199.7c-5.9 5-7.8 13.4-4.4 20.3l24.7 49.3c.9 1.8 1.4 3.8 1.4 5.8c0 7.1-5.8 12.9-12.9 12.9l-102.1 0c-7.1 0-12.9-5.8-12.9-12.9c0-2 .5-4 1.4-5.8L442 443.9c3.5-6.9 1.6-15.3-4.4-20.3c-26.2-22.1-94.5-85.6-113-161.8zM384 208c0 8.8 7.2 16 16 16s16-7.2 16-16c0-26.5 21.5-48 48-48c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80 35.8-80 80z" />
        <path d="M160 0c88.4 0 160 71.6 160 160c0 92.5-87.2 174-117.7 199.7c-5.9 5-7.8 13.4-4.4 20.3l24.7 49.3c.9 1.8 1.4 3.8 1.4 5.8c0 7.1-5.8 12.9-12.9 12.9l-102.1 0c-7.1 0-12.9-5.8-12.9-12.9c0-2 .5-4 1.4-5.8L122 379.9c3.5-6.9 1.6-15.3-4.4-20.3C87.2 334 0 252.5 0 160C0 71.6 71.6 0 160 0zM96 144c0-26.5 21.5-48 48-48c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16s16-7.2 16-16z" />
    </Icon>
);

export default Balloons;