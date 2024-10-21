
import { Icon } from "../../index";

/**
 * A component that renders the `gamepad` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gamepad?s=light gamepad}
 * @preview ![gamepad](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/gamepad.svg)
 */
const Gamepad: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M192 96C103.6 96 32 167.6 32 256s71.6 160 160 160l256 0c88.4 0 160-71.6 160-160s-71.6-160-160-160L192 96zM0 256C0 150 86 64 192 64l256 0c106 0 192 86 192 192s-86 192-192 192l-256 0C86 448 0 362 0 256zm208-64l0 48 48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0 0-48c0-8.8 7.2-16 16-16s16 7.2 16 16zM408 304a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88-120a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Gamepad;