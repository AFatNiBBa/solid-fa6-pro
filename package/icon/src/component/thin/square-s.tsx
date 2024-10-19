
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-s` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-s?s=thin square-s}
 * @preview ![square-s](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjU0IDQxOS4zNDYgMzIgMzg0IDMyWk00MzIgNDE2QzQzMiA0NDIuNDY3IDQxMC40NjcgNDY0IDM4NCA0NjRINjRDMzcuNTMzIDQ2NCAxNiA0NDIuNDY3IDE2IDQxNlY5NkMxNiA2OS41MzMgMzcuNTMzIDQ4IDY0IDQ4SDM4NEM0MTAuNDY3IDQ4IDQzMiA2OS41MzMgNDMyIDk2VjQxNlpNMjI2LjAzMSAyNDguMzI4QzE3MC43ODEgMjMzLjg3NSAxMzcuNzgxIDIyMi4zMjggMTQ1IDE4NC4xMDlDMTQ3LjE1NiAxNzIuNjI1IDE1My44NzUgMTYyLjk1MyAxNjQuNDA2IDE1Ni4xMjVDMTgwLjcxOSAxNDUuNTQ3IDIxNC45MDYgMTM2LjU0NyAyODQuOTY5IDE1My40MDZDMjg5LjI1IDE1NC4zOTEgMjkzLjU5NCAxNTEuNzk3IDI5NC42MjUgMTQ3LjVTMjkzIDEzOC44NzUgMjg4LjcxOSAxMzcuODQ0QzIyOC4wNjIgMTIzLjI1IDE4My4zNzUgMTI0Ljg5MSAxNTUuNzE5IDE0Mi42ODhDMTQxLjQwNiAxNTEuOTUzIDEzMi4yODEgMTY1LjIzNCAxMjkuMjUgMTgxLjE0MUMxMTguNzUgMjM2Ljc4MSAxNzMuNTk0IDI1MS4xNDEgMjIxLjk2OSAyNjMuODEyQzI3Ny4yMTkgMjc4LjI4MSAzMTAuMjE5IDI4OS44MTIgMzAzIDMyOC4wNDdDMzAwLjQwNiAzNDEuNzgxIDI5My40MDYgMzUxLjcwMyAyODEuNTYyIDM1OC40MDZDMjQ4LjAzMSAzNzcuMzEyIDE4NS44NDQgMzY1LjQwNiAxMzguNzgxIDM0Ny45ODRDMTM0Ljc1IDM0Ni40NTMgMTMwLjAzMSAzNDguNTYyIDEyOC41IDM1Mi43MDNTMTI5LjA2MiAzNjEuNDUzIDEzMy4yMTkgMzYyLjk4NEMxNTAgMzY5LjIwMyAxOTQuNSAzODQuMDQ3IDIzNi4zNDQgMzg0LjA0N0MyNTUuNTk0IDM4NC4wNDcgMjc0LjI4MSAzODAuOTA2IDI4OS40MzcgMzcyLjM0NEMzMDUuNDA2IDM2My4yOTcgMzE1LjI1IDM0OS40MDYgMzE4Ljc1IDMzMS4wMTZDMzI5LjI1IDI3NS4zNTkgMjc0LjQwNiAyNjEgMjI2LjAzMSAyNDguMzI4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SquareS(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM432 416C432 442.467 410.467 464 384 464H64C37.533 464 16 442.467 16 416V96C16 69.533 37.533 48 64 48H384C410.467 48 432 69.533 432 96V416ZM226.031 248.328C170.781 233.875 137.781 222.328 145 184.109C147.156 172.625 153.875 162.953 164.406 156.125C180.719 145.547 214.906 136.547 284.969 153.406C289.25 154.391 293.594 151.797 294.625 147.5S293 138.875 288.719 137.844C228.062 123.25 183.375 124.891 155.719 142.688C141.406 151.953 132.281 165.234 129.25 181.141C118.75 236.781 173.594 251.141 221.969 263.812C277.219 278.281 310.219 289.812 303 328.047C300.406 341.781 293.406 351.703 281.562 358.406C248.031 377.312 185.844 365.406 138.781 347.984C134.75 346.453 130.031 348.562 128.5 352.703S129.062 361.453 133.219 362.984C150 369.203 194.5 384.047 236.344 384.047C255.594 384.047 274.281 380.906 289.437 372.344C305.406 363.297 315.25 349.406 318.75 331.016C329.25 275.359 274.406 261 226.031 248.328Z" />
        </Icon>
    </>
}