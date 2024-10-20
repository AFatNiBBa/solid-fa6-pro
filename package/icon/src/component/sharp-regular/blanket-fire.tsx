
import { Icon } from "../../index";

/**
 * A component that renders the `blanket-fire` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blanket-fire?s=sharp-regular blanket-fire}
 * @preview ![blanket-fire](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/blanket-fire.svg)
 */
const BlanketFire: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M24 0L0 0 0 24 0 224l0 24 0 24L0 424l0 24 24 0 289.8 0c-8.6-14.9-15.3-31-19.7-48L48 400l0-128 258 0c7.8-17.4 17.6-33.5 28.1-48L48 224 48 48l352 0 0 107.1c11.3-9.2 21.9-16.7 31-22.4l17-10.6L448 24l0-24L424 0 24 0zM288 351.8c0-13.7 1.6-27 4.5-39.8L120 312l-24 0 0 48 24 0 168.2 0c-.1-2.7-.2-5.4-.2-8.2zM448 160c-42.7 26.7-128 102.4-128 192c0 88.4 71.6 160 160 160s160-71.6 160-160c0-26.7-19.2-96-96-160l-32 32-64-64zm96 240.2c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-48 64-96 64-96s64 48 64 96z" />
    </Icon>
);

export default BlanketFire;