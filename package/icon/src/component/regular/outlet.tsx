
import { Icon } from "../../index";

/**
 * A component that renders the `outlet` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/outlet?s=regular outlet}
 * @preview ![outlet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/outlet.svg)
 */
const Outlet: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM80 256c0-52.3 26.5-85.2 43.6-100.9c8.6-8 20.2-11.1 31.9-11.1l137 0c11.7 0 23.3 3.1 31.9 11.1c17 15.8 43.6 48.7 43.6 100.9s-26.5 85.2-43.6 100.9c-8.6 8-20.2 11.1-31.9 11.1l-137 0c-11.7 0-23.3-3.1-31.9-11.1C106.5 341.2 80 308.3 80 256zm96-48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48zm128 0c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48zM200 296l0 16c0 4.4 3.6 8 8 8l32 0c4.4 0 8-3.6 8-8l0-16c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
    </Icon>
);

export default Outlet;