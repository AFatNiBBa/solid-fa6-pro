
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `ball-pile` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ball-pile?s=light ball-pile}
 * @preview ![ball-pile](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODAgMzIwQzQ2OS41OTQgMzIwIDQ1OS42ODggMzIyLjA5NCA0NTAuMzEyIDMyNS4xODhDNDY4LjUgMzA3LjY4OCA0ODAgMjgzLjMxMiA0ODAgMjU2QzQ4MCAyMDMgNDM3IDE2MCAzODQgMTYwQzM3My41OTQgMTYwIDM2My42ODggMTYyLjA5NCAzNTQuMzEyIDE2NS4xODhDMzcyLjU5NCAxNDcuNjg4IDM4NCAxMjMuMTg4IDM4NCA5NkMzODQgNDMgMzQxIDAgMjg4IDBTMTkyIDQzIDE5MiA5NkMxOTIgMTIzLjE4OCAyMDMuNDA2IDE0Ny42ODggMjIxLjY4OCAxNjUuMTg4QzIxMi4zMTIgMTYyLjA5NCAyMDIuNSAxNjAgMTkyIDE2MEMxMzkgMTYwIDk2IDIwMyA5NiAyNTZDOTYgMjgzLjE4OCAxMDcuNDA2IDMwNy42ODggMTI1LjY4OCAzMjUuMTg4QzExNi4zMTIgMzIyLjA5NCAxMDYuNSAzMjAgOTYgMzIwQzQzIDMyMCAwIDM2MyAwIDQxNlM0MyA1MTIgOTYgNTEyUzE5MiA0NjkgMTkyIDQxNkMxOTIgMzg4LjgxMiAxODAuNTk0IDM2NC4zMTIgMTYyLjMxMiAzNDYuODEyQzE3MS42ODggMzQ5LjkwNiAxODEuNSAzNTIgMTkyIDM1MlMyMTIuMzEyIDM0OS45MDYgMjIxLjY4OCAzNDYuODEyQzIwMy40MDYgMzY0LjMxMiAxOTIgMzg4LjgxMiAxOTIgNDE2QzE5MiA0NjkgMjM1IDUxMiAyODggNTEyUzM4NCA0NjkgMzg0IDQxNkMzODQgMzg4LjgxMiAzNzIuNTk0IDM2NC4zMTIgMzU0LjMxMiAzNDYuODEyQzM2My42ODggMzQ5LjkwNiAzNzMuNSAzNTIgMzg0IDM1MlM0MDQuMzEyIDM0OS45MDYgNDEzLjY4OCAzNDYuODEyQzM5NS40MDYgMzY0LjMxMiAzODQgMzg4LjgxMiAzODQgNDE2QzM4NCA0NjkgNDI3IDUxMiA0ODAgNTEyUzU3NiA0NjkgNTc2IDQxNlM1MzMgMzIwIDQ4MCAzMjBaTTI4OCAzMkMzMjMuMzEyIDMyIDM1MiA2MC42ODggMzUyIDk2UzMyMy4zMTIgMTYwIDI4OCAxNjBTMjI0IDEzMS4zMTIgMjI0IDk2UzI1Mi42ODggMzIgMjg4IDMyWk0zMTcuNjg4IDMyNS4xODhDMzA4LjMxMiAzMjIuMDk0IDI5OC40MDYgMzIwIDI4OCAzMjBTMjY3LjY4OCAzMjIuMDk0IDI1OC4zMTIgMzI1LjE4OEMyNzYuNSAzMDcuNjg4IDI4OCAyODMuMzEyIDI4OCAyNTZTMjc2LjU5NCAyMDQuMzEyIDI1OC4zMTIgMTg2LjgxMkMyNjcuNjg4IDE4OS45MDYgMjc3LjUgMTkyIDI4OCAxOTJTMzA4LjMxMiAxODkuOTA2IDMxNy42ODggMTg2LjgxMkMyOTkuNDA2IDIwNC4zMTIgMjg4IDIyOC44MTIgMjg4IDI1NlMyOTkuNDA2IDMwNy42ODggMzE3LjY4OCAzMjUuMTg4Wk05NiA0ODBDNjAuNjg4IDQ4MCAzMiA0NTEuMzEyIDMyIDQxNlM2MC42ODggMzUyIDk2IDM1MlMxNjAgMzgwLjY4OCAxNjAgNDE2UzEzMS4zMTIgNDgwIDk2IDQ4MFpNMTkyIDMyMEMxNTYuNjg4IDMyMCAxMjggMjkxLjMxMiAxMjggMjU2UzE1Ni42ODggMTkyIDE5MiAxOTJTMjU2IDIyMC42ODggMjU2IDI1NlMyMjcuMzEyIDMyMCAxOTIgMzIwWk0yODggNDgwQzI1Mi42ODggNDgwIDIyNCA0NTEuMzEyIDIyNCA0MTZTMjUyLjY4OCAzNTIgMjg4IDM1MlMzNTIgMzgwLjY4OCAzNTIgNDE2UzMyMy4zMTIgNDgwIDI4OCA0ODBaTTM4NCAzMjBDMzQ4LjY4OCAzMjAgMzIwIDI5MS4zMTIgMzIwIDI1NlMzNDguNjg4IDE5MiAzODQgMTkyUzQ0OCAyMjAuNjg4IDQ0OCAyNTZTNDE5LjMxMiAzMjAgMzg0IDMyMFpNNDgwIDQ4MEM0NDQuNjg4IDQ4MCA0MTYgNDUxLjMxMiA0MTYgNDE2UzQ0NC42ODggMzUyIDQ4MCAzNTJTNTQ0IDM4MC42ODggNTQ0IDQxNlM1MTUuMzEyIDQ4MCA0ODAgNDgwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BallPile(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M480 320C469.594 320 459.688 322.094 450.312 325.188C468.5 307.688 480 283.312 480 256C480 203 437 160 384 160C373.594 160 363.688 162.094 354.312 165.188C372.594 147.688 384 123.188 384 96C384 43 341 0 288 0S192 43 192 96C192 123.188 203.406 147.688 221.688 165.188C212.312 162.094 202.5 160 192 160C139 160 96 203 96 256C96 283.188 107.406 307.688 125.688 325.188C116.312 322.094 106.5 320 96 320C43 320 0 363 0 416S43 512 96 512S192 469 192 416C192 388.812 180.594 364.312 162.312 346.812C171.688 349.906 181.5 352 192 352S212.312 349.906 221.688 346.812C203.406 364.312 192 388.812 192 416C192 469 235 512 288 512S384 469 384 416C384 388.812 372.594 364.312 354.312 346.812C363.688 349.906 373.5 352 384 352S404.312 349.906 413.688 346.812C395.406 364.312 384 388.812 384 416C384 469 427 512 480 512S576 469 576 416S533 320 480 320ZM288 32C323.312 32 352 60.688 352 96S323.312 160 288 160S224 131.312 224 96S252.688 32 288 32ZM317.688 325.188C308.312 322.094 298.406 320 288 320S267.688 322.094 258.312 325.188C276.5 307.688 288 283.312 288 256S276.594 204.312 258.312 186.812C267.688 189.906 277.5 192 288 192S308.312 189.906 317.688 186.812C299.406 204.312 288 228.812 288 256S299.406 307.688 317.688 325.188ZM96 480C60.688 480 32 451.312 32 416S60.688 352 96 352S160 380.688 160 416S131.312 480 96 480ZM192 320C156.688 320 128 291.312 128 256S156.688 192 192 192S256 220.688 256 256S227.312 320 192 320ZM288 480C252.688 480 224 451.312 224 416S252.688 352 288 352S352 380.688 352 416S323.312 480 288 480ZM384 320C348.688 320 320 291.312 320 256S348.688 192 384 192S448 220.688 448 256S419.312 320 384 320ZM480 480C444.688 480 416 451.312 416 416S444.688 352 480 352S544 380.688 544 416S515.312 480 480 480Z" />
        </Icon>
    </>
}