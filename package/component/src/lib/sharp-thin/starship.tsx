
import { Icon } from "../../index";

/**
 * A component that renders the `starship` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/starship?s=sharp-thin starship}
 * @preview ![starship](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/starship.svg)
 */
const Starship: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M624 256a176 176 0 1 0 -352 0 176 176 0 1 0 352 0zm16 0c0 106-86 192-192 192c-83.8 0-155.1-53.7-181.3-128.6L183.3 308l-1.7 1.7L139.3 352l92.7 0 8 0 0 8 0 64 0 8-8 0L8 432l-8 0 0-8 0-64 0-8 8 0 108.7 0 46.7-46.7-68.5-9.3L88 295l0-7 0-64 0-7 6.9-.9 68.5-9.3L116.7 160 8 160l-8 0 0-8L0 88l0-8 8 0 224 0 8 0 0 8 0 64 0 8-8 0-92.7 0 42.3 42.3 1.7 1.7 83.4-11.4C292.9 117.7 364.2 64 448 64c106 0 192 86 192 192zM261.7 209.5L104 231l0 50 157.7 21.5C258 287.6 256 272 256 256s2-31.6 5.7-46.5zM16 144l208 0 0-48L16 96l0 48zm0 224l0 48 208 0 0-48L16 368zm432-48a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm0-144a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm16 80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-48 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default Starship;