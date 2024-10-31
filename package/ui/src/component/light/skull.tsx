
import { Icon } from "../../index";

/**
 * A component that renders the `skull` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/skull?s=light skull}
 * @preview ![skull](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/skull.svg)
 */
const Skull: typeof Icon = x => (
    <Icon {...x}>
        <path d="M384 399.6c-.2-10.7 4.9-20.8 13.6-26.9c51.3-36 82.4-89.8 82.4-148.7c0-102.2-96.1-192-224-192S32 121.8 32 224c0 58.8 31.1 112.7 82.4 148.7c8.8 6.1 13.9 16.2 13.6 26.9l0 .4 0 64c0 8.8 7.2 16 16 16l48 0 0-48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48 64 0 0-48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48 48 0c8.8 0 16-7.2 16-16l0-64 0-.4zm32-.7c0 .4 0 .7 0 1.1l0 64c0 26.5-21.5 48-48 48l-224 0c-26.5 0-48-21.5-48-48l0-64c0-.4 0-.7 0-1.1C37.5 357.8 0 294.7 0 224C0 100.3 114.6 0 256 0S512 100.3 512 224c0 70.7-37.5 133.8-96 174.9zM160 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm224 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-96 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default Skull;