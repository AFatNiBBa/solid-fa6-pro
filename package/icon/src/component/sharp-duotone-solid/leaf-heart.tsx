
import { Icon, generic } from "../../index";

/**
 * A component that renders the `leaf-heart` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/leaf-heart?s=sharp-duotone-solid leaf-heart}
 * @preview ![leaf-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/leaf-heart.svg)
 */
const LeafHeart: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 440l0 16 0 24 48 0 0-24 0-16c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-50.4-10.5-97.8-29.1-139.1C468.7 63 426.2 96 376 96L272 96c-93.2 0-169.5 72.5-175.6 164.1C38.3 298.8 0 364.9 0 440zM190 235.8c.2-1.7 .4-3.4 .8-5.1c.7-3.4 1.7-6.6 3-9.7c2.6-6.2 6.4-11.8 11.1-16.5c9.4-9.4 22.3-15.2 36.6-15.2c1.2 0 2.4 0 3.5 0c14 0 27.5 5.3 37.8 14.9l5.2 4.8c1.7-1.6 3.4-3.2 5.2-4.8c10.2-9.6 23.8-14.9 37.8-14.9c1.2 0 2.4 0 3.5 0c28.6 0 51.8 23.2 51.8 51.8c0 14.3-5.9 28-16.4 37.8c-23.6 22.1-47.3 44.2-70.9 66.4L288 355.5l-10.9-10.2c-23.6-22.1-47.3-44.2-70.9-66.4c-5.2-4.9-9.3-10.8-12.1-17.2c-1.4-3.2-2.5-6.6-3.2-10c-.4-1.7-.6-3.5-.8-5.2c-.1-1.3-.2-2.6-.2-2.6c-.1-1.3-.1-1.3-.1-2.9c0-.9 0-1.7 .1-2.5c0-.9 .1-1.7 .2-2.6z" />
        <path d="M241.5 189.3c-28.6 0-51.8 23.2-51.8 51.8c0 14.3 5.9 28 16.4 37.8l70.9 66.4L288 355.5l10.9-10.2 70.9-66.4c10.5-9.8 16.4-23.5 16.4-37.8c0-28.6-23.2-51.8-51.8-51.8l-3.5 0c-14 0-27.5 5.3-37.8 14.9l-5.2 4.8-5.2-4.8c-10.3-9.6-23.8-14.9-37.8-14.9l-3.5 0z" />
    </Icon>
);

export default LeafHeart;