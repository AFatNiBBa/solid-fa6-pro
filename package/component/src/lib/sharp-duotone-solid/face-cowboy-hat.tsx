
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-cowboy-hat` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-cowboy-hat?s=sharp-duotone-solid face-cowboy-hat}
 * @preview ![face-cowboy-hat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-cowboy-hat.svg)
 */
const FaceCowboyHat: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M48 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-49.3-17.2-94.6-45.8-130.2C375.4 204.9 318.5 224 256 224l-.3 0c-1.8 0-3.6 0-5.4-.1c-2.1 0-4-.1-5.9-.2c-3.9-.2-7.7-.4-11.5-.7c-7.6-.6-15.2-1.5-22.5-2.6c-14.8-2.3-29.1-5.6-42.8-10c-27.4-8.7-52.3-21.3-73.6-36.9C65.2 209.4 48 254.7 48 304zm88 51.1c34.6 13.8 75.9 21.7 120.2 21.7s85.6-8 120.2-21.7C364.2 410.5 315 452 256.2 452s-108-41.5-120.2-96.9zM216 304a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm128 0a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M136.6 110.8L192 0l64 32L320 0l55.4 110.8c36.5-11.1 68.9-27.1 95.3-46.8L488 81.3C460.8 163.5 367.2 224 256 224S51.2 163.5 24 81.3L41.3 64c26.4 19.7 58.8 35.7 95.3 46.8zM168 304a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm152-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default FaceCowboyHat;