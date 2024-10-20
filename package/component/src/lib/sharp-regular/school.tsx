
import { Icon } from "../../index";

/**
 * A component that renders the `school` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/school?s=sharp-regular school}
 * @preview ![school](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/school.svg)
 */
const School: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M466.7 144l-11.4-6.8L320 56 184.7 137.2 173.3 144 160 144 48 144l0 320 208 0 0-80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 80 208 0 0-320-112 0-13.3 0zM592 96l48 0 0 48 0 320 0 48-48 0L48 512 0 512l0-48L0 144 0 96l48 0 112 0L320 0 480 96l112 0zM160 192l0 96-64 0 0-96 64 0zm320 0l64 0 0 96-64 0 0-96zM160 320l0 96-64 0 0-96 64 0zm320 0l64 0 0 96-64 0 0-96zM240 192a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm96-48l-32 0 0 16 0 32 0 16 16 0 24 0 16 0 0-32-16 0-8 0 0-16 0-16z" />
    </Icon>
);

export default School;