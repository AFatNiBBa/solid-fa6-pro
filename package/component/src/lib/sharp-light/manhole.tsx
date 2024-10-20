
import { Icon } from "../../index";

/**
 * A component that renders the `manhole` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/manhole?s=sharp-light manhole}
 * @preview ![manhole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/manhole.svg)
 */
const Manhole: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM201.6 122.6C215.8 135.9 235 144 256 144s40.2-8.1 54.4-21.4C363 144.1 400 195.8 400 256s-37 111.9-89.6 133.4C296.2 376.1 277 368 256 368s-40.2 8.1-54.4 21.4C149 367.9 112 316.2 112 256s37-111.9 89.6-133.4zM213 85.3C136.6 104.5 80 173.6 80 256s56.6 151.5 133 170.7c7.8-15.8 24.2-26.7 43-26.7s35.2 10.9 43 26.7c76.4-19.2 133-88.3 133-170.7s-56.6-151.5-133-170.7c-7.8 15.8-24.2 26.7-43 26.7s-35.2-10.9-43-26.7zM208 176l-32 0 0 32 32 0 0-32zm0 64l-32 0 0 32 32 0 0-32zm-32 64l0 32 32 0 0-32-32 0zm96-96l0-32-32 0 0 32 32 0zm0 128l0-32-32 0 0 32 32 0zm32-160l0 32 32 0 0-32-32 0zm-64 64l0 32 32 0 0-32-32 0zm96 0l-32 0 0 32 32 0 0-32zm-32 64l0 32 32 0 0-32-32 0z" />
    </Icon>
);

export default Manhole;