
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-user` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-user?s=light circle-user}
 * @preview ![circle-user](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0NjRDMjA0LjUwMiA0NjQgMTU3LjQxNCA0NDUuMDggMTIxLjA0OSA0MTMuOTY5QzEzNy4yNzEgMzc3LjUwOCAxNzMuNzc3IDM1MiAyMTYuMTkzIDM1MkgyOTUuODA3QzMzOC4yMjMgMzUyIDM3NC43MjkgMzc3LjUwOCAzOTAuOTUxIDQxMy45NjlDMzU0LjU4NiA0NDUuMDggMzA3LjQ5OCA0NjQgMjU2IDQ2NFpNNDE0LjU1MyAzOTAuMzExQzM5MS4zNDggMzQ4LjQ3MSAzNDcuMDUxIDMyMCAyOTUuODA3IDMyMEgyMTYuMTkzQzE2NC45NTMgMzIwIDEyMC42NTggMzQ4LjQ3MyA5Ny40NDkgMzkwLjMxMkM2Ni42NzIgMzU0LjAzNyA0OCAzMDcuMTg4IDQ4IDI1NkM0OCAxNDEuMzA5IDE0MS4zMDkgNDggMjU2IDQ4UzQ2NCAxNDEuMzA5IDQ2NCAyNTZDNDY0IDMwNy4xODggNDQ1LjMzIDM1NC4wMzUgNDE0LjU1MyAzOTAuMzExWk0yNTYgMTI4QzIxMS44MTYgMTI4IDE3NiAxNjMuODE2IDE3NiAyMDhDMTc2IDI1Mi4xODIgMjExLjgxNiAyODggMjU2IDI4OFMzMzYgMjUyLjE4MiAzMzYgMjA4QzMzNiAxNjMuODE2IDMwMC4xODQgMTI4IDI1NiAxMjhaTTI1NiAyNTZDMjI5LjUzMyAyNTYgMjA4IDIzNC40NjcgMjA4IDIwOFMyMjkuNTMzIDE2MCAyNTYgMTYwUzMwNCAxODEuNTMzIDMwNCAyMDhTMjgyLjQ2NyAyNTYgMjU2IDI1NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleUser(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C204.502 464 157.414 445.08 121.049 413.969C137.271 377.508 173.777 352 216.193 352H295.807C338.223 352 374.729 377.508 390.951 413.969C354.586 445.08 307.498 464 256 464ZM414.553 390.311C391.348 348.471 347.051 320 295.807 320H216.193C164.953 320 120.658 348.473 97.449 390.312C66.672 354.037 48 307.188 48 256C48 141.309 141.309 48 256 48S464 141.309 464 256C464 307.188 445.33 354.035 414.553 390.311ZM256 128C211.816 128 176 163.816 176 208C176 252.182 211.816 288 256 288S336 252.182 336 208C336 163.816 300.184 128 256 128ZM256 256C229.533 256 208 234.467 208 208S229.533 160 256 160S304 181.533 304 208S282.467 256 256 256Z" />
        </Icon>
    </>
}