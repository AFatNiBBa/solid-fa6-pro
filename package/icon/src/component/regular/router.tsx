
import { Icon } from "../../index";

/**
 * A component that renders the `router` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/router?s=regular router}
 * @preview ![router](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/router.svg)
 */
const Router: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M198.6 105.9c-9.9 8.8-25.1 7.8-33.9-2.1s-7.8-25.1 2.1-33.9C216.2 26.4 281.1 0 352 0s135.8 26.4 185.1 69.9c9.9 8.8 10.9 23.9 2.1 33.9s-23.9 10.9-33.9 2.1C464.5 69.8 410.8 48 352 48s-112.5 21.8-153.4 57.9zM64 352c-8.8 0-16 7.2-16 16l0 80c0 8.8 7.2 16 16 16l448 0c8.8 0 16-7.2 16-16l0-80c0-8.8-7.2-16-16-16L64 352zM0 368c0-35.3 28.7-64 64-64l264 0 0-56c0-13.3 10.7-24 24-24s24 10.7 24 24l0 56 136 0c35.3 0 64 28.7 64 64l0 80c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64l0-80zm104 16a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM352 160c-28.6 0-54.9 10-75.5 26.7c-10.3 8.3-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C275.2 126 312 112 352 112s76.8 14 105.7 37.4c10.3 8.3 11.9 23.5 3.5 33.8s-23.5 11.9-33.8 3.5C406.9 170 380.6 160 352 160z" />
    </Icon>
);

export default Router;