
import { Icon } from "../../index";

/**
 * A component that renders the `galaxy` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/galaxy?s=solid galaxy}
 * @preview ![galaxy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/galaxy.svg)
 */
const Galaxy: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320 0l11.5 0C342.8 0 352 9.2 352 20.5c0 7.1-3.7 13.7-9.8 17.5l-12.5 7.7c-35.2 21.7-60.9 54.9-73.3 93.1c19.9-7 41.3-10.8 63.5-10.8c106 0 192 86 192 192l0 11.5c0 11.3-9.2 20.5-20.5 20.5c-7.1 0-13.7-3.7-17.5-9.8l-7.7-12.5c-21.7-35.2-54.9-60.9-93.1-73.3c7 19.9 10.8 41.3 10.8 63.5c0 106-86 192-192 192l-11.5 0c-11.3 0-20.5-9.2-20.5-20.5c0-7.1 3.7-13.7 9.8-17.5l12.5-7.7c35.2-21.7 60.9-54.9 73.3-93.1c-19.9 7-41.3 10.8-63.5 10.8C86 384 0 298 0 192l0-11.5C0 169.2 9.2 160 20.5 160c7.1 0 13.7 3.7 17.5 9.8l7.7 12.5c21.7 35.2 54.9 60.9 93.1 73.3c-7-19.9-10.8-41.3-10.8-63.5C128 86 214 0 320 0zM256 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Galaxy;