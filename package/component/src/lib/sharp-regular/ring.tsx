
import { Icon } from "../../index";

/**
 * A component that renders the `ring` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ring?s=sharp-regular ring}
 * @preview ![ring](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/ring.svg)
 */
const Ring: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 224l0-24 0-40c21.3-32 102.4-96 256-96s234.7 64 256 96l0 40 0 24 0 128c-21.3 32-102.4 96-256 96S21.3 384 0 352L0 224zm464 43.3c-42.3 27-110.6 52.7-208 52.7s-165.7-25.7-208-52.7l0 67.4C70.8 357 135.3 400 256 400s185.2-43 208-65.3l0-67.4zM396 248c-34-13.4-80.1-24-140-24s-106 10.6-140 24c34 13.4 80.1 24 140 24s106-10.6 140-24zm52.5-28.4c6.4-4.7 11.5-9.1 15.4-13l0-6.7 0-22.7C441.2 155 376.7 112 256 112s-185.2 43-208 65.3L48 200l0 6.7c3.9 3.8 9 8.3 15.4 13C106.2 196.2 169.6 176 256 176s149.8 20.2 192.6 43.6z" />
    </Icon>
);

export default Ring;