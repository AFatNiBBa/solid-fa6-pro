
import { Icon } from "../../index";

/**
 * A component that renders the `wrench` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wrench?s=sharp-regular wrench}
 * @preview ![wrench](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/wrench.svg)
 */
const Wrench: typeof Icon = x => (
    <Icon {...x}>
        <path d="M322.3 268l-26.9-7.4-19.7 19.7L112 444.1 67.9 400 231.6 236.3l19.7-19.7L244 189.7c-2.6-9.4-4-19.3-4-29.7c0-60.5 48-109.9 108-111.9l-30 30L304 92.1l0 19.9 0 48 0 48 48 0 48 0 19.9 0 14.1-14.1 30-30c-2.1 60-51.4 108-111.9 108c-10.3 0-20.3-1.4-29.7-4zM112 512l33.9-33.9L309.7 314.3c13.5 3.7 27.7 5.7 42.3 5.7c88.4 0 160-71.6 160-160c0-13.5-1.7-26.7-4.9-39.3c-4.3-17-11.3-33-20.6-47.3l-35.1 35.1L400 160l-48 0 0-48 51.5-51.5 35.1-35.1c-14.4-9.3-30.3-16.3-47.3-20.6C378.7 1.7 365.5 0 352 0C263.6 0 192 71.6 192 160c0 14.7 2 28.9 5.7 42.3L33.9 366.1 0 400l33.9 33.9 44.1 44.1L112 512zm8-97.4L142.6 392 120 369.4 97.4 392 120 414.6z" />
    </Icon>
);

export default Wrench;