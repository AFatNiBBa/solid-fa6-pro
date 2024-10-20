
import { Icon } from "../../index";

/**
 * A component that renders the `boot` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boot?s=sharp-thin boot}
 * @preview ![boot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/boot.svg)
 */
const Boot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 16l352 0 0 96L16 112l0-96zM0 0L0 16l0 96 0 16 16 0 352 0 16 0 0-16 0-96 0-16L368 0 16 0 0 0zM240 160l-8 0 0 16 8 0 96 0 0 48-96 0-8 0 0 16 8 0 104 0 4.6 0L496 306.3l0 93.7L16 400l0-240L0 160 0 400l0 16 0 64 32 32 64 0 20.7-20.7L128 480l11.3 11.3L160 512l64 0 20.7-20.7L256 480l11.3 11.3L288 512l64 0 20.7-20.7L384 480l11.3 11.3L416 512l64 0 32-32 0-64 0-16 0-104L352 224l0-48 0-8 0-8-8 0-104 0zM16 416l480 0 0 57.4L473.4 496l-50.7 0-27.3-27.3L384 457.4l-11.3 11.3L345.4 496l-50.7 0-27.3-27.3L256 457.4l-11.3 11.3L217.4 496l-50.7 0-27.3-27.3L128 457.4l-11.3 11.3L89.4 496l-50.7 0L16 473.4 16 416z" />
    </Icon>
);

export default Boot;