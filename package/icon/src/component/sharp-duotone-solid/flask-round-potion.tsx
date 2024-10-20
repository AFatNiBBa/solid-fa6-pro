
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flask-round-potion` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flask-round-potion?s=sharp-duotone-solid flask-round-potion}
 * @preview ![flask-round-potion](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/flask-round-potion.svg)
 */
const FlaskRoundPotion: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M16 352c0 64.3 29.2 121.8 75.1 160l265.8 0c45.9-38.2 75.1-95.7 75.1-160c0-80.2-45.4-149.9-112-184.6L320 64l32 0 0-64L320 0 256 0 192 0 128 0 96 0l0 64 32 0 0 103.4C61.4 202.1 16 271.8 16 352zm64 0c0-7.2 .5-14.3 1.5-21.2c6.8-46.4 35.8-85.7 76-106.6L192 206.2l0-38.8L192 64l64 0 0 103.4 0 38.8 34.4 17.9C336.7 248.3 368 296.5 368 352c0 36.9-13.8 70.5-36.7 96l-214.7 0C93.8 422.5 80 388.9 80 352z" />
        <path d="M368 352c0 36.9-13.8 70.5-36.7 96l-214.7 0C93.8 422.5 80 388.9 80 352c0-7.2 .5-14.3 1.5-21.2c21-9.6 52.2-18.8 94.5-18.8c39.9 0 60.1 8.2 82.1 17.2c24.5 10 51.3 20.9 109.9 22.6l0 .2z" />
    </Icon>
);

export default FlaskRoundPotion;