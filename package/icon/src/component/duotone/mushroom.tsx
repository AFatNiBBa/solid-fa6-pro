
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mushroom` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mushroom?s=duotone mushroom}
 * @preview ![mushroom](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/mushroom.svg)
 */
const Mushroom: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 224a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM144 96c0 44.2 35.8 80 80 80s80-35.8 80-80c0-26-12.4-49.2-31.7-63.8c-3.5-.2-6.9-.2-10.4-.2l-11.8 0c-33.1 0-64.5 7.1-92.9 19.9C148.9 64.5 144 79.7 144 96zm25 344.2c-2.4 9.6-.2 19.7 5.8 27.5s15.4 12.3 25.2 12.3l112 0c9.9 0 19.2-4.5 25.2-12.3s8.2-17.9 5.8-27.5L313 320l-114 0L169 440.2zM368 176c0 35.3 28.7 64 64 64c21.2 0 40-10.3 51.7-26.2c-7.6-38.3-24.9-73.1-49.2-101.7c-.4 0-.8 0-1.2 0c-36.6 0-65.3 28.7-65.3 64z" />
        <path d="M224 176c44.2 0 80-35.8 80-80c0-26-12.4-49.2-31.7-63.8c65 2.9 122.8 33.3 162.2 79.8c-.8 0-1.7 0-2.5 0c-35.3 0-64 28.7-64 64s28.7 64 64 64c21.2 0 40-10.3 51.7-26.2c2.8 14.3 4.3 29.1 4.3 44.3c0 34.2-27.7 61.9-61.9 61.9L85.9 320C51.7 320 24 292.3 24 258.1C24 166.3 78.7 87.3 157.3 51.9C148.9 64.5 144 79.7 144 96c0 44.2 35.8 80 80 80zm-96 80a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Mushroom;