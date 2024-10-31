
import { Icon } from "../../index";

/**
 * A component that renders the `axe` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/axe?s=sharp-light axe}
 * @preview ![axe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/axe.svg)
 */
const Axe: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 512L41.4 489.4 22.6 470.6 0 448l22.6-22.6L249.4 198.6 272 221.3 45.3 448 64 466.7 290.7 240l22.6 22.6L86.6 489.4 64 512zM489.4 86.6L464 112l48 48 96 0 32 0 0 32c0 123.7-100.3 224-224 224l-32 0 0-32 0-96L246.6 150.6 224 128l22.6-22.6 82.7-82.7L352 0l22.6 22.6L400 48l25.4-25.4L448 0l22.6 22.6 18.7 18.7L512 64 489.4 86.6zm-66.7-16l18.7 18.7L466.7 64 448 45.3 422.6 70.6zM512 192l-13.3 0-9.4-9.4L352 45.3 269.3 128 406.6 265.4l9.4 9.4 0 13.3 0 96c106 0 192-86 192-192l-96 0z" />
    </Icon>
);

export default Axe;