
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-book-open` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-book-open?s=solid circle-book-open}
 * @preview ![circle-book-open](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI0MCAzNTJDMjI4LjE4OCAzNDUuMDQxIDE4OS4wOCAzMjYuMjg5IDEzOC41NjIgMzQ4LjI2NkMxMzMuNjQzIDM1MC40MDYgMTI4IDM0Ni45MDggMTI4IDM0MS44NjFWMTg1LjU0N0MxMjggMTgwLjA5MiAxMzEuMzc5IDE3NS4wMDIgMTM2Ljc1MiAxNzIuODAzQzE1Ny45NzcgMTY0LjEyNyAxNzguMzI0IDE1OS42ODkgMTk1Ljg5NiAxNjAuMDE4QzIxNS4wMTQgMTYwLjMzOCAyMzAuMDk4IDE2NC44OTEgMjQwIDE2OC45NTFWMzUyWk0zODQgMzQxLjg2MUMzODQgMzQ2LjkwOCAzNzguMzU3IDM1MC40MDYgMzczLjQzOCAzNDguMjY2QzMyMi45MDIgMzI2LjI4MyAyODMuODA5IDM0NS4wMzUgMjcyIDM1MS45OTZWMTY4Ljk1MUMyODEuOTAyIDE2NC44OTEgMjk2Ljk4NiAxNjAuMzM4IDMxNi4xMDQgMTYwLjAxOEMzMzMuNjA3IDE1OS44NjMgMzU0LjAxMiAxNjQuMTU0IDM3NS4yNDIgMTcyLjgwNUMzODAuNjIxIDE3NC45OTggMzg0IDE4MC4wOTYgMzg0IDE4NS41NTNWMzQxLjg2MVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleBookOpen(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM240 352C228.188 345.041 189.08 326.289 138.562 348.266C133.643 350.406 128 346.908 128 341.861V185.547C128 180.092 131.379 175.002 136.752 172.803C157.977 164.127 178.324 159.689 195.896 160.018C215.014 160.338 230.098 164.891 240 168.951V352ZM384 341.861C384 346.908 378.357 350.406 373.438 348.266C322.902 326.283 283.809 345.035 272 351.996V168.951C281.902 164.891 296.986 160.338 316.104 160.018C333.607 159.863 354.012 164.154 375.242 172.805C380.621 174.998 384 180.096 384 185.553V341.861Z" />
        </Icon>
    </>
}