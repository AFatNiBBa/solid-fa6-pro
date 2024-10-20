
import { Icon } from "../../index";

/**
 * A component that renders the `film-canister` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/film-canister?s=sharp-solid film-canister}
 * @preview ![film-canister](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/film-canister.svg)
 */
const FilmCanister: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M256 0L96 0l0 32L32 32 0 32 0 96l32 0 0 352L0 448l0 64 32 0 288 0 32 0 0-64-32 0 0-352 32 0 0-64-32 0-64 0 0-32zm96 128l0 288 160 0 0-96 64 0 0-192-224 0zm88 40l0 48-48 0 0-48 48 0zm48 0l48 0 0 48-48 0 0-48zM440 328l0 48-48 0 0-48 48 0z" />
    </Icon>
);

export default FilmCanister;