
import { Icon } from "../../index";

/**
 * A component that renders the `person-running` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-running?s=sharp-solid person-running}
 * @preview ![person-running](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/person-running.svg)
 */
const PersonRunning: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M272 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM128 96l-13.3 0-9.4 9.4-48 48L34.7 176 80 221.3l22.6-22.6L141.3 160l27.7 0-31.3 94c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-9.4 32.8-16 56L213.6 512l66.6 0 6.6-23.2 16-56 16-56 6.6-23.2L305 340.9 238 299l29-77.4 24.3 48.6 8.8 17.7 19.8 0 48 0 32 0 0-64-32 0-28.2 0-39.2-78.3-5.4-10.9-11.3-4.5-80-32L198.2 96 192 96l-64 0zM109.5 310.7L91.2 352 32 352 0 352l0 64 32 0 80 0 20.8 0 8.4-19L157 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9z" />
    </Icon>
);

export default PersonRunning;