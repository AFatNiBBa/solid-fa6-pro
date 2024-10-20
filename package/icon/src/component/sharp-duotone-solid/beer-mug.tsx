
import { Icon, generic } from "../../index";

/**
 * A component that renders the `beer-mug` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/beer-mug?s=sharp-duotone-solid beer-mug}
 * @preview ![beer-mug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/beer-mug.svg)
 */
const BeerMug: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 163.2L32 512l352 0 0-66.3 109-48.4 19-8.4 0-20.8 0-176 0-32-32 0-90.9 0c-15.2 10.1-33.5 16-53.1 16c-18.8 0-36.2-5.4-51-14.7c-20.1 19-47.1 30.7-77 30.7s-56.9-11.7-77-30.7C116.2 170.6 98.8 176 80 176c-17.5 0-33.9-4.7-48-12.8zM128 224l32 0 0 16 0 160 0 16-32 0 0-16 0-160 0-16zm64 0l32 0 0 16 0 160 0 16-32 0 0-16 0-160 0-16zm64 0l32 0 0 16 0 160 0 16-32 0 0-16 0-160 0-16zm128 0l64 0 0 123.2-64 28.4L384 224z" />
        <path d="M208 160c32.5 0 60.5-19.4 73-47.2c11.2 18.7 31.6 31.2 55 31.2c35.3 0 64-28.7 64-64s-28.7-64-64-64c-23.4 0-43.8 12.5-55 31.2C268.5 19.4 240.5 0 208 0s-60.5 19.4-73 47.2C123.8 28.5 103.4 16 80 16C44.7 16 16 44.7 16 80s28.7 64 64 64c23.4 0 43.8-12.5 55-31.2c12.5 27.8 40.5 47.2 73 47.2zm-48 80l0-16-32 0 0 16 0 160 0 16 32 0 0-16 0-160zm64 0l0-16-32 0 0 16 0 160 0 16 32 0 0-16 0-160zm64 0l0-16-32 0 0 16 0 160 0 16 32 0 0-16 0-160z" />
    </Icon>
);

export default BeerMug;