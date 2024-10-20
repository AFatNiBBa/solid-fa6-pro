
import { Icon } from "../../index";

/**
 * A component that renders the `cheese` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cheese?s=regular cheese}
 * @preview ![cheese](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/cheese.svg)
 */
const Cheese: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 240.2l0 15.8L48 256c0-3.9 2-7.6 5.3-9.8L301.5 80.7c.7-.4 1.5-.7 2.3-.7C392.3 80 464 151.7 464 240.2zM48 304l416 0 0 112c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-112zm464-48l0-15.8C512 125.2 418.8 32 303.8 32c-10.3 0-20.3 3-28.9 8.7L26.6 206.2C10 217.3 0 236 0 256L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-160z" />
    </Icon>
);

export default Cheese;