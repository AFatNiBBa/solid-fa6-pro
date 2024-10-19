
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `rainbow` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rainbow?s=duotone rainbow}
 * @preview ![rainbow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU0NCAzNTJWNDY0QzU0NCA0NzIuODM2IDUzNi44MzggNDgwIDUyOCA0ODBINDk2QzQ4Ny4xNjQgNDgwIDQ4MCA0NzIuODM2IDQ4MCA0NjRWMzUyQzQ4MCAyNjEuNzI5IDQwNC44MzggMTg4LjY2OCAzMTMuODE0IDE5Mi4xMTdDMjI3LjIzNiAxOTUuMzk4IDE2MCAyNjkuMjkzIDE2MCAzNTUuOTM0VjQ2NEMxNjAgNDcyLjgzNiAxNTIuODM4IDQ4MCAxNDQgNDgwSDExMkMxMDMuMTY0IDQ4MCA5NiA0NzIuODM2IDk2IDQ2NFYzNTYuNzY0Qzk2IDIzNC44NzcgMTkxLjM4OSAxMzEuNzE3IDMxMy4yMjMgMTI4LjEwMkM0MzkuODE4IDEyNC4zNDQgNTQ0IDIyNi4yMzIgNTQ0IDM1MloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzEzLjU0OSAyMjQuMTZDMjQ0Ljc5MyAyMjcuNTUzIDE5MiAyODYuODczIDE5MiAzNTUuNzE1VjQ2NEMxOTIgNDcyLjgzNiAxOTkuMTY0IDQ4MCAyMDggNDgwSDI0MEMyNDguODM4IDQ4MCAyNTYgNDcyLjgzNiAyNTYgNDY0VjM1NC4yNThDMjU2IDMyMC4xOTcgMjgxLjY1MiAyOTAuNDEyIDMxNS42MzcgMjg4LjE0NkMzNTIuOSAyODUuNjYyIDM4NCAzMTUuMjc1IDM4NCAzNTJWNDY0QzM4NCA0NzIuODM2IDM5MS4xNjQgNDgwIDQwMCA0ODBINDMyQzQ0MC44MzggNDgwIDQ0OCA0NzIuODM2IDQ0OCA0NjRWMzUyQzQ0OCAyNzkuMjgzIDM4Ny4wNDUgMjIwLjUzMSAzMTMuNTQ5IDIyNC4xNlpNMzEyLjMwMSAzMi4wOTJDMTM3LjYwMiAzNi4yMTcgMCAxODMuMjU0IDAgMzU4LjAwMlY0NjRDMCA0NzIuODM2IDcuMTY0IDQ4MCAxNiA0ODBINDhDNTYuODM4IDQ4MCA2NCA0NzIuODM2IDY0IDQ2NFYzNTcuMUM2NCAyMTMuODY5IDE4MS4yMDkgOTMuNjAyIDMyNC40MiA5Ni4wMzdDNDYzLjU0NSA5OC40MDQgNTc2IDIxMi4zMiA1NzYgMzUyVjQ2NEM1NzYgNDcyLjgzNiA1ODMuMTY0IDQ4MCA1OTIgNDgwSDYyNEM2MzIuODM4IDQ4MCA2NDAgNDcyLjgzNiA2NDAgNDY0VjM1MkM2NDAgMTcyLjk4NiA0OTIuMjU4IDI3Ljg0MiAzMTIuMzAxIDMyLjA5MloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Rainbow(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M544 352V464C544 472.836 536.838 480 528 480H496C487.164 480 480 472.836 480 464V352C480 261.729 404.838 188.668 313.814 192.117C227.236 195.398 160 269.293 160 355.934V464C160 472.836 152.838 480 144 480H112C103.164 480 96 472.836 96 464V356.764C96 234.877 191.389 131.717 313.223 128.102C439.818 124.344 544 226.232 544 352Z" />
            <path d="M313.549 224.16C244.793 227.553 192 286.873 192 355.715V464C192 472.836 199.164 480 208 480H240C248.838 480 256 472.836 256 464V354.258C256 320.197 281.652 290.412 315.637 288.146C352.9 285.662 384 315.275 384 352V464C384 472.836 391.164 480 400 480H432C440.838 480 448 472.836 448 464V352C448 279.283 387.045 220.531 313.549 224.16ZM312.301 32.092C137.602 36.217 0 183.254 0 358.002V464C0 472.836 7.164 480 16 480H48C56.838 480 64 472.836 64 464V357.1C64 213.869 181.209 93.602 324.42 96.037C463.545 98.404 576 212.32 576 352V464C576 472.836 583.164 480 592 480H624C632.838 480 640 472.836 640 464V352C640 172.986 492.258 27.842 312.301 32.092Z" />
        </Icon>
    </>
}