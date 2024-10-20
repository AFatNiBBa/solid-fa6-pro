
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-fancy-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-fancy-slash?s=duotone pen-fancy-slash}
 * @preview ![pen-fancy-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pen-fancy-slash.svg)
 */
const PenFancySlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M65.7 487.6l95.4-95.4c-.7-2.6-1.1-5.4-1.1-8.3c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32c-2.9 0-5.6-.4-8.3-1.1L88.4 510.3 266 460.5c16.9-4.7 29.9-18.3 33.8-35.4L318 346.5 211 262.3l-60.1 13.9c-17.1 3.9-30.7 16.9-35.4 33.8L65.7 487.6zM287.1 199.7l100.8 79 161-140.2c17.2-15 27.1-36.7 27.1-59.6c0-43.6-35.4-79-79-79c-22.8 0-44.6 9.9-59.6 27.1L287.1 199.7z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default PenFancySlash;