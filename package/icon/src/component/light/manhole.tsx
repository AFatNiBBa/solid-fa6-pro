
import { Icon } from "../../index";

/**
 * A component that renders the `manhole` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/manhole?s=light manhole}
 * @preview ![manhole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/manhole.svg)
 */
const Manhole: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM201.6 122.6C215.8 135.9 235 144 256 144s40.2-8.1 54.4-21.4C363 144.1 400 195.8 400 256s-37 111.9-89.6 133.4C296.2 376.1 277 368 256 368s-40.2 8.1-54.4 21.4C149 367.9 112 316.2 112 256s37-111.9 89.6-133.4zm-1-33.7C130.5 112.1 80 178.2 80 256s50.5 143.9 120.6 167.1c7.1 2.4 14.6-1.4 19.6-7C229 406.2 241.8 400 256 400s27 6.2 35.8 16.1c5 5.6 12.4 9.4 19.6 7C381.5 399.9 432 333.8 432 256s-50.5-143.9-120.6-167.1c-7.1-2.4-14.6 1.4-19.6 7C283 105.8 270.2 112 256 112s-27-6.2-35.8-16.1c-5-5.6-12.4-9.4-19.6-7zM176 192a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm0 64a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm16 48a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm48-112a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm16 48a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm-16 80a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm80-144a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm-16 80a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm16 48a16 16 0 1 0 0 32 16 16 0 1 0 0-32z" />
    </Icon>
);

export default Manhole;