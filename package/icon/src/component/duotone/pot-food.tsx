
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pot-food` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pot-food?s=duotone pot-food}
 * @preview ![pot-food](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pot-food.svg)
 */
const PotFood: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M16 288c0 17.7 14.3 32 32 32l29.7 0c20.6 64 66.1 116.7 124.7 147.2l1.2 9.7c2.5 20 19.5 35 39.7 35l153.4 0c20.2 0 37.2-15 39.7-35l1.2-9.7C496.2 436.7 541.7 384 562.3 320l29.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-17.9 0c.2-17.5-14-32-31.7-32L97.6 224c-17.7 0-31.9 14.5-31.7 32L48 256c-17.7 0-32 14.3-32 32zM64 24c0 45.1 21.2 69 37.7 87.5l.4 .4C117.5 129.3 128 141.5 128 168c0 13.3 10.7 24 24 24s24-10.7 24-24c0-45.1-21.2-69-37.7-87.5l-.4-.4C122.5 62.7 112 50.5 112 24c0-13.3-10.7-24-24-24S64 10.7 64 24zm112 0c0 45.1 21.2 69 37.7 87.5l.4 .4C229.5 129.3 240 141.5 240 168c0 13.3 10.7 24 24 24s24-10.7 24-24c0-45.1-21.2-69-37.7-87.5l-.4-.4C234.5 62.7 224 50.5 224 24c0-13.3-10.7-24-24-24s-24 10.7-24 24zM320 224l222.4 0 1.6 0c0-61.9-50.1-112-112-112s-112 50.1-112 112z" />
        <path d="M65.9 256c-.2-17.5 14-32 31.7-32l444.8 0c17.7 0 31.9 14.5 31.7 32l17.9 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.7 0c-20.6 64-66.1 116.7-124.7 147.2l-1.2 9.7c-2.5 20-19.5 35-39.7 35l-153.4 0c-20.2 0-37.2-15-39.7-35l-1.2-9.7C143.8 436.7 98.3 384 77.7 320L48 320c-17.7 0-32-14.3-32-32s14.3-32 32-32l17.9 0z" />
    </Icon>
);

export default PotFood;