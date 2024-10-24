
import { Icon } from "../../index";

/**
 * A component that renders the `bow-arrow` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bow-arrow?s=sharp-solid bow-arrow}
 * @preview ![bow-arrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bow-arrow.svg)
 */
const BowArrow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 32L512 0 480 160l-47-47L183.8 362.1 200 416l-96 96L80 432 0 408l96-96 53.9 16.2L399 79 352 32zM192 64c47.7 0 95.4 13.2 137.1 39.7l-46.8 46.8c-28.1-15-59.2-22.5-90.3-22.5c-29.9 0-58.3 10.2-85.8 28.9L191 241.8 145.8 287 25.4 166.6 2.7 144 48 98.7 60.3 111c38-28.1 81.6-47 131.7-47zM361.5 229.7l46.8-46.8C434.8 224.6 448 272.3 448 320c0 50.1-18.9 93.7-47 131.7L413.3 464 368 509.3l-22.6-22.6L225 366.2 270.2 321l84.8 84.8C373.8 378.3 384 349.9 384 320c0-31.1-7.5-62.2-22.5-90.3z" />
    </Icon>
);

export default BowArrow;