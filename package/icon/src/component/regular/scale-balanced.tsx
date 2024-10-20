
import { Icon } from "../../index";

/**
 * A component that renders the `scale-balanced` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scale-balanced?s=regular scale-balanced}
 * @preview ![scale-balanced](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/scale-balanced.svg)
 */
const ScaleBalanced: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M520 48L393.3 48C381 19.7 352.8 0 320 0s-61 19.7-73.3 48L120 48c-13.3 0-24 10.7-24 24s10.7 24 24 24l121.6 0c5.8 28.6 26.9 51.7 54.4 60.3L296 464l-176 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l200 0 200 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0 0-307.7c27.5-8.6 48.6-31.7 54.4-60.3L520 96c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-8 147.8L584.4 320l-144.9 0L512 195.8zM386 337.1C396.8 382 449.1 416 512 416s115.2-34 126-78.9c2.6-11-1-22.3-6.7-32.1L536.1 141.8c-5-8.6-14.2-13.8-24.1-13.8s-19.1 5.3-24.1 13.8L392.7 305.1c-5.7 9.8-9.3 21.1-6.7 32.1zM54.4 320l72.4-124.2L199.3 320 54.4 320zm72.4 96c62.9 0 115.2-34 126-78.9c2.6-11-1-22.3-6.7-32.1L150.9 141.8c-5-8.6-14.2-13.8-24.1-13.8s-19.1 5.3-24.1 13.8L7.6 305.1c-5.7 9.8-9.3 21.1-6.7 32.1C11.7 382 64 416 126.8 416zM320 48a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default ScaleBalanced;