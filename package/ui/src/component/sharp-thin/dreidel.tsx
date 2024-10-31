
import { Icon } from "../../index";

/**
 * A component that renders the `dreidel` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dreidel?s=sharp-thin dreidel}
 * @preview ![dreidel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/dreidel.svg)
 */
const Dreidel: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M316.3 175l90.3 90.3 11.3 11.3L429.3 288l-11.3 11.3-11.3 11.3-160 160-9.4 9.4L224 480 32 480l-16 0L0 480l0-16 0-16L0 256l0-13.3 9.4-9.4 160-160 11.3-11.3L192 50.7l11.3 11.3 11.3 11.3L305 163.7 434.3 34.3l11.3 11.3L316.3 175zM16 249.4l0 6.6 0 192 0 16 16 0 192 0 6.6 0 4.7-4.7L317.7 377 103 162.3 20.7 244.7 16 249.4zm379.3 49.9L406.6 288l-11.3-11.3-192-192L192 73.4 180.7 84.7 114.3 151 329 365.7l66.3-66.3z" />
    </Icon>
);

export default Dreidel;