
import { Icon, generic } from "../../index";

/**
 * A component that renders the `block-brick-fire` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/block-brick-fire?s=duotone block-brick-fire}
 * @preview ![block-brick-fire](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/block-brick-fire.svg)
 */
const BlockBrickFire: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 96l0 16 64 0 0-80C60.7 32 32 60.7 32 96zm0 48l0 96 208 0 0-96L32 144zm0 128l0 96 64 0 0-96-64 0zm0 128l0 16c0 35.3 28.7 64 64 64l144 0 0-80L32 400zM128 32l0 80 256 0 0-80L128 32zm0 240l0 96 160.8 0c-.5-5.9-.8-11.9-.8-17.9c0-25.4 8.5-52.4 21-78.1l-181 0zM272 144l0 96 54.9 0c20.6-32.8 48.5-66.2 81-96L272 144zm0 256l0 80 65.6 0c-20.2-22.6-35.1-50-43.1-80L272 400zM416 32l0 80 64 0 0-16c0-35.3-28.7-64-64-64zm63.4 112c.2 .2 .4 .4 .6 .6l0-.6-.6 0z" />
        <path d="M518 194.5l-12.3 13.8-19-19.9c-2-2.1-4-4.4-6-6.7c-9-10.2-18.6-21.3-32.7-21.6c-7.3-.2-14.6 2.3-20.3 7.5c-23.4 21.1-50 48.9-70.9 80.2C336 278.8 320 314.8 320 352.2C320 440.7 390.4 512 480 512c88.7 0 160-71.2 160-159.8c0-30-11-60.9-26.2-88.1c-15.2-27.4-35.3-52.3-55-70.6c-5.6-5.2-12.8-7.8-19.9-7.8c-7.6 0-15.5 2.8-20.9 8.9zM480 464.2c-35.3 0-64-28.7-64-64c0-36.5 37-73 54.8-88.4c5.4-4.7 13.1-4.7 18.5 0C507 327.1 544 363.6 544 400.2c0 35.3-28.7 64-64 64z" />
    </Icon>
);

export default BlockBrickFire;