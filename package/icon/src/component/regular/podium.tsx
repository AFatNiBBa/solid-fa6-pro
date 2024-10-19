
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `podium` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/podium?s=regular podium}
 * @preview ![podium](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjMuMTg4IDQ2NEgxMjQuODEyTDkwLjUzNyAyMjRINDIuMDMzTDgwLjIzNCA0OTEuNDA2QzgxLjkzOCA1MDMuMjE5IDkyLjA2MiA1MTIgMTA0IDUxMkgzNDRDMzU1LjkzOCA1MTIgMzY2LjA2MiA1MDMuMjE5IDM2Ny43NjYgNDkxLjQwNkw0MDUuOTY3IDIyNEgzNTcuNDYzTDMyMy4xODggNDY0Wk00MjQgMTQ0SDEyOFYxMzZDMTI4IDEwMS4xNzIgMTUyLjg3NyA3Mi4wNTUgMTg1Ljc5NyA2NS40MzhDMTkzLjEzNSA3NC4xNDggMjAzLjcxOSA4MCAyMTYgODBIMjk2QzMxOC4wOTIgODAgMzM2IDYyLjA5IDMzNiA0MEMzMzYgMTcuOTA2IDMxOC4wOTIgMCAyOTYgMEgyMTZDMjAyLjM3NyAwIDE5MC45MzkgNy4yNDYgMTgzLjcxNSAxNy42NDhDMTI1LjI5MyAyNS42ODggODAgNzUuNDIyIDgwIDEzNlYxNDRIMjRDMTAuNzUgMTQ0IDAgMTU0Ljc1IDAgMTY4UzEwLjc1IDE5MiAyNCAxOTJINDI0QzQzNy4yNSAxOTIgNDQ4IDE4MS4yNSA0NDggMTY4UzQzNy4yNSAxNDQgNDI0IDE0NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Podium(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M323.188 464H124.812L90.537 224H42.033L80.234 491.406C81.938 503.219 92.062 512 104 512H344C355.938 512 366.062 503.219 367.766 491.406L405.967 224H357.463L323.188 464ZM424 144H128V136C128 101.172 152.877 72.055 185.797 65.438C193.135 74.148 203.719 80 216 80H296C318.092 80 336 62.09 336 40C336 17.906 318.092 0 296 0H216C202.377 0 190.939 7.246 183.715 17.648C125.293 25.688 80 75.422 80 136V144H24C10.75 144 0 154.75 0 168S10.75 192 24 192H424C437.25 192 448 181.25 448 168S437.25 144 424 144Z" />
        </Icon>
    </>
}