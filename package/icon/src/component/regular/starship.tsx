
import { Icon } from "../../index";

/**
 * A component that renders the `starship` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/starship?s=regular starship}
 * @preview ![starship](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/starship.svg)
 */
const Starship: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 96C0 60.7 28.7 32 64 32l128 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-27.2 0 37.7 26.1 70.1-8.4C302.6 110.7 369.9 64 448 64c106 0 192 86 192 192s-86 192-192 192c-78.1 0-145.4-46.7-175.3-113.7l-70.1-8.4L164.8 352l27.2 0c35.3 0 64 28.7 64 64s-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64s28.7-64 64-64l16.5 0 50.1-34.7-13.7-1.6C86.7 312 64 286.4 64 256s22.7-56 52.9-59.6l13.7-1.6L80.5 160 64 160C28.7 160 0 131.3 0 96zM64 80c-8.8 0-16 7.2-16 16s7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L64 80zm58.6 164c-6.1 .7-10.6 5.9-10.6 12s4.6 11.3 10.6 12l135.4 16.3c-1.4-9.2-2.1-18.6-2.1-28.2s.7-19 2.1-28.2L122.6 244zM48 416c0 8.8 7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L64 400c-8.8 0-16 7.2-16 16zm400-16a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm32-144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-112 0a80 80 0 1 1 160 0 80 80 0 1 1 -160 0z" />
    </Icon>
);

export default Starship;