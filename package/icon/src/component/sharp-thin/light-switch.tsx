
import { Icon } from "../../index";

/**
 * A component that renders the `light-switch` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-switch?s=sharp-thin light-switch}
 * @preview ![light-switch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/light-switch.svg)
 */
const LightSwitch: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M368 16l0 480L16 496 16 16l352 0zM16 0L0 0 0 16 0 496l0 16 16 0 352 0 16 0 0-16 0-480 0-16L368 0 16 0zM272 400l-160 0 0-136 160 0 0 136zM112 112l160 0 0 136-160 0 0-136zm0-16L96 96l0 16 0 288 0 16 16 0 160 0 16 0 0-16 0-288 0-16-16 0L112 96zm96-40a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm0 400a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default LightSwitch;