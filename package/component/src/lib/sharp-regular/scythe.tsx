
import { Icon } from "../../index";

/**
 * A component that renders the `scythe` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scythe?s=sharp-regular scythe}
 * @preview ![scythe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/scythe.svg)
 */
const Scythe: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M352 0C161.2 0 64.9 110.2 24.4 176C7.1 204 0 224 0 224l52.5 0 456.9 0 9.9-48L82.4 176c7.4-9.9 16.1-20.3 26.1-30.7C154.9 97.2 231 48 352 48l193.8 0 9.9-48L352 0zM637.5 0l-49 0L528.9 288 408 288l-24 0 0 48 24 0 110.9 0L482.5 512l49 0L568 336c0 0 0 0 0 0l0-.2L637.5 0z" />
    </Icon>
);

export default Scythe;