
import { Icon } from "../../index";

/**
 * A component that renders the `user-astronaut` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-astronaut?s=sharp-light user-astronaut}
 * @preview ![user-astronaut](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/user-astronaut.svg)
 */
const UserAstronaut: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M368 176A144 144 0 1 0 80 176a144 144 0 1 0 288 0zM48 176a176 176 0 1 1 352 0A176 176 0 1 1 48 176zM32 112l0 128L0 240 0 112l32 0zm416 0l0 128-32 0 0-128 32 0zM48 304l12 0c9.2 11.7 19.6 22.5 31 32l-17.6 0L40.2 480 96 480l0-64 0-16 16 0 224 0 16 0 0 16 0 64 55.8 0L374.5 336l-17.6 0c11.5-9.5 21.9-20.3 31-32l12 0 40.6 176 7.4 32-32.8 0L336 512l-48 0-32 0-64 0-32 0-48 0-79.2 0L0 512l7.4-32L48 304zM320 432l-192 0 0 48 32 0 0-16 0-16 32 0 0 16 0 16 64 0 0-16 0-16 32 0 0 16 0 16 32 0 0-48zM240 256c44.2 0 80-35.8 80-80l0-18.7L290.7 128l-133.5 0L128 157.3l0 18.7c0 44.2 35.8 80 80 80l32 0zM96 144l48-48 160 0 48 48 0 32c0 61.9-50.1 112-112 112l-32 0c-61.9 0-112-50.1-112-112l0-32zm96 0l13.3 26.7L232 184l-26.7 13.3L192 224l-13.3-26.7L152 184l26.7-13.3L192 144z" />
    </Icon>
);

export default UserAstronaut;