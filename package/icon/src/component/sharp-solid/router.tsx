
import { Icon } from "../../index";

/**
 * A component that renders the `router` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/router?s=sharp-solid router}
 * @preview ![router](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/router.svg)
 */
const Router: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M352 48c58.8 0 112.5 21.8 153.4 57.9l31.7-36C487.8 26.4 422.9 0 352 0S216.2 26.4 166.9 69.9l31.7 36C239.5 69.8 293.2 48 352 48zm24 200l0-24-48 0 0 24 0 72L0 320 0 512l576 0 0-192-200 0 0-72zM128 384l0 64-64 0 0-64 64 0zm32 0l64 0 0 64-64 0 0-64zM276.5 186.7C297.1 170 323.4 160 352 160s54.9 10 75.5 26.7l30.2-37.3C428.8 126 392 112 352 112s-76.8 14-105.7 37.4l30.2 37.3z" />
    </Icon>
);

export default Router;