
import { Icon } from "../../index";

/**
 * A component that renders the `smog` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/smog?s=sharp-regular smog}
 * @preview ![smog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/smog.svg)
 */
const Smog: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M331.1 252l-13.6-12-18.2 0L176 240l-96 0 0-96c0-53 43-96 96-96c23 0 44.1 8.1 60.6 21.5l31.7 25.8 30.6-27.2C313 55.6 331.6 48 352 48c30.6 0 57.3 17.2 70.8 42.7L441 125.1l37.4-10.7c5.5-1.6 11.4-2.4 17.6-2.4c35.3 0 64 28.7 64 64l0 64-64 0-27.3 0-18.2 0-13.6 12c-14.1 12.5-32.6 20-52.9 20s-38.8-7.5-52.9-20zM32 288l48 0 96 0 123.3 0c22.6 19.9 52.2 32 84.7 32s62.1-12.1 84.7-32l27.3 0 64 0 48 0 0-48 0-64c0-61.9-50.1-112-112-112c-10.7 0-21 1.5-30.8 4.3C443.8 27.7 401.1 0 352 0c-32.6 0-62.4 12.2-85.1 32.3C242.1 12.1 210.5 0 176 0C96.5 0 32 64.5 32 144l0 96 0 48zm584 80l-336 0-24 0 0 48 24 0 336 0 24 0 0-48-24 0zm-64 96l-112 0-24 0 0 48 24 0 112 0 24 0 0-48-24 0zm-192 0L24 464 0 464l0 48 24 0 336 0 24 0 0-48-24 0zM224 368l-24 0L96 368l-24 0 0 48 24 0 104 0 24 0 0-48z" />
    </Icon>
);

export default Smog;