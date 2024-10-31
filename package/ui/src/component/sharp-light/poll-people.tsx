
import { Icon } from "../../index";

/**
 * A component that renders the `poll-people` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/poll-people?s=sharp-light poll-people}
 * @preview ![poll-people](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/poll-people.svg)
 */
const PollPeople: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 32a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm0 64A48 48 0 1 0 96 0a48 48 0 1 0 0 96zM608 64l0 96-96 0 0-96 96 0zM256 64l224 0 0 96-224 0 0-96zm0-32l-32 0 0 32 0 96 0 32 32 0 352 0 32 0 0-32 0-96 0-32-32 0L256 32zM608 352l0 96-224 0 0-96 224 0zm-352 0l96 0 0 96-96 0 0-96zm0-32l-32 0 0 32 0 96 0 32 32 0 352 0 32 0 0-32 0-96 0-32-32 0-352 0zM80 336a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm64 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM40 416l-12.1 0-3.3 11.6L.4 512l33.3 0 18.3-64 87.9 0 18.3 64 33.3 0-24.2-84.4L164.1 416 152 416 40 416zM27.9 128l-3.3 11.6L.4 224l33.3 0 18.3-64 87.9 0 18.3 64 33.3 0-24.2-84.4L164.1 128 152 128 40 128l-12.1 0z" />
    </Icon>
);

export default PollPeople;